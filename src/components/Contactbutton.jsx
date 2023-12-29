"use client"
import React from 'react'

function Contactbutton({label}) {
    const changeSVG = () => {
        var originalSvg = document.getElementById("originalSvg");
        var hoverSvg = document.getElementById("hoverSvg");

        originalSvg.style.display = "none";
        hoverSvg.style.display = "inline-block";
    }
    return (
        <div id='contBtn'>
            <button type="button" className="leading-[24px] text-[15px] relative p-1 text-primay hover:text-primay/70 font-medium flex item-center mt-[4px]" onMouseOver={changeSVG}>
                {label}
                <svg id="originalSvg" className='rotate-[90deg] ml-[5px] mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 448 512">
                    <path fill="#111439" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                </svg>
                <svg id="hoverSvg" className='ml-[5px] mt-[6px] hidden' xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 448 512">
                    <path fill="#6A5D76" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
            </button>
        </div>
    )
}

export default Contactbutton
