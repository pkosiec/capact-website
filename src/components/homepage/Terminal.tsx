import React, { FunctionComponent } from "react";
import styles from "./Terminal.module.css";

export const Terminal: FunctionComponent = () => {
    return (
        <div className={styles.terminal} id="termynal" data-termynal>
            <span data-ty="input">capact install</span>
            <span data-ty data-ty-delay="250">Installing Capact on cluster...</span>
            <span data-ty>✓ Applying Capact CRDs </span>
 <span data-ty>✓ Creating namespace capact-system </span>
 <span data-ty>⡿ Installing neo4j Helm Chart </span>
 <span data-ty>✓ Installing neo4j Helm Chart </span>
 <span data-ty>⣯ Installing ingress-controller Helm Chart </span>
 <span data-ty>✓ Installing ingress-controller Helm Chart </span>
 <span data-ty>⣯ Installing argo Helm Chart </span>
 <span data-ty>✓ Installing argo Helm Chart </span>
 <span data-ty>⡿ Installing cert-manager Helm Chart </span>
 <span data-ty>✓ Installing cert-manager Helm Chart </span>
 <span data-ty>⣻ Installing kubed Helm Chart </span>
 <span data-ty>✓ Installing kubed Helm Chart </span>
 <span data-ty>⣯ Installing monitoring Helm Chart </span>
 <span data-ty>✓ Installing monitoring Helm Chart </span>
 <span data-ty>⣽ Installing capact Helm Chart </span>
 <span data-ty>✓ Installing capact Helm Chart</span>
        </div>
    )
}
