export const dmsRationalToDeg = (dmsArray, ref) => {
  var sign = ref === 'S' || ref === 'W' ? -1.0 : 1.0;
  var deg =
    dmsArray[0][0] / dmsArray[0][1] +
    dmsArray[1][0] / dmsArray[1][1] / 60.0 +
    dmsArray[2][0] / dmsArray[2][1] / 3600.0;

  return deg * sign;
};

export const degToDmsRational = degFloat => {
  var degAbs = Math.abs(degFloat);
  var minFloat = (degAbs % 1) * 60;
  var secFloat = (minFloat % 1) * 60;
  var deg = Math.floor(degAbs);
  var min = Math.floor(minFloat);
  var sec = Math.round(secFloat * 100);

  return [
    [deg, 1],
    [min, 1],
    [sec, 100],
  ];
};
