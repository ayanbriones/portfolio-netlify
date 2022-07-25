import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Intro from '@components/Intro'
import Main from '@components/Main'

export default function Home() {
  return (
    <div className='mx-auto bg-slate-900'>
      <Head>
        <title>Portfolio - Bryanth Briones</title>
      </Head>

      <main>
        <Header />
        <Intro />
        <Main />
      </main>
    </div>
  )
}
