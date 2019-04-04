(function() {
  var links, random;

  var categories = [
    'learn',
    'create',
    'play',
    'connect',
    'live'
  ];

  random = Math.floor(Math.random() * categories.length) + 0;

  links = document.querySelectorAll('a[href*="/entries/"]');
  links.forEach(function(link) {
    link.setAttribute('href', link.getAttribute('href').replace('/entries/', '/' + categories[random] + '/'));
  })

  links = document.querySelectorAll('a[href*="/finalists/"]');
  links.forEach(function(link) {
    link.setAttribute('href', link.getAttribute('href').replace('/finalists/', '/' + categories[random] + '/'));
  })
})();
