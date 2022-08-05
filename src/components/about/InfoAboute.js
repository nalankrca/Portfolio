import React from "react";
import '../../styles/About.scss';


const InfoAboute = () => {


    return(

        <div>
            <form className='cnt'>
                <div className='info-con'>
                <div className='topic'>
                    <label htmlFor="fname">Birthday:</label>
                    <label htmlFor="age">Age:</label>
                    <label htmlFor="addres">Address:</label>
                    <label htmlFor="phone">Phone:</label>
                </div>
                <div  className='information'> 
                    <label>17/10/1996</label>
                    <label>25</label>
                    <label>izmir</label>
                    <label>0(545)xxx xx xx</label>
                </div>
                </div >
                <div className='info-con'>
                <div className='topic'>
                    <label htmlFor="nationality">Nationality:</label>
                    <label htmlFor="study">Study:</label>
                    <label htmlFor="degree">Degree:</label>
                    <label htmlFor="interests">Interests:</label>
                </div>
                <div > 
                    <label>Turkey</label>
                    <label>Dokuz Eylül Univercity</label>
                    <label>Lisans</label>
                    <label>Latin Dance</label>
                </div>
                </div>
      </form> 


        </div>
    );


}

export default InfoAboute;