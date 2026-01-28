import { Routes,Route } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Contact } from "./Contact"
import { Registration } from "./Registration"
export const Rout=()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Registration' element={<Registration/>}/>
            </Routes>
        </div>
    )
}