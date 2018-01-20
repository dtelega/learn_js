function findShort(s){
  s=s.split(' ');
  var short=0;
  for (var i=1;i<s.length;i++){
    if (s[i].length < s[short].length)
      short = i;
  }
  return s[short].length;
}

