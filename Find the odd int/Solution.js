function findOdd(A) {
  for (var i = 0; i < A.length; i++) {
    var count = 0;
    for (var k = 0; k < A.length; k++) {
      A[k] == A[i] ? count++ : 0;
    }
    if (count % 2)
      return A[i];
  }
  return 0;
}

