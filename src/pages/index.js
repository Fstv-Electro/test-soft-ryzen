import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header/header";
import { Banner } from "@/components/banner/banner";
import { Cases } from "@/components/cases/cases";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Soft Ryzen test</title>
        <meta name="description" content="test for Soft Ryzen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <Banner />
        <Cases />
      </main>
    </>
  );
}
