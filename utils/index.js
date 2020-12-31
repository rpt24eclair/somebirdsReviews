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

module.exports = {
  getDate
};