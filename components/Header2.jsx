import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from 'next/link';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import styles from "./Header.module.css"

const Header2 = () => {
    return (
        <div className={styles.headerContainer2}>
            <div className={styles.headerLogo}>
                <Image
                    src="/logobg.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    className={styles.headerLogo}
                />
            </div>
            <nav>
                <ul>
                    <Link className={styles.navElement} href="/">
                        <Button variant="light">Home</Button>
                    </Link>
                    <Link className={styles.navElement} href="/About">
                        <Button variant="light">About</Button>
                    </Link>
                    <Link className={styles.navElement} href="/Complaint">
                        <Button variant="light">Register Complaint</Button>
                    </Link>
                    <Link className={styles.navElement} href="/StatusCheck">
                        <Button variant="light">Check status</Button>
                    </Link>
                    <Link className={styles.navElement} href="/Contact">
                        <Button variant="light">Contact Us</Button>
                    </Link>
                </ul>
            </nav>
            <ConnectWallet accentColor='white' colorMode='light' />
        </div>
    )
}

export default Header2