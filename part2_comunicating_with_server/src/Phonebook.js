import { useState } from 'react'



const PersonsDisplay = ({persons}) => {

    return (
        <div>
            <ul>
            {persons.map((person) =>{
              return <li key = {person.id}>{person.name}: {person.phoneNumber}</li>
             })}
            </ul>
        </div>
    )

}


const Phonebook = () => {
  const [persons, setPersons] = useState([
    { 
        id: 1,
        name: 'Arto Hellas', 
        phoneNumber: '658205075'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handlePhonebookSubmit = (event) => {
    event.preventDefault()
    
       
    let valid = persons.filter((person) => {      
      return person.name === newName
    }).length === 0


    if(!valid){
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      return
    }
    
    const newPerson = {
        id: persons.length + 1,
        name: newName,
        phoneNumber: newPhoneNumber
    }

    setPersons([...persons, newPerson])
    setNewName("")
    setNewPhoneNumber("")
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePhonebookSubmit}>
        <div>
          name: <input type="text" onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          phone: <input type="text" onChange={handlePhoneNumberChange} value={newPhoneNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonsDisplay persons={persons}/>
    </div>
  )
}

export default Phonebook