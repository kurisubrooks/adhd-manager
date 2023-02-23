import './styles/app.css';
import { Schedule } from './Schedule';

import schedule from './schedule.json';

function App() {
  return (
    <div className="app_container">
      <Schedule schedule={schedule.MON.schedule} />
    </div>
  );
}

export default App;
