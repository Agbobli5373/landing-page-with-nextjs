import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Hero from '../components/hero'
import Slider from '../components/slider'
import Portfolio from '../components/portfolio'
import Instagram from '../components/instagram'
import { SliderData } from '../data/SliderData'
import Footer from '../components/footer'
//import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
       <Hero heading="Let's go fun trip" message="Find your road" />
       <Slider slides={SliderData}/>
       <Instagram/>
       <Portfolio/>
       <Footer/>

        </>
  )
}
