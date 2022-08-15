import React from "react";

const InfoAboute = (props) => {


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
                        <label>{props.birthday}</label>
                        <label>{props.age}</label>
                        <label>{props.address}</label>
                        <label>{props.phone}</label>
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
                    <label>{props.nationality}</label>
                    <label>{props.study}</label>
                    <label>{props.degree}</label>
                    <label>{props.intetests}</label>
                </div>
                </div>
      </form> 


        </div>
    );


}

export default InfoAboute;