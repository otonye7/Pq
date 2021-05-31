import './App.css';
import { Switch } from 'react-router-dom'; 
import PreApproval from './pages/pre-approval/pre-approval.component';
import SecondGrid  from './components/second-right/second-right.component';

function App() {
  return (
    <div className="App">
      <Switch>
         <PreApproval />
         <SecondGrid />
      </Switch>
    </div>
  );
}

export default App;