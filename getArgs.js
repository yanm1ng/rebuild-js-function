function getArgs () {
  var qs = (location.search.length > 0 ? location.search.substring(1) : '');
  var args = {};
  var items = qs.length ? qs.split('&') : [];
  
  for (let i = 0; i < items.length; i++) {
    var item = items[i].split('=');
    var name = decodeURIComponent(item[0]);
    var value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }

  return args;
}