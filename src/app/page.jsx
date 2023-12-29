"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Gradiant from '@/components/gradiant'
import prof from '../../public/mobile.png'
import Mobile from '@/components/mobile'
import Contactbutton from '@/components/Contactbutton'
import Signinbutton from '@/components/Signinbutton'
import Logos from '@/components/Logos'
import Animeside from '@/components/Animeside'
import Globepart from '@/components/Globepart'
import Footer from '@/components/footer'
import Tabs from '@/components/Tabs'
import Abovefooter from '@/components/Abovefooter'
import Launch from '@/components/Launch'
import Ship from '@/components/Ship'
import Largecards from '@/components/Largecards'
import Sliderr from '@/components/Sliderr'
import Slidersp from '@/components/Slidersp'


export default function Home() {
  return (
    <main>
      {/* <Slidersp></Slidersp> */}
      <Navbar></Navbar>
      {/* <Header></Header>  */}
      <Gradiant></Gradiant>
      <Mobile></Mobile>
      <div className='absolute z-[100] max:ml-[720px] 2xl:mt-[-680px] co2xl:ml-[170px] coxl:max-w-[600px] md:max-w-[445px] md:mt-[-558px] xs:max-w-[349px] xs:ml-[35px] co:mt-[-300px] co:max-w-[346px] co:ml-[17px] threetwenty:mt-[-360px] threetwenty:pl-[31px] threetwenty:max-w-[281px]'>
        <h1 className='font-medium text-primay tracking-[-0.04em] co2xl:text-[94px] co2xl:leading-[98px] coxl:text-[88px] coxl:leading-[92px] md:text-[71px] md:leading-[74px] co:text-[50px] co:leading-[52px] co:ml-[15px] coxs:text-[41px] coxs:leading-[43px]'>Financial infrastructure for the internet</h1>
        <div className='container'>
          <p className='text-sgray font-light text-[18px] leading-[28px] max-w-[460px] mt-[32px] tracking-normal'>
            Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.
          </p>
          <div className='row'>
            <div className='col-md-3'>
            <Contactbutton label='Contact Sales' labell='text-primay' labella='text-primay/80' />
            </div>
            <div className='col-md-3'>
              <Signinbutton></Signinbutton>
            </div>
          </div>
        </div>
      </div>
      <Logos></Logos>
      <Animeside></Animeside>
      <Globepart></Globepart>
      <Tabs></Tabs>
      <Largecards></Largecards>
      {/* <div className='absolute z-[20] w-[300px] h-[40px] bg-[#7A73FF]/100 rotate-[172deg] max:rotate-[175deg] mt-[-65px] ml-[-10px]'></div>
      <div className='absolute z-[20] w-[150px] h-[40px] bg-[#80e9ff]/60 rotate-[172deg] max:rotate-[175deg] mt-[-85px] ml-[50px]'></div> */}
      <Ship></Ship>
      <Launch></Launch>
      <Abovefooter></Abovefooter>
      {/* <div className='absolute z-[20] w-[300px] h-[40px] bg-[#7A73FF]/100 rotate-[172deg] max:rotate-[175deg] mt-[-130px] ml-[-10px]'></div>
      <div className='absolute z-[20] w-[150px] h-[40px] bg-[#80e9ff]/70 rotate-[172deg] max:rotate-[175deg] mt-[-150px] ml-[50px]'></div> */}
      <Footer></Footer>
    </main>
  )
}