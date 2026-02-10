(function () {
  const targetClass = '#main-bnn';

  const observer = new MutationObserver(() => {
    const hero = document.querySelector(targetClass);
    if (!hero) return;

    // Prevent duplicates
    if (hero.querySelector('.am-hero-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'am-hero-overlay';

    overlay.innerHTML = `
      <div class="am-hero-content">
        <h1 class="am-hero-title"> 
          Nutriție premium<br>
          pentru animale
        </h1>
        <p class="am-hero-subtitle">
          Recomandată de specialiști • Adaptată fiecărei diete
        </p>
      </div>
    `;

    hero.style.position = 'relative';
    hero.appendChild(overlay);

    observer.disconnect(); // stop once done
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
