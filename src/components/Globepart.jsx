import React from 'react'

function Globepart() {
  return (
      <section id='thatha' className="Section HomepageGlobalSection theme--Dark flavor--Chroma accent--Cyan Section--angleTop Section--paddingNormal Section--hasGuides">
        <div className="Section__masked">
          <div className="Section__backgroundMask">
            <div className="Section__background">
              <figure className="BackgroundGlobe " data-js-controller="BackgroundGlobe">
                <div className="Globe js-globe Globe--isAngled"></div>
              </figure>
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
          <div className='Section__container'>
            <div className='Section__layoutContainer'>
              <div className='Section__layout'>
                <div className="RowLayout" id='glbo'>
                  <div className='ColumnLayout' data-columns='2,2'>
                    <section className="Copy HomepageGlobalSection__copy variant--Section">
                      <header className="Copy__header">
                        <h2 className="text-c2 mt-[250px] text-[18px] leading-[28px] font-medium">Global scale</h2>
                        <h1 className="text-wite text-[38px] leading-[48px]">The backbone for global commerce</h1>
                      </header>
                      <div className="Copy__body !text-[18px] !leading-[28px] !font-light">
                        Stripe makes moving money as easy and programmable as moving data.
                        Our teams are based in offices around the world and we process hundreds of billions of dollars
                        each year for ambitious businesses of all sizes.
                      </div>
                    </section>
                  </div>
                  <div className='ColumnLayout mt-[105px] mb-[120px]' data-columns='1,1,1,1'>
                    <section className="Copy variant--Stat">
                      <header className="Copy__header">
                        <h1 className="Copy__title !text-[24px] !leading-[32px] !font-medium">250M+</h1>
                      </header>
                      <div className="Copy__body !text-[15px] !leading-[24px] !font-light">
                        API requests per day, peaking at 13,000 requests a second.
                      </div>
                    </section>
                    <section className="Copy HomepageGlobalSection__uptimeStat variant--Stat">
                      <header className="Copy__header">
                        <h1 className="Copy__title !text-[24px] !leading-[32px] !font-medium">99.999%</h1>
                      </header>
                      <div className="Copy__body !text-[15px] !leading-[24px] !font-light">
                          historical uptime for <a className="Link" href="https://status.stripe.com/" data-js-controller='AnalyticsButton' data-analytics-category='Links'
                          data-analytics-action='Clicked' data-analytics-label='Global Stripe services'>Stripe
                          services</a>.
                      </div>
                    </section>
                    <section className="Copy variant--Stat">
                      <header className="Copy__header">
                        <h1 className="Copy__title !text-[24px] !leading-[32px] !font-medium">90%</h1>
                      </header>
                      <div className="Copy__body !text-[15px] !leading-[24px] !font-light">
                        of U.S. adults have bought from businesses using Stripe.
                      </div>
                    </section>
                    <section className="Copy variant--Stat">
                      <header className="Copy__header">
                        <h1 className="Copy__title !text-[24px] !leading-[32px] !font-medium">135+</h1>
                      </header>
                      <div className="Copy__body !text-[15px] !leading-[24px] !font-light">
                        currencies and payment methods supported.
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Globepart
