import React from "react";
import "../styles/schedule.css";
import { ReactComponent as Indicator } from "../assets/indicator.svg";

const ACTIVE_COLOUR = '#FFF0BC';
const INACTIVE_COLOUR = '#F7E4A0';

const dayTransform = (day) => {
  switch (day) {
    case "MON":
      return 'Monday';
    case "TUES":
      return 'Tuesday';
    case "WED":
      return 'Wednesday';
    case "THURS":
      return 'Thursday';
    case "FRI":
      return 'Friday';
    case "SAT":
      return 'Saturday';
    case "SUN":
      return 'Sunday';
    default:
      break;
  }
}

export const Schedule = ({ schedule, day }) => {
  return <div className="schedule">
    <h1 className="schedule__day" style={{ color: ACTIVE_COLOUR }}>{dayTransform(day)}</h1>
    {schedule[day].schedule.map((item, index) =>
      <ScheduleItem
        key={index}
        item={item}
        isActive={index === 4} />
    )}
  </div>;
};

const ScheduleItem = ({ item, isActive }) => {
  const colour = isActive ? ACTIVE_COLOUR : INACTIVE_COLOUR;
  return <div className="schedule_item">
    <div
      className="schedule__time"
      style={{ color: colour }}
    >
      {item.period}
    </div>
    <div
      className="schedule__task"
      style={{ backgroundColor: colour, fontWeight: isActive ? 600 : 500 }}
    >
      {item.label}
      {item.text !== "" && <div className="schedule__task__subtitle">
        ({item.text})
      </div>}
    </div>
    <div className="schedule__indicator">
      {isActive && <Indicator fill={colour} />}
    </div>
  </div>;
}
