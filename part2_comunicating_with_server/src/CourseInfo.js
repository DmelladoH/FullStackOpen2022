
const Header = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const Content = ({notes}) => {

    
    let total = notes.reduce((prev,current) => {
        return prev + +current.exercises
    },0)

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
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 12,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 7,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 1,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 10,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 2,
              id: 2
            }
          ]
        }
      ]

    
      return (
        <div>
            <h1>Web development curriculum</h1>
        
            {courses.map((course) => {
            return <Course key={course.id} name={course.name} parts={course.parts} />
            })}
        </div>

      )
  }
  
  export default CourseInfo