function money_value(s) {
  s = parseFloat(s.replace(/[\s\$]/g, ''), 10);
  return (Number.isNaN(s)) ? 0.0 : s;
}
