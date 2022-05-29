

const Person = ({id, name, phoneNumber}) => {
   return <li key = {id}> name: {name} : {phoneNumber}</li>
}

const PersonsDisplay = ({persons, filter}) => {

    return (
        <div>
            <ul>
            {persons
              .filter((person) => {
                return person.name.includes(filter);
              })
              .map((person) =>{
                return <Person 
                    id = {person.id}
                    name = {person.name} 
                    phoneNumber = {person.phoneNumber}/>
             })}
            </ul>
        </div>
    )

}

export default PersonsDisplay