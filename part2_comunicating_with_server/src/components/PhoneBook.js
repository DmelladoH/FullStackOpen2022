import { useState } from 'react'
import PhoneBookForm from './PhoneBookForm'
import FilterPhoneBook from './FilterPhoneBook'
import PersonsDisplay from './PersonsDisplay'


const Phonebook = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterPersons, setFilerPersons] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilerPersons(event.target.value)
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
  
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPhoneBook 
       filterValue={filterPersons}
       handleFilterChange = {handleFilterChange}/>

      <h3>ass a new</h3>
      <PhoneBookForm 
        newName= {newName}
        newPhoneNumber= {newPhoneNumber}
        handleNameChange = {handleNameChange}
        handlePhoneNumberChange = {handlePhoneNumberChange}
        handlePhonebookSubmit = {handlePhonebookSubmit}/>

      <h2>Numbers</h2>
      <PersonsDisplay 
        persons={persons}
        filter = {filterPersons}/>
    </div>
  )
}

export default Phonebook