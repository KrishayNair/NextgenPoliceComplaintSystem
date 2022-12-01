import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from 'next/link';
import styles from "./Header.module.css"
const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <h1 className='header-logo'>FIR Portal</h1>
            <nav>
        <ul>
          <Link className={styles.navElement} href="/">
          <button className="button-common hover:bg-blue-900">Home</button>
          </Link>
          <Link href="/About">
          <button className="button-common hover:bg-blue-900">About</button>
          </Link>
          <Link href="/Complaint">
          <button className="button-common hover:bg-blue-900">Register Complaint</button>
          </Link>
          <Link href="/StatusCheck">
          <button className="button-common hover:bg-blue-900">Status</button>
          </Link>
          <Link href="/ContactUs">
          <button className="button-common hover:bg-blue-900">Contact Us</button>
          </Link>
        </ul>
      </nav>
            <ConnectWallet accentColor='blue' colorMode='light' />
        </div>
    )
}

export default Header