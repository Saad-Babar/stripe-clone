"use client"

import React, { useEffect } from 'react'

function Navbar() {
    const changeSVG = () => {
        var originalSvg = document.getElementById("originalSvg");
        var hoverSvg = document.getElementById("hoverSvg");

        originalSvg.style.display = "none";
        hoverSvg.style.display = "inline-block";
    }

    const changeSignInSVG = () => {
        var originalSvg = document.getElementById("signInOriginalSvg");
        var hoverSvg = document.getElementById("signInHoverSvg");

        originalSvg.style.display = "none";
        hoverSvg.style.display = "inline-block";
    }

    function openmobilemenu() {
        var mobileMenu = document.getElementById("mobileMenue");

        mobileMenu.classList.toggle("hidden");
    }

    function closemobilemenu() {
        var mobileMenu = document.getElementById("mobileMenue");

        mobileMenu.classList.toggle("hidden");
    }



    return (
        <div>
            <nav id="navbarr" className='pt-[3px]'>
                <div className="mx-auto max-w-7xl px-2">
                    <div className="relative flex h-16 items-center justify-between">

                        <div className="flex flex-1 items-center">
                            <div className="flex flex-shrink-0 items-center twentyfivesixty:pl-[100px] forteenfoty:pl-[102px] myscreen:pl-[101px] tentofor:pl-[24px]">
                                <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" className="UserLogo variant-- "><title>Stripe logo</title><path fill="var(--userLogoColor, #ffffff)" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fillRule="evenodd" /></svg>
                            </div>
                            <div onClick={openmobilemenu} className="cursor-pointer z-10 md-to-lg:hidden sevensixeight:ml-[580px] sm-to-md:ml-[200px] three:!ml-[110px] threetwenty:ml-[145px] flex flex-shrink-0 items-center rounded-full bg-wite/20 hover:bg-wite/40 pr-[16px] pl-[16px] pt-[11px] pb-[11px]">
                                <svg width="16" height="10" viewBox="0 0 16 10" fill='#ffffff'>
                                    <title>Open mobile navigation</title>
                                    <g fill="var(--knockoutColor)" fillRule="evenodd">
                                        <rect y="8" width="16" height="2" rx="1"></rect>
                                        <rect y="4" width="16" height="2" rx="1"></rect>
                                        <rect width="16" height="2" rx="1"></rect>
                                    </g>
                                </svg>
                            </div>
                            <div className='tentofor:flex tentofor:flex-shrink-0 sevensixeight:hidden'>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-wite hover:text-wite/50 font-medium py-2 leading-[24px] text-[15px] twentyfivesixty:pl-[40px] forteenfoty:pl-[40px] myscreen:pl-[38px]" aria-current="page">Products</a>
                                    <a href="#" className="text-wite hover:text-wite/50 font-medium py-2 leading-[24px] text-[15px] twentyfivesixty:pl-[22px] forteenfoty:pl-[22px] myscreen:pl-[22px]">Solutions</a>
                                    <a href="#" className="text-wite hover:text-wite/50 font-medium py-2 leading-[24px] text-[15px] twentyfivesixty:pl-[22px] forteenfoty:pl-[22px] myscreen:pl-[22px]">Developers</a>
                                    <a href="#" className="text-wite hover:text-wite/50 font-medium py-2 leading-[24px] text-[15px] twentyfivesixty:pl-[22px] forteenfoty:pl-[22px] myscreen:pl-[22px]">Resources</a>
                                    <a href="#" className="text-wite hover:text-wite/50 font-medium py-2 leading-[24px] text-[15px] twentyfivesixty:pl-[22px] forteenfoty:pl-[22px] myscreen:pl-[22px]">Pricing</a>
                                    <button id='contsale' type="button" className="leading-[24px] text-[15px] relative p-1 text-white hover:text-wite/80 font-medium flex item-center mt-[4px]" onMouseOver={changeSVG}>
                                        Contact Sales
                                        <svg id="originalSvg" className='rotate-[90deg] ml-[5px] mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 448 512">
                                            <path fill="#ffffff" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                                        </svg>
                                        <svg id="hoverSvg" className='ml-[5px] mt-[6px] hidden' xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 448 512">
                                            <path fill="#CED0CD" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>
                                    </button>

                                    <button id="signInBtn" type="button" className="leading-[24px] text-[15px] relative rounded-full text-wite bg-wite/20 hover:bg-wite/40 pr-[18px] pl-[18px] h-[33px] font-medium mt-[5px] flex item-center pt-[4px]" onMouseOver={changeSignInSVG}>
                                        Sign In
                                        <svg id="signInOriginalSvg" className='rotate-[90deg] ml-[5px] mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 448 512">
                                            <path fill="#ffffff" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                                        </svg>
                                        <svg id="signInHoverSvg" className='ml-[5px] mt-[6px] hidden' xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 448 512">
                                            <path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="mobileMenue" className='hidden bg-wite rounded-lg mt-[-48px] z-[5000] absolute sevensixeight:w-[360px] sevensixeight:h-[1032px] sevensixeight:ml-[375px] fortwentyfive:ml-[26px] three:w-[326px] three:ml-[17px] threetwenty:w-[273px]'>
                <div className="flex items-center h-[60px]">
                    <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" className="fill-current text-indigo-600 ml-[20px] cursor-pointer">
                        <title>Stripe logo</title>
                        <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fillRule="evenodd" />
                    </svg>
                    {/* cross sign  */}
                    <svg onClick={closemobilemenu} width="40" height="40" viewBox="0 0 40 40" className='sevensixeight:ml-[234px] fortwentyfive:ml-[234px] three:ml-[200px] threetwenty:ml-[145px] cursor-pointer'>
                        <title>Close mobile navigation</title>
                        <path d="M25.6 14.3a1 1 0 0 1 0 1.4l-4.24 4.25 4.25 4.24a1 1 0 1 1-1.42 1.42l-4.24-4.25-4.24 4.25a1 1 0 0 1-1.42-1.42l4.25-4.24-4.25-4.24a1 1 0 0 1 1.42-1.42l4.24 4.25 4.24-4.25a1 1 0 0 1 1.42 0z" fill="#4F5B76" fillRule="evenodd"></path>
                    </svg>
                </div>

                <div className="body h-[903px]">
                    <div className='bg-lightbl h-[332px] sevensixeight:w-[352px] fortwentyfive:w-[352px] three:w-[320px] threetwenty:w-[265px] threetwenty:h-[391px] mx-auto rounded-md'>
                        {/* product  */}
                        <div className='h-[55px] border-b-[1px] border-dashed flex items-center'>
                            <h1 className='leading-[23px] text-[18px] font-medium text-secondary ml-[15px]'>Products</h1>
                        </div>
                        {/* Global Payments */}
                        <div className='h-[86px] flex flex-col justify-between cursor-pointer group'>
                            <h1 className='leading-[20px] text-[16px] font-medium text-secondary duration-150 mt-[15px]  ml-[15px] group-hover:text-[#8493A1]'>Global Payments</h1>
                            <div className='flex items-center'>
                                <p className="ml-[15px] text-[#727f96] duration-150 hover:text-[#9faab4] leading-[20px] text-[16px] font-light">Accept payments online, in person, or through your platform.</p>
                                <svg className='fill-current text-secondary duration-150 mr-[15px] group-hover:text-[#8493A1]' fill="none" viewBox="0 0 16 16" width="22" height="22"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>

                        {/* Revenue and Finance Automation */}
                        <div className='h-[86px] flex flex-col justify-between cursor-pointer group'>
                            <h1 className='leading-[20px] text-[16px] font-medium text-secondary duration-150 mt-[15px] threetwenty:mt-[30px] ml-[15px] group-hover:text-[#8493A1]'>Revenue and Finance Automation</h1>
                            <div className='flex items-center'>
                                <p className="ml-[15px] text-[#727f96] duration-150 hover:text-[#9faab4] leading-[20px] text-[16px] font-light">Grow your business with automated revenue and finance.</p>
                                <svg className='fill-current text-secondary duration-150 mr-[15px] group-hover:text-[#8493A1]' fill="none" viewBox="0 0 16 16" width="22" height="22"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>

                        {/* Banking-as-a-Service */}
                        <div className='h-[86px] flex flex-col justify-between cursor-pointer group'>
                            <h1 className='leading-[20px] text-[16px] font-medium text-secondary duration-150 mt-[15px] threetwenty:mt-[70px] ml-[15px] group-hover:text-[#8493A1]'>Banking-as-a-Service</h1>
                            <div className='flex items-center'>
                                <p className="ml-[15px] text-[#727f96] duration-150 hover:text-[#9faab4] leading-[20px] text-[16px] font-light">Embed financial services in your platform or product.</p>
                                <svg className='fill-current text-secondary duration-150 mr-[15px] group-hover:text-[#8493A1]' fill="none" viewBox="0 0 16 16" width="22" height="22"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className='h-[55px] border-b-[1px] border-dashed flex items-center cursor-pointer group'>
                        <h1 className='leading-[23px] text-[18px] font-medium text-secondary duration-150 ml-[15px] group-hover:text-[#9DA3B1]'>Solutions</h1>
                        <svg className='fill-current text-secondary duration-150 mr-[15px] sevensixeight:ml-[230px] fortwentyfive:ml-[230px] three:ml-[197px] threetwenty:ml-[145px] group-hover:text-[#9DA3B1]' fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className='h-[55px] border-b-[1px] border-dashed flex items-center cursor-pointer group'>
                        <h1 className='leading-[23px] text-[18px] font-medium text-secondary duration-150 ml-[15px] group-hover:text-[#9DA3B1]'>Developers</h1>
                        <svg className='fill-current text-secondary duration-150 mr-[15px] sevensixeight:ml-[215px] fortwentyfive:ml-[215px] three:ml-[182px] threetwenty:ml-[128px] group-hover:text-[#9DA3B1]' fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg>
                    </div>

                    <div className='h-[55px] border-b-[1px] border-dashed flex items-center cursor-pointer group'>
                        <h1 className='leading-[23px] text-[18px] font-medium text-secondary duration-150 ml-[15px] group-hover:text-[#9DA3B1]'>Resources</h1>
                        <svg className='fill-current text-secondary duration-150 mr-[15px] sevensixeight:ml-[223px] fortwentyfive:ml-[223px] three:ml-[190px] threetwenty:ml-[135px] group-hover:text-[#9DA3B1]' fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg>
                    </div>

                    <div className='h-[55px] border-b-[1px] border-dashed flex items-center cursor-pointer group'>
                        <h1 className='leading-[23px] text-[18px] font-medium text-secondary duration-150 ml-[15px] group-hover:text-[#9DA3B1]'>Contact Sales</h1>
                    </div>

                    <div className='h-[55px] flex items-center cursor-pointer group'>
                        <h1 className='leading-[23px] text-[18px] font-medium text-secondary duration-150 ml-[15px] group-hover:text-[#9DA3B1]'>Pricing</h1>
                    </div>

                </div>

                <div className="footer h-[69px]">
                    <div className="flex items-center justify-center bg-lightbl sevensixeight:w-[352px] fortwentyfive:w-[352px] three:w-[320px] threetwenty:w-[265px] h-[65px] mx-auto rounded-md">
                        <button id="signInBtn" type="button" className="leading-[24px] text-[15px] relative rounded-full text-white bg-darkbl hover:bg-xtrablue hover:duration-150 pr-[18px] pl-[18px] h-[33px] font-medium mt-[5px] flex items-center pt-[4px]" onMouseOver={changeSignInSVG}>
                            Sign In
                            <svg id="signInOriginalSvg" className='rotate-[90deg] ml-[5px]' xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 448 512">
                                <path fill="#ffffff" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                            </svg>
                            <svg id="signInHoverSvg" className='ml-[5px] hidden' xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 448 512">
                                <path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Navbar
