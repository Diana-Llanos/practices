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
    title:string,  duration:number, uploadDate:string, description:string})  => {   /*nombre del componente Video*/
    const seconds = props.duration % 60;
    const minutes = Math.floor (props.duration/60); /*Math.floor metodo de JavaScript que redondea hacia abajo al entero mas cercano*/
    return <div>
        <h3>{props.title}</h3>
        <div>
            <span>{minutes}: {seconds}</span>
            <span>{props.uploadDate.toLocaleDateString}</span>
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
            duration={2760} 
            uploadDate= {new Date (2022, 2, 25)} 
            description='componentes en react'>
            </Video>

            <Video title='useState' 
            duration={3145} 
            uploadDate= {new Date (2022, 3, 3)}
            description='como utilizar estados en react'>
            </Video>
        </div>
    )






const container = document.getElementById ('root');

const root =createRoot (container!);
root.render (app)

