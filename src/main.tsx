import {createRoot}  from 'react-dom/client'; /* improtacion de createRoot, reemplaza a ReactDom*/
import './index.css';
//import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

//const Title = (texto:string) => <h1 className='title'>{texto}</h1>

/*const app = (
    <div>
        {Title ('Desarrollo útil')}
        {Title ('Desarrollo')}
        {Title ('Útil')}

    </div>
)*/

const Video = (props:{
    title:string,  duration:string, uploadDate:string, description:string})  => {   /*nombre del componente Video*/
    
    return <div>
        <h3>{props.title}</h3>
        <div>
            <span>{props.duration}</span>
            <span>{props.uploadDate}</span>
        </div>
        <div>
            <p>{props.description}</p>
        </div>

    </div>

    }

    

    const app = (
        <div>
            <h1>Desarrollo Útil</h1>
            <Video title='Componentes' 
            duration='25:04' 
            uploadDate='25/02/2022' 
            description='componentes en react'>
            </Video>
        </div>
    )






const container = document.getElementById ('root');

const root =createRoot (container!);
root.render (app)

