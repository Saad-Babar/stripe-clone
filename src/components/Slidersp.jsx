import React, { Component } from "react";
import Slider from "react-slick";
import Tabsbutton from "./Tabsbutton";
import Image from "next/image";

export default class PreviousNextMethods extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

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
          

        return (
            <div>
                <h2>Previous and Next methods</h2>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} onMouseEnter={changeBmw} onMouseLeave={revertBmw} className="CustomersCaseStudyCardBackground" data-js-target-list="CustomersCaseStudyCarousel.backgrounds" id="idd11">
                        <div className="CustomersCaseStudyCardBackground__imageContainer">
                            {/* bmw first image */}
                            <picture id='frstBmw' className="Picture CustomersCaseStudyCardBackground__picture CustomersCaseStudyCardBackground__picture--portrait">
                                <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                                    src="./bmw1.png" width="918" height="348" alt=""/>
                            </picture>
                            {/* Bmw Second Image */}
                            <picture id='scndBmw' className="Picture CustomersCaseStudyCardBackground__picture hidden">
                                <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                                    src="./bmw2.png" width="918" height="348" loading="lazy" alt=""/>
                                <Tabsbutton label="Read Story"></Tabsbutton>
                            </picture>
                        </div>
                    </div>
                    {/* Amazon */}
                    <div key={2} onMouseEnter={changeAmzn} onMouseLeave={revertAmzn} className="CustomersCaseStudyCardBackground" data-js-target-list="CustomersCaseStudyCarousel.backgrounds" id="idd11">
                        <div className="CustomersCaseStudyCardBackground__imageContainer">
                            <picture id='frstAmzn' className="Picture CustomersCaseStudyCardBackground__picture CustomersCaseStudyCardBackground__picture--portrait">
                                <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                                    src="./amazon1.png" width="918" height="348" alt=""/>
                            </picture>

                            <picture id='scndAmzn' className="Picture CustomersCaseStudyCardBackground__picture hidden">
                                <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                                    src="./amazon2.png" width="918" height="348" loading="lazy" alt=""/>
                                <Tabsbutton label="Read Story"></Tabsbutton>
                            </picture>
                        </div>
                    </div>
                    {/* Maresk */}
                    <div key={3} onMouseEnter={changeMaresk} onMouseLeave={revertMaresk} className="CustomersCaseStudyCardBackground" data-js-target-list="CustomersCaseStudyCarousel.backgrounds" id="idd11">
                        <div className="CustomersCaseStudyCardBackground__imageContainer">
                            <picture id='frstMaresk' className="Picture CustomersCaseStudyCardBackground__picture CustomersCaseStudyCardBackground__picture--portrait">
                                <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                                    src="./maersk1.png" width="918" height="348" alt=""/>
                            </picture>

                            <picture id='scndMaresk' className="Picture CustomersCaseStudyCardBackground__picture hidden">
                                <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                                    src="./maersk2.png" width="918" height="348" loading="lazy" alt=""/>
                                <Tabsbutton label="Read Story"></Tabsbutton>
                            </picture>
                        </div>
                    </div>
                    {/* Twilio */}
                    <div key={4} onMouseEnter={changeTwilio} onMouseLeave={revertTwilio} className="CustomersCaseStudyCardBackground" data-js-target-list="CustomersCaseStudyCarousel.backgrounds" id="idd11">
                        <div className="CustomersCaseStudyCardBackground__imageContainer">
                            <picture id='frstTwilio' className="Picture CustomersCaseStudyCardBackground__picture CustomersCaseStudyCardBackground__picture--portrait">
                                <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                                    src="./twilio1.png" width="918" height="348" alt=""/>
                            </picture>

                            <picture id='scndTwilio' className="Picture CustomersCaseStudyCardBackground__picture hidden">
                                <Image className="!rounded-lg Picture__image CustomersCaseStudyCardBackground__image"
                                    src="./twilio2.png" width="918" height="348" loading="lazy" alt=""/>
                                <Tabsbutton label="Read Story"></Tabsbutton>
                            </picture>
                        </div>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                    <button className="button" onClick={this.previous}>
                        Previous
                    </button>
                    <button className="button" onClick={this.next}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}
