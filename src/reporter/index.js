import Moment from 'moment';
import Colors from './colors';

class Reporter {
  constructor(name, color){
    this.name = name;
    this.color = Colors[color] || Colors.gray;
  }
  log(msg){
    this.write(msg)
  }
  success(msg){
    this.write(
      Colors.green(msg)
    )
  }
  error(msg){
    this.write(
      Colors.red(msg)
    )
  }
  statusChange(previous, current){
    this.write(
      Colors.blue(`${current}`)
    )
  }
  newLine(){
    console.log('')
  }
  clearScreen(){
    console.log('\x1B[2J');
  }
  write(msg){
    let line = [
      Colors.base(`[${Moment().format('h:mm:ss')}]`),
      this.name ? this.color(`[${this.name}]`) : '',
      msg
    ].join(' ');


    console.log(line);
  }

  namespace(name, color){
    return new Reporter(name, color);
  }
}

// Clear the screen.
let report = new Reporter();
report.clearScreen();

export default report;