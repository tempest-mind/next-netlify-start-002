import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Main branch! v0.3" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <img src="http://ssvrint-oracle.dpeterso.cec.oraclecorp.com:8080/content/published/api/v1.1/assets/CONT730E2A[…]channelToken=9fd7dd0bda414add81fe0e5d1a821fed">
      </main>

      <Footer />
    </div>
  )
}
