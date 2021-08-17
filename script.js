/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'left',
  distance: '100px',
  duration: 2000,
  reset: true,
});

sr.reveal('.heroText', {});
sr.reveal('.couple', {});
sr.reveal('.galleryImageContainer', { interval: 200 });
sr.reveal('iframe', { interval: 200 });

let countDownDate = new Date('September 21, 2021 9:00:00').getTime();
let intervalSetter = setInterval(function () {
  let now = new Date().getTime();
  let total = countDownDate - now;

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  if (days <= 00 && hours <= 00 && minutes <= 00 && seconds <= 00) {
    return;
  } else {
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  }
});

const scrollingUp = document.querySelector('.scroll-up');
const rootElement = document.documentElement;

scrollingUp.addEventListener('click', () => {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
