(this['webpackJsonptes-routing'] = this['webpackJsonptes-routing'] || []).push([
  [0],
  {
    21: function(e, t, n) {
      e.exports = n(33);
    },
    26: function(e, t, n) {},
    33: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(14),
        l = n.n(c),
        o = (n(26), n(3)),
        u = n(4),
        s = n(6),
        i = n.n(s),
        m = n(8),
        E = n(11),
        p = n(15),
        f = n(16),
        h = n(19),
        b = n(20),
        v = (function(e) {
          Object(b.a)(n, e);
          var t = Object(h.a)(n);
          function n() {
            return Object(p.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(f.a)(n, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.label;
                  return r.a.createElement(
                    o.b,
                    {to: '/about'},
                    r.a.createElement('span', {style: d.labelText}, e)
                  );
                },
              },
            ]),
            n
          );
        })(r.a.Component),
        d = {labelText: {fontSize: 36}},
        j = v,
        w = 'http://localhost:8200';
      function O() {
        var e = Object(u.f)().id,
          t = Object(a.useState)([]),
          n = Object(E.a)(t, 2),
          c = n[0],
          l = n[1],
          s = Object(a.useState)(null),
          p = Object(E.a)(s, 2),
          f = p[0],
          h = p[1];
        return (
          Object(a.useEffect)(function() {
            var t = (function() {
              var e = Object(m.a)(
                i.a.mark(function e() {
                  var t, n;
                  return i.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), fetch(''.concat(w, '/users'));
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          (n = e.sent), l(n);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
            e
              ? (function() {
                  var t = Object(m.a)(
                    i.a.mark(function t() {
                      var n, a;
                      return i.a.wrap(function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), fetch(''.concat(w, '/users/').concat(e));
                            case 2:
                              return (n = t.sent), (t.next = 5), n.json();
                            case 5:
                              (a = t.sent), h(a);
                            case 7:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function() {
                    return t.apply(this, arguments);
                  };
                })()()
              : t();
          }, []),
          r.a.createElement(
            'div',
            null,
            e
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement('h2', null, 'Users - user id: ', e),
                  f && r.a.createElement('h2', null, ''.concat(f.name, ' - ').concat(f.email)),
                  r.a.createElement(j, {label: 'go to about'})
                )
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement('h2', null, 'Users List'),
                  r.a.createElement(
                    'ul',
                    null,
                    c.map(function(e) {
                      return r.a.createElement(
                        'li',
                        {key: e.id},
                        r.a.createElement(
                          o.b,
                          {to: '/users/'.concat(e.id)},
                          ''.concat(e.name, ' -  ').concat(e.email)
                        )
                      );
                    })
                  )
                )
          )
        );
      }
      function g() {
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement(
            'div',
            null,
            r.a.createElement(
              'nav',
              null,
              r.a.createElement(
                'ul',
                null,
                r.a.createElement('li', null, r.a.createElement(o.b, {to: '/'}, 'Home')),
                r.a.createElement('li', null, r.a.createElement(o.b, {to: '/about'}, 'About')),
                r.a.createElement('li', null, r.a.createElement(o.b, {to: '/users'}, 'Users'))
              )
            ),
            r.a.createElement(
              u.c,
              null,
              r.a.createElement(u.a, {path: '/about', component: k}),
              r.a.createElement(u.a, {path: '/users/:id', component: O}),
              r.a.createElement(u.a, {path: '/users', component: O}),
              r.a.createElement(u.a, {path: '/'}, r.a.createElement(x, null))
            )
          )
        );
      }
      var x = function() {
        return r.a.createElement('h2', null, 'Home');
      };
      function k() {
        return r.a.createElement('h2', null, 'About');
      }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      l.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(g, null)),
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
  },
  [[21, 1, 2]],
]);
//# sourceMappingURL=main.f9b2c32f.chunk.js.map
