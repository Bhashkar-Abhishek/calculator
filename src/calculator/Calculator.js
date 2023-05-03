import React, { useState } from 'react';
import style from './Calculator.module.css';


function Calculator() {
  const [result, setResult] = useState('');

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function clear() {
    setResult('');
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <div className={style.calculator}>
      <div className={style.display}>{result}</div>
      <div className={style.keypad}>
        <button className={style.btn_clear} onClick={clear}>Clear</button>
        <button className={style.btn_backspace} onClick={backspace}>C</button>
        <button className={style.btn} name="+" onClick={handleClick}>+</button>
        <button className={style.btn} name="-" onClick={handleClick}>-</button>
        <button className={style.btn} name="*" onClick={handleClick}>*</button>
        <button className={style.btn} name="/" onClick={handleClick}>/</button>
        <button className={style.btn} name="7" onClick={handleClick}>7</button>
        <button className={style.btn} name="8" onClick={handleClick}>8</button>
        <button className={style.btn} name="9" onClick={handleClick}>9</button>
        <button className={style.btn} name="4" onClick={handleClick}>4</button>
        <button className={style.btn} name="5" onClick={handleClick}>5</button>
        <button className={style.btn} name="6" onClick={handleClick}>6</button>
        <button className={style.btn} name="1" onClick={handleClick}>1</button>
        <button className={style.btn} name="2" onClick={handleClick}>2</button>
        <button className={style.btn} name="3" onClick={handleClick}>3</button>
        <button className={style.btn} name="0" onClick={handleClick}>0</button>
        <button className={style.btn_equal} onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
