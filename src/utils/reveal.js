import '../assets/reveal.css';

const threshold = .3
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal')
    //    entry.target.classList.add('reveal-visible');
      console.log("delete");
      observer.unobserve(entry.target)
    }
  })
}

document.documentElement.classList.add('reveal-loaded');

const observer = new IntersectionObserver(handleIntersect, options);

const targets = document.querySelectorAll('.reveal')
targets.forEach(function (target) {
    console.log('test')
    observer.observe(target)
})

