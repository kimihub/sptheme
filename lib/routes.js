'use strict';

window.routes = {};

export default routes => {
  var pathname = location.pathname;
  if (pathname.length > 1) {
    routes.forEach((route, i) => {
      if (i > 0) {
       pathname = pathname.replace(route, '')
      }
    });
  }
  routes.forEach(route => { 
    window.routes[route] = pathname.concat(route).replace('//', '/') 
  });
}
