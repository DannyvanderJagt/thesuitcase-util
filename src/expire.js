import Time from './time';

let Expire = {
  seconds(amount = 0){
    return Date.now() + Time.seconds(amount);
  },
  minutes(amount = 0){
    return Date.now() + Time.minutes(amount);
  },
  hours(amount = 0){
    return Date.now() + Time.hours(amount);
  },
  days(amount = 0){
    return Date.now() + Time.days(amount); 
  },
  weeks(amount = 0){
    return this.days(7);
  },
  months(amount = 0){
    let date = new Date();
    date.setMonth(date.getMonth() + amount);
    return date.getTime();
  }
}

export default Expire;