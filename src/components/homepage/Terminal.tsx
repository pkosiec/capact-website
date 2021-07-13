import React, { FunctionComponent } from "react";
import styles from "./Terminal.module.css";

export const Terminal: FunctionComponent = () => {
    return (
        <div className={styles.terminal} id="homepage-terminal" data-termynal>
            <span data-ty="input">pip install spaCy</span>
            <span data-ty="progress"></span>
            <span data-ty>Successfully installed spacy</span>
        </div>
    )
}