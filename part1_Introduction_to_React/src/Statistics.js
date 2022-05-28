import { useState } from 'react'


const StatisticsTable = ({good, neutral, bad}) => {
  
    let all = good + neutral + bad
    let average = all / 3
    const positive = () =>{
      return all !== 0 ? (good - bad) / all * 100 : 0
    }
  
    return (
      <table>
        <tbody>
          <tr>
            <td>good:</td>
            <td> {good}</td>
          </tr>
          <tr>
            <td>neutral:</td>
            <td> {neutral}</td>
          </tr>
          <tr>
            <td>bad:</td>
            <td> {bad}</td>
          </tr>
          <tr>
            <td>all:</td>
            <td> {all}</td>
          </tr>
          <tr>
            <td>average:</td>
            <td> {average.toFixed(2)}</td>
          </tr>
          <tr>
            <td>positive: </td>
            <td>{positive().toFixed(2)} %</td>
          </tr>     
        </tbody> 
      </table>
    )
  }
  
  
  const StatisticsDisplay  = ({good,neutral,bad}) => {
  
    let isFeedbackGiven = good === 0 && neutral === 0 && neutral === 0
  
    return (
      <div className="Statistics">
        <h1>statistics</h1>
  
        {isFeedbackGiven ? (
          <div>
            <p> No feedback given </p>
          </div>
          ) : (
            <StatisticsTable good = { good } neutral = { neutral } bad = { bad } />
            )
        } 
      </div>
    )
  
  }
  
  const Statistics = () =>{
   
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)
  
    const clickHandlerGood = () => {
      setGood(good + 1)
    }
  
    const clickHandlerNeutral= () => {
      setNeutral(neutral + 1)
    }
  
    const clickHandlerBad = () => {
      setBad(bad + 1)
    }
  
    return(
  
        <div className="main">
          <div className="header">
            <h1>give feedback</h1>
          </div>
          <button className="btn btn-primary" onClick={clickHandlerGood}>good</button>
          <button className="btn btn-primary" onClick={clickHandlerNeutral}>neutral</button>
          <button className="btn btn-primary" onClick={clickHandlerBad}>bad</button>
          <StatisticsDisplay good = { good } neutral = { neutral } bad = { bad } />
          
        </div>
    )
  }

  export default Statistics