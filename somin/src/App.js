import Main from './Main';
import Story from './story';
import Footer from './footer';
import { Route, Routes } from "react-router-dom";

export default function App(){
    return(
        <div className='website'>
            <Footer />
            <br/>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/story' element={<Story />} />
            </Routes>
        </div>
    )
}