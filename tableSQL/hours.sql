CREATE TABLE opening_hours (
  id INT AUTO_INCREMENT PRIMARY KEY,
  day VARCHAR(10) NOT NULL,
  lunch_start TIME NOT NULL,
  lunch_end TIME NOT NULL,
  dinner_start TIME NOT NULL,
  dinner_end TIME NOT NULL
);

INSERT INTO opening_hours (day, lunch_start, lunch_end, dinner_start, dinner_end)
VALUES ('Monday', '12:00:00', '14:30:00', '19:00:00', '23:00:00');

INSERT INTO opening_hours (day, lunch_start, lunch_end, dinner_start, dinner_end)
VALUES ('Tuesday', '12:00:00', '14:30:00', '19:00:00', '23:00:00');


INSERT INTO opening_hours (day, lunch_start, lunch_end, dinner_start, dinner_end)
VALUES ('Wednesday', '12:00:00', '14:30:00', '19:00:00', '23:00:00');

INSERT INTO opening_hours (day, lunch_start, lunch_end, dinner_start, dinner_end)
VALUES ('Thursday', '12:00:00', '14:30:00', '19:00:00', '23:00:00');

INSERT INTO opening_hours (day, lunch_start, lunch_end, dinner_start, dinner_end)
VALUES ('Friday', '12:00:00', '14:30:00', '19:00:00', '00:00:00');

INSERT INTO opening_hours (day, lunch_start, lunch_end, dinner_start, dinner_end)
VALUES ('Saturday', '12:00:00', '15:00:00', '19:00:00', '00:00:00');

INSERT INTO opening_hours (day, lunch_start, lunch_end, dinner_start, dinner_end)
VALUES ('Sunday', '12:00:00', '15:00:00', '19:00:00', '00:00:00');