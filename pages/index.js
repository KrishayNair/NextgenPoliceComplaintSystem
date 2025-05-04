import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ComplaintReg from "../components/ComplaintReg";
import Admin from "../components/Admin";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import Status from "../components/Status";
import styles from "./index.module.css";
import Features from "../components/features";
import FaqQuestions from "../components/faqQuestions";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Script from "next/script";

export default function Home() {
  const address = useAddress();
  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: officer } = useContractRead(contract, "officer");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a police complaint app" />
        <link rel="icon" href="/logoTitle.png" />
      </Head>
      
      <Header />
      
      <main className={styles.contentDiv}>
        <div className={styles.tagline}>
          <h2 className={styles.motto}>
            &ldquo;Secure, Transparent, and Accountable&rdquo;
          </h2>
          <p className={styles.subHeading}>
            A police complaint system for the 21st century. Making justice
            accessible and transparent through the power of the blockchain.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/Complaint" passHref>
              <Button className={styles.contentBtn1} variant="light">
                Register Complaint
              </Button>
            </Link>
            <Link href="/StatusCheck" passHref>
              <Button className={styles.contentBtn2} variant="light">
                Check status
              </Button>
            </Link>
          </div>
        </div>
        
        <div className={styles.mainImg}>
          <Image
            src="/mainImg2.png"
            alt="Main illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </main>

      <Features />
      
      <Script 
        src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
        strategy="lazyOnload"
      />
      <df-messenger
        intent="WELCOME"
        chat-title="ComplaintBot"
        agent-id="facd2057-66f2-4b77-a3b1-4ab31f250072"
        language-code="en"
      ></df-messenger>
    </div>
  );
}
