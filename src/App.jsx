
import ContactForm from './Components/ContactComp'
import HeaderComp from './Components/HeaderComp'
import './index.css'
import MainScreen from './Screens/MainScreen'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainScreen />}/>
      <Route path='/Contact' element={<ContactForm />}/>
    </Routes>
    </BrowserRouter>
    
   
  )
}

export default App
