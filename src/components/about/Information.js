import React , {useState} from "react";
import '../../styles/About.scss';
import InfoAboute from "./InfoAboute";



const DUMMY_INFO =[
{
  id: 1,
  birthday:'17/10/1996',
  age: 25,
  address: 'izmir',
  phone:'0(545)481 37 71',
  nationality:'Turkey',
  study:'Dokuz Eylül Univercity',
  degree:'Lisans',
  intetests:'Latin Dance',
},

];

const Information = () =>{
    const[info,setInfo]=useState(DUMMY_INFO);

    const inInformation = info =>{
        setInfo((allInfo)=>{
            return[info,...allInfo];
        });
    }
    return(
                <div>
                <InfoAboute  items={info} onInformation={inInformation} />
            
                </div>


    );
}

export default Information;