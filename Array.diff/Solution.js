function array_diff(a, b) {
  var res = new Array();
  for (var i = 0; i < a.length; i++)
    (b.indexOf(a[i])) ? res[res.length] = a[i] : 0;
  return res;
}

