export function scrollTo(e, elementId){
  e.preventDefault()
  const target = document.getElementById(elementId);
  if (!target) return;

  const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
  const currentTop = window.pageYOffset;
  const distance = Math.abs(targetTop - currentTop);

  if (distance < 500) {
    // Direct smooth scroll
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  } else {
    // Instant scroll to intermediate point
    const direction = targetTop > currentTop ? 1 : -1;
    const intermediateTop = targetTop - direction * 500;

    // First, jump to intermediate point
    window.scrollTo({
      top: intermediateTop,
      behavior: 'auto',
    });

    // Then, smooth scroll to the target
    requestAnimationFrame(() => {
      // Small delay ensures second scroll is registered properly
      setTimeout(() => {
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      }, 10); // 10ms delay to avoid skipping smooth scroll
    });
  }
};
