import { useState } from "react"
import { Route, useNavigate, Routes } from "react-router-dom"
import ChemistryTopicsChoice from "./topics/chemistry/chemistry"





function Heading() {
    return(
        <>
        <h2>
            Choose a Subject
        </h2>
        <p>Select the area you'd like to practice</p>
        </>
    )
}


function Subjects({setSubject}){
    //The respective images for the subjects should be downloaded 
    //and put into the assets file for use here.
    //The topics available shouldn't be hard coded
    //id should instead be changed to className
    const navigate = useNavigate()
    return(
        <>
        
        <button className="subjectsel" onClick={() => {
            setSubject('Chemistry')
            navigate('topics/chemistry/chemistry')
            }}>
            <h2>Chemistry</h2>
            <h4>x topics available</h4>
        </button><br />
        
        </>
    )
}



function SubjectLayout({setSubject}) {


    

    return(
        
        <>
        <Heading />
        <Subjects 
        setSubject = {setSubject}
        />        
        
        </>
    )
}


export default function Subject() {
        const [subject, setSubject] = useState('')
        return(
            <Routes>
                <Route path="/" element={<SubjectLayout setSubject={setSubject} />} />
                <Route path="topics/chemistry/chemistry/*" element={<ChemistryTopicsChoice />} />
                
            </Routes>
        )
}