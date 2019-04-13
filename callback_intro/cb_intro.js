class Clock {
  constructor() {
    const date = new Date();

    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`)
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // this.second++;
    if (++this.second >= 60){
      this.second = 0;
      if (++this.minute >= 60) {
        this.minute = 0;
        if (++this.hour >= 24) {
          this.hour = 0;
        }
      }
    } 
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
setInterval(clock._tick.bind(clock), 1000);