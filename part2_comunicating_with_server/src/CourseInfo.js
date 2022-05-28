
const Header = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const Content = ({notes}) => {

    let totalExercises = 0

    return (
        <div>
            <ul>
                {notes.map((note) =>             
                    <li key = {note.id}>
                        {note.name} {note.exercises}
                        {totalExercises += note.exercises}
                    </li>
                )}
            </ul>
            <div>
                <p><strong>total of {totalExercises} exercises </strong></p>
            </div>
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header name = {course.name} />
            <Content notes = {course.parts} />
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
    
      return <Course course={course} />
  }
  
  export default CourseInfo