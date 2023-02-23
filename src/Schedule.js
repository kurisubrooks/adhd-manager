import "./styles/schedule.css";

const ACTIVE_COLOUR = '#FFF0BC';
const INACTIVE_COLOUR = '#F7E4A0';

export const Schedule = ({ schedule }) => {
  return <div className="schedule">
    {schedule.map((item, index) =>
      <ScheduleItem
        item={item}
        isActive={index === 5} />
    )}
  </div>;
};

const ScheduleItem = ({ item, isActive }) => {
  console.log(item);
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
      style={{ backgroundColor: colour }}
    >
      {item.label}
    </div>
    <div
      className="schedule__indicator"
      style={{ color: colour }}
    >
      {isActive && "<"}
    </div>
  </div>
}
