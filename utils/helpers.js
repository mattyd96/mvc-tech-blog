module.exports = {
  // format date for view
  format_date: (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hour  = date.getHours();  
    let minute = date.getMinutes();
  
    minute = minute < 10 ? '0' + minute : minute;

    return `${hour}:${minute} ${day}/${month}/${year}`;
  },

  // create substring for long post previews on homepage
  substring: (str) => {
    return str > 150 ? str.substring(0,150) + ` ...` :
                       str.substring(0,150);
  }
};