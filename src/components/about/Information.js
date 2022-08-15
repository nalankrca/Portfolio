import React  from "react";
import InfoAboute from "./InfoAboute";

const inform =
    {
      id: 1,
      birthday:'17/10/1996',
      age: 25,
      address: 'izmir',
      phone:'0(545)xxx xx xx',
      nationality:'Turkey',
      study:'Dokuz Eylül Univercity',
      degree:'Lisans',
      intetests:'Latin Dance',
    }
    
    

const Information = () =>{

    return(
                <div>
                  
                    <InfoAboute 
                    birthday={inform.birthday}
                    age={inform.age}
                    address={inform.address}
                    phone={inform.phone}
                    nationality={inform.nationality}
                    study={inform.study}
                    degree={inform.degree}
                    intetests={inform.intetests}
                    />
                   </div> 
    );
}

export default Information;