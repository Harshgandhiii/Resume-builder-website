import React from 'react'
import styles from "./InputControl.module.css";
import { Input } from '@mui/material';


function InputControl({ label, ...props }) {
    return (

        <div className={styles.icontainer}>{label && <label>{label}</label>}
            <Input type='text' {...props}
                sx={{
                    border:"1px solid #cccccc",
                    outline: 'none',
                    padding: '10px 12px',
                    fontSize:"1rem",
                    borderRadius:1,
                    "&:hover": {
                        border:"1px solid #adadad",
                    },
                    "&:focus": {
                        border:"1px solid #66CC66",
                    },

                }}
                />
        </div>
    )
}

export default InputControl
