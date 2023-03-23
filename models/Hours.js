class opening_hours {
  constructor(id, day, lunch_start, lunch_end, dinner_start, dinner_end) {
    this.id = id;
    this.day = day;
    this.lunch_start = lunch_start;
    this.lunch_end = lunch_end;
    this.dinner_start = dinner_start;
    this.dinner_end = dinner_end;
  }
}

module.exports = { opening_hours };
