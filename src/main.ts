import './dependencies';

const content = document.getElementById('content');

setInterval(() => {
  content.innerHTML = `And the time is ${ new Date() }`;
}, 1000)
