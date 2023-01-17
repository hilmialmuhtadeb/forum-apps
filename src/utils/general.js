import moment from 'moment';

function formatDate(date) {
  moment.locale('id');
  return moment(date).format('D MMM YYYY');
}

export {
  formatDate,
};
