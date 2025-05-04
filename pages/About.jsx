import React from 'react'
import Image from 'next/image'
import styles from "./About.module.css"
import Header2 from '/components/Header2'

function About() {
  return (
    <div>
      <Header2/>
      <div className={styles.mainDiv}>
        <div className={styles.banner}>
          <Image
            src="/banner.svg"
            alt="Banner"
            width={1200}
            height={300}
            className={styles.banner}
          />
        </div>
        <div className={styles.content1}>
          <p className={styles.contentLeft}>
            The current system for submitting and tracking police complaints is frequently opaque and difficult to navigate for citizens. Complaints may go unrecorded or get lost in the bureaucracy.The process lacks transparency and accountability. Furthermore, there is the possibility of fraud or corruption in the handling of complaints.
          </p>
        </div>
        <div className={styles.imageRight}>
          <Image
            src="/hammer.jpeg"
            alt="Hammer illustration"
            width={400}
            height={300}
            className={styles.imageRight}
          />
        </div>
        <div className={styles.content2}>
          <p className={styles.contentRight}>Create an online platform for citizens to submit complaints, which would be recorded on a distributed, decentralized ledger. Utilize blockchain technology to create a tamper-resistant record of the complaint process, including all interactions, decisions, and outcomes.</p>
          
          <div className={styles.imageLeft}>
            <Image
              src="/complaint.jpeg"
              alt="Complaint illustration"
              width={400}
              height={300}
              className={styles.imageLeft}
            />
          </div>
        </div>
        <h1 className={styles.footerHeading}>Our Team</h1>
        <div className={styles.teamDiv}>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>Krishay <br/>Nair</h1>
            <div className={styles.teamImage}>
              <Image
                src="/krishay.jpeg"
                alt="Krishay Nair"
                width={200}
                height={200}
                className={styles.teamImage}
              />
            </div>
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>Shantanu Gondane</h1>
            <div className={styles.teamImage}>
              <Image
                src="/shantanu.jpeg"
                alt="Shantanu Gondane"
                width={200}
                height={200}
                className={styles.teamImage}
              />
            </div>
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>Priyanshu <br/>Naik</h1>
            <div className={styles.teamImage}>
              <Image
                src="/priyanshu.jpeg"
                alt="Priyanshu Naik"
                width={200}
                height={200}
                className={styles.teamImage}
              />
            </div>
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>Kartik <br/>Mistry</h1>
            <div className={styles.teamImage}>
              <Image
                src="/kartik.jpeg"
                alt="Kartik Mistry"
                width={200}
                height={200}
                className={styles.teamImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About