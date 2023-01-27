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
      
        <p className={styles.contentRight}>Create an online platform for citizens to submit complaints, which would be recorded on a distributed, decentralized ledger. Utilize blockchain technology to create a tamper-resistant record of the complaint process, including all interactions, decisions, and outcomes.</p>
      
      </div>
      
    </div>
  )
}

export default About