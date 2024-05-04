import { School } from '@mui/icons-material'
import './App.css'
import StudentCard from './component/Card/StudentCard'
import DisplayGroup from './component/Display/DisplayGroup'
import Nav from './component/nav/Nav'


function App() {



const student =[
  {
    student:'',
    age:'',
    address:'',
    School:''
  }
]





  return (
    <div >

      <div className='nav'>
        <Nav/>
      </div>

      <div className='body'>
        <StudentCard />
      </div>






    </div>
  )
}

export default App
