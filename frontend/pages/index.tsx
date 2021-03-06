import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ResClient from "resclient"
import { useState } from 'react'

const RESGATE_URL = "ws://localhost:8080"

const Home: NextPage = () => {

  let [state, setState] = useState("Hello from Next.js");

  let client = new ResClient(RESGATE_URL)

  client.get('example.model').then((model: any) => {
    setState(model.message)
  }).catch(err => {
    console.error(err);
  });


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {state}
        </h1>
      </main>
    </div>
  )
}

export default Home
