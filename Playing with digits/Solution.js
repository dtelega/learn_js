function digPow(n, p){
  var nb = n.toString().split('');
  var res = 0;
  for (var i = 0; i < nb.length; i++) {
    res += Math.pow(parseInt(nb[i], 10), p++);
  }
  return res % n ? -1 : res / n;
}

