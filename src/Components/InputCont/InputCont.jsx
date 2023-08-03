import React from 'react'
import styles from "./InputCont.module.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useState } from "react"

function InputCont({ label, isPassword, ...props }) {

    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className={styles.container}>
            {label && <label>{label}</label>}
            <div className={styles.inputContainer}>
                <input
                    type={isPassword ? (isVisible ? "text" : "password") : "text"}
                    {...props}
                />
                {isPassword && (
                    <div className={styles.icon}>
                        {isVisible ? (
                            <VisibilityOffIcon onClick={() => setIsVisible((prev) => !prev)} />
                        ) : (
                            <VisibilityIcon onClick={() => setIsVisible((prev) => !prev)} />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InputCont
