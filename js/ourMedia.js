class MediaSlider {
  constructor(container) {
    this.container = container;
    this.slides = container.querySelectorAll('.slide');
    this.current = 0;
    this.init();
  }

  init() {
    // Selector check: ensure buttons exist before assigning onclick
    const nextBtn = this.container.querySelector('.next');
    const prevBtn = this.container.querySelector('.prev');

    if(nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); this.show(1); };
    if(prevBtn) prevBtn.onclick = (e) => { e.stopPropagation(); this.show(-1); };
  }

  show(dir) {
    this.slides[this.current].classList.remove('active');
    this.current = (this.current + dir + this.slides.length) % this.slides.length;
    this.slides[this.current].classList.add('active');
  }
}

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-engine="slider"]').forEach(el => new MediaSlider(el));
});