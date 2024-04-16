import './App.css';
import React, {useContext, useState, useEffect} from 'react';
import headContext from './contextFiles/headContext';

function Calculator() {

  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  }

  const clear = () => {
    setResult("");
  }

  const backSpace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      // eslint-disable-next-line
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Syntax Error")
    }
  }

  const head = useContext(headContext);
  
  useEffect(() => {
    head.update();
  }, [])


  return (
    <div className="App">
        <div>
            <h3>App created by {head.state.name}</h3>
        </div>
        <div className="container">
            <form action=''>
                <input type="text" value={result} />
            </form>
            <div className='keys'>
                <button value="clear" id="clear" onClick={clear}>clear</button>
                <button value="del" id="del" onClick={backSpace}>del</button>
                <button value="/" id="divide" onClick={handleClick}>&divide;</button>
                <button value="7" id="num" onClick={handleClick}>7</button>
                <button value="8" id="num" onClick={handleClick}>8</button>
                <button value="9" id="num" onClick={handleClick}>9</button>
                <button value="*" id="multiply" onClick={handleClick}>&times;</button>
                <button value="4" id="num" onClick={handleClick}>4</button>
                <button value="5" id="num" onClick={handleClick}>5</button>
                <button value="6" id="num" onClick={handleClick}>6</button>
                <button value="+" id="add" onClick={handleClick}>+</button>
                <button value="1" id="num" onClick={handleClick}>1</button>
                <button value="2" id="num" onClick={handleClick}>2</button>
                <button value="3" id="num" onClick={handleClick}>3</button>
                <button value="-" id="substract" onClick={handleClick}>&ndash;</button>
                <button value="." id="num" onClick={handleClick}>.</button>
                <button value="0" id="num" onClick={handleClick}>0</button>
                <button value="00" id="num" onClick={handleClick}>00</button>
                <button value="=" id="result" onClick={calculate}>=</button>
            </div>
        </div>
    </div>
  );
}

export default Calculator;
