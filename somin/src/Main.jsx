import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import map1 from './map_1.png';
import map_flag from './map_flag.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Main(){
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className='name'><h3>현재 우리동네</h3></Navbar.Brand>
                    <Navbar.Brand className='name'>
                        <img src={map_flag} alt='위치'/>
                        <h1>부천시 원미구 역곡2동</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar> 
            <br />
            <TransformWrapper initialScale={1} minScale={1} maxScale={10}>    
                <TransformComponent >        
                    <figure>            
                        <img src={map1} alt='map1' className='map'/>      
                    </figure>  
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}