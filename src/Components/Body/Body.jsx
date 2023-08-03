import React, { useEffect, useState, useRef } from 'react'
import  styles from "./Body.module.css";
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';
import ReactToPrint from "react-to-print"; 

function Body() {
    const colors = ["#66CC66", "#ed1717", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        skills: "Skills",
    }

    const resumeRef = useRef();

    const [activeColor,setActivColor] = useState(colors[0])

    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievements]: {
            id: sections.achievements,
            sectionTitle: sections.achievements,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.skills]: {
            id: sections.skills,
            sectionTitle: sections.skills,
            detail: "",
        },
    });

    useEffect(() => {
        console.log(resumeInformation)
    }, [resumeInformation]);

    return (

        <div className={styles.bcontainer}>
            <h2 className={styles.bheading}>
                Resume Builder
            </h2>
            <div className={styles.btoolbar}>
                <div className={styles.bcolors}>
                    {colors.map((item) => (
                        <span
                            className={`${styles.bcolor} ${activeColor === item?styles.active:""} `}
                            key={item}
                            style={{ backgroundColor: item }} 
                            onClick={() => setActivColor(item)}/>
                    ))}

                </div>

                <ReactToPrint
                    trigger={() => {
                        return <Button
                        variant='contained'
                        sx={{
                            textTransform: 'capitalize',
                            borderRadius: 2,
                            backgroundColor: "#66CC66",
                            color: '#fff',
                            border: 'none',
                            outline: 'none',
                            letterSpacing: 1,
                            cursor: 'pointer',
                            fontWeight: 500,
                            fontSize: 15,
                            "&:hover": {
                                backgroundColor: "#66CC66",
                            },
                            padding: "8px 16px",
                        }}>Download<DownloadIcon fontSize='medium' sx={{ fontWeight: 400, }} /></Button>
                    }}
                    content={() => resumeRef.current}
                />
                
            </div>
            <div className='bmain'>
                <Editor
                    sections={sections}
                    information={resumeInformation}
                    setInformation={setResumeInformation}
                />
                <Resume
                    information = {resumeInformation}
                    sections = {sections}
                    activeColor = {activeColor}
                    ref={resumeRef}
                />
            </div>

        </div>
    )
}

export default Body
