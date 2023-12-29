import React from 'react'
import Payments from './Payments'
import Contactbutton from './Contactbutton'
import Shipbutton from './Shipbutton'

function Abovefooter() {
    return (
        <section className="Section theme--Light flavor--Chroma accent--Blurple Section--angleBottom Section--paddingNormal Section--hasGuides">
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
                <div className='Section__container pt-[135px] pb-[320px]'>
                    <div className='Section__layoutContainer'>
                        <div className='Section__layout'>
                            <div data-js-controller="AnimationSequence">
                                <div className='ColumnLayout' data-columns='2,1,1'>
                                    <section className="Copy variant--Footer">
                                        <header className="Copy__header">
                                            <h1 className="Copy__title">Ready to get started?</h1>
                                        </header>
                                        <div className="Copy__body">
                                            <p>
                                                Explore
                                                <a className="Link" href="/payments" data-js-controller='AnalyticsButton' data-analytics-category='Links' data-analytics-action='Clicked' data-analytics-label='Payments features CTA'>
                                                    Stripe Payments
                                                </a>
                                                , or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business.
                                            </p>
                                        </div>
                                        <footer className="Copy__footer">
                                            <div className="Copy__ctaContainer">
                                            <Payments label='Start Now' />
                                            <Contactbutton label='Contact Sales' />
                                            </div>
                                        </footer>
                                    </section>
                                    <section className="Copy variant--Detail">
                                        <header className="Copy__header">
                                            <div className="Copy__icon">
                                                <div className="AnimatedIcon PricingIcon">
                                                    <div className="AnimatedIcon__iconContainer">
                                                        <svg className="AnimatedIcon__icon" width="96" height="96" preserveAspectRatio="xMinYMin"
                                                            viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" data-js-controller="PricingIcon">
                                                            <defs>
                                                                <path id="pricingIconTag"
                                                                    d="M41.4 30.38l8.4 8.27A4 4 0 0 1 51 41.5V62a3 3 0 0 1-3 3H32a3 3 0 0 1-3-3V41.5a4 4 0 0 1 1.2-2.85l8.4-8.27a2 2 0 0 1 2.8 0zM40 36a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                                                                <clipPath id="pricingClipPath">
                                                                    <use href="#pricingIconTag"
                                                                        className="transform origin-40 39 rotate-45"
                                                                        data-js-target-list="PricingIcon.tagBacks" />
                                                                </clipPath>
                                                            </defs>
                                                            <use className="PricingIcon__tag transform " href="#pricingIconTag" fill="var(--blendForeground)"
                                                                data-js-target-list="PricingIcon.tagFronts" />
                                                            <g clipPath="url(#pricingClipPath)">
                                                                <use className="PricingIcon__tag transform origin-40 39" href="#pricingIconTag" fill="var(--blendIntersection)"
                                                                    data-js-target-list="PricingIcon.tagFronts" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="Copy__title">Always know what you pay</h1>
                                        </header>
                                        <div className="Copy__body">
                                            Integrated per-transaction pricing with no hidden fees.
                                        </div>
                                        <footer className="Copy__footer">
                                            <Contactbutton label="Pricing details"></Contactbutton>
                                        </footer>
                                    </section>
                                    <section className="Copy variant--Detail">
                                        <header className="Copy__header">
                                            <div className="Copy__icon">
                                                <div className="AnimatedIcon CodeFilesIcon">
                                                    <div className="AnimatedIcon__iconContainer">
                                                        <svg className="AnimatedIcon__icon" width="96" height="96" preserveAspectRatio="xMinYMin"
                                                            viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" data-js-controller="CodeFilesIcon">
                                                            <defs>
                                                                <path id="codeFilesIconBack"
                                                                    d="M21.13 28h16.74c1.79 0 2.43.19 3.08.53.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 0 1-1.52 1.52c-.65.34-1.3.53-3.08.53H21.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 0 1-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V33.13c0-1.79.19-2.43.53-3.08.35-.66.86-1.17 1.52-1.52.65-.34 1.3-.53 3.08-.53z" />
                                                                <path id="codeFilesIconFront"
                                                                    d="M45.95 33.53c.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 0 1-1.52 1.52c-.65.34-1.3.53-3.08.53H26.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 0 1-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V48c0-3-1-7 9-6 0-2-1-9 4.5-9H43c1.78 0 2.3.19 2.95.53z"
                                                                    data-js-target-list="CodeFilesIcon.fileFrontPaths" mask="url(#codeFilesCaretMask)" />
                                                                <path id="codeFilesIconCarets"
                                                                    d="M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z" />
                                                                <clipPath id="codeFilesClipPath">
                                                                    <use href="#codeFilesIconBack" data-js-target-list="CodeFilesIcon.fileBacks" />
                                                                </clipPath>
                                                                <mask id="codeFilesCaretMask">
                                                                    <path
                                                                        d="M45.95 33.53c.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 0 1-1.52 1.52c-.65.34-1.3.53-3.08.53H26.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 0 1-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V48c0-3-1-7 9-6 0-2-1-9 4.5-9H43c1.78 0 2.3.19 2.95.53z"
                                                                        data-js-target-list="CodeFilesIcon.fileFrontPaths" fill="white" />
                                                                    <path
                                                                        d="M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z"
                                                                        fill="#000" x="-27" data-js-target-list="CodeFilesIcon.carets" />
                                                                    <path
                                                                        d="M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z"
                                                                        fill="#000" data-js-target-list="CodeFilesIcon.carets" />
                                                                </mask>
                                                            </defs>
                                                            <use href="#codeFilesIconBack" fill="var(--blendBackground)"
                                                                data-js-target-list="CodeFilesIcon.fileBacks" />
                                                            <use href="#codeFilesIconFront" fill="var(--blendForeground)"
                                                                data-js-target-list="CodeFilesIcon.fileFronts" />
                                                            <g clipPath="url(#codeFilesClipPath)">
                                                                <use href="#codeFilesIconFront" fill="var(--blendIntersection)"
                                                                    data-js-target-list="CodeFilesIcon.fileFronts" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="Copy__title">Start your integration</h1>
                                        </header>
                                        <div className="Copy__body">
                                            Get up and running with Stripe in as little as 10 minutes.
                                        </div>
                                        <footer className="Copy__footer">
                                            <Contactbutton label="API reference"></Contactbutton>
                                        </footer>
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

export default Abovefooter
