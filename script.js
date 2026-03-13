document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('[data-demo-form]');
  forms.forEach(form => {
    const zip = form.querySelector('[data-zip]');
    const hint = form.querySelector('[data-zip-hint]');
    const endpoint = form.getAttribute('action') || '#';

    if (zip && hint) {
      const lookup = async () => {
        const value = (zip.value || '').trim();
        if (!/^\d{5}$/.test(value)) {
          hint.textContent = value ? 'Enter a valid 5-digit ZIP code.' : '';
          return;
        }
        hint.textContent = 'Checking ZIP code…';
        try {
          const res = await fetch(`https://api.zippopotam.us/us/${value}`);
          if (!res.ok) throw new Error('Lookup failed');
          const data = await res.json();
          const place = (data.places && data.places[0]) || {};
          const city = place['place name'] || '';
          const state = place['state'] || '';
          hint.textContent = city && state ? `ZIP matched: ${city}, ${state}` : 'ZIP code found.';
          const cityInput = form.querySelector('[data-city]');
          const stateInput = form.querySelector('[data-state]');
          if (cityInput && !cityInput.value) cityInput.value = city;
          if (stateInput && !stateInput.value) stateInput.value = state;
        } catch (e) {
          hint.textContent = 'Could not look up that ZIP code. The form still works without it.';
        }
      };
      zip.addEventListener('blur', lookup);
    }

    form.addEventListener('submit', (e) => {
      if (endpoint === '#') {
        e.preventDefault();
        alert('Demo form only. Replace form action="#" with your Vercel API route or Formspree endpoint to capture leads.');
      }
    });
  });
});