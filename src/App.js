import './styles/app.css';
import { Schedule } from './components/Schedule';

import schedule from './data/schedule.json';

const App = () => {
  return (
    <div className="app_container">
      <Schedule schedule={schedule.THURS.schedule} />
    </div>
  );
}

export default App;
