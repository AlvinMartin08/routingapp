import React from 'react';
import './App.css';
import GetRows from './GetRows';
import TableHeader from './TableHeader';
export const testContext = React.createContext();
const About=()=>{
    const studentInfo = [
        {
            id:10,
            firstName:"Sachin",
            lastName:"Tendulkar",
            age:"Batsman",
            birthdate:"10-11-1973",
            country:"India",
            city:"Mumbai"
        },
        {
            id:3,
            firstName:"Rahul",
            lastName:"Dravid",
            age:"Batsman",
            birthdate:"11-11-1973",
            country:"India",
            city:"Bengaluru"
        },
        {
            id:48,
            firstName:"Faheem",
            lastName:"Reddy",
            age:"AllRounder",
            birthdate:"12-11-1990",
            country:"India",
            city:"Hyderabad"
        },
    ];
    const studentList = studentInfo.map(std => <GetRows std={std} />)
    return (
        <div>
            <h1 className="App">This is About Page</h1> 
            <TableHeader /> 
            {studentList}
        </div>
    );
}

export default About;