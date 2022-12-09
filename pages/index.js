import Head from "next/head";
import ComplaintReg from "/components/ComplaintReg";
import Admin from "/components/Admin";
import Button from "react-bootstrap/Button";
import Header from "/components/Header";
import Status from "/components/Status";
import styles from "./index.module.css";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();

  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: officer } = useContractRead(contract, "officer");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a police complaint app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.contentDiv}>
        <div className={styles.tagline}>
          <h2 className={styles.motto}>
            <i>Integrity, Sincerity, Service</i>
          </h2>
          <p className={styles.subHeading}></p>
          <Button className={styles.contentBtn1} variant="light">
            Register Complaint
          </Button>
          <Button className={styles.contentBtn2} variant="light">
            Check status
          </Button>
        </div>
        <img className={styles.mainImg} src="/mainImg2.png" alt="" />
      </div>
    </div>
  );
}
