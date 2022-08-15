import React from "react";
import EducationExper from "./EducationExper";


const EducationExperInfo =() =>{

    const educationInfo=[
        {
            id:1,
            date:'2018-2023',
            school:'Dokuz Eylül Universty',
            department:'Computer Science'
        },
        {
            id:2,
            date:'2015-2017',
            school:'Dokuz Eylül Universty',
            department:'Computer Programming'
        },
        {
            id:3,
            date:'2010-2014',
            school:'Fener High School',
            department:'High School'
        },

    ]

    const experienceInfo=[
        {
            id:1,
            date:'2022-',
            company:'İs Net',
            department:'Intern Frontend Developer'
        },
        {
            id:2,
            date:'2017-2017',
            company:'Univera',
            department:'Intern'
        },
    
    ]


    return(
        <div>
            <hr/>
            <br/>
            <br/>
            <div className='education-experience-conteiner'>
           
                <div className='container-grid'>
                    <h1>Education</h1>
                    {educationInfo.map((info)=>(
                        <EducationExper
                        date={info.date}
                        school={info.school}
                        department={info.department}/>
                    ))}
                </div>

                <div className='container-grid'>
                    <h1>Experience</h1>
                    {experienceInfo.map((info)=>(
                        <EducationExper
                        date={info.date}
                        school={info.company}
                        department={info.department}/>
                    ))}
        
                </div>
            </div>
        </div>
    );


}
export default EducationExperInfo;
