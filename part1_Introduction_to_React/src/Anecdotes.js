import { useState } from 'react'


const VoteDisplay = ({anecdote, votes}) => {

    return (
        <div>
            <p>{anecdote}</p>   
            <p>has {votes} votes</p>  
        </div>
    )
}


const Anecdotes= () =>{
  
    const anecdotes = [
      'If it hurts, do it more often' ,
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of tShe code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]
  

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
    const [bestAnecdote, setBestAnecdote] = useState(undefined)

    const hundleRandomAnecdoteClick = () => {
        setSelected(Math.floor(Math.random()*anecdotes.length))
    }

    const handlevoteClick = () => {    
        const votesCopy = {...votes}  
        votesCopy[selected] += 1

        setVotes(votesCopy)

        if(votesCopy[selected] >= votesCopy[bestAnecdote] || bestAnecdote === undefined){
            setBestAnecdote(selected)
        }
    }
  
    return (
      <div>     
        <h1>Anecdote</h1>
        <VoteDisplay anecdote={anecdotes[selected]} votes={votes[selected]} />
        <div>
            <button onClick={hundleRandomAnecdoteClick}>random</button>
            <button onClick={handlevoteClick}>vote</button>
        </div>
        { (bestAnecdote !== undefined) ? (
            <div>
                <h1>Anecdote with most votes</h1>
                <VoteDisplay anecdote={anecdotes[bestAnecdote]} votes={votes[bestAnecdote]} />
            </div> 
        ): null }
        
      </div>
    )
  
  }
  
  export default Anecdotes