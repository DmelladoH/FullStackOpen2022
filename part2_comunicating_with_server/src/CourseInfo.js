
const Header = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const Content = ({notes}) => {

    let totalExercises = 0

    const total = notes.reduce((s,p) => {
        return totalExercises += p.exercises;
    })

    return (
        <div>
            <ul>
                {notes.map((note) =>             
                    <li key = {note.id}>
                        {note.name} {note.exercises}
                        
                    </li>
                )}
            </ul>
            <div>
                <p><strong>total of {total} exercises </strong></p>
            </div>
        </div>
    )
}

const Course = ({name, parts}) => {
    return (
        <div>
            <Header name = {name} />
            <Content notes = {parts} />
        </div>
    )
}

const CourseInfo = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          }
        ]
      }

    
      return <Course name={course.name} parts={course.parts} />
  }
  
  export default CourseInfo