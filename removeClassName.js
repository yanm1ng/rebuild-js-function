function removeClassName (node, className) {
  var classNames = node.className.split(/\s+/) || [];
  var pos = -1;
  for (let i = 0; i < classNames.length; i++) {
    if (classNames[i] === className) {
      pos = i;
      break;
    }
  }
  classNames.splice(pos, 1);
  node.className = classNames.join(' ');
}