"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import {useContext} from "react";
import {AppContext} from "@/app/providers/appProvider";

export default function Main() {
    const context: any = useContext(AppContext)
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/app/page.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>
            <Button variant="contained" onClick={() => context.setIsLoading(true)}>
                <Typography sx={{fontFamily: "Apple Color Emoji"}}>
                    Hello world
                </Typography>
            </Button>
        </main>
    );
}
