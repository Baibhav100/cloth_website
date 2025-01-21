
import './App.css';
import Navigation from './customer/components/Navigation/Navigation'; // Corrected import
import HomePage from './customer/pages/HomePage';


function App() {
  return (
    <div className="App">
    <Navigation/>
   <div>
    <HomePage/>
   </div>
    </div>
  );
}

export default App;
