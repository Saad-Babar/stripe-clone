"use client"
import React from 'react'

function Largecards() {

    const changePic = () => {
        var firstPic = document.getElementById("frstImg");
        firstPic.style.display = "none";
        var secondPic = document.getElementById("scndImg");
        secondPic.style.display = "inline-block";
    }
    const prevPic = () => {
        var firstPic = document.getElementById("frstImg");
        firstPic.style.display = "inline-block";
        var secondPic = document.getElementById("scndImg");
        secondPic.style.display = "none";
    }

    const changePic2 = () => {
        var firstPic = document.getElementById("frstImg2");
        firstPic.style.display = "none";
        var secondPic = document.getElementById("scndImg2");
        secondPic.style.display = "inline-block";
    }
    const prevPic2 = () => {
        var firstPic = document.getElementById("frstImg2");
        firstPic.style.display = "inline-block";
        var secondPic = document.getElementById("scndImg2");
        secondPic.style.display = "none";
    }

    const changePic3 = () => {
        var firstPic = document.getElementById("frstImg3");
        firstPic.style.display = "none";
        var secondPic = document.getElementById("scndImg3");
        secondPic.style.display = "inline-block";
    }
    const prevPic3 = () => {
        var firstPic = document.getElementById("frstImg3");
        firstPic.style.display = "inline-block";
        var secondPic = document.getElementById("scndImg3");
        secondPic.style.display = "none";
    }

    const changePic4 = () => {
        var firstPic = document.getElementById("frstImg4");
        firstPic.style.display = "none";
        var secondPic = document.getElementById("scndImg4");
        secondPic.style.display = "inline-block";
    }
    const prevPic4 = () => {
        var firstPic = document.getElementById("frstImg4");
        firstPic.style.display = "inline-block";
        var secondPic = document.getElementById("scndImg4");
        secondPic.style.display = "none";
    }
    

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
                <div className='Section__container'>
                    <div className='Section__layoutContainer'>
                        <div className='Section__layout'>
                            <div className="StripeSet StripeSet--BottomLeft StripeSet--layoutIntersecting" data-js-controller="StripeSet" aria-hidden="true" data-js-align="End">
                                <div className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetNone Stripe--widthNormal" aria-hidden="true" data-js-target-list="StripeSet.stripes">
                                </div>
                                <div className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetSmall Stripe--widthFull" aria-hidden="true" data-js-target-list="StripeSet.stripes">
                                </div>
                                <div className="Stripe Stripe--accentNone Stripe--variantIntersection Stripe--insetNone Stripe--widthNormal Stripe--intersectionInsetSmall Stripe--intersectionWidthFull" aria-hidden="true" data-js-target-list="StripeSet.stripes">
                                    <div className="Stripe__intersection" data-js-target="StripeSet.intersection"></div>
                                </div>
                            </div>
                            <div className="pb-[470px] RowLayout" id='idd1'>
                                <section className="Copy variant--Section">
                                    <header className="Copy__header">
                                        <h2 className="Copy__caption pt-[140px] !text-[18px] !leading-[28px] !font-medium">Built for growth</h2>
                                        <h1 className="Copy__title !text-[38px] !leading-[48px] !font-medium">Take your startup farther, faster</h1>
                                        <p className='!text-[18px] !leading-[28px] !font-light'>Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low- to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need.</p>
                                    </header>
                                </section>
                                <section className="StartupCards mt-[50px] fortwentyfive:mt-[10px]">
                                    <div className="StartupCard loweredCard" onMouseEnter={changePic} onMouseLeave={prevPic}>
                                        <img src="/lcard1.png" alt="Description of Image 1" id='frstImg' />
                                        <img src="/lcard1h.png" alt="Description of Image 2" className='hidden' id='scndImg' />
                                        <div className='pl-[35px] pb-[40px]'>
                                            <div class="icon-text-container !mb-[15px] mt-[30px]">
                                                <svg className="ProductIcon ProductIcon--Atlas ProductBadge__icon" width="20" height="20"
                                                    viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <title>Atlas</title>

                                                    <g clipPath="url(#product-icon-atlas--a)">
                                                        <path
                                                            d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42 8.65 17.31a2.64 2.64 0 0 1-1.65 3.73l-.17.04c-.12.03-.24.04-.36.05h-.18L20.5 35.99 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.52.3z"
                                                            fill="#FB0" />
                                                        <path
                                                            d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 3.65 39.33a2.64 2.64 0 0 1-2.37-3.83l8.66-17.3 8.2-16.43A2.64 2.64 0 0 1 20.52.3z"
                                                            fill="url(#product-icon-atlas--b)" />
                                                        <path
                                                            d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.34.3h.18z"
                                                            fill="url(#product-icon-atlas--c)" />
                                                    </g>
                                                    <defs>
                                                        <linearGradient id="product-icon-atlas--b" x1="16.03" y1="18.01" x2="15.94" y2="39.33"
                                                            gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#FFD748" />
                                                            <stop offset=".54" stopColor="#FFCD48" />
                                                            <stop offset="1" stopColor="#FFCB48" />
                                                        </linearGradient>
                                                        <linearGradient id="product-icon-atlas--c" x1="20.51" y1="34.72" x2="20.51" y2="15.01"
                                                            gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#FFAD00" />
                                                            <stop offset="1" stopColor="#FF7600" />
                                                        </linearGradient>
                                                        <clipPath id="product-icon-atlas--a">
                                                            <path fill="#fff" d="M0 0h40v40H0z" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="icon-text text-[12px] leading-[15px] font-normal">Atlas</span>
                                            </div>
                                            <div>
                                                <h2 className='text-left !pb-[20px] !text-[26px] !leading-[36px] !font-medium text-[#425466]'>Incorporate your company</h2>
                                                <p className='text-left !text-[18px] !leading-[28px] !font-light'>Form a legal entity, issue stock, and start accepting payments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="StartupCard md-to-mm:mt-[250px]" onMouseEnter={changePic2} onMouseLeave={prevPic2}>
                                        <img src="/lcard2.png" alt="Description of Image 2" id='frstImg2' />
                                        <img src="/lcard2h.png" alt="Description of Image 3" id='scndImg2' className='hidden' />
                                        <div className='pl-[35px] pb-[40px]'>
                                            <div className="icon-text-container !mb-[15px] mt-[30px] !max-w-[130px]">
                                                <svg className="ProductIcon ProductIcon--PaymentLinks ProductBadge__icon" width="25" height="25"
                                                    viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.5603 16.2116c-.3287-.8362.2877-1.7409 1.1862-1.7409h15.7828c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818c0-.1582-.0295-.3165-.0884-.4663l-3.6421-9.2635Z"
                                                        fill="url(#product-icon-payment-links--a)" />
                                                    <path
                                                        d="M.0896108 4.74087C-.239137 3.90471.377287 3 1.27575 3H14.6995c.0185 0 .0369.00039.0552.00117.0258-.00078.0517-.00117.0777-.00117h7.6402c1.0478 0 1.9889.6412 2.3723 1.61636l3.5076 8.92164c.1179.2998.1768.6162.1768.9327H12.7465c-.8985 0-1.5149.9047-1.1862 1.7409l3.6421 9.2635c.0589.1498.0884.3081.0884.4663H1.27575c-.898464 0-1.514886-.9047-1.1861386-1.7408L3.73167 14.9371c.11784-.2998.11784-.633 0-.9327L.0896108 4.74087Z"
                                                        fill="url(#product-icon-payment-links--b)" />
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M15.2908 25.9414c0 .1583-.0295.3165-.0884.4664l-3.6421 9.2635c-.3287.8361.2877 1.7408 1.1862 1.7408h21.1968c1.0478 0 1.9889-.6412 2.3723-1.6163l3.5076-8.9217c.2357-.5995.2357-1.2659 0-1.8654l-3.5076-8.9216c-.3834-.9752-1.3245-1.6164-2.3723-1.6164h-5.414c0 .3165-.059.633-.1768.9327l-3.5077 8.9217c-.3834.9751-1.3244 1.6163-2.3722 1.6163h-7.1818Z"
                                                        fill="#96F" />
                                                    <defs>
                                                        <linearGradient id="product-icon-payment-links--a" x1="14.0622" y1="24.6669" x2="29.3565"
                                                            y2="12.5589" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#0048E5" />
                                                            <stop offset=".63979" stopColor="#625AF5" />
                                                            <stop offset="1" stopColor="#8A62FC" />
                                                        </linearGradient>
                                                        <linearGradient id="product-icon-payment-links--b" x1="14.2646" y1="4.50656" x2="14.0622"
                                                            y2="24.6669" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#11EFE3" />
                                                            <stop offset=".33" stopColor="#15E8E2" />
                                                            <stop offset=".74" stopColor="#1FD3E0" />
                                                            <stop offset="1" stopColor="#21CFE0" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <span className="icon-text text-[12px] leading-[15px] font-normal">Payment Links</span>
                                            </div>
                                            <div>
                                                <h2 className='text-left !pb-[20px] !text-[26px] !leading-[36px] !font-medium text-[#425466]'>Validate your idea</h2>
                                                <p className='text-left !text-[18px] !leading-[28px] !font-light'>Test your product idea by launching payments <br />with little to no code.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="StartupCards">
                                    <div className="StartupCard loweredCard" onMouseEnter={changePic3} onMouseLeave={prevPic3}>
                                        <img src="/lcard3.png" alt="Description of Image 3" id='frstImg3' />
                                        <img src="/lcard3h.png" alt="Description of Image 4" id='scndImg3' className='hidden' />
                                        <div className='pl-[35px] pb-[40px]'>
                                            <div className="icon-text-container !mb-[15px] mt-[30px] !max-w-[100px]">
                                                <svg className="ProductIcon ProductBadge__icon" width="20" height="20" viewBox="0 0 40 40"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <title>Checkout</title>

                                                    <path
                                                        d="M31.54 4h-19.7c-.84 0-1.63.43-2.09 1.14a2.52 2.52 0 0 0-.18 2.39l5.1 11.46c.3.64.3 1.38 0 2.02L8 36h23.54c.97 0 1.86-.58 2.26-1.48l5.98-13.5c.3-.65.3-1.39 0-2.04L33.8 5.48A2.48 2.48 0 0 0 31.54 4z"
                                                        fill="#96F" />
                                                    <path
                                                        d="M7.23 36a2.3 2.3 0 0 1-.98-.22h.04a2.43 2.43 0 0 1-1.23-1.23L.22 23.53a2.54 2.54 0 0 1 .17-2.38A2.45 2.45 0 0 1 2.46 20h19.5c.97 0 1.84.57 2.23 1.46l4.8 10.85.68 1.53c.1.22.23.42.38.6.49.64 1.2 1.3 1.98 1.51-.11.03-.3.05-.55.05H7.22z"
                                                        fill="url(#product-icon-checkout--a)" />
                                                    <path
                                                        d="M21.97 20c.9 0 1.72.5 2.14 1.3l.08.16 4.8 10.85.68 1.53a4.43 4.43 0 0 0 2.3 2.01l.18.07c-.2.05-.4.08-.61.08H8L14.67 21c.15-.32.22-.66.22-1.01h7.08z"
                                                        fill="url(#product-icon-checkout--b)" />
                                                    <defs>
                                                        <linearGradient id="product-icon-checkout--a" x1="16.01" y1="35.59" x2="16.01" y2="21.16"
                                                            gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#21CFE0" />
                                                            <stop offset=".17" stopColor="#20D1E0" />
                                                            <stop offset=".38" stopColor="#18E2E2" />
                                                            <stop offset=".61" stopColor="#13ECE3" />
                                                            <stop offset="1" stopColor="#11EFE3" />
                                                        </linearGradient>
                                                        <linearGradient id="product-icon-checkout--b" x1="21.07" y1="43" x2="21.07" y2="14.5"
                                                            gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#0048E5" />
                                                            <stop offset="1" stopColor="#9B66FF" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <span className="icon-text text-[12px] leading-[15px] font-normal">Checkout</span>
                                            </div>
                                            <div>
                                                <h2 className='text-left !pb-[20px] !text-[26px] !leading-[36px] !font-medium text-[#425466]'>Sell to consumers</h2>
                                                <p className='text-left !text-[18px] !leading-[28px] !font-light'>Launch a B2C business with a prebuilt payment<br /> page that’s optimized for conversion.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="StartupCard md-to-mm:mt-[250px]" onMouseEnter={changePic4} onMouseLeave={prevPic4}>
                                        <img src="/lcard4.png" alt="Description of Image 4" id='frstImg4' />
                                        <img src="/lcard4h.png" alt="Description of Image 4" id='scndImg4' className='hidden' />
                                        <div className='pl-[35px] pb-[40px]'>
                                            <div className="icon-text-container !mb-[15px] mt-[30px] !max-w-[90px]">
                                                <svg className="ProductIcon ProductIcon--Invoicing ProductBadge__icon" width="20" height="20"
                                                    viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <title>Invoicing</title>

                                                    <path
                                                        d="M12.5001 1C11.1194 1 10.0001 2.11929 10.0001 3.5V36.3314C10.0001 37.4628 9.24028 38.4532 8.14746 38.7462L36.1472 31.24C37.2401 30.9472 38.0001 29.9567 38.0001 28.8252V3.5C38.0001 2.11929 36.8808 1 35.5001 1H12.5001Z"
                                                        fill="#00D924" />
                                                    <path
                                                        d="M1.25338 24.5476C0.0575759 25.238 -0.352092 26.7668 0.338338 27.9626L5.81522 37.449C6.38097 38.4289 7.53438 38.9067 8.62734 38.6138L34.7744 31.6076L24.5869 13.9626C23.8969 12.7668 22.3676 12.3571 21.1718 13.0476L1.25338 24.5476Z"
                                                        fill="url(#product-icon-invoicing--a)" />
                                                    <path
                                                        d="M8.40173 38.6633C8.4771 38.6504 8.55237 38.6339 8.62737 38.6138L34.7744 31.6076L24.5869 13.9626C23.897 12.7668 22.3677 12.3571 21.1719 13.0476L10.0002 19.4976V36.3314C10.0002 37.3728 9.35638 38.2947 8.40173 38.6633Z"
                                                        fill="url(#product-icon-invoicing--b)" />
                                                    <defs>
                                                        <linearGradient id="product-icon-invoicing--a" x1="17.3897" y1="20.25" x2="17.3893"
                                                            y2="38" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#FFD748" />
                                                            <stop offset="1" stopColor="#FFC148" />
                                                        </linearGradient>
                                                        <linearGradient id="product-icon-invoicing--b" x1="21.5889" y1="12.7122" x2="21.5881"
                                                            y2="38.6633" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#00A600" />
                                                            <stop offset="1" stopColor="#00D924" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <span className="icon-text text-[12px] leading-[15px] font-normal">Invoicing</span>
                                            </div>
                                            <div>
                                                <h2 className='text-left !pb-[20px] !text-[26px] !leading-[36px] !font-medium text-[#425466]'>Sell to businesses</h2>
                                                <p className='text-left !text-[18px] !leading-[28px] !font-light'>Launch a B2B business and collect one-time or<br/> recurring payments from customers.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Largecards
