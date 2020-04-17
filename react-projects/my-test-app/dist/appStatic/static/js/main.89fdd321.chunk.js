(this['webpackJsonpmy-test-app'] = this['webpackJsonpmy-test-app'] || []).push([
  [0],
  [
    ,
    ,
    ,
    function(e, t, a) {
      e.exports = a.p + 'static/media/logo.5d5d9eef.svg';
    },
    function(e, t, a) {
      e.exports = a(11);
    },
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(2),
        c = a.n(r),
        s = (a(9), a(3)),
        l = a.n(s);
      a(10);
      var i = function() {
        return o.a.createElement(
          'div',
          {className: 'App'},
          o.a.createElement(
            'header',
            {className: 'App-header'},
            o.a.createElement('img', {src: l.a, className: 'App-logo', alt: 'logo'}),
            o.a.createElement(
              'p',
              null,
              'Edit ',
              o.a.createElement('code', null, 'src/App.js'),
              ' and save to reload.'
            ),
            o.a.createElement(
              'a',
              {
                className: 'App-link',
                href: 'https://reactjs.org',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              'Learn React'
            )
          )
        );
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      c.a.render(
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(i, null)),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function(e) {
              e.unregister();
            })
            .catch(function(e) {
              console.error(e.message);
            });
    },
  ],
  [[4, 1, 2]],
]);
//# sourceMappingURL=main.89fdd321.chunk.js.map
