import React from 'react'
import styles from "./About.module.css"
import Header2 from '/components/Header2'
function About() {
  return (
    <div>
      <Header2/>
      <div className={styles.mainDiv}>
      <img className={styles.banner} src="/banner.svg" />
      <div className={styles.content1}>
      <p className={styles.contentLeft}>
      The current system for submitting and tracking police complaints is frequently opaque and difficult to navigate for citizens. Complaints may go unrecorded or get lost in the bureaucracy.The process lacks transparency and accountability. Furthermore, there is the possibility of fraud or corruption in the handling of complaints.
      </p>
      </div>
      <img className={styles.imageRight} src="/hammer.jpeg" />
      <div className={styles.content2}>
        <p className={styles.contentRight}>Create an online platform for citizens to submit complaints, which would be recorded on a distributed, decentralized ledger. Utilize blockchain technology to create a tamper-resistant record of the complaint process, including all interactions, decisions, and outcomes.</p>
        
        <img className={styles.imageLeft} src="/complaint.jpeg" />
        </div>
        <h1 className={styles.footerHeading}> Our Team</h1>
        {/* <div className={styles.teamDiv}>
        <div className={styles.element}>
          <h1 className={styles.divHeading}>Secure and immutable record-keeping</h1>
          <p className={styles.divContent}>The blockchain provides a secure and tamper-proof way to store and track complaints and related information. This could help to ensure that records are accurate and cannot be altered or deleted.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>Smart contracts</h1>
          <p className={styles.divContent}>Smart contracts could be used to automate certain aspects of the complaint process, such as triggering an investigation when certain criteria are met or notifying individuals when their complaints have been resolved.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>Online access</h1>
          <p className={styles.divContent}>A police complaint system on the blockchain would likely provide online access to individuals, allowing them to file and track complaints and view related information from any device with an internet connection.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>Tracking and reporting</h1>
          <p className={styles.divContent}> The system could include features for tracking the progress of complaints and generating reports on complaint trends and resolutions.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>Encrypted messaging</h1>
          <p className={styles.divContent}> A police complaint system on the blockchain could include encrypted messaging capabilities, allowing individuals to communicate with investigators and other authorities securely.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>User authentication</h1>
          <p className={styles.divContent}>To ensure the integrity of the system, it may include measures for verifying the identity of individuals who file complaints and access the system.</p>
        </div>
      </div> */}
      </div>
      
    </div>
  )
}

export default About