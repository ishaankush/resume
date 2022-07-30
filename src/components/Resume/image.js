import React, { useState } from "react";
import styles from "./Resume.module.css";

function LogoImage() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="">
            <input className={styles.inputImage} type="file" onChange={handleChange} />
            <img className={styles.image} src={file} alt={'logoimage'} />
        </div>
  
    );
}
  
export default LogoImage;