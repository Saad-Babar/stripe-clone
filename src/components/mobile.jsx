import React from 'react'

function Mobile() {
    return (
        <main>
            <div className='overflow-x-hidden pb-[140px] HomepageHeroGraphic  HomepageHero__graphic pt-[5px] fortwentyfive:hidden sevensixeight:ml-[375px] tentofor:ml-[504px] forteenfoty:ml-[713px] forteenfoty:mt-[-364px] mynew:ml-[768px] twentyfivesixty:ml-[1271px] twentyfivesixty:mt-[-364px] myscreen:mt-[-365px] myscreen:ml-[675px]'>
                <div className="DashboardGraphic HomepageHeroGraphic__dashboard" aria-hidden="true">
                    <div className="DashboardGraphic__sidebar">
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#FFF"
                                d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.3 6.11H4.34a.41.41 0 0 0 0 .83h8.94a2.89 2.89 0 0 1 0 5.77H7.65a.41.41 0 0 0 0 .83h5.64a3.71 3.71 0 0 0 0-7.43zm0 1.65a2.06 2.06 0 1 0 2.05 2.06c0-1.13-.92-2.06-2.06-2.06zm-2.83 3.3h-4.7a.41.41 0 0 0 0 .83h4.7a.41.41 0 0 0 0-.83zM13.3 8.6a1.24 1.24 0 1 1 0 2.47 1.24 1.24 0 0 1 0-2.47zm-3.3.8H3.41a.41.41 0 1 0 0 .83h6.6c.22 0 .4-.19.4-.42a.41.41 0 0 0-.41-.4zm.47-1.65H6.24a.41.41 0 1 0 0 .83h4.23a.41.41 0 1 0 0-.83z" />
                        </svg>
                        Rocket Rides
                        <svg width="10" height="4" viewBox="0 0 10 4">
                            <polyline fill="none" stroke="#FFF" points="1 0 5 4 9 0" />
                        </svg>
                    </div>
                    <div>
                        <div className="DashboardGraphic__toolbar">
                            <div className="DashboardGraphic__box DashboardGraphic__box--search">
                                <svg className="DashboardGraphic__searchIcon" viewBox="0 0 10 10">
                                    <circle cx="4" cy="4" r="3.5" fill="none" stroke="#62788D" />
                                    <path fill="#62788D" d="M6.15 6.15c.2-.2.5-.2.7 0l2.12 2.12a.5.5 0 1 1-.7.7L6.15 6.85a.5.5 0 0 1 0-.7z" />
                                </svg>
                                Search
                            </div>

                            <svg width="70" height="12" viewBox="0 0 70 12">
                                <path fill="#515de1"
                                    d="M3.12 10.5h3.76C6.7 11.37 5.91 12 5 12c-.91 0-1.7-.63-1.88-1.5zm5.72-3.7l.94.92c.22.22.28.54.16.82a.77.77 0 0 1-.7.46H.76a.77.77 0 0 1-.71-.46.74.74 0 0 1 .16-.82l.94-.92V3.75A3.8 3.8 0 0 1 5 0a3.8 3.8 0 0 1 3.84 3.75V6.8z" />
                                <path fill="#525F7F"
                                    d="M34 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-.75-5.93v.3a.75.75 0 0 0 1.44.29 2.63 2.63 0 1 0-3.32-2.53.75.75 0 0 0 1.51-.01A1.13 1.13 0 0 1 34 3a1.12 1.12 0 0 1 0 2.23.75.75 0 0 0-.75.83zM34 10.5a1.13 1.13 0 1 0 0-2.25 1.13 1.13 0 0 0 0 2.25zm30-2.25c1.09 0 2.13-.41 2.92-1.15l1.33.5A2.7 2.7 0 0 1 70 10.12v1.12c0 .41-.34.75-.75.75h-10.5a.75.75 0 0 1-.75-.75v-1.13C58 9 58.7 8 59.76 7.6l1.32-.5A4.23 4.23 0 0 0 64 8.26zM63.85 0h.3a2.63 2.63 0 0 1 2.61 2.84l-.12 1.48a2.65 2.65 0 0 1-5.28 0l-.12-1.48A2.63 2.63 0 0 1 63.85 0z" />
                            </svg>
                        </div>

                        <div className="DashboardGraphic__box">
                            <div className="DashboardGraphic__toolbar">
                                <div className="DashboardGraphic__toolbarHeading">
                                    <div className="DashboardGraphic__toolbarTitle">Today</div>
                                </div>
                            </div>

                            <div className="DashboardGraphic__charts">
                                <div className="DashboardGraphic__column DashboardGraphic__column--large">
                                    <svg className="DashboardGraphic__chartToday" viewBox="0 0 438 73">
                                        <g fill="none">
                                            <polyline stroke="#C5CFD9" strokeWidth="1.2"
                                                points="1 71.5 24.333 68.5 48.667 66.5 73 65.5 97.333 61.5 121.667 60.5 146 56.5 170.333 53.5 194.667 48.5 219 43.5 243.333 37.5 267.667 32.5 292 25.5 316.333 20 340.667 16 365 11 389.333 8 413.667 4 437 1" />
                                            <circle cx="292" cy="18.5" r="3" fill="#515de1" />
                                            <polyline stroke="#515de1" strokeWidth="1.2"
                                                points="1 71.5 24.333 67.5 48.667 66.5 73 64.5 97.333 61.5 121.667 60.5 146 55.5 170.333 52.5 194.667 44.5 219 36.5 243.333 29.5 267.667 23.5 292 18.5" />
                                        </g>
                                    </svg>

                                    <div className="DashboardGraphic__dataToday">
                                        <div className="DashboardGraphic__chartHeading">
                                            <div className="DashboardGraphic__chartDropdown">
                                                Gross volume
                                                <svg width="8" height="5" viewBox="0 0 8 5">
                                                    <polyline fill="none" stroke="#425466" points="1 1 4 4 7 1" />
                                                </svg>
                                            </div>
                                            <div className="DashboardGraphic__primaryData DashboardGraphic__primaryData--accent">
                                                $3,528,198.72
                                            </div>
                                            <div className="DashboardGraphic__mutedData">
                                                1:00 PM
                                            </div>
                                        </div>

                                        <div className="DashboardGraphic__chartHeading">
                                            <div className="DashboardGraphic__chartDropdown">
                                                August 18
                                                <svg width="8" height="5" viewBox="0 0 8 5">
                                                    <polyline fill="none" stroke="#425466" points="1 1 4 4 7 1" />
                                                </svg>
                                            </div>
                                            <div className="DashboardGraphic__primaryData">
                                                $2,931,556.34
                                            </div>
                                            <div className="DashboardGraphic__mutedData">
                                                1:00 PM
                                            </div>
                                        </div>
                                    </div>

                                    <div className="DashboardGraphic__chartAxis">
                                        <span className="DashboardGraphic__mutedData">12:00 AM</span>
                                        <span className="DashboardGraphic__mutedData DashboardGraphic__mutedData--accent
                        DashboardGraphic__axisNow">Now</span>
                                        <span className="DashboardGraphic__mutedData">11:59 PM</span>
                                    </div>
                                </div>

                                <div className="DashboardGraphic__column DashboardGraphic__column--split">
                                    <div className="DashboardGraphic__row">
                                        <div>
                                            <div className="DashboardGraphic__chartDropdown">
                                                Balance
                                                <svg width="8" height="5" viewBox="0 0 8 5">
                                                    <polyline fill="none" stroke="#425466" points="1 1 4 4 7 1" />
                                                </svg>
                                            </div>
                                            <div className="DashboardGraphic__primaryData DashboardGraphic__primaryData--accent">
                                                $553,257.51
                                            </div>
                                            <div className="DashboardGraphic__mutedData">
                                                Available to pay out
                                            </div>
                                        </div>

                                        <div className="DashboardGraphic__mutedData DashboardGraphic__mutedData--accent">
                                            View detail
                                        </div>
                                    </div>

                                    <div className="DashboardGraphic__row">
                                        <div>
                                            Payouts
                                            <div className="DashboardGraphic__primaryData DashboardGraphic__primaryData--accent">
                                                $102,633.07
                                            </div>
                                            <div className="DashboardGraphic__mutedData">
                                                Expected today
                                            </div>
                                        </div>

                                        <div className="DashboardGraphic__mutedData DashboardGraphic__mutedData--accent">
                                            View detail
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="DashboardGraphic__box">
                            <div className="DashboardGraphic__toolbar">
                                <div className="DashboardGraphic__toolbarHeading">
                                    <div className="DashboardGraphic__toolbarTitle">Reports summary</div>
                                    <div className="DashboardGraphic__toolbarFilters">
                                        <div className="DashboardGraphic__chartDropdown">
                                            Last 4 weeks
                                            <svg width="8" height="5" viewBox="0 0 8 5">
                                                <polyline fill="none" stroke="#425466" points="1 1 4 4 7 1" />
                                            </svg>
                                        </div>

                                        <div className="DashboardGraphic__chartDropdown">
                                            <svg width="9" height="9" viewBox="0 0 9 9">
                                                <rect width="9" height="8" y="1" fill="#525F7F" rx="1.5" />
                                                <rect width="1" height="2" x="2" fill="#A7B0BB" />
                                                <rect width="1" height="2" x="6" fill="#A7B0BB" />
                                                <rect width="7" height="1" x="1" y="3" fill="#FFF" />
                                            </svg>
                                            July 18 - August 18
                                            <svg width="8" height="5" viewBox="0 0 8 5">
                                                <polyline fill="none" stroke="#425466" points="1 1 4 4 7 1" />
                                            </svg>
                                        </div>

                                        <div className="DashboardGraphic__chartDropdown">
                                            Compared to previous period
                                            <svg width="8" height="5" viewBox="0 0 8 5">
                                                <polyline fill="none" stroke="#425466" points="1 1 4 4 7 1" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="DashboardGraphic__toolbarButton">
                                    <svg width="11" height="11" viewBox="0 0 11 11">
                                        <path fill="#425466"
                                            d="M10.15 4.76c-.17 0-1.2 0-1.64-.52 0-.08-.08-.08-.08-.17-.09-.6.69-1.39.77-1.48.17-.17.17-.43.09-.52a3.75 3.75 0 0 1-.52-.6c-.09-.18-.34-.1-.52.08-.17.17-.86.87-1.46.78-.08 0-.08-.08-.17-.08C6.1 1.9 6.1.85 6.1.68c0-.26-.08-.43-.26-.43h-.86c-.17 0-.25.17-.25.43 0 .18 0 1.22-.52 1.65-.09 0-.09.09-.17.09-.6 0-1.3-.7-1.47-.87-.17-.17-.43-.17-.51-.08-.09.17-.43.52-.6.6-.1.09-.1.35.08.52.17.18.86.87.78 1.48 0 .09-.1.09-.1.17-.34.52-1.37.52-1.54.52-.26 0-.43.09-.43.26v.78c0 .18.17.35.43.35.17 0 1.2 0 1.64.52 0 .09.08.09.08.17.09.61-.69 1.4-.77 1.48-.18.17-.18.43-.09.52a4 4 0 0 1 .52.6c.08.1.34.1.51-.08.18-.17.86-.87 1.47-.78.08 0 .08.09.17.09.52.43.52 1.39.52 1.65 0 .17.17.43.34.43h.77c.18 0 .35-.17.35-.43 0-.18 0-1.22.52-1.65.08 0 .08-.09.17-.09.6-.09 1.37.7 1.46.78.17.18.43.18.52.09l.6-.6c.08-.1.08-.36-.09-.53-.17-.17-.86-.87-.77-1.48 0-.08.08-.08.08-.17.44-.52 1.38-.52 1.64-.52.17 0 .43-.17.43-.35v-.78a.78.78 0 0 0-.6-.26zM5.4 7.36c-1.03 0-1.89-.86-1.89-1.9s.86-1.91 1.9-1.91c1.03 0 1.89.87 1.89 1.9 0 1.05-.86 1.92-1.9 1.92z" />
                                    </svg>
                                    Customize
                                </div>
                            </div>

                            <div className="DashboardGraphic__charts">
                                <div className="DashboardGraphic__column">
                                    <div className="DashboardGraphic__growth">
                                        Gross volume
                                        <div className="DashboardGraphic__badge">
                                            +4.6%
                                        </div>
                                    </div>
                                    <div className="DashboardGraphic__toolbar">
                                        <div className="DashboardGraphic__primaryData DashboardGraphic__primaryData--accent">
                                            $4,542,345.45
                                        </div>
                                        <div className="DashboardGraphic__mutedData">
                                            $4,062,124.33
                                        </div>
                                    </div>
                                    <svg className="DashboardGraphic__chartSummary" viewBox="0 0 202 44">
                                        <g fill="none">
                                            <path stroke="#C5CFD9" strokeWidth="1.2"
                                                d="M1 8.08L8 11l12 6 11 1 12 1 13 7 12-5 12 2 11-9 12 17h12l12 2 13 1 11 3 11.5-10 12.5 1 12-7 11-9" />
                                            <path stroke="#515de1" strokeWidth="1.2"
                                                d="M1 14h7l12 7 11 4 12 2 13 2h12l12 5 11.5-6 11.5 7 12-5 12-2 13-2 11 5 11.5 4H175l12-1 11-16" />
                                        </g>
                                        <circle cx="198" cy="18" r="3" fill="#515de1" />
                                    </svg>
                                    <div className="DashboardGraphic__chartAxis DashboardGraphic__toolbar DashboardGraphic__mutedData">
                                        <span>Jul 18</span>
                                        <span>Aug 18</span>
                                    </div>
                                </div>

                                <div className="DashboardGraphic__column">
                                    <div className="DashboardGraphic__growth">
                                        Net volume from sales
                                        <div className="DashboardGraphic__badge">
                                            +4.2%
                                        </div>
                                    </div>
                                    <div className="DashboardGraphic__toolbar">
                                        <div className="DashboardGraphic__primaryData DashboardGraphic__primaryData--accent">
                                            $4,180,332.54
                                        </div>
                                        <div className="DashboardGraphic__mutedData">
                                            $3,732,991.10
                                        </div>
                                    </div>
                                    <svg className="DashboardGraphic__chartSummary" viewBox="0 0 202 44">
                                        <g fill="none">
                                            <path stroke="#C5CFD9" strokeWidth="1.2"
                                                d="M1 14.1L8 17l12 6h11l12 4 13 2 12-2 12 3 11-9 12 16h12l12 4 13 1 11-1 11.5-7 12.5 2 12-9 11-7" />
                                            <path stroke="#515de1" strokeWidth="1.2"
                                                d="M1 20h7l12 7 11 1 12 3 13 3 12 1 12 6 11-4 12 4 12-2 12-4 13-2 11 4 11.5 5L175 31l12-11 11-9" />
                                        </g>
                                        <circle cx="198" cy="11" r="3" fill="#515de1" />
                                    </svg>
                                    <div className="DashboardGraphic__chartAxis DashboardGraphic__toolbar DashboardGraphic__mutedData">
                                        <span>Jul 18</span>
                                        <span>Aug 18</span>
                                    </div>
                                </div>

                                <div className="DashboardGraphic__column">
                                    <div className="DashboardGraphic__growth">
                                        Dispute activity
                                        <div className="DashboardGraphic__badge DashboardGraphic__badge--down">
                                            -1.9%
                                        </div>
                                    </div>
                                    <div className="DashboardGraphic__toolbar">
                                        <div className="DashboardGraphic__primaryData DashboardGraphic__primaryData--accent">
                                            0.36%
                                        </div>
                                        <div className="DashboardGraphic__mutedData">
                                            0.37%
                                        </div>
                                    </div>
                                    <svg className="DashboardGraphic__chartSummary" viewBox="0 0 202 44">
                                        <g fill="none">
                                            <path stroke="#C5CFD9" strokeWidth="1.2"
                                                d="M1 42h12L25 9l11-7 12 33 13 7h12l12-9 11-3h12l12 11 12-12 13-21" />
                                            <path stroke="#515de1" strokeWidth="1.2" d="M1 42h60l12-7 12-5 11.5 11H108l12-11h12l13-23" />
                                        </g>
                                        <circle cx="145" cy="7" r="3" fill="#515de1" />
                                    </svg>
                                    <div className="DashboardGraphic__chartAxis DashboardGraphic__toolbar DashboardGraphic__mutedData">
                                        <span>Jul 18</span>
                                        <span>Aug 18</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="HomepageHeroGraphic__phone  PhoneGraphic" aria-hidden="true">
                    <div className="PhoneGraphic__screen">
                        <div className="CheckoutPhoneGraphic">





                            <div className="CheckoutPhoneGraphic__image">
                                <div className="HomepageIncrementPhone__imageContainer">
                                    <svg className="HomepageIncrementPhone__image" viewBox="0 0 460 700">
                                        <rect width="460" height="700" fill="#44B7BC" rx="40" />
                                        <g transform="translate(0 48)">
                                            <polygon fill="#000" points="0 43.138 203 0 203 54.028 0 97.271" />
                                            <path fill="#fff"
                                                d="M21.57 54.77l-9.2 2v3.07l5.82-1.27v19.67l9.2-2v-3.08l-5.82 1.27V54.77zm38.7-5.5c2.85-.63 3.9.85 4.01 3.7l3.39-.74c-.32-4.97-2.44-7.19-7.3-6.13-4.54.95-7.61 4.12-7.61 9.62v7.72c0 4.97 2.43 7.3 7.61 6.13 4.86-1.06 7.09-3.7 7.3-8.46l-3.28.74c-.1 2.64-1.48 4.12-4.02 4.65-3.17.64-4.33-.63-4.23-3.7v-7.72c-.1-3.59 1.27-5.18 4.13-5.81zM46.42 69.15V56.04c0-3.92-1.7-6.45-5.5-5.71-2.43.53-5.08 2.53-5.71 4.86v-3.28L28 53.4v3.07l3.81-.85v19.56l3.39-.74v-16.5c1.58-3.07 3.28-4.02 4.86-4.34 1.8-.42 3.07.43 3.07 2.97v16.28l7.19-1.48V68.3l-3.91.85zM189.47 22.2v-3.17l-11.95 2.54v3.17l3.38-.74v19.56l8.57-1.8V38.7l-5.18 1.05V23.26l5.18-1.06zM92.09 59.84c-3.07.64-4.23-.74-4.23-3.8v-3.18l11.63-2.43V46.2c0-4.86-2.64-7.71-7.5-6.66-4.76 1.06-7.51 4.76-7.51 9.52v7.72c0 4.86 2.85 7.19 7.61 6.23 5.92-1.26 7.61-5.6 7.61-8.56l-3.17.53c-.21 3.07-2 4.33-4.44 4.86zm-4.23-11.63c0-2.96 1.16-5.18 4.12-5.81 3.07-.64 4.13 1.27 4.13 4.44V48l-8.25 1.8v-1.6zm56.88.43c-3.06.63-4.23-.74-4.23-3.81v-3.17l11.63-2.43V35c0-4.87-2.64-7.72-7.5-6.66-4.76 1.05-7.5 4.75-7.5 9.51v7.72c0 4.86 2.85 7.19 7.6 6.24 5.92-1.27 7.62-5.6 7.62-8.57l-3.07.64c-.42 2.96-2.22 4.23-4.55 4.76zm-4.23-11.53c0-2.96 1.17-5.18 4.13-5.81 3.06-.64 4.12 1.26 4.12 4.44v1.16l-8.25 1.8v-1.6zm32.78 4.97V28.97c0-3.7-2.11-6.45-5.7-5.6-2.44.52-4.87 2.53-5.61 4.86v-3.28l-7.2 1.48v3.07l3.81-.85v19.56l3.39-.74v-16.5c1.58-3.06 3.27-4 4.86-4.33 1.8-.42 3.07.43 3.07 2.96v16.3l7.19-1.48v-3.07l-3.81.74zm-42.71 9.1V37.52c0-3.49-2.33-5.81-5.71-5.18-2.12.43-4.87 2.86-5.29 4.97-.42-1.69-2.75-3.17-5.18-2.64-2.12.42-4.44 2.54-4.86 4.65v-3.28l-7.2 1.48v3.07l3.81-.85V59.3l3.39-.74V42.2c.95-2.01 2.43-3.92 4.44-4.34 1.26-.21 2.74.21 2.74 3.17V57.2l3.39-.74V40.07c.95-2 2.43-3.91 4.44-4.33 1.27-.22 2.75.2 2.75 3.17v16.17l7.19-1.48v-3.06l-3.91.63zm-58.37-7.2v22.74l3.39-.75V46.42l5.81-1.27v-3.07l-9.2 1.9z" />
                                        </g>
                                        <polygon fill="#000" points=".001 396.001 108.001 304.001 108.001 432.001 .001 432.001" />
                                        <path fill="#000"
                                            d="M62.93 647.13c11.7 0 19.72-5.63 19.72-15 0-8.4-4.5-12.75-13.2-15l-8.7-2.25c-4.87-1.28-7.27-3.08-7.27-6.98 0-3.67 3.3-6 8.7-6 4.65 0 8.85 1.65 9.45 7.35h9.75c-1.05-10.65-8.55-15.37-19.05-15.37-11.4 0-18.6 5.85-18.6 14.1 0 7.5 4.05 12.6 12.37 14.77l9.98 2.63c4.57 1.2 6.82 3.22 6.82 6.82 0 4.43-4.42 6.9-10.12 6.9-6 0-9.98-2.32-10.8-8.32h-9.75c.9 11.85 9.37 16.35 20.7 16.35zm38.65-.23c9.22 0 15.6-4.95 16.8-13.42H109c-.45 3.9-3.3 6.15-7.35 6.15s-7.57-2.63-7.57-7.2v-2.55h24.6v-4.73c0-10.5-6.75-18.3-17.1-18.3-10.35 0-17.25 7.95-17.25 19.95s6.37 20.1 17.25 20.1zm7.5-24.3h-15v-1.35c0-4.12 3.22-7.12 7.5-7.12 4.27 0 7.5 3 7.5 7.12v1.35zM9 458c58.96 0 107 22.88 107 52S67.96 562 9 562c-3.03 0-6.03-.06-9-.18v-4c2.97.12 5.97.18 9 .18 57.02 0 103-21.9 103-48S66.02 462 9 462c-3.03 0-6.03.06-9 .18v-4c2.97-.12 5.97-.18 9-.18zM376.96 0c-.63 3.9-.96 7.91-.96 12 0 40.33 31.8 73 71 73 4.44 0 8.79-.42 13-1.22v4.07A73.58 73.58 0 0 1 447 89c-41.43 0-75-34.48-75-77 0-4.08.31-8.09.9-12h4.06z" />
                                    </svg>

                                    <svg className="HomepageIncrementPhone__image HomepageIncrementPhone__image--front" viewBox="0 0 460 700">
                                        <defs>
                                            <linearGradient id="HomepageIncrementPhone__imageGradientA" x1="50%" x2="50%" y1="0%" y2="88.24%">
                                                <stop offset="0%" stopColor="#AC9CC0" />
                                                <stop offset="100%" stopColor="#F2D6DF" />
                                            </linearGradient>
                                            <linearGradient id="HomepageIncrementPhone__imageGradientB" x1="50%" x2="50%" y1="0%" y2="100%">
                                                <stop offset="0%" stopColor="#6F74A9" />
                                                <stop offset="80%" stopColor="#515997" />
                                                <stop offset="100%" stopColor="#323C83" />
                                            </linearGradient>
                                            <linearGradient id="HomepageIncrementPhone__imageGradientC" x1="0%" x2="100%" y1="50%" y2="50%">
                                                <stop offset="0%" stopColor="#B1AFCC" />
                                                <stop offset="100%" stopColor="#7B80B1" />
                                            </linearGradient>
                                            <linearGradient id="HomepageIncrementPhone__imageGradientD" x1="0%" x2="100%" y1="0%" y2="0%">
                                                <stop offset="0%" stopColor="#EB938A" />
                                                <stop offset="90%" stopColor="#E6887F" />
                                                <stop offset="100%" stopColor="#B74840" />
                                            </linearGradient>
                                            <linearGradient id="HomepageIncrementPhone__imageGradientE" x1="0%" x2="100%" y1="50%" y2="50%">
                                                <stop offset="0%" stopColor="#FFF" stopOpacity="0" />
                                                <stop offset="100%" stopColor="#FFF" stopOpacity=".5" />
                                            </linearGradient>
                                            <linearGradient id="HomepageIncrementPhone__imageGradientF" x1="50%" x2="50%" y1="60%" y2="100%">
                                                <stop offset="0%" stopColor="#4FBED4" />
                                                <stop offset="100%" stopColor="#439CCA" />
                                            </linearGradient>
                                            <linearGradient id="HomepageIncrementPhone__imageGradientG" x1="50%" x2="50%" y1="0%" y2="100%">
                                                <stop offset="0%" stopColor="#52468C" stopOpacity=".8" />
                                                <stop offset="100%" stopColor="#52468C" stopOpacity=".2" />
                                            </linearGradient>
                                            <linearGradient id="HomepageIncrementPhone__imageGradientH" x1="50%" x2="50%" y1="0%" y2="100%">
                                                <stop offset="0%" stopColor="#F2B532" />
                                                <stop offset="100%" stopColor="#EB9234" />
                                            </linearGradient>
                                        </defs>
                                        <path fill="url(#HomepageIncrementPhone__imageGradientA)"
                                            d="M0 239h460v421a40 40 0 0 1-40 40H40a40 40 0 0 1-40-40V239z" />
                                        <rect width="460" height="28" x=".01" y="211" fill="url(#HomepageIncrementPhone__imageGradientB)" />
                                        <path fill="#52468C" d="M40 0h380a40 40 0 0 1 40 40v171H0V40A40 40 0 0 1 40 0z" />
                                        <path fill="url(#HomepageIncrementPhone__imageGradientC)"
                                            d="M459 155.88l1 .88V211H0V40a39.86 39.86 0 0 1 10.46-26.96C134.2 29 289.04 127.07 459 155.88z" />
                                        <path fill="#8888B5" d="M460 60H231.5c36.15 0 151.64-18.83 214.75-50.2A39.9 39.9 0 0 1 460 40v20z" />
                                        <rect width="75" height="461" x="128" y="239" fill="url(#HomepageIncrementPhone__imageGradientD)" />
                                        <path fill="url(#HomepageIncrementPhone__imageGradientE)"
                                            d="M319 79c72.35 0 131 58.65 131 131v1H188.01v-1c0-71.63 57.48-129.83 128.83-130.98L319 79z" />
                                        <path fill="url(#HomepageIncrementPhone__imageGradientF)"
                                            d="M452.5 239c0 36.46-16.76 79.52-44.74 113-32.25 38.58-76.16 61.5-126.26 61.5-86.47 0-151.19 66.96-152.48 153.38L129.01 700H99V569.5c0-103.94 78.25-186 182.5-186 40.68 0 76.4-18.65 103.24-50.75 23.37-27.96 37.47-63.86 37.75-92.87V239h30z" />
                                        <path fill="#000"
                                            d="M263.5 547.13c10.65 0 18.6-5.02 20.18-16.73h-9.75c-.98 6-4.2 8.48-10.28 8.48-6.15 0-11.02-4.5-11.02-10.65v-15.6c0-6.38 4.5-10.5 10.72-10.5 5.78 0 9.23 2.7 9.75 8.1h9.75c-.67-10.05-8.32-16.35-18.82-16.35-14.78 0-21.9 10.57-21.9 26.77 0 15.38 6.67 26.48 21.37 26.48zm32.95-1.13v-51h-9.37v51h9.37zm21.93.9c11.47 0 17.92-8.02 17.92-20.02s-6.45-20.02-17.92-20.02c-11.48 0-17.93 8.02-17.93 20.02s6.45 20.02 17.93 20.02zm0-7.27c-4.65 0-8.18-2.63-8.18-7.2v-11.1c0-4.58 3.53-7.2 8.18-7.2s8.17 2.55 8.17 7.2v11.1c0 4.65-3.52 7.2-8.17 7.2zm33.85 7.27c5.4 0 8.92-2.32 11.25-6.44V546h9.37v-38.25h-9.37v22.13c0 5.55-3.15 9.38-8.18 9.38-4.42 0-6-2.7-6-7.13v-24.38h-9.37v25.05c0 8.86 4.12 14.1 12.3 14.1zm39.92 0a12.3 12.3 0 0 0 11.03-6.07V546h9.37v-51h-9.37v17.93c-2.4-3.82-6.15-6.07-11.18-6.07-10.27 0-15.07 8.92-15.07 20.02s5.02 20.02 15.22 20.02zm2.4-7.27c-4.8 0-7.87-3.08-7.87-7.35v-10.8c0-4.27 3-7.35 7.87-7.35 6 0 8.63 3.9 8.63 9.9v5.7c0 6-2.63 9.9-8.63 9.9z" />
                                        <path fill="#fff" d="M383.32 211H0V90.88c104.75 9.6 237.36 95.4 383.32 120.12z" />
                                        <polygon fill="#000" points=".005 91.138 203.005 48 203.005 102.028 .005 145.271" />
                                        <path fill="#fff"
                                            d="M21.57 102.77l-9.2 2v3.07l5.82-1.27v19.67l9.2-2v-3.08l-5.82 1.27v-19.66zm38.7-5.5c2.85-.63 3.91.85 4.02 3.7l3.38-.74c-.32-4.97-2.43-7.19-7.3-6.13-4.54.95-7.6 4.12-7.6 9.62v7.72c0 4.97 2.43 7.3 7.6 6.13 4.87-1.06 7.09-3.7 7.3-8.46l-3.28.74c-.1 2.64-1.48 4.13-4.01 4.65-3.18.64-4.34-.63-4.23-3.7v-7.72c-.1-3.59 1.27-5.18 4.12-5.81zm-13.85 19.88v-13.11c0-3.92-1.7-6.45-5.5-5.71-2.43.53-5.07 2.53-5.7 4.86v-3.28l-7.2 1.48v3.07l3.8-.85v19.56l3.4-.74v-16.49c1.58-3.07 3.27-4.02 4.86-4.34 1.8-.42 3.06.43 3.06 2.97v16.28l7.2-1.48v-3.07l-3.92.85zM189.47 70.2v-3.17l-11.95 2.54v3.17l3.39-.74v19.56l8.56-1.8V86.7l-5.18 1.05V71.26l5.18-1.06zM92.1 107.84c-3.06.64-4.22-.74-4.22-3.8v-3.18l11.63-2.43V94.2c0-4.86-2.65-7.71-7.51-6.66-4.76 1.06-7.5 4.76-7.5 9.52v7.72c0 4.86 2.85 7.19 7.6 6.23 5.93-1.26 7.62-5.6 7.62-8.56l-3.17.53c-.22 3.07-2.01 4.33-4.45 4.86zm-4.22-11.63c0-2.96 1.16-5.18 4.12-5.81 3.07-.64 4.12 1.27 4.12 4.44V96l-8.24 1.8v-1.6zm56.88.43c-3.07.63-4.23-.74-4.23-3.81v-3.17l11.63-2.43V83c0-4.87-2.64-7.72-7.5-6.66-4.77 1.05-7.51 4.75-7.51 9.51v7.72c0 4.86 2.85 7.19 7.6 6.24 5.93-1.27 7.62-5.6 7.62-8.57l-3.07.64c-.42 2.96-2.22 4.23-4.54 4.76zm-4.23-11.53c0-2.96 1.16-5.18 4.12-5.81 3.07-.64 4.13 1.26 4.13 4.44v1.16l-8.25 1.8v-1.6zm32.77 4.97V76.97c0-3.7-2.11-6.45-5.7-5.6-2.44.52-4.87 2.53-5.6 4.86v-3.28l-7.2 1.48v3.07l3.8-.85v19.56l3.4-.74v-16.5c1.58-3.06 3.27-4 4.86-4.33 1.8-.42 3.06.43 3.06 2.96v16.3l7.2-1.48v-3.07l-3.82.74zm-42.71 9.1V85.52c0-3.49-2.33-5.81-5.7-5.18-2.12.43-4.87 2.86-5.3 4.97-.42-1.69-2.74-3.17-5.18-2.64-2.11.42-4.44 2.54-4.86 4.65v-3.28l-7.19 1.48v3.07l3.8-.85v19.56l3.39-.74V90.2c.95-2.01 2.43-3.92 4.44-4.34 1.27-.21 2.75.21 2.75 3.17v16.18l3.38-.74v-16.4c.95-2 2.43-3.91 4.44-4.33 1.27-.21 2.75.2 2.75 3.17v16.17l7.2-1.48v-3.06l-3.92.63zm-58.36-7.2v22.74l3.38-.75V94.42l5.82-1.27v-3.07l-9.2 1.9z" />
                                        <path fill="url(#HomepageIncrementPhone__imageGradientG)"
                                            d="M361.5 239c0 46.23-17.56 99.17-47.13 142.65-33.51 49.28-79.68 83.15-132.66 91.37l-4.29.66c-4.1.6-16.41 2.3-36.95 5.05a1106.44 1106.44 0 0 0-39.46 6.02c-35.16 6.44-61.21 15.33-82.22 29.1a125.89 125.89 0 0 0-18.79 15V431.6c24.8-12.05 52.5-20.22 85.07-26.27l4.18-.76 3.02-.54c9.86-1.74 17.98-2.95 34.57-5.19l23.68-3.16a931.3 931.3 0 0 0 18.77-2.7c28.52-4.42 56.28-24.79 78.1-56.87 20.54-30.21 32.87-67.03 33.11-96.22V239h81z" />
                                        <path fill="url(#HomepageIncrementPhone__imageGradientH)"
                                            d="M22.18 561.36c23.26 23.48 58.34 36.87 104.91 37.14H340c46.1 0 90.76 22.88 120 57.03V660a40.02 40.02 0 0 1-27.94 38.15c-18.82-29.08-54.21-51-90.45-51.64l-213.1-.01c-52.72 0-96.33-14.18-128.5-40.52V528.2a105.93 105.93 0 0 0 22.17 33.17z" />
                                    </svg>
                                </div>
                            </div>


                            <div className="CheckoutPhoneGraphic__description">
                                Increment Magazine
                            </div>

                            <div className="CheckoutPhoneGraphic__price">
                                $14 per quarter
                            </div>


                            <div className="CheckoutPhoneGraphic__buttonsContainer">
                                <div className="CheckoutPhoneGraphic__button CheckoutPhoneGraphic__applePayButton">
                                    <svg className="CheckoutPhoneGraphic__applePay" viewBox="0 0 32 14">
                                        <path fill="#FFF"
                                            d="M25.94 4.22l1.62 5.23h.03l1.62-5.23h1.4l-2.41 6.77c-.56 1.55-1.19 2.06-2.52 2.06-.1 0-.44 0-.53-.03v-1.06l.4.02c.6 0 .95-.26 1.16-.92l.12-.4-2.32-6.44h1.43zM7.4 3.43c.31.03 1.2.12 1.76.96C9.1 4.43 8.1 5 8.1 6.22c.01 1.45 1.27 1.94 1.29 1.95-.02.04-.2.69-.66 1.36-.4.59-.82 1.17-1.47 1.18-.64.01-.85-.38-1.58-.38-.73 0-.97.37-1.57.4-.63.01-1.11-.64-1.51-1.23-.83-1.19-1.45-3.36-.6-4.83a2.32 2.32 0 0 1 1.97-1.2c.63-.01 1.2.41 1.58.41.38 0 1.05-.5 1.83-.45zm14 .71c1.57 0 2.6.82 2.6 2.1v4.4h-1.27V9.6h-.03a2.26 2.26 0 0 1-2.02 1.12c-1.28 0-2.17-.76-2.17-1.9 0-1.13.87-1.78 2.46-1.88l1.7-.1v-.5c0-.72-.46-1.11-1.3-1.11-.7 0-1.2.36-1.3.9h-1.24c.04-1.15 1.12-1.98 2.57-1.98zm-6.13-2.35c1.71 0 2.9 1.18 2.9 2.9a2.8 2.8 0 0 1-2.95 2.93h-1.9v3.03h-1.36V1.79h3.3zm7.4 5.95l-1.52.1c-.85.06-1.3.38-1.3.93s.46.9 1.2.9c.92 0 1.63-.6 1.63-1.43v-.5zm-7.76-4.8h-1.58v3.53h1.57c1.2 0 1.87-.65 1.87-1.77 0-1.11-.68-1.75-1.86-1.75zM7.4 1.12c.06.57-.16 1.13-.5 1.54-.34.4-.88.73-1.42.68-.07-.55.2-1.13.5-1.48.35-.42.94-.71 1.42-.74z" />
                                    </svg>
                                </div>


                            </div>

                            <div className="CheckoutPhoneGraphic__separator">
                                <div className="CheckoutPhoneGraphic__separatorTitle">
                                    Or pay with card
                                </div>
                            </div>




                            Email

                            <div className="CheckoutPhoneGraphic__input"></div>

                            Card Information

                            <div className="CheckoutPhoneGraphic__input CheckoutPhoneGraphic__input--card">
                                <div className="CheckoutPhoneGraphic__placeholder CheckoutPhoneGraphic__placeholder--number">
                                    Number
                                    <svg width="17" viewBox="0 0 17 12">
                                        <path fill="#FFF" stroke="#000" strokeOpacity=".2" strokeWidth=".5"
                                            d="M1.6.18h13.8c.79 0 1.42.63 1.42 1.41v8.74c0 .78-.63 1.42-1.41 1.42H1.59c-.78 0-1.41-.64-1.41-1.42V1.6C.18.81.8.18 1.59.18z" />
                                        <path fill="#1434cb"
                                            d="M1.98 4.39A5.1 5.1 0 0 0 .7 3.9l.02-.09h1.93c.27 0 .48.1.55.37l.42 2.01.13.6 1.18-2.97h1.28l-1.9 4.35H3.05l-1.07-3.8zm5.17 3.8h-1.2l.75-4.37h1.2l-.75 4.37zm4.37-4.26l-.16.95-.11-.05c-.21-.09-.5-.18-.9-.17-.48 0-.69.19-.7.38 0 .2.27.33.68.54.7.3 1.02.69 1.02 1.19-.01.9-.83 1.48-2.1 1.48-.54 0-1.06-.1-1.34-.22l.16-.99.17.07c.39.17.64.24 1.13.24.34 0 .71-.14.72-.43 0-.19-.16-.33-.63-.54-.45-.22-1.06-.57-1.05-1.2 0-.84.85-1.44 2.03-1.44.47 0 .85.1 1.08.19zm1.6 2.72h1l-.27-1.27-.09-.38-.15.43-.48 1.22zm1.5-2.83l.96 4.37h-1.12l-.14-.65h-1.54l-.26.65h-1.26l1.79-4c.13-.3.34-.36.63-.36h.93v-.01z" />
                                    </svg>
                                    <svg width="17" viewBox="0 0 17 12">
                                        <rect width="17" height="12" fill="#0A2540" rx="2" />
                                        <circle cx="6" cy="6" r="3.6" fill="#ED0006" />
                                        <circle cx="10.8" cy="6" r="3.6" fill="#F9A000" />
                                        <path fill="#FF5D00" d="M8.4 3.32a3.6 3.6 0 0 1 0 5.36 3.58 3.58 0 0 1-.08-5.29z" />
                                    </svg>

                                    <svg width="17" viewBox="0 0 17 12">
                                        <rect width="17" height="12" fill="#016FD0" rx="2" />
                                        <polygon fill="#FFF"
                                            points="9.347 10.101 9.347 5.801 17 5.808 17 6.996 16.115 7.941 17 8.895 17 10.108 15.588 10.108 14.837 9.28 14.092 10.111" />
                                        <polygon fill="#016FD0"
                                            points="9.858 9.63 9.858 6.275 12.703 6.275 12.703 7.047 10.779 7.047 10.779 7.572 12.657 7.572 12.657 8.332 10.779 8.332 10.779 8.847 12.703 8.847 12.703 9.63" />
                                        <polygon fill="#016FD0"
                                            points="12.689 9.63 14.263 7.95 12.689 6.275 13.907 6.275 14.869 7.338 15.834 6.275 17 6.275 17 6.301 15.459 7.95 17 9.582 17 9.63 15.822 9.63 14.843 8.556 13.874 9.63" />
                                        <polygon fill="#FFF"
                                            points="9.704 1.985 11.549 1.985 12.197 3.456 12.197 1.985 14.474 1.985 14.867 3.087 15.261 1.985 17 1.985 17 6.285 7.809 6.285" />
                                        <path fill="#016FD0"
                                            d="M10.05 2.45L8.56 5.8H9.6l.28-.67h1.52l.28.67h1.05l-1.49-3.35h-1.18zm.13 1.93l.45-1.07.44 1.07h-.89z" />
                                        <polygon fill="#016FD0"
                                            points="12.701 5.804 12.701 2.451 14.137 2.457 14.875 4.517 15.619 2.451 17 2.451 17 5.804 16.111 5.812 16.111 3.509 15.272 5.804 14.461 5.804 13.604 3.501 13.604 5.804" />
                                    </svg>


                                    <svg width="17" viewBox="0 0 17 12">
                                        <path fill="#FFF" stroke="#000" strokeOpacity=".2" strokeWidth=".5"
                                            d="M15.58 11.75c.68 0 1.24-.55 1.24-1.24V1.4c0-.32-.14-.64-.37-.87a1.22 1.22 0 0 0-.87-.36H1.42C1.09.18.78.3.55.53a1.3 1.3 0 0 0-.37.89v9.09c0 .32.14.64.37.88.23.23.54.36.87.36h14.16z" />
                                        <path fill="#F27712" d="M8.93 12.07h6.65c.78 0 1.41-.62 1.42-1.4V9a27.44 27.44 0 0 1-8.07 3.07z" />
                                        <path fill="#000"
                                            d="M16.41 6.79h-.6l-.68-.9h-.07v.9h-.49V4.56h.73c.57 0 .9.23.9.65 0 .35-.21.57-.57.64l.78.94zm-.72-1.56c0-.21-.17-.33-.47-.33h-.15v.68h.14c.31 0 .48-.12.48-.35zm-2.83-.67h1.38v.37h-.9v.5h.87v.38h-.87v.6h.9v.38h-1.4V4.56h.02zm-1.6 2.28l-1.06-2.3h.54l.67 1.51.68-1.5h.53l-1.07 2.3h-.28zm-4.46 0c-.75 0-1.34-.51-1.34-1.17 0-.65.6-1.17 1.35-1.17.21 0 .39.04.6.13v.52a.88.88 0 0 0-.61-.25c-.47 0-.83.34-.83.77 0 .44.36.77.85.77.23 0 .4-.07.6-.25v.52c-.23.1-.41.13-.62.13zM5.31 6.1c0 .43-.35.73-.88.73-.37 0-.63-.13-.87-.43l.33-.26c.1.2.3.3.53.3.22 0 .38-.15.38-.32 0-.1-.05-.18-.15-.23-.1-.05-.22-.1-.34-.13-.46-.15-.62-.3-.62-.62 0-.36.34-.63.79-.63.28 0 .53.08.74.24l-.25.3a.54.54 0 0 0-.4-.18c-.21 0-.37.11-.37.25 0 .12.1.18.38.28.57.18.73.34.73.7zM2.9 4.56h.5v2.23h-.5V4.56zM1.3 6.79H.59V4.56h.72c.8 0 1.35.46 1.35 1.1 0 .35-.16.66-.45.87-.25.18-.52.26-.9.26zm.57-1.67c-.16-.13-.35-.18-.67-.18h-.13v1.48h.14c.31 0 .5-.06.66-.18a.7.7 0 0 0 0-1.12z" />
                                        <path fill="#F27712"
                                            d="M8.79 4.5c-.64 0-1.17.52-1.17 1.15 0 .68.5 1.2 1.17 1.2.66 0 1.18-.52 1.18-1.18 0-.65-.51-1.17-1.18-1.17z" />
                                    </svg>

                                </div>

                                <div className="CheckoutPhoneGraphic__placeholder">MM / YY</div>

                                <div className="CheckoutPhoneGraphic__placeholder CheckoutPhoneGraphic__placeholder--cvc">
                                    CVC
                                    <svg className="CheckoutPhoneGraphic__cvcIcon" width="19" viewBox="0 0 19 14">
                                        <rect width="17" height="12" y="2" fill="#E6EBF1" rx="2" />
                                        <rect width="13" height="2" x="2" y="4" fill="#FFF" rx="1" />
                                        <circle cx="14.5" cy="4.5" r="4.5" fill="#B4C2D0" />
                                        <path fill="#FFF"
                                            d="M12.5 5.96V3.03H12c-.04.33-.2.46-.58.5l-.24.01v.51h.66v1.9h.67zm1.61.04c.65 0 1.07-.4 1.07-.87 0-.36-.2-.57-.46-.67a.65.65 0 0 0 .4-.62c0-.48-.38-.84-.99-.84-.63 0-1.02.4-1.09.92l.62.07c.04-.25.2-.43.44-.43.23 0 .37.13.37.32 0 .22-.17.32-.42.32h-.26v.54h.27c.27 0 .46.1.46.33 0 .24-.18.37-.42.37-.25 0-.44-.16-.48-.45l-.65.1c.08.6.54.91 1.14.91zm2.53 0c.6 0 1.07-.43 1.07-1.02 0-.56-.36-.98-.95-.98-.2 0-.37.07-.48.16l.05-.54h1.2v-.58h-1.7l-.14 1.6.6.07c.07-.1.2-.18.37-.18.26 0 .42.2.42.46 0 .27-.2.45-.45.45s-.42-.17-.46-.44l-.65.1c.09.58.52.9 1.12.9z" />
                                    </svg>
                                </div>
                            </div>

                            Country or region

                            <div className="CheckoutPhoneGraphic__input CheckoutPhoneGraphic__input--country">
                                <div className="CheckoutPhoneGraphic__placeholder CheckoutPhoneGraphic__placeholder--country">
                                    United States
                                    <svg width="9" viewBox="0 0 9 6">
                                        <polyline fill="none" stroke="#62788D" strokeWidth="1.2" points="1 1 4.5 4.5 8 1" />
                                    </svg>
                                </div>

                                <div className="CheckoutPhoneGraphic__placeholder">ZIP</div>
                            </div>

                            <div className="CheckoutPhoneGraphic__button CheckoutPhoneGraphic__cardPaymentButton">

                                Pay
                            </div>





                            <div className="ApplePaySheet ApplePaySheet--isHidden" data-js-controller="ApplePaySheet"
                                data-js-autoplay-face-id-animation="">
                                <div className="ApplePaySheet__overlay" data-js-target="ApplePaySheet.overlay"></div>

                                <div className="ApplePaySheet__sheet" data-js-target="ApplePaySheet.sheet">
                                    <div className="ApplePaySheet__row ApplePaySheet__row--header">
                                        <svg width="39" height="16" viewBox="0 0 39 16" className="ApplePaySheet__logo">
                                            <path fill="#0A2540"
                                                d="M32.74 4.16l2.17 7.01h.04l2.17-7H39l-3.24 9.07c-.74 2.08-1.58 2.76-3.38 2.76-.14 0-.6-.02-.71-.05v-1.42l.54.03c.81 0 1.27-.35 1.55-1.23l.17-.53-3.12-8.64h1.93zM7.55 3.11h.24c.41.03 1.6.16 2.36 1.28-.06.05-1.4.82-1.4 2.45.02 1.95 1.72 2.6 1.73 2.62-.01.04-.27.91-.88 1.82-.54.79-1.1 1.56-1.98 1.58-.86.01-1.14-.5-2.12-.5-.98 0-1.3.48-2.1.51-.86.03-1.51-.84-2.05-1.63-1.1-1.6-1.95-4.5-.8-6.47A3.13 3.13 0 0 1 3.2 3.16c.84-.02 1.62.55 2.12.55s1.41-.66 2.47-.6zm19.07.95c2.1 0 3.48 1.1 3.48 2.8v5.92h-1.7v-1.43h-.05a3.04 3.04 0 0 1-2.71 1.52c-1.71 0-2.9-1.02-2.9-2.55 0-1.53 1.15-2.4 3.3-2.53l2.29-.14v-.66c0-.96-.63-1.49-1.76-1.49-.93 0-1.6.48-1.75 1.21h-1.66c.05-1.54 1.5-2.65 3.46-2.65zM18.36.9c2.3 0 3.91 1.58 3.91 3.9 0 2.31-1.63 3.91-3.96 3.91h-2.56v4.06h-1.84V.9h4.45zm9.97 7.97l-2.05.14c-1.15.07-1.75.5-1.75 1.25 0 .72.62 1.19 1.6 1.19 1.25 0 2.2-.8 2.2-1.9v-.68zM17.88 2.46h-2.13v4.71h2.12c1.6 0 2.52-.86 2.52-2.36s-.91-2.35-2.51-2.35zM7.8 0a2.9 2.9 0 0 1-.67 2.06c-.46.54-1.19.97-1.92.9-.1-.72.27-1.5.69-1.98A2.87 2.87 0 0 1 7.8 0z" />
                                        </svg>
                                        <span className="ApplePaySheet__cancelButton">
                                            Cancel
                                        </span>
                                    </div>

                                    <div className="ApplePaySheet__row">
                                        <div className="ApplePaySheet__checkoutLabel">

                                            <svg width="24" height="16" viewBox="0 0 24 16">
                                                <rect width="23" height="15" x=".5" y=".5" fill="none" stroke="#E6EBF1" rx="2" />
                                                <path fill="#1434cb"
                                                    d="M3.29 5.91a7.2 7.2 0 0 0-1.79-.67l.03-.13h2.73c.38.01.68.13.77.52l.6 2.84.18.85 1.67-4.2h1.8L6.6 11.27H4.8L3.3 5.9zm7.31 5.37H8.9l1.06-6.17h1.7l-1.06 6.17zm6.17-6.02l-.23 1.34-.16-.07c-.3-.12-.71-.25-1.27-.24-.67 0-.97.27-.98.54 0 .28.37.47.96.76.98.44 1.44.98 1.43 1.68-.01 1.28-1.17 2.1-2.96 2.1a5.4 5.4 0 0 1-1.9-.32l.24-1.39.23.1c.55.23.91.33 1.6.33.48 0 1-.2 1.01-.6 0-.27-.22-.47-.88-.77-.64-.3-1.5-.8-1.49-1.68 0-1.2 1.2-2.04 2.87-2.04.66 0 1.2.14 1.53.26zm2.26 3.84h1.41l-.39-1.79-.12-.53-.22.6-.68 1.72zm2.1-3.99l1.37 6.17h-1.58l-.2-.92h-2.18l-.36.92H16.4l2.52-5.66c.18-.4.49-.5.9-.5h1.3z" />
                                            </svg>
                                        </div>

                                        <div className="ApplePaySheet__checkoutInfo">
                                            Chase Freedom (•••• 1234)
                                            <br />27 Fredrick Ave Brothers OR
                                        </div>

                                        <svg className="ApplePaySheet__checkoutArrow" viewBox="0 0 6 10">
                                            <polyline fill="none" stroke="#4B82FE" strokeWidth="1.5" points="1 1 5 5 1 9" />
                                        </svg>
                                    </div>

                                    <div className="ApplePaySheet__row">
                                        <div className="ApplePaySheet__checkoutLabel">

                                            Billing

                                        </div>

                                        <div className="ApplePaySheet__checkoutInfo ApplePaySheet__checkoutInfoAddress">
                                            John Appleseed
                                            <br />27 Fredrick Ave<br />
                                            Brothers, OR 97712<br />
                                            United States
                                        </div>

                                        <svg className="ApplePaySheet__checkoutArrow" viewBox="0 0 6 10">
                                            <polyline fill="none" stroke="#4B82FE" strokeWidth="1.5" points="1 1 5 5 1 9" />
                                        </svg>
                                    </div>



                                    <div className="ApplePaySheet__row">
                                        <div className="ApplePaySheet__checkoutLabel">
                                            Contact
                                        </div>

                                        <div className="ApplePaySheet__checkoutInfo">
                                            j.appleseed@example.com
                                            <br />+1 (458) 555-2863
                                        </div>

                                        <svg className="ApplePaySheet__checkoutArrow" viewBox="0 0 6 10">
                                            <polyline fill="none" stroke="#4B82FE" strokeWidth="1.5" points="1 1 5 5 1 9" />
                                        </svg>
                                    </div>

                                    <div className="ApplePaySheet__row">
                                        <div className="ApplePaySheet__checkoutLabel"></div>

                                        <div className="ApplePaySheet__checkoutInfo">
                                            Pay total
                                        </div>

                                        <div className="ApplePaySheet__checkoutInfo">

                                            $65.00

                                        </div>
                                    </div>

                                    <div className="ApplePaySheet__faceID">
                                        <div className="Face " data-js-controller="FaceIdAnimation" data-js-follow-mouse>
                                            <div className="Face__phoneContainer">
                                                <svg className="Face__phone" width="80" height="80">
                                                    <clipPath className="Face__phoneClip" id="Face__phoneClip">
                                                        <path d="M20,85L20,85,60,85,60,220,20,220Z"></path>
                                                    </clipPath>
                                                    <g clipPath="url(#Face__phoneClip)">
                                                        <path className="Face__phoneGlare" d="M20,55L20,55,60,55,60,220,20,220Z"></path>
                                                    </g>
                                                    <g className="Face__phoneIcon">
                                                        <rect width="40" height="80" fill="none" rx="5" x="20" y="84"></rect>
                                                        <rect width="18" height="2" fill="#0278fc" rx=".5" x="31" y="84"></rect>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="Face__borders" data-js-target="FaceIdAnimation.borders">
                                                <svg className="Face__border--copy" width="100" height="100" data-js-target="FaceIdAnimation.borderCopy">
                                                    <path className="Face__corner Face__corner--tl" d="M10,30 L10,22 A12,12,0,0,1,22,10L30,10"
                                                        data-js-target-list="FaceIdAnimation.tl" />
                                                    <path className="Face__corner Face__corner--tr" d="M70,10 L78,10 A12,12,0,0,1,90,22L90,30"
                                                        data-js-target-list="FaceIdAnimation.tr" />
                                                    <path className="Face__corner Face__corner--br" d="M90,70 L90,78 A12,12,0,0,1,78,90L70,90"
                                                        data-js-target-list="FaceIdAnimation.br" />
                                                    <path className="Face__corner Face__corner--bl" d="M30,90 L22,90 A12,12,0,0,1,10,78L10,70"
                                                        data-js-target-list="FaceIdAnimation.bl" />
                                                </svg>
                                                <svg className="Face__border" width="100" height="100" viewBox="0 0 100 100"
                                                    data-js-target="FaceIdAnimation.border" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="Face__corner Face__corner--tl" d="M10,30 L10,22 A12,12,0,0,1,22,10L30,10"
                                                        data-js-target-list="FaceIdAnimation.tl" />
                                                    <path className="Face__corner Face__corner--tr" d="M70,10 L78,10 A12,12,0,0,1,90,22L90,30"
                                                        data-js-target-list="FaceIdAnimation.tr" />
                                                    <path className="Face__corner Face__corner--br" d="M90,70 L90,78 A12,12,0,0,1,78,90L70,90"
                                                        data-js-target-list="FaceIdAnimation.br" />
                                                    <path className="Face__corner Face__corner--bl" d="M30,90 L22,90 A12,12,0,0,1,10,78L10,70"
                                                        data-js-target-list="FaceIdAnimation.bl" />
                                                </svg>
                                            </div>
                                            <svg className="Face__features" width="100" height="100" data-js-target="FaceIdAnimation.features">
                                                <g className="Face__eyes" data-js-target="FaceIdAnimation.eyes">
                                                    <path className="Face__eye" d="M33,39 l0,6.5"></path>
                                                    <path className="Face__eye" d="M67,39 l0,6.5"></path>
                                                </g>
                                                <path className="Face__nose" d="M51.5,38.5 L51.5,53.5A4,4,0,0,1,47,57.5L46,57.5"
                                                    data-js-target="FaceIdAnimation.nose"></path>
                                                <path className="Face__mouth" d="M37,68 A20,20,0,0,0,63,68" data-js-target="FaceIdAnimation.mouth"></path>
                                            </svg>
                                            <svg className="Face__check">
                                                <path d="M34,52,43,61,66,39"></path>
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </figure>
            </div>
        </main>
    )
}

export default Mobile
