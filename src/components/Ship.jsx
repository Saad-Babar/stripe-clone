import React from 'react'
import Payments from './Payments'
import Contactbutton from './Contactbutton'
import Shipbutton from './Shipbutton'

function Ship() {
    return (
        <section id='ship_shape'
            className="Section theme--Dark flavor--Chroma accent--Cyan Section--angleBoth Section--paddingNormal Section--hasGuides">
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
                <div className='Section__container pt-[275px]'>
                    <div className='Section__layoutContainer'>
                        <div className='Section__layout'>

                            <div className="RowLayout" id='styleone'>
                                <div className='ColumnLayout' data-columns='2,2'>
                                    <section className="Copy variant--Section" id='styletwo'>
                                        <header className="Copy__header">

                                            <h2 className="Copy__caption !text-[18px] !leading-[28px] !font-medium">Designed for developers</h2>
                                            <h1 className="Copy__title !text-[38px] !leading-[48px] !font-medium">Ship more quickly with powerful and easy-to-use APIs</h1>
                                        </header>



                                        <div className="Copy__body !text-[18px] !leading-[28px] !font-light">
                                            Save engineering time with unified payments functionality. We obsess over the maze of gateways,
                                            payments rails, and financial institutions that make up the global economic landscape so that your
                                            teams can build what you need on one platform.
                                        </div>
                                        <footer className="Copy__footer">
                                            <Payments label="Read the docs"></Payments>
                                        </footer>
                                    </section>
                                </div>
                                <div data-js-controller="AnimationSequence">
                                    <div className='ColumnLayout pb-[275px]' data-columns='1,1,1,1'>
                                        <section className="Copy variant--Detail !mt-[142px]">
                                            <header className="Copy__header">
                                                <div className="Copy__icon">
                                                    <div className="AnimatedIcon TerminalIcon">
                                                        <div className="AnimatedIcon__iconContainer">
                                                            <svg className="AnimatedIcon__icon" width="96" height="96" preserveAspectRatio="xMinYMin"
                                                                viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" data-js-controller="TerminalIcon">
                                                                <defs>
                                                                    <path id="terminalIconCode"
                                                                        d="M44 28a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h24zm-23.2 5.17l-.67.75a.5.5 0 0 0-.02.64l.06.06 3.29 2.92-3.3 2.92a.5.5 0 0 0-.03.7l.66.76c.18.2.5.22.7.04l4.97-4.42-4.96-4.41a.5.5 0 0 0-.7.04z" />
                                                                    <path id="terminalIconCursor"
                                                                        d="M27.64 40h6.72c.22 0 .3.02.38.07.09.04.15.1.2.19.04.08.06.16.06.38v.72c0 .22-.02.3-.07.38a.45.45 0 0 1-.19.2c-.08.04-.16.06-.38.06h-6.72c-.22 0-.3-.02-.38-.07a.45.45 0 0 1-.2-.19c-.04-.08-.06-.16-.06-.38v-.72c0-.22.02-.3.07-.38.04-.09.1-.15.19-.2.08-.04.16-.06.38-.06z" />
                                                                    <path id="terminalIconGear"
                                                                        d="M42.5 42l1.13 3.13.64.13 2.24-2.46.93.38-.16 3.33c.19.11.37.23.54.36l3.02-1.42.7.71-1.41 3.02c.13.17.25.35.36.54l3.33-.16.38.93-2.46 2.24c.05.21.1.42.13.64L55 54.5v1l-3.13 1.13c-.04.25-.1.5-.15.73l2.48 2.15-.38.93-3.28-.24c-.14.24-.3.47-.47.7l1.48 2.94-.71.7-2.94-1.47c-.23.17-.46.33-.7.47l.24 3.28-.93.38-2.15-2.48c-.27.06-.54.12-.82.16L42.5 68h-1l-1.04-3.12c-.28-.04-.55-.1-.82-.16l-2.15 2.48-.93-.38.24-3.28c-.24-.14-.47-.3-.7-.47l-2.94 1.48-.7-.71 1.47-2.94c-.17-.23-.33-.46-.47-.7l-3.28.24-.38-.93 2.48-2.15a9.95 9.95 0 0 1-.16-.82L29 55.5v-1l3.12-1.04c.04-.25.08-.49.14-.73l-2.46-2.24.38-.93 3.33.16c.11-.19.23-.37.36-.54l-1.42-3.02.71-.7 3.02 1.41c.17-.13.35-.25.54-.36l-.16-3.33.93-.38 2.24 2.46s.42-.1.64-.13L41.5 42h1zM42 53a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                                                    <clipPath id="terminalIconClipPath">
                                                                        <use href="#terminalIconCode" />
                                                                    </clipPath>
                                                                </defs>
                                                                <use href="#terminalIconCode" fill="var(--blendBackground)" />
                                                                <use href="#terminalIconCursor" fill="var(--knockoutColor)"
                                                                    data-js-target="TerminalIcon.cursor" />
                                                                <use href="#terminalIconGear" fill="var(--blendForeground)" transformOrigin="42 55"
                                                                    data-js-target-list="TerminalIcon.gears" />
                                                                <g clipPath="url(#terminalIconClipPath)">
                                                                    <use href="#terminalIconGear" fill="var(--blendIntersection)" transformOrigin="42 55"
                                                                        data-js-target-list="TerminalIcon.gears" />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 className="Copy__title !mt-[-24px]">Use Stripe with your stack</h1>
                                            </header>
                                            <div className="Copy__body">
                                                We offer client and server libraries in everything from React and PHP to .NET.
                                            </div>
                                            <footer className="Copy__footer">
                                                <Shipbutton label="See libraries"></Shipbutton>
                                            </footer>
                                        </section>
                                        <section className="Copy variant--Detail !mt-[168px]">
                                            <header className="Copy__header">
                                                <div className="Copy__icon"><svg className="Icon " width="40" height="40" viewBox="0 0 40 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <clipPath id="BrowserWithNoCodeIconClipPath-">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M4 2C1.79086 2 0 3.79086 0 6V26C0 28.2091 1.79086 30 4 30H32C34.2091 30 36 28.2091 36 26V6C36 3.79086 34.2091 2 32 2H4ZM4.5 8C5.32843 8 6 7.32843 6 6.5C6 5.67157 5.32843 5 4.5 5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8ZM11 6.5C11 7.32843 10.3284 8 9.5 8C8.67157 8 8 7.32843 8 6.5C8 5.67157 8.67157 5 9.5 5C10.3284 5 11 5.67157 11 6.5ZM14.5 8C15.3284 8 16 7.32843 16 6.5C16 5.67157 15.3284 5 14.5 5C13.6716 5 13 5.67157 13 6.5C13 7.32843 13.6716 8 14.5 8Z"
                                                                className="Icon__blendBackground" id='stll1'></path>
                                                        </clipPath>
                                                    </defs>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M4 2C1.79086 2 0 3.79086 0 6V26C0 28.2091 1.79086 30 4 30H32C34.2091 30 36 28.2091 36 26V6C36 3.79086 34.2091 2 32 2H4ZM4.5 8C5.32843 8 6 7.32843 6 6.5C6 5.67157 5.32843 5 4.5 5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8ZM11 6.5C11 7.32843 10.3284 8 9.5 8C8.67157 8 8 7.32843 8 6.5C8 5.67157 8.67157 5 9.5 5C10.3284 5 11 5.67157 11 6.5ZM14.5 8C15.3284 8 16 7.32843 16 6.5C16 5.67157 15.3284 5 14.5 5C13.6716 5 13 5.67157 13 6.5C13 7.32843 13.6716 8 14.5 8Z"
                                                        className="Icon__blendBackground" id='stll1'></path>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M40 18.5C40 15.4624 37.5376 13 34.5 13H17.5C14.4624 13 12 15.4624 12 18.5C12 21.5376 14.4624 24 17.5 24H34.5C37.5376 24 40 21.5376 40 18.5ZM14 18.5C14 20.433 15.567 22 17.5 22C19.433 22 21 20.433 21 18.5C21 16.567 19.433 15 17.5 15C15.567 15 14 16.567 14 18.5ZM12 31.5C12 28.4624 14.4624 26 17.5 26H34.5C37.5376 26 40 28.4624 40 31.5C40 34.5376 37.5376 37 34.5 37H17.5C14.4624 37 12 34.5376 12 31.5ZM31 31.5C31 33.433 32.567 35 34.5 35C36.433 35 38 33.433 38 31.5C38 29.567 36.433 28 34.5 28C32.567 28 31 29.567 31 31.5Z"
                                                        className="Icon__blendForeground" id='stll2'></path>
                                                    <g clipPath="url(#BrowserWithNoCodeIconClipPath-)">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M40 18.5C40 15.4624 37.5376 13 34.5 13H17.5C14.4624 13 12 15.4624 12 18.5C12 21.5376 14.4624 24 17.5 24H34.5C37.5376 24 40 21.5376 40 18.5ZM14 18.5C14 20.433 15.567 22 17.5 22C19.433 22 21 20.433 21 18.5C21 16.567 19.433 15 17.5 15C15.567 15 14 16.567 14 18.5ZM12 31.5C12 28.4624 14.4624 26 17.5 26H34.5C37.5376 26 40 28.4624 40 31.5C40 34.5376 37.5376 37 34.5 37H17.5C14.4624 37 12 34.5376 12 31.5ZM31 31.5C31 33.433 32.567 35 34.5 35C36.433 35 38 33.433 38 31.5C38 29.567 36.433 28 34.5 28C32.567 28 31 29.567 31 31.5Z"
                                                            className="Icon__blendForeground" id='stll3'></path>
                                                    </g>
                                                </svg></div>

                                                <h1 className="Copy__title">Try no-code options</h1>
                                            </header>



                                            <div className="Copy__body">
                                                Customize and deploy payments interfaces directly from the Stripe Dashboard.
                                            </div>
                                            <footer className="Copy__footer">
                                                <Shipbutton label="Explore no-code"></Shipbutton>
                                            </footer>



                                        </section>
                                        <section className="Copy variant--Detail !mt-[142px]">
                                            <header className="Copy__header">
                                                <div className="Copy__icon">
                                                    <div className="AnimatedIcon BlocksIcon">
                                                        <div className="AnimatedIcon__iconContainer">
                                                            <svg className="AnimatedIcon__icon" width="96" height="96" preserveAspectRatio="xMinYMin"
                                                                viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" data-js-controller="BlocksIcon">
                                                                <defs>
                                                                    <path id="blocksIconBack"
                                                                        d="M30.68 31.37l9 4.15A4 4 0 0 1 42 39.15v10.89a4 4 0 0 1-2.32 3.63l-9 4.15a4 4 0 0 1-3.36 0l-9-4.15A4 4 0 0 1 16 50.04V39.15a4 4 0 0 1 .35-1.62L29 43.36v-1.54l-11.85-5.47a4 4 0 0 1 1.17-.83l9-4.15a4 4 0 0 1 3.36 0z" />
                                                                    <path id="blocksIconFront"
                                                                        d="M55 45.15v10.89a4 4 0 0 1-2.32 3.63l-9 4.15a4 4 0 0 1-3.36 0l-9-4.15A4 4 0 0 1 29 56.04V45.15a4 4 0 0 1 .35-1.62L42 49.37l12.65-5.84a4 4 0 0 1 .35 1.62zm-11.32-7.78l9 4.15a4 4 0 0 1 1.17.83L42 47.82l-11.86-5.47a4 4 0 0 1 1.18-.83l9-4.15a4 4 0 0 1 3.36 0z" />
                                                                    <clipPath id="blocksIconClipPath">
                                                                        <use data-js-target-list="BlocksIcon.firstBackBlocks" href="#blocksIconFront"
                                                                            transform="translate(-13, -6)" data-js-bbox="firstHiddenBlock" />
                                                                        <use data-js-target-list="BlocksIcon.secondBackBlocks" href="#blocksIconFront"
                                                                            transform="translate(-65, -30)" data-js-bbox="secondHiddenBlock" />
                                                                    </clipPath>
                                                                </defs>
                                                                <use data-js-target="BlocksIcon.firstHiddenBlock" href="#blocksIconFront"
                                                                    transform="translate(-13, -6)" id='stll4' />
                                                                <use data-js-target="BlocksIcon.secondHiddenBlock" href="#blocksIconFront"
                                                                    transform="translate(-65, -30)" id='stll4' />
                                                                <use data-js-target-list="BlocksIcon.secondBackBlocks" href="#blocksIconFront"
                                                                    fill="var(--blendBackground)" id='stll5' />
                                                                <use data-js-target-list="BlocksIcon.secondFrontBlocks" href="#blocksIconFront"
                                                                    fill="var(--blendForeground)" id='stll5' />
                                                                <use data-js-target-list="BlocksIcon.firstBackBlocks" href="#blocksIconFront"
                                                                    fill="var(--blendBackground)" transform="translate(-13, -6)" />
                                                                <use data-js-target-list="BlocksIcon.firstFrontBlocks" href="#blocksIconFront"
                                                                    fill="var(--blendForeground)" />
                                                                <g clipPath="url(#blocksIconClipPath)">
                                                                    <use data-js-target-list="BlocksIcon.firstFrontBlocks" href="#blocksIconFront"
                                                                        fill="var(--blendIntersection)" />
                                                                    <use data-js-target-list="BlocksIcon.secondFrontBlocks" href="#blocksIconFront"
                                                                        fill="var(--blendIntersection)" id='stll5' />
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 className="Copy__title !mt-[-24px]">Explore prebuilt integrations</h1>
                                            </header>
                                            <div className="Copy__body">
                                                Connect Stripe to over a hundred tools including Adobe, Salesforce, and Xero.
                                            </div>
                                            <footer className="Copy__footer">
                                                <Shipbutton label="Browse App Marketplace"></Shipbutton>
                                            </footer>
                                        </section>
                                        <section className="Copy variant--Detail !mt-[168px]">
                                            <header className="Copy__header">
                                                <div className="Copy__icon"><svg className="Icon " width="40" height="40" viewBox="0 0 40 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <clipPath id="BrowserWithCodeIconClipPath-">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M4 2C1.79086 2 0 3.79086 0 6V26C0 28.2091 1.79086 30 4 30H32C34.2091 30 36 28.2091 36 26V6C36 3.79086 34.2091 2 32 2H4ZM4.5 8C5.32843 8 6 7.32843 6 6.5C6 5.67157 5.32843 5 4.5 5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8ZM11 6.5C11 7.32843 10.3284 8 9.5 8C8.67157 8 8 7.32843 8 6.5C8 5.67157 8.67157 5 9.5 5C10.3284 5 11 5.67157 11 6.5ZM14.5 8C15.3284 8 16 7.32843 16 6.5C16 5.67157 15.3284 5 14.5 5C13.6716 5 13 5.67157 13 6.5C13 7.32843 13.6716 8 14.5 8Z"
                                                                className="Icon__blendBackground" id='stll1'></path>
                                                        </clipPath>
                                                    </defs>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M4 2C1.79086 2 0 3.79086 0 6V26C0 28.2091 1.79086 30 4 30H32C34.2091 30 36 28.2091 36 26V6C36 3.79086 34.2091 2 32 2H4ZM4.5 8C5.32843 8 6 7.32843 6 6.5C6 5.67157 5.32843 5 4.5 5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8ZM11 6.5C11 7.32843 10.3284 8 9.5 8C8.67157 8 8 7.32843 8 6.5C8 5.67157 8.67157 5 9.5 5C10.3284 5 11 5.67157 11 6.5ZM14.5 8C15.3284 8 16 7.32843 16 6.5C16 5.67157 15.3284 5 14.5 5C13.6716 5 13 5.67157 13 6.5C13 7.32843 13.6716 8 14.5 8Z"
                                                        className="Icon__blendBackground" id='stll1'></path>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M24.5573 17C24.2261 17 23.9341 17.2173 23.839 17.5345L18.289 36.0345C18.1446 36.5157 18.5049 37 19.0073 37H21.4413C21.7725 37 22.0645 36.7827 22.1597 36.4655L27.7097 17.9655C27.854 17.4843 27.4937 17 26.9913 17H24.5573ZM13.7428 19.7011C14.0238 19.3968 14.4983 19.3778 14.8026 19.6587L16.6396 21.3544C16.944 21.6354 16.963 22.1099 16.682 22.4142L12.443 27.0066L16.682 31.5989C16.963 31.9033 16.944 32.3778 16.6396 32.6587L14.8026 34.3544C14.4983 34.6354 14.0238 34.6164 13.7428 34.312L7.4689 27.5153C7.2037 27.228 7.20371 26.7852 7.4689 26.4979L13.7428 19.7011ZM32.2558 19.7011C31.9749 19.3968 31.5004 19.3778 31.196 19.6587L29.359 21.3544C29.0546 21.6354 29.0357 22.1099 29.3166 22.4142L33.5557 27.0066L29.3166 31.5989C29.0357 31.9033 29.0546 32.3778 29.359 32.6587L31.196 34.3544C31.5004 34.6354 31.9749 34.6164 32.2558 34.312L38.5297 27.5153C38.7949 27.228 38.7949 26.7852 38.5297 26.4979L32.2558 19.7011Z"
                                                        className="Icon__blendForeground" id='stll2'></path>
                                                    <g clipPath="url(#BrowserWithCodeIconClipPath-)">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M24.5573 17C24.2261 17 23.9341 17.2173 23.839 17.5345L18.289 36.0345C18.1446 36.5157 18.5049 37 19.0073 37H21.4413C21.7725 37 22.0645 36.7827 22.1597 36.4655L27.7097 17.9655C27.854 17.4843 27.4937 17 26.9913 17H24.5573ZM13.7428 19.7011C14.0238 19.3968 14.4983 19.3778 14.8026 19.6587L16.6396 21.3544C16.944 21.6354 16.963 22.1099 16.682 22.4142L12.443 27.0066L16.682 31.5989C16.963 31.9033 16.944 32.3778 16.6396 32.6587L14.8026 34.3544C14.4983 34.6354 14.0238 34.6164 13.7428 34.312L7.4689 27.5153C7.2037 27.228 7.20371 26.7852 7.4689 26.4979L13.7428 19.7011ZM32.2558 19.7011C31.9749 19.3968 31.5004 19.3778 31.196 19.6587L29.359 21.3544C29.0546 21.6354 29.0357 22.1099 29.3166 22.4142L33.5557 27.0066L29.3166 31.5989C29.0357 31.9033 29.0546 32.3778 29.359 32.6587L31.196 34.3544C31.5004 34.6354 31.9749 34.6164 32.2558 34.312L38.5297 27.5153C38.7949 27.228 38.7949 26.7852 38.5297 26.4979L32.2558 19.7011Z"
                                                            className="Icon__blendForeground" id='stll3'></path>
                                                    </g>
                                                </svg>
                                                </div>
                                                <h1 className="Copy__title">Build on Stripe Apps</h1>
                                            </header>
                                            <div className="Copy__body">
                                                Create an app just for your team or for the millions of businesses on Stripe.
                                            </div>
                                            <footer className="Copy__footer">
                                                <Shipbutton label="Learn about Apps"></Shipbutton>
                                            </footer>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ship
