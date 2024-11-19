import React from 'react'
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabsbutton from './Tabsbutton';
import Image from 'next/image';


function Sliderr() {
  const changeBmw = () => {
    var firstPic = document.getElementById("frstBmw");
    firstPic.style.display = "none";
    var secondPic = document.getElementById("scndBmw");
    secondPic.style.display = "inline-block";
  }
  const revertBmw = () => {
    var firstPic = document.getElementById("frstBmw");
    firstPic.style.display = "inline-block";
    var secondPic = document.getElementById("scndBmw");
    secondPic.style.display = "none";
  }

  const changeAmzn = () => {
    var firstPic = document.getElementById("frstAmzn");
    firstPic.style.display = "none";
    var secondPic = document.getElementById("scndAmzn");
    secondPic.style.display = "inline-block";
  }
  const revertAmzn = () => {
    var firstPic = document.getElementById("frstAmzn");
    firstPic.style.display = "inline-block";
    var secondPic = document.getElementById("scndAmzn");
    secondPic.style.display = "none";
  }

  const changeMaresk = () => {
    var firstPic = document.getElementById("frstMaresk");
    firstPic.style.display = "none";
    var secondPic = document.getElementById("scndMaresk");
    secondPic.style.display = "inline-block";
  }
  const revertMaresk = () => {
    var firstPic = document.getElementById("frstMaresk");
    firstPic.style.display = "inline-block";
    var secondPic = document.getElementById("scndMaresk");
    secondPic.style.display = "none";
  }

  const changeTwilio = () => {
    var firstPic = document.getElementById("frstTwilio");
    firstPic.style.display = "none";
    var secondPic = document.getElementById("scndTwilio");
    secondPic.style.display = "inline-block";
  }
  const revertTwilio = () => {
    var firstPic = document.getElementById("frstTwilio");
    firstPic.style.display = "inline-block";
    var secondPic = document.getElementById("scndTwilio");
    secondPic.style.display = "none";
  }

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div onMouseEnter={changeBmw} onMouseLeave={revertBmw} className="CustomersCaseStudyCardBackground" data-js-target-list="CustomersCaseStudyCarousel.backgrounds" id="idd11">
          <div className="CustomersCaseStudyCardBackground__imageContainer">
            {/* bmw first image */}
            <picture id='frstBmw' className="Picture CustomersCaseStudyCardBackground__picture CustomersCaseStudyCardBackground__picture--portrait">
              <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                src="./bmw1.png" width="918" height="348" alt='' />
            </picture>
            {/* Bmw Second Image */}
            <picture id='scndBmw' className="Picture CustomersCaseStudyCardBackground__picture hidden">
              <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                src="./bmw2.png" width="918" height="348" loading="lazy" alt='' />
              <Tabsbutton label="Read Story"></Tabsbutton>
            </picture>
          </div>
        </div>
        {/* Amazon */}
        <div onMouseEnter={changeAmzn} onMouseLeave={revertAmzn} className="CustomersCaseStudyCardBackground" data-js-target-list="CustomersCaseStudyCarousel.backgrounds" id="idd11">
          <div className="CustomersCaseStudyCardBackground__imageContainer">
            <picture id='frstAmzn' className="Picture CustomersCaseStudyCardBackground__picture CustomersCaseStudyCardBackground__picture--portrait">
              <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                src="./amazon1.png" width="918" height="348" alt='' />
            </picture>

            <picture id='scndAmzn' className="Picture CustomersCaseStudyCardBackground__picture hidden">
              <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                src="./amazon2.png" width="918" height="348" loading="lazy" alt='' />
              <Tabsbutton label="Read Story"></Tabsbutton>
            </picture>
          </div>
        </div>
        {/* Maresk */}
        <div onMouseEnter={changeMaresk} onMouseLeave={revertMaresk} className="CustomersCaseStudyCardBackground" data-js-target-list="CustomersCaseStudyCarousel.backgrounds" id="idd11">
          <div className="CustomersCaseStudyCardBackground__imageContainer">
            <picture id='frstMaresk' className="Picture CustomersCaseStudyCardBackground__picture CustomersCaseStudyCardBackground__picture--portrait">
              <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                src="./maersk1.png" width="918" height="348" alt=''/>
            </picture>

            <picture id='scndMaresk' className="Picture CustomersCaseStudyCardBackground__picture hidden">
              <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                src="./maersk2.png" width="918" height="348" loading="lazy" alt=''/>
              <Tabsbutton label="Read Story"></Tabsbutton>
            </picture>
          </div>
        </div>
        {/* Twilio */}
        <div onMouseEnter={changeTwilio} onMouseLeave={revertTwilio} className="CustomersCaseStudyCardBackground" data-js-target-list="CustomersCaseStudyCarousel.backgrounds" id="idd11">
          <div className="CustomersCaseStudyCardBackground__imageContainer">
            <picture id='frstTwilio' className="Picture CustomersCaseStudyCardBackground__picture CustomersCaseStudyCardBackground__picture--portrait">
              <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                src="./twilio1.png" width="918" height="348" alt='' />
            </picture>

            <picture id='scndTwilio' className="Picture CustomersCaseStudyCardBackground__picture hidden">
              <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                src="./twilio2.png" width="918" height="348" loading="lazy" alt='' />
              <Tabsbutton label="Read Story"></Tabsbutton>
            </picture>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Sliderr
