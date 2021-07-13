import React, { FunctionComponent } from "react";
import styles from "./Terminal.module.css";

export const Terminal: FunctionComponent = () => {
    return (
        <asciinema-player src="/js/425256.cast" cols="50" rows="10" loop preload poster="npt:0:03" font-size="medium"/>
    )
}