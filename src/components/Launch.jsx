"use client"
import React from 'react'

function Launch() {

  const changePi = () => {
    var firstPi = document.getElementById("frstIm");
    firstPi.style.display = "none";
    var secondPi = document.getElementById("scndIm");
    secondPi.style.display = "inline-block";
  }

  const prevPi = () => {
    var firstPi = document.getElementById("frstIm");
    firstPi.style.display = "inline-block";
    var secondPi = document.getElementById("scndIm");
    secondPi.style.display = "none";
  }

  const changePi2 = () => {
    var firstPi = document.getElementById("frstIm2");
    firstPi.style.display = "none";
    var secondPi = document.getElementById("scndIm2");
    secondPi.style.display = "inline-block";
  }

  const prevPi2 = () => {
    var firstPi = document.getElementById("frstIm2");
    firstPi.style.display = "inline-block";
    var secondPi = document.getElementById("scndIm2");
    secondPi.style.display = "none";
  }

  const changePi3 = () => {
    var firstPi = document.getElementById("frstIm3");
    firstPi.style.display = "none";
    var secondPi = document.getElementById("scndIm3");
    secondPi.style.display = "inline-block";
  }

  const prevPi3 = () => {
    var firstPi = document.getElementById("frstIm3");
    firstPi.style.display = "inline-block";
    var secondPi = document.getElementById("scndIm3");
    secondPi.style.display = "none";
  }

  return (
    <section className="Section theme--White flavor--Chroma accent--Blurple Section--angleTop Section--paddingNormal Section--hasGuides">
      <div className="Section__masked">
        <div className="Section__backgroundMask">
          <div className="Section__background">
            <div className='Guides' aria-hidden='true'>
              <div className='Guides__container'>
                <div className='Guides__guide'></div>
                <div className='Guides__guide'></div>
                <div className='Guides__guide'></div>
                <div className='Guides__guide'></div>
                <div className='Guides__guide'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='Section__container !pt-[270px]'>
          <div className='Section__layoutContainer'>
            <div className='Section__layout'>
              <div className="StripeSet StripeSet--TopRight StripeSet--layoutIntersecting" data-js-controller="StripeSet"
                aria-hidden="true">
                <div className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetNormal Stripe--widthFull"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes">
                </div>
                <div className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetNone Stripe--widthNormal"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes"></div>
                <div
                  className="Stripe Stripe--accentNone Stripe--variantIntersection Stripe--insetNormal Stripe--widthFull Stripe--intersectionInsetNone Stripe--intersectionWidthNormal"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes">
                  <div className="Stripe__intersection" data-js-target="StripeSet.intersection"></div>
                </div>
              </div>
              <div className="RowLayout" id='#idd1'>
                <section className="Copy variant--Section">
                  <header className="Copy__header">
                    <h2 className="Copy__caption !text-[18px] !leading-[28px] !font-medium">Launch with ease</h2>
                    <h1 className="Copy__title !text-[38px] !leading-[48px] !font-medium">Low- and no-code options for<br /> getting started</h1>
                  </header>
                  <div className="Copy__body !text-[18px] !leading-[28px] !font-light">
                    If you’d like to use Stripe for your business but don’t have developers on staff, no problem. We
                    have a few options depending on your needs.
                  </div>
                </section>
                <section className="Cards mb-[120px]">
                  <div className="Card" onMouseEnter={changePi} onMouseLeave={prevPi}>
                    <img src="/card1.png" alt="Description of Image 2" id='frstIm' />
                    <img src="/card1h.png" alt="Description of Image 3" id='scndIm' className='hidden' />
                    <div className='pl-[10px] pb-[88px] pt-[25px]'>
                      <h2 className='text-left text-[26px] leading-[36px] font-medium text-[#0a2540]'>Build with Stripe-certified experts</h2>
                      <p className='pt-[20px] text-left text-[18px] leading-[28px] font-light text-[#425466]'>Work <span className='font-normal text-darkbl'>that</span> with a Stripe consulting <span className='font-normal text-darkbl'>partner</span>  can integrate and deploy <span className='font-normal text-darkbl'>Stripe</span> solutions for you.</p>
                    </div>
                  </div>
                  <div className="Card" onMouseEnter={changePi2} onMouseLeave={prevPi2}>
                    <img src="/card2.png" alt="Description of Image 2" id='frstIm2' />
                    <img src="/card2h.png" alt="Description of Image 2" id='scndIm2' className='hidden' />
                    <div className='pl-[10px] pb-[88px] pt-[25px]'>
                      <h2 className='text-left text-[26px] leading-[36px] font-medium text-[#0a2540]'>Build with Stripe-certified experts</h2>
                      <p className='pt-[20px] text-left text-[18px] leading-[28px] font-light text-[#425466]'>Work with a Stripe <span className='font-normal text-darkbl'>partner</span> consulting partner that can integrate and deploy Stripe solutions <span className='font-normal text-darkbl'>partner</span> for you.</p>
                    </div>
                  </div>
                  <div className="Card" onMouseEnter={changePi3} onMouseLeave={prevPi3}>
                    <img src="/card3.png" alt="Description of Image 3" id='frstIm3' />
                    <img src="/card3h.png" alt="Description of Image 3" id='scndIm3' className='hidden' />
                    <div className='pl-[10px] pb-[88px] pt-[25px]'>
                      <h2 className='text-left text-[26px] leading-[36px] font-medium text-[#0a2540]'>Build with Stripe-certified experts</h2>
                      <p className='pt-[20px] text-left text-[18px] leading-[28px] font-light text-[#425466]'>Work with a Stripe consulting partner that can <span className='font-normal text-darkbl'>partner</span> integrate and deploy Stripe solutions for you.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Launch
