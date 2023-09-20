import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function Footer() {
    return (
        <div className={styles.container}>
            <div>Copyright 2023 | Saddat Hasan | All rights reserved.</div>
            <div className={styles.social}>
                <Image
                    src="/1.png"
                    width={20}
                    height={20}
                    alt="Facebook Logo."
                />
                <Image
                    src="/2.png"
                    width={20}
                    height={20}
                    alt="Instagram Logo."
                />
                <Image
                    src="/3.png"
                    width={20}
                    height={20}
                    alt="Twitter Logo."
                />
                <Image
                    src="/4.png"
                    width={20}
                    height={20}
                    alt="Youtube Logo."
                />
            </div>
        </div>
    );
}

export default Footer;
