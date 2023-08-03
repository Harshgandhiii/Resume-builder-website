import React, { useEffect, useState } from 'react'
import styles from "./Editor.module.css"
import InputControl from '../InputControl/InputControl'
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';


function Editor(props) {
    const sections = props.sections;
    const information = props.information;
    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);

    const [activeInformation, setActiveInformation] = useState(information[sections[Object.keys(sections)[0]]])

    const [activeDetailIndex, setActiveDetailIndex] = useState(0);

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

    const [values, setValues] = useState({
        name: activeInformation?.detail?.name || "",
        email: activeInformation?.detail?.email || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
    })

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values }
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value
        setValues(tempValues)
    }

    const workExpbody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter Title eg. Frontend Developer"
                    value={values.title}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, title: event.target.value }
                    ))}
                />
                <InputControl
                    label="Company Name"
                    placeholder="Enter Company name eg. Amazon"
                    value={values.companyName}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, companyName: event.target.value }
                    ))}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Certificate Link"
                    placeholder="Enter certificate link"
                    value={values.certificationLink}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, certificationLink: event.target.value }
                    ))}
                />

                <InputControl
                    label="Location"
                    placeholder="Enter location eg.Remote"
                    value={values.location}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, location: event.target.value }
                    ))}
                />

            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    value={values.startDate}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, startDate: event.target.value }
                    ))}
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work"
                    value={values.endDate}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, endDate: event.target.value }
                    ))}
                />

            </div>

            <div className={styles.column}>
                <label>Enter Work Description</label>
                <InputControl
                    placeholder='Line 1'
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder='Line 2'
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}

                />
                <InputControl
                    placeholder='Line 3'
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
            </div>

        </div>);

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. Chat app'
                    value={values.title}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, title: event.target.value }
                    ))}
                />
                <InputControl
                    label='Overview'
                    placeholder='Enter basic detials of project'
                    value={values.overview}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, overview: event.target.value }
                    ))}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label='Deployed Link'
                    placeholder='Enter deployed link of project'
                    value={values.link}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, link: event.target.value }
                    ))}
                />
                <InputControl
                    label='Github Link'
                    placeholder='Enter Github link of project'
                    value={values.github}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, github: event.target.value }
                    ))}
                />
            </div>
            <div className={styles.column}>
                <label>Enter Project Description</label>
                <InputControl
                    placeholder='Line 1'
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder='Line 2'
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder='Line 3'
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder='Line 4'
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    )

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. B-tech'
                    value={values.title}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, title: event.target.value }
                    ))}
                />
                <InputControl
                    label='College/School name'
                    placeholder='Enter name of your College/School'
                    value={values.college}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, college: event.target.value }
                    ))}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label='Start Date'
                    placeholder='Enter the Start date'
                    type='date'
                    value={values.startDate}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, startDate: event.target.value }
                    ))}
                />
                <InputControl
                    label='End Date'
                    placeholder='Enter the End Date'
                    type='date'
                    value={values.endDate}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, endDate: event.target.value }
                    ))}
                />
            </div>

        </div>
    )

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label='Name'
                    placeholder='Enter your full name eg. Raj Sharma'
                    value={values.name}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, name: event.target.value }
                    ))}
                />
                <InputControl
                    label='Title'
                    placeholder='Enter your title eg. Frontend Developer'
                    value={values.title}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, title: event.target.value }
                    ))}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label='LinkedIn link'
                    placeholder='Enter your LinkedIn profile link'
                    value={values.linkedin}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, linkedin: event.target.value }
                    ))}
                />
                <InputControl
                    label='Github Link'
                    placeholder='Enter your GitHub profile link'
                    value={values.github}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, github: event.target.value }
                    ))}
                />
            </div>

            <div className={styles.row}>
                <InputControl
                    label='Email'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, email: event.target.value }
                    ))}
                />
                <InputControl
                    label='Enter phone'
                    placeholder='Enter your phone number'
                    value={values.phone}
                    onChange={(event) => setValues((prev) => (
                        { ...prev, phone: event.target.value }
                    ))}
                />
            </div>

        </div>
    )

    const achievementBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>

                <InputControl
                    placeholder='Line 1'
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder='Line 2'
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder='Line 3'
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder='Line 4'
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />

            </div>
        </div>
    )

    const summaryBody = (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                placeholder="Enter your objective/summary"
                value={values.summary}
                onChange={(event) => setValues((prev) => (
                    { ...prev, summary: event.target.value }
                ))}
            />
        </div>
    )

    const skillsBody = (
        <div className={styles.detail}>
            <InputControl
                label="Skills"
                placeholder="Enter Skills"
                value={values.skills}
                onChange={(event) => setValues((prev) => (
                    { ...prev, skills: event.target.value }
                ))}
            />
        </div>
    )
    const generateBody = () => {
        switch (sections[activeSection]) {
            case sections.basicInfo: return basicInfoBody;
            case sections.workExp: return workExpbody;
            case sections.project: return projectBody;
            case sections.education: return educationBody;
            case sections.achievements: return achievementBody;
            case sections.summary: return summaryBody;
            case sections.skills: return skillsBody;
            default:
                return null;
        }
    }

    const handleSubmit = () => {
        switch (sections[activeSection]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone,
                }
                props.setInformation(prev => ({ ...prev, [sections.basicInfo]: { ...prev[sections.basicInfo], detail: tempDetail, sectionTitle, } }))
                break;
            }
            case sections.workExp: {
                const tempDetail = {
                    certificationLink: values.certificationLink,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    companyName: values.companyName,
                    location: values.location,
                    points: values.points,
                }
                const tempDetails = [...information[sections.workExp]?.details]
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation(prev => ({ ...prev, [sections.workExp]: { ...prev[sections.workExp], details: tempDetails, sectionTitle } }))
                break;
            }

            case sections.project: {
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,
                }
                const tempDetails = [...information[sections.project]?.details]
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation(prev => ({ ...prev, [sections.project]: { ...prev[sections.project], details: tempDetails, sectionTitle } }))
                break;
            }

            case sections.education: {
                const tempDetail = {
                    college: values.college,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                }
                const tempDetails = [...information[sections.education]?.details]
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation(prev => ({ ...prev, [sections.education]: { ...prev[sections.education], details: tempDetails, sectionTitle } }))
                break;
            }

            case sections.achievements: {
                const tempPoints = values.points

                props.setInformation(prev => ({ ...prev, [sections.achievements]: { ...prev[sections.achievements], points: tempPoints, sectionTitle } }))
                break;
            }
            case sections.summary: {
                const tempDetail = values.summary

                props.setInformation(prev => ({ ...prev, [sections.summary]: { ...prev[sections.summary], detail: tempDetail, sectionTitle } }))
                break;
            }
            case sections.skills: {
                const tempDetail = values.skills

                props.setInformation(prev => ({ ...prev, [sections.skills]: { ...prev[sections.skills], detail: tempDetail, sectionTitle } }))
                break;
            }
            default:
                return null;


        }
    }


    const handleAddNew = () => {
        const details = activeInformation?.details
        if (!details) return;
        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details?.push({});
        props.setInformation(prev => ({
            ...prev,
            [sections[activeSection]]: {
                ...information[sections[activeSection]],
                details: details,
            }
        }))
        setActiveDetailIndex(details?.length - 1);
    }

    const handleDeleteDetail = (index) => {
        const details = activeInformation?.details ? [...activeInformation?.details] : ""
        if (!details) return
        details.splice(index, 1)
        props.setInformation((prev) => ({
            ...prev,
            [sections[activeSection]]: {
                ...information[sections[activeSection]],
                details: details,
            }
        }))
        setActiveDetailIndex(prev => prev === index ? 0 : prev - 1);
    }



    useEffect(() => {
        const activeInfo = information[sections[activeSection]]
        setActiveInformation(activeInfo);
        setActiveDetailIndex(0);
        setSectionTitle(sections[activeSection])
        setValues({
            name: activeInfo?.detail?.name || "",
            overview: activeInfo?.details ? activeInfo.details[0]?.overview || "" : "",
            email: activeInfo?.detail?.email || "",
            link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
            title: activeInfo?.details ? activeInfo.details[0]?.title || "" : activeInfo?.detail?.title || "",
            certificationLink: activeInfo?.details ? activeInfo.details[0]?.certificationLink || "" : "",
            companyName: activeInfo?.details ? activeInfo.details[0]?.companyName || "" : "",
            startDate: activeInfo?.details ? activeInfo.details[0]?.startDate || "" : "",
            location: activeInfo?.details ? activeInfo.details[0]?.location || "" : "",
            endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
            points: activeInfo?.details ? activeInfo.details[0]?.points ? [...activeInfo.details[0]?.points] : "" : activeInfo?.points ? [...activeInfo.points] : "",
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details ? activeInfo.details[0]?.github || "" : activeInfo?.detail?.github || "",
            phone: activeInfo?.detail?.phone || "",
            college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
            summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
            skills: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
        })

    }, [activeSection])

    useEffect(() => {
        setActiveInformation(information[sections[activeSection]])
    }, [information]);


    useEffect(() => {
        const details = activeInformation?.details
        if (!details) return;

        const activeInfo = information[sections[activeSection]]
        setValues({
            overview: activeInfo.details[activeDetailIndex]?.overview || "",
            link: activeInfo.details[activeDetailIndex]?.link || "",
            certificationLink: activeInfo.details[activeDetailIndex]?.certificationLink || "",
            companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
            location: activeInfo.details[activeDetailIndex]?.location || "",
            startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
            endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
            points: activeInfo.details[activeDetailIndex]?.points || "",
            title: activeInfo.details[activeDetailIndex]?.title || "",
            linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
            github: activeInfo.details[activeDetailIndex]?.github || "",
            college: activeInfo.details[activeDetailIndex]?.college || "",
        })
    }, [activeDetailIndex])


    return (
        <div className={styles.econtainer}>
            <div className={styles.eheader}>
                {Object.keys(sections)?.map((key) => (<div className={`${styles.esection} ${activeSection === key ? styles.active : ""}`} key={key}
                    onClick={() => setActiveSection(key)}>{sections[key]}</div>))}
            </div>
            <div className={styles.body}>
                <InputControl label="Title" placeholder="Enter section title"
                    value={sectionTitle}
                    onChange={(event) => setSectionTitle(event.target.value)}
                />

                <div className={styles.chips}>
                    {activeInformation?.details
                        ? activeInformation?.details?.map((item, index) => (
                            <div className={`${styles.chip} ${activeDetailIndex === index ? styles.active : ""}`} key={item.title + index} onClick={() => setActiveDetailIndex(index)}>
                                <p>{sections[activeSection]} {index + 1}</p>
                                <ClearIcon onClick={(event) => {
                                    event.stopPropagation();
                                    handleDeleteDetail(index)
                                }} />
                            </div>
                        ))
                        : ""}

                    {activeInformation?.details && activeInformation?.details?.length > 0 ? (
                        <div className={styles.new} onClick={handleAddNew}>+New
                        </div>) : (""
                    )}


                </div>
                {generateBody()}
                <Button variant='contained'
                    onClick={handleSubmit}
                    sx={{
                        textTransform: 'capitalize',
                        borderRadius: 2,
                        backgroundColor: "#66CC66",
                        color: '#fff',
                        border: 'none',
                        outline: 'none',
                        letterSpacing: 1,
                        cursor: 'pointer',
                        transition: "200ms",
                        fontWeight: 500,
                        fontSize: 17,
                        alignItems: "center",
                        width: "fit-content",
                        "&:hover": {
                            backgroundColor: "#66CC66",
                        },
                        "&:active": {
                            transform: "translate(2px)",
                        },
                        padding: "8px 16px",
                    }}>Save</Button>
            </div>
        </div>
    )
}

export default Editor

