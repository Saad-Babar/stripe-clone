import React from 'react'
import Payments from './Payments'

function Animeside() {
    return (
        <section className="Section HomepageFrontdoor__section theme--Light flavor--Chroma accent--Blurple Section--angleBottom Section--paddingNormal Section--hasGuides Section--hasStickyNav pb-[500px]" data-js-controller="HomepageFrontdoor">
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
                <div className='Section__container'>
                    <div className='Section__layoutContainer'>
                        <div className='Section__layout'>
                            <div className="RowLayout" id="styleone">
                                <div className='ColumnLayout ColumnLayout--alignCenter HomepageFrontdoor__subsection' data-js-target-list="HomepageFrontdoor.subsections" data-columns='2,2' data-columns-tablet='1'>
                                    <section className="Copy variant--Hero" id="styletwo">
                                        <header className="Copy__header mt-[135px] font-medium fortwentyfive:max-w-[295px]">
                                            <h2 className="text-darkbl text-[18px] leading-[28px]">Modular solutions</h2>
                                            <h1 className="text-primayt text-[56px] leading-[68px]">A fully integrated suite of financial and payments products</h1>
                                        </header>
                                        <div className="Copy__body">
                                            <p className='font-light text-[18px] leading-[28px]'>
                                                Reduce costs, grow revenue, and run your business more efficiently on a fully integrated
                                                platform. Use Stripe to handle all of your payments-related needs, manage revenue operations,
                                                and launch (or invent) new business models.
                                            </p>
                                        </div>
                                    </section>
                                </div>
                                <div className='ColumnLayout ColumnLayout--alignCenter HomepageFrontdoor__subsection' data-js-target-list="HomepageFrontdoor.subsections" data-columns='2,2' data-columns-tablet='1'>
                                    <section className="Copy HomepageFrontdoor__copy variant--Section" id="stylethree">
                                        <header className="Copy__header">
                                            <h2 className="Copy__caption">
                                                <div className="HomepageFrontdoor__copyCaption mt-[185px] flex items-center">
                                                    <svg className="ProductIcon ProductIcon--Payments HomepageFrontdoor__copyCaptionIcon" width="20" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Payments</title>
                                                        <path
                                                            d="M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z"
                                                            fill="url(#product-icon-payments-PaymentsSection-a)" />
                                                        <path
                                                            d="M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z"
                                                            fill="#96F" />
                                                        <path
                                                            d="M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z"
                                                            fill="url(#product-icon-payments-PaymentsSection-b)" />
                                                        <defs>
                                                            <linearGradient id="product-icon-payments-PaymentsSection-a" x1="20" y1="4.13" x2="20"
                                                                y2="21.13" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#11EFE3" />
                                                                <stop offset="1" stopColor="#21CFE0" />
                                                            </linearGradient>
                                                            <linearGradient id="product-icon-payments-PaymentsSection-b" x1="35" y1="11.28" x2="35"
                                                                y2="28.72" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#0048E5" />
                                                                <stop offset="1" stopColor="#9B66FF" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <span className='text-[18px] leading-[28px] font-medium text-c1 ml-[13px]'>Payments</span>
                                                </div>
                                            </h2>
                                            <h1 className="text-[38px] leading-[48px] font-medium text-primayt">Accept and optimize payments, globally</h1>
                                        </header>
                                        <div className="Copy__body">
                                            <p className='font-light text-[18px] leading-[28px]'>
                                                Increase authorization rates, optimize your checkout conversion, and offer local payment methods
                                                in every market.
                                            </p>
                                        </div>
                                        <footer className="Copy__footer">
                                            <Payments label='Start with Payments' />
                                            <section className="List List--hasTitle">
                                                <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title text-[15px] leading-[24px] text-primayt">See also</h1>
                                                <ul className='List__list'>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/tax" data-js-controller='AnalyticsButton'
                                                            data-analytics-category='Links' data-analytics-action='Clicked'
                                                            data-analytics-label='Product listing'>Tax</a> <span className='text-[15px] leading-[24px] font-light'>for automating sales tax and VAT</span>
                                                    </div>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/radar"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Radar</a> <span className='text-[15px] leading-[24px] font-light'>for fraud
                                                                prevention and management</span>
                                                    </div>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/terminal"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Terminal</a> <span className='text-[15px] leading-[24px] font-light'>for
                                                                custom in-person payments</span>
                                                    </div>
                                                </ul>
                                            </section>
                                        </footer>
                                    </section>
                                </div>
                                <div className='ColumnLayout ColumnLayout--alignCenter HomepageFrontdoor__subsection'
                                    data-js-target-list="HomepageFrontdoor.subsections" data-columns='2,2' data-columns-tablet='1'>
                                    <section className="Copy HomepageFrontdoor__copy variant--Section" id="stylefour">
                                        <header className="Copy__header">
                                            <h2 className="Copy__caption">
                                                <div className="HomepageFrontdoor__copyCaption mt-[185px] flex items-center">
                                                    <svg className="ProductIcon ProductIcon--Billing HomepageFrontdoor__copyCaptionIcon" width="20" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Billing</title>
                                                        <path
                                                            d="M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 0 0 0 2.46v30.08a2.46 2.46 0 0 0 3.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z"
                                                            fill="url(#product-icon-billing-BillingSection-a)" />
                                                        <path d="M26.5 39a13.5 13.5 0 1 0 0-27 13.5 13.5 0 0 0 0 27z" fill="#00D924" />
                                                        <path d="M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0 1 26 12z"
                                                            fill="url(#product-icon-billing-BillingSection-b)" />
                                                        <defs>
                                                            <linearGradient id="product-icon-billing-BillingSection-a" x1="13" y1="6.35" x2="13"
                                                                y2="35.03" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#FFD748" />
                                                                <stop offset="1" stopColor="#FFC148" />
                                                            </linearGradient>
                                                            <linearGradient id="product-icon-billing-BillingSection-b" x1="19.5" y1="12.01" x2="19.5"
                                                                y2="30.19" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#00A600" />
                                                                <stop offset="1" stopColor="#00D924" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <span className='text-[18px] leading-[28px] font-medium text-c1 ml-[13px]'>Billing</span>
                                                </div>
                                            </h2>
                                            <h1 className="text-[38px] leading-[48px] font-medium text-primayt">Capture recurring revenue</h1>
                                        </header>
                                        <div className="Copy__body">
                                            <p className='font-light text-[18px] leading-[28px]'>
                                                Support recurring business models, minimize churn, and automate finance operations.
                                            </p>
                                        </div>
                                        <footer className="Copy__footer">
                                            <Payments label='Start with Billing' />
                                            <section className="List List--hasTitle">
                                                <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title text-[15px] leading-[24px] text-primayt">See also</h1>
                                                <ul className='List__list'>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/invoicing"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Invoicing </a>
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                                 for invoice creation, collection, and tracking
                                                            </span>
                                                    </div>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/revenue-recognition"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Revenue
                                                            Recognition </a> 
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                            for streamlined accrual accounting
                                                            </span>
                                                            
                                                    </div>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link" href="/sigma"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Sigma </a> 
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                            for custom revenue reports
                                                            </span>
                                                    </div>
                                                </ul>
                                            </section>
                                        </footer>
                                    </section>
                                </div>
                                <div className=' ColumnLayout ColumnLayout--alignCenter HomepageFrontdoor__subsection'
                                    data-js-target-list="HomepageFrontdoor.subsections" data-columns='2,2' data-columns-tablet='1'>
                                    <section className="Copy HomepageFrontdoor__copy variant--Section" id="stylefive">
                                        <header className="Copy__header">
                                            <h2 className="Copy__caption">
                                                <div className="HomepageFrontdoor__copyCaption mt-[185px] flex items-center">
                                                    <svg className="ProductIcon ProductIcon--Connect HomepageFrontdoor__copyCaptionIcon" width="20" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Connect</title>
                                                        <path
                                                            d="M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z"
                                                            fill="url(#product-icon-connect-ConnectSection-a)" />
                                                        <path
                                                            d="M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z"
                                                            fill="#0073E6" />
                                                        <path d="M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z"
                                                            fill="url(#product-icon-connect-ConnectSection-b)" />
                                                        <defs>
                                                            <linearGradient id="product-icon-connect-ConnectSection-a" x1="13" y1="1.71" x2="13"
                                                                y2="15.25" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#11EFE3" />
                                                                <stop offset=".33" stopColor="#15E8E2" />
                                                                <stop offset=".74" stopColor="#1FD3E0" />
                                                                <stop offset="1" stopColor="#21CFE0" />
                                                            </linearGradient>
                                                            <linearGradient id="product-icon-connect-ConnectSection-b" x1="20" y1="15.72" x2="20"
                                                                y2="27.24" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#00299C" />
                                                                <stop offset="1" stopColor="#0073E6" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <span className='text-[18px] leading-[28px] font-medium text-c1 ml-[13px]'>Connect</span>
                                                </div>
                                            </h2>
                                            <h1 className="text-[38px] leading-[48px] font-medium text-primayt">Set up multiparty payments and payouts</h1>
                                        </header>
                                        <div className="Copy__body">
                                            <p className='font-light text-[18px] leading-[28px]'>
                                                Integrate payments into your platform or marketplace for end-to-end payments experiences.
                                            </p>
                                        </div>
                                        <footer className="Copy__footer">
                                            <Payments label='Start with Connect' />
                                            <section className="List List--hasTitle">
                                                <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title text-[15px] leading-[24px] text-primayt">See also</h1>
                                                <ul className='List__list'>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/terminal"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Terminal </a> 
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                                for custom in-person payments
                                                            </span>
                                                    </div>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/connect/payouts"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Instant Payouts </a>
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                            for fast payments to users
                                                            </span>
                                                    </div>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/payments/elements"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Payment
                                                            Elements </a> 
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                            for customizable UIs
                                                            </span>
                                                    </div>
                                                </ul>
                                            </section>
                                        </footer>
                                    </section>
                                </div>
                                <div className='ColumnLayout ColumnLayout--alignCenter HomepageFrontdoor__subsection'
                                    data-js-target-list="HomepageFrontdoor.subsections" data-columns='2,2' data-columns-tablet='1'>
                                    <section className="Copy HomepageFrontdoor__copy variant--Section" id="stylesix">
                                        <header className="Copy__header">
                                            <h2 className="Copy__caption">
                                                <div className="HomepageFrontdoor__copyCaption mt-[185px] flex items-center">
                                                    <svg className="ProductIcon ProductIcon--Issuing HomepageFrontdoor__copyCaptionIcon" width="20" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Issuing</title>
                                                        <path
                                                            d="M7.62 26.48l-.02-.03a2.44 2.44 0 0 1-.7-1.48 2.49 2.49 0 0 1 .11-1.05c.05-.28.13-.54.24-.77l.08-.17L14.67 10h21.85A2.52 2.52 0 0 1 39 12.37l.01.16v22.92A2.52 2.52 0 0 1 36.67 38l-.16.01H19a2.5 2.5 0 0 0 .64-1.97c-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1v-.01l.14.1a2.52 2.52 0 0 1-.27-.21l-.03-.03z"
                                                            fill="url(#product-icon-issuing-IssuingSection-a)" />
                                                        <path
                                                            d="M22.05 2.1c.7-.15 1.41 0 1.99.41l6.56 4.72a2.5 2.5 0 0 1 .92 2.8V10l-8.5 26-.05.2-.03.08-.03.09-.15.32-.02.04-.19.29-.03.04a2.9 2.9 0 0 1-.23.25l-.03.02a2.24 2.24 0 0 1-.58.4l-.03.03c-.1.05-.2.1-.31.13h-.05l-.33.08h-.05a2.3 2.3 0 0 1-.36.03H3.53A2.53 2.53 0 0 1 1 35.45v-22.9C1 11.14 2.13 10 3.53 10H16.6l3.8-6.7a2.5 2.5 0 0 1 1.46-1.15l.18-.05z"
                                                            fill="#0073E6" />
                                                        <path
                                                            d="M31.38 10l-8.37 26-.02.1-.02.1-.03.08-.03.09-.07.16-.08.16-.02.04-.1.15-.09.14-.03.04-.11.13-.12.12-.03.02c-.08.09-.17.16-.26.23l-.15.1-.17.08-.03.02-.15.07-.16.06h-.05l-.16.05-.1.01.1-.1c.4-.51.59-1.17.51-1.82-.07-.66-.43-1.09-.95-1.47l-.15-.1-10.62-7.73-.14-.1a2.54 2.54 0 0 1-.26-.26l-.04-.05a2.48 2.48 0 0 1-.12-.14l-.02-.04-.03-.04a2.43 2.43 0 0 1-.17-.3l-.03-.06a2.5 2.5 0 0 1-.15-.42l-.01-.07-.02-.1-.01-.06a2.51 2.51 0 0 1 .05-1.01l.02-.09a2.5 2.5 0 0 1 .04-.1c.03-.25.1-.5.21-.74l.1-.17L16.66 10h14.71z"
                                                            fill="url(#product-icon-issuing-IssuingSection-b)" />
                                                        <defs>
                                                            <linearGradient id="product-icon-issuing-IssuingSection-a" x1="22.92" y1="11.68" x2="22.92"
                                                                y2="39.68" gradientUnits="userSpaceOnUse">
                                                                <stop offset=".1" stopColor="#FF80FF" />
                                                                <stop offset=".39"stopColor="#FF7BF9" />
                                                                <stop offset=".77" stopColor="#FF6EEA" />
                                                                <stop offset="1" stopColor="#FF62DC" />
                                                            </linearGradient>
                                                            <linearGradient id="product-icon-issuing-IssuingSection-b" x1="31.38" y1="27.93" x2="11.62"
                                                                y2="27.93" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#0073E6" />
                                                                <stop offset="1" stopColor="#00299C" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <span className='text-[18px] leading-[28px] font-medium text-c1 ml-[13px]'>Issuing</span>
                                                </div>
                                            </h2>
                                            <h1 className="text-[38px] leading-[48px] font-medium text-primayt">Build a fintech offering with banking-as-a-service</h1>
                                        </header>
                                        <div className="Copy__body">
                                            <p className='font-light text-[18px] leading-[28px]'>
                                                Launch, manage, and scale a commercial card program without any setup fees.
                                            </p>
                                        </div>
                                        <footer className="Copy__footer">
                                            <Payments label='Start with Issuing' />
                                            <section className="List List--hasTitle">
                                                <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title text-[15px] leading-[24px] text-primayt">See also</h1>
                                                <ul className='List__list'>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/treasury"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Treasury </a>
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                            for financial accounts
                                                            </span>
                                                    </div>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/capital/platforms"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Capital </a>
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                            for offering fast, flexible financing
                                                            </span>
                                                    </div>
                                                    <div className="HomepageProductListing">
                                                        <a className="Link HomepageProductListing__link text-[15px] leading-[24px] font-normal" href="/connect/platforms"
                                                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                                                            data-analytics-action='Clicked' data-analytics-label='Product listing'>Connect </a> 
                                                            <span className='text-[15px] leading-[24px] font-light'>
                                                            for powering platform payments
                                                            </span>
                                                    </div>
                                                </ul>
                                            </section>
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

export default Animeside
