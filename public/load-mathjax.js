window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();
