import { useRef } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Intro from '@components/Intro'
import Main from '@components/Main'
import Footer from '@components/Footer'
import FeaturedProject from '@components/FeaturedProject/FeaturedProject'
import About from '@components/About'
import Skillset from '@components/Skillset'

export default function Home() {
  const introRef = useRef()
  const projectsRef = useRef()
  const aboutRef = useRef()
  const skillSetRef = useRef()

  function handleIntroScroll() {
    window.scrollTo({
      top: introRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }
  function handleProjectsScroll() {
    window.scrollTo({
      top: projectsRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }
  function handleSkillSetScroll() {
    window.scrollTo({
      top: skillSetRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }
  function handleAboutScroll() {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className='mx-auto bg-[#150c21] max-w-7xl px-4 sm:px-6 md:px-20 lg:px-20 xl:px-20'>
      <Head>
        <title>Portfolio - Bryanth Briones</title>
        <meta property='og:type' content='Portfolio' />
        <meta property='og:title' content='Portfolio - Bryanth Briones' />
        <meta
          property='og:description'
          content='Front-End Developer | Javascript, ReactJS, HTML5, CSS'
        />
        <meta
          property='og:url'
          content='https://portfolio-ayanbriones.vercel.app/'
        />
        <meta
          property='og:image'
          content='https://portfolio-ayanbriones.vercel.app/images/profile-pic.jpg'
        />
      </Head>

      <Header
        handleProjectsScroll={handleProjectsScroll}
        handleSkillSetScroll={handleSkillSetScroll}
        handleAboutScroll={handleAboutScroll}
        handleIntroScroll={handleIntroScroll}
      />
      <div ref={introRef}></div>
      <Intro />
      <h2
        ref={projectsRef}
        className='text-white text-5xl my-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-red-300'
      >
        Projects
      </h2>
      <FeaturedProject />
      <h2
        ref={aboutRef}
        className='text-white text-5xl my-20 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-red-300'
      >
        About
      </h2>
      <About />
      <h2
        ref={skillSetRef}
        className='text-white text-5xl mt-20 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-red-300'
      >
        Skillset
      </h2>
      <Skillset />
      <Main />
      <Footer />
    </div>
  )
}
