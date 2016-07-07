let Time = {
  seconds(amount = 0){
    return (amount * 1000)
  },
  minutes(amount = 0){
    return (amount * 60000)
  },
  hours(amount = 0){
    return (amount * 3600000); 
  },
  days(amount = 0){
    return (amount * 86400000); 
  },
  weeks(amount = 0){
    return this.days(7);
  },
  months(amount = 0){
    let date = new Date();
    date.setMonth(date.getMonth() + amount);
    return  date.getTime() - Date.now();
  }
}

export default Time;