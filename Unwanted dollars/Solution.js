function money_value(s) {
  s = parseFloat(s.replace(/[\s\$]/g, ''), 10);
  if (Number.isNaN(s)) {
    s = 0;
    s = s.toFixed(1);
  }
  return s;
}

