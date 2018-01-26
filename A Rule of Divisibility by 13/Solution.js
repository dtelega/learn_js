function thirt(n) {
  n = n.toString();
  var tab = [1, 10, 9, 12, 3, 4];
  var res = 0;
  var k = 0;
  for (var i = n.length-1; i >= 0; i--) {
    k == 6 ? k = 0 : 0;
    res += parseInt(n[i], 10) * tab[k++];
  }
  return res == n ? res : thirt(res);
}

