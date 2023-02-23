import './styles/app.css';
import React from 'react';
import { Schedule } from './components/Schedule';
import schedule from './data/schedule.json';

const App = () => {
  return (
    <div className="app_container">
      <Schedule day={"THURS"} schedule={schedule} />
    </div>
  );
}

export default App;
