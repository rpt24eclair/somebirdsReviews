let ConvertToNum = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12'
};

function getDate(dateObject) {
  let formattedDate = dateObject.toString().split(' ').slice(1, 4);
  let month = formattedDate[0];
  let year = formattedDate[2];
  formattedDate[0] = ConvertToNum[month];
  formattedDate[2] = year.slice(2);
  formattedDate = formattedDate.join('.');
  return formattedDate;
}

//React Component Utils

function convertToCSSPositionData(rating) {
  // range is from left values of -1.5% (small), 47.7% (true to size), 98.5% (large)
  let [whole, decimal] = rating.split('.');
  let isNegative = whole.length > 1;
  if (isNegative) {
    if (decimal > 0 && decimal < 4)
      return {left: '47.6%'};
    if (decimal > 3 && decimal < 8)
      return {left: '22.3%'};
    return {left: '-1.5%'};
  } else {
    if (decimal > 0 && decimal < 4)
      return {left: '47.6%'};
    if (decimal > 3 && decimal < 8)
      return {left: '73.0%'};
    return {left: '98.5%'};
  }
}

module.exports = {
  getDate,
  convertToCSSPositionData
};