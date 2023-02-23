import React from "react";
import "../styles/schedule.css";
import { ReactComponent as Indicator } from "../assets/indicator.svg";
import { ScheduleTime, dayTransform } from "../utils/Time";

const ACTIVE_COLOUR = '#FFF0BC';
const INACTIVE_COLOUR = '#F7E4A0';
const MUTED_COLOUR = '#262520';

export const Schedule = ({ schedule, day }) => {
  const { wakeTime, bedTime } = schedule[day];
  let scheduleTime = new ScheduleTime(day, wakeTime, bedTime);

  let timeSlots = [scheduleTime.now];

  while (scheduleTime.day === day) {
    timeSlots.push(scheduleTime.next());
  }

  return <>
    <div className="schedule">
      <h1 className="schedule__day" style={{ color: ACTIVE_COLOUR }}>{dayTransform(day)}</h1>

      {timeSlots.map((item, index) => {
        const pad = i => i === 0 ? '00' : i;
        const time = item[0] + ':' + pad(item[1]);

        const search = schedule[day].schedule.find(i => i.period === time);

        return <ScheduleItem
          key={item}
          time={time}
          title={search?.title}
          subtitle={search?.subtitle}
          isActive={false}
          isMuted={index === 0 || index === timeSlots.length - 1}
        />
      })}
    </div>
  </>;
};

const ScheduleItem = ({ time, title, subtitle, isActive, isMuted }) => {
  const colour = isActive ? ACTIVE_COLOUR : INACTIVE_COLOUR;
  const isHalfHour = time.split(':')[1] === '30';

  const backgroundColor = isMuted
    ? MUTED_COLOUR
    : title || subtitle
      ? colour
      : 'rgba(0, 0, 0, 0)';

  return <>
    <div className="schedule_item">
      <div className="schedule__time" style={{ color: colour, opacity: isHalfHour ? 0.4 : 1 }}>{time}</div>
      <div
        className="schedule__task"
        style={{ backgroundColor, fontWeight: isActive ? 600 : 500, color: isMuted ? ACTIVE_COLOUR : '#000' }}
      >
        {title}
        {subtitle && <div className="schedule__task__subtitle">({subtitle})</div>}
      </div>
      <div className="schedule__indicator">
        {isActive && <Indicator fill={colour} />}
      </div>
    </div>
  </>;
}
