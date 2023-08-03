import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from "./Resume.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import idea from "../../Images/project-management.png";



const Resume = forwardRef((props,ref) => {

    const [column, setColumns] = useState([[], []])
    const information = props.information;
    const sections = props.sections;
    const containerRef = useRef();

    const [source, setSource] = useState("")
    const [target, setTarget] = useState("")

    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        education: information[sections.education],
        achievements: information[sections.achievements],
        summary: information[sections.summary],
        skills: information[sections.skills],
        basicInfo: information[sections.basicInfo],
    }

    const getFormattedDate = (value) => {
        if (!value) return "";
        if(value.toLowerCase() === "present") return "Present";
        const date = new Date(value)

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    const sectionDivs = {
        [sections.workExp]: (
            <div
                key={"workExp"}
                draggable
                onDragOver={() => setTarget(info.workExp?.id)}
                onDragEnd={() => setSource(info.workExp?.id)}
                className={`${styles.section} ${info.workExp?.sectionTitle ? "" : styles.hidden}`}>
                <div className={styles.sectionTitle}><WorkOutlineOutlinedIcon fontSize='medium'sx={{paddingTop:"-4px"}}/><span> </span>{info.workExp.sectionTitle}</div>
                <div className={styles.content}>
                    {
                        info.workExp?.details?.map((item) => (
                            <div className={styles.item} key={item.title}>
                                {item.title &&
                                    <p className={styles.title}>{item.title}</p>}
                                {item.companyName && (<p className={styles.subTitle}>{item.companyName}</p>)}
                                {item.certificationLink && (<a className={styles.link} href={item.certificationLink}><AttachmentOutlinedIcon />{item.certificationLink}</a>)}
                                {item.startDate && item.endDate ? (<div className={styles.date}><CalendarTodayOutlinedIcon />{" "}{getFormattedDate(item.startDate)} - {item.endDate.toLowerCase() === "present" ?"Present": getFormattedDate(item.endDate)}</div>) : ("")}
                                {item.location && (<p className={styles.date}><LocationOnOutlinedIcon />Remote</p>)}
                                {item.points?.length > 0 && (
                                    <ul className={styles.points}>
                                        {item.points?.map((elem, index) => (
                                            <li className={styles.point} key={elem + index}>{elem}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                </div>
            </div>),

        [sections.project]: (
            <div
                key={"project"}
                draggable
                onDragOver={() => setTarget(info.project?.id)}
                onDragEnd={() => setSource(info.project?.id)}
                className={`${styles.section} ${info.project?.sectionTitle ? "" : styles.hidden}`}>
                <div className={styles.sectionTitle}><img src={idea} alt='idea'/><span>   </span>{info.project.sectionTitle}</div>
                <div className={styles.content}>{
                    info.project?.details?.map((item) => (
                        <div className={styles.item}>
                            {item.title && (<p className={styles.title}>{item.title}</p>)}
                            {item.link && (<a className={styles.link} href={item.link}><AttachmentOutlinedIcon />{item.link}</a>)}
                            {item.github && (<a className={styles.link} href={styles.github}><GitHubIcon />{item.github}</a>)}
                            {item.overview && (<p className={styles.overview}>{item.overview}</p>)}
                            {item.points?.length > 0 && (
                                <ul className={styles.points}>
                                    {item.points?.map((elem, index) => (
                                        <li className={styles.point} key={elem + index}>{elem}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
                }</div>

            </div>),

        [sections.education]: (
            <div
                key={"education"}
                draggable
                onDragOver={() => setTarget(info.education?.id)}
                onDragEnd={() => setSource(info.education?.id)}
                className={`${styles.section} ${info.education?.sectionTitle ? "" : styles.hidden}`}>
                <div className={styles.sectionTitle}><SchoolOutlinedIcon fontSize='medium'/><span>  </span>{info.education?.sectionTitle}</div>
                <div className={styles.content}>
                    {
                        info.education?.details?.map((item) => (
                            <div className={styles.item}>
                                {item.title && (<p className={styles.title}>{item.title}</p>)}
                                {item.college && (<p className={styles.subTitle}>{item.college}</p>)}
                                {item.startDate && item.endDate ? (<div className={styles.date}><CalendarTodayOutlinedIcon />{getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}</div>) : ("")}
                            </div>
                        ))}
                </div>
            </div>),
        [sections.achievements]: (
            <div
                key={"achievement"}
                draggable
                onDragOver={() => setTarget(info.achievements?.id)}
                onDragEnd={() => setSource(info.achievements?.id)}
                className={`${styles.section} ${info.achievements?.sectionTitle ? "" : styles.hidden}`}>
                <div className={styles.sectionTitle}><EmojiEventsOutlinedIcon /><span>  </span>{info.achievements.sectionTitle}</div>
                <div className={styles.content}>
                    {
                        info.achievements?.points?.length > 0 && (
                            <ul className={styles.numbered}>
                                {info.achievements?.points?.map((elem, index) => (
                                    <li className={styles.point} key={elem + index}>{elem}</li>
                                ))}
                            </ul>
                        )}
                </div>
            </div>),

        [sections.skills]: (
            <div
                key={"skills"}
                draggable
                onDragOver={() => setTarget(info.skills?.id)}
                onDragEnd={() => setSource(info.skills?.id)}
                className={`${styles.section} ${info.skills?.sectionTitle ? "" : styles.hidden}`}>
                <div className={styles.sectionTitle}><ExtensionTwoToneIcon /><span>  </span>{info.skills.sectionTitle}</div>
                <div className={styles.content}>
                    <p className={styles.overview}>{info?.skills?.detail}</p>
                </div>
            </div>),

        [sections.summary]: (
            <div
                key={"summary"}
                draggable
                onDragOver={() => setTarget(info.summary?.id)}
                onDragEnd={() => setSource(info.summary?.id)}
                className={`${styles.section} ${info.summary?.sectionTitle ? "" : styles.hidden}`}>
                <div className={styles.sectionTitle}>{info.summary.sectionTitle}</div>
                <div className={styles.content}>
                    <p className={styles.overview}>{info.summary?.detail}</p>
                </div>
            </div>)
    }

    const swapSourceTarget = (source, target) => {
        if (!source || !target) return;

        const tempColumn = [[...column[0]], [...column[1]]];

        let sourceRowIndex = tempColumn[0].findIndex((item) => item === source)
        let sourceColumnIndex = 0;
        if (sourceRowIndex < 0) {
            sourceColumnIndex = 1;
            sourceRowIndex = tempColumn[1].findIndex((item) => item === source)
        }

        let targetRowIndex = tempColumn[0].findIndex((item) => item === target)
        let targetColumnIndex = 0;
        if (targetRowIndex < 0) {
            targetColumnIndex = 1;
            targetRowIndex = tempColumn[1].findIndex((item) => item === target)
        }

        const tempSource = tempColumn[sourceColumnIndex][sourceRowIndex]
        tempColumn[sourceColumnIndex][sourceRowIndex] = tempColumn[targetColumnIndex][targetRowIndex]

        tempColumn[targetColumnIndex][targetRowIndex] = tempSource

        setColumns(tempColumn);
    }

    useEffect(() => {
        setColumns([
            [sections.project, sections.education, sections.summary],
            [sections.workExp, sections.achievements, sections.skills]
        ])
    }, [])

    useEffect(() => {

        swapSourceTarget(source, target);
    }, [source])

    useEffect(() => {
        if(!props.activeColor) return;
        const container = containerRef.current;
        if(!props.activeColor || !container) return;

        container.style.setProperty('--color',props.activeColor);
    },[props.activeColor])



    return (
        <div ref={ref}>
        <div ref={containerRef} className={styles.rcontainer}>
            <div className={styles.rheader}>
                <p className={styles.rheading}>{info.basicInfo?.detail?.name}</p>
                <p className={styles.subheading}>{info.basicInfo?.detail?.title}</p>

                <div className={styles.links}>{
                    info.basicInfo?.detail?.email? (

                    <a className={styles.link} type="email" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(info.basicInfo?.detail?.email)}`} rel='noopener noreferrer'target='_blank' ><MailOutlineIcon />{info.basicInfo?.detail?.email}</a>):(<span />)}
                    {info.basicInfo?.detail?.phone ? (<a className={styles.link} href={info.basicInfo?.detail?.phone} rel='noopener noreferrer' target='_blank'><PhoneOutlinedIcon />{info.basicInfo?.detail?.phone}</a>):(<span />)}

                    {info.basicInfo?.detail?.linkedin ? (<a className={styles.link} href={info.basicInfo?.detail?.linkedin} rel='noopener noreferrer' target='_blank'><LinkedInIcon />{info.basicInfo?.detail?.linkedin}</a>):(<span />)}
                    {info.basicInfo?.detail?.github ?(<a className={styles.link} href={info.basicInfo?.detail?.github} rel='noopener noreferrer' target='_blank'><GitHubIcon />{info.basicInfo?.detail?.github}</a>):(<span />)}
                </div>
            </div>

            <div className={styles.rmain}>
                <div className={styles.col1}>
                    {
                        column[0].map(item => sectionDivs[item])
                    }
                </div>
                <div className={styles.col2}>
                    {
                        column[1].map(item => sectionDivs[item])
                    }
                </div>
            </div>

        </div>
        </div>
    )
})

export default Resume
