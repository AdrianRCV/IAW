import React from 'react'
import './listaritems.css'


export const ListarItems= () => {
    let ITEMS = ['cat', 'dog', 'bird', 'cat']; let contador=0;
    function getItemsList(){
        return ITEMS.map((item,index) => <li key={index}>{item}</li>);
    }
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
   }

   export const ListarItems2= () => {
        let ITEMS = [{id:1,pet:'cat',dueno:'Adrian'},{id:2,pet:'dog',dueno:'domingo'},{id:3,pet:'bird',dueno:'pepe'}];
        function getItemsList(){
            return ITEMS.map(item => <li key={item.id}>La mascota es {item.pet}, tiene {item.id} y su dueño es {item.dueno}</li>);
        }
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
};

import json2 from './heroes.json';
export const ListarTabla= () => {
    function getItems(){ return json2.map((heroe,index) => {
        if (heroe.publisher=="DC Comics"){
            return <tr key={index}>
                        <td>{heroe.superhero}</td>
                        <td>{heroe.alter_ego}</td>
                        <td>{heroe.publisher}</td>
                        <td>{heroe.first_appearance}</td>
                        <td>{heroe.characters}</td>
                    </tr>;
        }
    
    });
    
}
return (
    <table> 
        <tr>
            <th>Nombre Del Héroe</th>
            <th>Alter ego</th>
            <th>Publisher</th>
            <th>Primera Aparición</th>
            <th>Character</th>
        </tr>
        {getItems()}
    </table>
    )
}

export default function ExtraerINFO(props) {
    if(props.tipo=="tabla"){
    return <ProcesarJSONTabla/>
    }
    else return <ProcesarJSONLista />
   }
   
