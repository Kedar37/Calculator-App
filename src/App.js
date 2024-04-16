import './App.css';
import HeadChange from './contextFiles/HeadChange';
import Calculator from './calculator';

function App() {
  
  return (
    <HeadChange>
      <div className='App'>
        <Calculator />
      </div>
    </HeadChange>
  );
}

export default App;
