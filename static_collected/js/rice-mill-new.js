// Slides
const slidesSM = document.querySelectorAll(".slide-rice-mill-new");
const btnNext  = document.querySelector(".next-rice-mill-new");
const btnPrev  = document.querySelector(".prev-rice-mill-new");

let iSM = 0;
function showSM(i){
  slidesSM.forEach((s,n)=>s.classList.toggle("active-rice-mill-new", n===i));
}
function nextSM(){ iSM = (iSM + 1) % slidesSM.length; showSM(iSM); }
function prevSM(){ iSM = (iSM - 1 + slidesSM.length) % slidesSM.length; showSM(iSM); }

// autoplay
let timerSM = setInterval(nextSM, 4000);

// controls
btnNext.addEventListener("click", ()=>{ clearInterval(timerSM); nextSM(); timerSM=setInterval(nextSM,4000); });
btnPrev.addEventListener("click", ()=>{ clearInterval(timerSM); prevSM(); timerSM=setInterval(nextSM,4000); });

// scroll reveal
const revSM = document.querySelectorAll(".reveal-up-rice-mill-new, .reveal-down-rice-mill-new, .reveal-left-rice-mill-new, .reveal-right-rice-mill-new");
const ioSM = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("revealed-rice-mill-new"); });
},{threshold:0.2});
revSM.forEach(el=>ioSM.observe(el));
(() => {
  const SELECTOR =
    '.reveal-left-rice-mill-new, .reveal-right-rice-mill-new, .reveal-up-rice-mill-new, .reveal-down-rice-mill-new';

  // Allow inline per-element delay: data-reveal-delay="150" (ms) or "0.2s"
  document.querySelectorAll(SELECTOR).forEach(el => {
    const d = el.getAttribute('data-reveal-delay');
    if (d) el.style.setProperty('--reveal-delay', /^\d+$/.test(d) ? `${d}ms` : d);
  });

  // Optional: auto-stagger children inside a group container
  // <div class="reveal-group-rice-mill-new" data-reveal-stagger="100">...</div>
  document.querySelectorAll('.reveal-group-rice-mill-new[data-reveal-stagger]').forEach(group => {
    const step = parseInt(group.dataset.revealStagger, 10) || 120;
    let i = 0;
    group.querySelectorAll(SELECTOR).forEach(el => {
      el.style.setProperty('--reveal-delay', `${i * step}ms`);
      i++;
    });
  });

  // IO: show on enter, hide on exit (so it replays when scrolling back)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
      } else {
        // If you want one-time reveal, add class "reveal-once" to skip removal
        if (!target.classList.contains('reveal-once')) {
          target.classList.remove('is-visible');
        }
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(SELECTOR).forEach(el => io.observe(el));
})();

(function () {
    const SELECTOR = [
      '.reveal-left-core-rice-mill-new',
      '.reveal-right-core-rice-mill-new',
      '.reveal-up-core-rice-mill-new',
      '.reveal-down-core-rice-mill-new'
    ].join(',');

    // Apply optional stagger via data-reveal-delay (ms)
    document.querySelectorAll(SELECTOR).forEach(el => {
      const d = el.getAttribute('data-reveal-delay');
      if (d) el.style.transitionDelay = (/^\d+$/.test(d) ? d + 'ms' : d);
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) target.classList.add('is-visible-core-rice-mill-new');
        else target.classList.remove('is-visible-core-rice-mill-new'); // replay on scroll up
      });
    }, { threshold: 0.18 });

    document.querySelectorAll(SELECTOR).forEach(el => io.observe(el));
  })();

  (function () {
  const els = document.querySelectorAll('.reveal-process-rice-mill-new');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({target, isIntersecting}) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
      } else {
        // remove to allow reveal again when scrolling back
        target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.18 });

  els.forEach(el => io.observe(el));
})();

(function () {
  const els = document.querySelectorAll('.reveal-type-rice-mill-new');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({target, isIntersecting}) => {
      if (isIntersecting) target.classList.add('is-visible');
      else target.classList.remove('is-visible'); // replay when scrolling back
    });
  }, { threshold: 0.18 });
  els.forEach(el => io.observe(el));
})();