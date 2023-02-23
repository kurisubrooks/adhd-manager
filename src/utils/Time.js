export const days = ['MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT', 'SUN'];

export const dayTransform = (day) => {
  switch (day) {
    case 'MON':
      return 'Monday';
    case 'TUES':
      return 'Tuesday';
    case 'WED':
      return 'Wednesday';
    case 'THURS':
      return 'Thursday';
    case 'FRI':
      return 'Friday';
    case 'SAT':
      return 'Saturday';
    case 'SUN':
      return 'Sunday';
    default:
      return false;
  }
}

export class ScheduleTime {
  constructor(day, wakeTime, bedTime) {
    this.wakeTime = wakeTime.split(':');
    this.bedTime = bedTime.split(':');

    this._day = day;
    this._hours = Number(this.wakeTime[0]);
    this._minutes = Number(this.wakeTime[1]);
  }

  get day() {
    return this._day;
  }

  get hours() {
    return this._hours;
  }

  get minutes() {
    return this._minutes;
  }

  get now() {
    return [this._hours, this._minutes, this._day];
  }

  next() {
    // 30 minute increments
    if (this._minutes === 0) {
      this._minutes += 30;
    } else if (this._minutes === 30) {
      this._hours += 1;
      this._minutes = 0;
    }

    const result = [this._hours, this._minutes, this._day];

    // If after bedtime, set to new day
    if (this._hours >= Number(this.bedTime[0])
     && this._minutes == Number(this.bedTime[1])) {
      // set day to next day
      this._day = days[days.indexOf(this._day) + 1];
      // if end of the week, set to start of the week
      if (this._day === undefined) this._day = days[0];
    }

    return result;
  }
}
