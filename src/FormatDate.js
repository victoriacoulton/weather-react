export default function FormatDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"]
  
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let date = props.date.getDate();
 
    function nth(date) {
      let dateDigit = date % 10;
      if (dateDigit === 1) {
        return "st";
      } else if (dateDigit === 2) {
        return "nd";
      } else if (dateDigit === 3) {
        return "rd";
      } else {
        return "th";
      }
    }
    
    return (`${day} ${date}${nth(date)} ${month} ${year}`);
  }
