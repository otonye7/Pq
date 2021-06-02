import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import PreApproval from './pages/pre-approval/pre-approval.component';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route  path={'/'} exact={true}  component={PreApproval} />
      </Switch>
    </div>
  );
}

export default App;