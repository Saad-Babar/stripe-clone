import React from 'react'

function Footer() {
  return (
    <footer id='footerstyle' className="Section SiteFooterSection theme--White flavor--Chroma accent--Slate Section--angleTop Section--paddingNormal Section--hasGuides Section--hasStickyNav">
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
              <nav className="SiteFooterSection__layout">
                {/* Logo Section */}
                <div className='SiteFooterSection__column--locale SiteFooterSection__column !mr-[95px] pt-[150px]'>
                  <div className='SiteFooterSection__column--locale SiteFooterSection__column'>
                    <div className='SiteFooterSection__localeContainer'>
                      <div className="SiteFooterSection__logo pt-[130px] !pb-[20px] !pl-[10px]">
                        <a className='SiteFooterSection__logoLink' href='/' data-js-controller="AnalyticsButton"
                          data-analytics-category='Navigation' data-analytics-action='Clicked'
                          data-analytics-label='Stripe Logo' aria-label='Go to the Stripe homepage'
                          data-testid="footer-stripe-logo">
                          <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25"
                            className="UserLogo variant-- ">
                            <title>Stripe logo</title>
                            <path fill="var(--userLogoColor, #0A2540)"
                              d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
                              fillRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                      <div className="SiteFooterSection__localeControls !pl-[10px]">
                        <div className="LocaleControl LocaleControl--country" data-js-controller="LocaleControl">
                          <button className="flex items-center space-x-2 bg-transparent border-none p-0"
                            data-js-target="LocaleControl.trigger" aria-label="United States. Choose your country"
                            data-testid="footer-locale-country-button">
                            <svg className="LocaleControl__triggerIcon" width="16" height="16" viewBox="0 0 16 16">
                              <path
                                d="M3.54 8.04h4.42v4.43c0 .57.76.75 1.01.24l4.96-9.93a.54.54 0 0 0-.72-.72L3.3 7.03c-.5.25-.33 1.01.24 1.01"
                                fill="#0A2540" fillRule="evenodd" />
                            </svg>
                            <span className="text-black" data-js-target="LocaleControl.triggerLabel">United States</span>
                          </button>
                        </div>
                        <div className="LocaleControl" data-js-controller="LocaleControl">
                          <button className="flex items-center" data-js-target="LocaleControl.trigger"
                            aria-label="English (United States). Choose your language"
                            data-testid="footer-locale-language-button">
                            <svg className="LocaleControl__triggerIcon" width="16" height="16" viewBox="0 0 16 16">
                              <path
                                d="M7.5 2C10.91 2 13 4.01 13 6.5c0 2.07-1.45 3.82-3.92 4.34L6.62 13.3a.66.66 0 0 1-1.12-.46v-2.1C3.29 10.12 2 8.45 2 6.5 2 4.01 4.09 2 7.5 2z"
                                fill="#0A2540" fillRule="evenodd" />
                            </svg>
                            <span className="ml-2" data-js-target="LocaleControl.triggerLabel">English (United
                              States)</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <section className='List SiteFooterSection__copyright !mt-[601px] !mb-[130px]'>
                      <ul className='List__list'>
                        <li className="List__item ListItem">
                          © 2023 Stripe, Inc.
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
                {/* Products, Solutions, and Resources Sections */}
                <div className="SiteFooterSection__sections">
                  {/* Products Section */}
                  <div className='SiteFooterSection__column md:!mr-[95px] pt-[270px]'>
                    <section className="List List--hasTitle ">
                      <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title">Products</h1>
                      <ul className='List__list'>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/atlas" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='atlas'
                            data-testid="footer-products-atlas-list-item">Atlas</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/billing" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='billing'
                            data-testid="footer-products-billing-list-item">Billing</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/capital" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='capital'
                            data-testid="footer-products-capital-list-item">Capital</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/payments/checkout" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='checkout'
                            data-testid="footer-products-checkout-list-item">Checkout</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/climate" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='climate'
                            data-testid="footer-products-climate-list-item">Climate</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/connect" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='connect'
                            data-testid="footer-products-connect-list-item">Connect</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/corporate-card"
                            data-js-controller='AnalyticsButton' data-analytics-category='Footer'
                            data-analytics-action='Clicked' data-analytics-label='Product'
                            data-analytics-description='corporate-card'
                            data-testid="footer-products-corporate-card-list-item">Corporate Card</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/data-pipeline" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='data-pipeline'
                            data-testid="footer-products-data-pipeline-list-item">Data Pipeline</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/payments/elements" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='elements'
                            data-testid="footer-products-elements-list-item">Elements</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/financial-connections"
                            data-js-controller='AnalyticsButton' data-analytics-category='Footer'
                            data-analytics-action='Clicked' data-analytics-label='Product'
                            data-analytics-description='financial-connections'
                            data-testid="footer-products-elements-list-item">Financial Connections</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/identity" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='identity'
                            data-testid="footer-products-identity-list-item">Identity</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/invoicing" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='invoicing'
                            data-testid="footer-products-invoicing-list-item">Invoicing</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/issuing"
                            data-js-controller='AnalyticsButton' data-analytics-category='Footer'
                            data-analytics-action='Clicked' data-analytics-label='Product'
                            data-analytics-description='issuing'
                            data-testid="footer-products-issuing-list-item">Issuing</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/payments/link" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='link'
                            data-testid="footer-products-link-list-item">Link</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/payments" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='payments'
                            data-testid="footer-products-payments-list-item">Payments</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/payments/payment-links"
                            data-js-controller='AnalyticsButton' data-analytics-category='Footer'
                            data-analytics-action='Clicked' data-analytics-label='Product'
                            data-analytics-description='payment-links'
                            data-testid="footer-products-payment-links-list-item">Payment Links</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/connect/payouts" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='connect-payouts'
                            data-testid="footer-products-connect-payouts-list-item">Payouts</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/pricing"
                            data-js-controller='AnalyticsButton' data-analytics-category='Footer'
                            data-analytics-action='Clicked' data-analytics-label='Pricing'
                            data-testid="footer-products-pricing-list-item">Pricing</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/radar"
                            data-js-controller='AnalyticsButton' data-analytics-category='Footer'
                            data-analytics-action='Clicked' data-analytics-label='Product'
                            data-analytics-description='radar' data-testid="footer-products-radar-list-item">Radar</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/revenue-recognition" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='revenue-recognition'
                            data-testid="footer-products-revenue-recognition-list-item">Revenue Recognition</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/sigma"
                            data-js-controller='AnalyticsButton' data-analytics-category='Footer'
                            data-analytics-action='Clicked' data-analytics-label='Product'
                            data-analytics-description='sigma' data-testid="footer-products-sigma-list-item">Sigma</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/tax" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='tax'
                            data-testid="footer-products-tax-list-item">Tax</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/terminal" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='terminal'
                            data-testid="footer-products-terminal-list-item">Terminal</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/treasury" data-js-controller='AnalyticsButton'
                            data-analytics-category='Footer' data-analytics-action='Clicked'
                            data-analytics-label='Product' data-analytics-description='treasury'
                            data-testid="footer-products-treasury-list-item">Treasury</a>
                        </li>
                      </ul>
                    </section>
                  </div>
                  {/* Solution Section */}
                  <div className='SiteFooterSection__column !mr-[20px] pt-[270px] sevensmall:hidden'>
                    <section className="List List--hasTitle">
                      <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title">Solutions</h1>
                      <ul className='List__list'>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/startups" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Startups page'
                            data-testid="footer-use-cases-startups-list-item">Startups</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/enterprise" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Enterprise page'
                            data-testid="footer-use-cases-enterprise-list-item">Enterprises</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/saas" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked' data-analytics-label='SaaS'
                            data-testid="footer-use-cases-saas-list-item">SaaS</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/platforms" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Platforms'
                            data-testid="footer-use-cases-platforms-list-item">Platforms</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/ecommerce" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Ecommerce'
                            data-testid="footer-use-cases-ecommerce-list-item">Ecommerce</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/marketplaces"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Marketplaces'
                            data-testid="footer-use-cases-marketplaces-list-item">Marketplaces</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/crypto" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Crypto' data-testid="footer-use-cases-crypto-list-item">Crypto</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/creator-economy"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Creator Economy'
                            data-testid="footer-use-cases-creator-economy-list-item">Creator Economy</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/embedded-finance"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Embedded Finance'
                            data-testid="footer-use-cases-embedded-finance-list-item">Embedded Finance</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/global-businesses"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Global businesses'
                            data-testid="footer-company-global-businesses-list-item">
                            Global Businesses
                          </a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/use-cases/finance-automation"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Finance Automation'
                            data-testid="footer-use-cases-finance-automation-list-item">Finance Automation</a>
                        </li>
                      </ul>
                    </section>
                    <section className="List List--hasTitle">
                      <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title">Integrations &amp; Custom
                        Solutions</h1>
                      <ul className='List__list'>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://marketplace.stripe.com/"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='App MarketPlace'
                            data-testid="footer-solutions-app-marketplace-list-item">App Marketplace</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/partners" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Partner Ecosystem'
                            data-testid="footer-solutions-partners-ecosystem-list-item">Partner Ecosystem</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/professional-services"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Professional Services'
                            data-testid="footer-solutions-professional-services-list-item">Professional Services</a>
                        </li>
                      </ul>
                    </section>
                    <section className="List List--hasTitle">
                      <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title">Developers</h1>
                      <ul className='List__list'>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/docs"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Docs'
                            data-testid="footer-developers-docs-list-item">Documentation</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/docs/api"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Docs API'
                            data-testid="footer-developers-api-list-item">API Reference</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://status.stripe.com/"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='System status'
                            data-testid="footer-developers-system-status-list-item">API Status</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/docs/upgrades#api-versions"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Docs API Changelog'
                            data-testid="footer-developers-api-changelog-list-item">API Changelog</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/docs/stripe-apps"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Docs Build A Stripe App'
                            data-testid="footer-developers-build-stripe-app-list-item">Build a Stripe App</a>
                        </li>
                      </ul>
                    </section>
                  </div>
                  {/* Resources Section */}
                  <div className="sevensmall:hidden SiteFooterSection__column SiteFooterSection__column--isMobileFooterLayout pt-[270px]">
                    <section className="List List--hasTitle">
                      <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title">Resources</h1>
                      <ul className='List__list'>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/guides"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Education'
                            data-testid="footer-resources-guides-list-item">Guides</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/customers" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Customer Stories'
                            data-testid="footer-resources-customer-stories-list-item">Customer Stories</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/blog" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked' data-analytics-label='Blog'
                            data-testid="footer-resources-blog-list-item">Blog</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/sessions" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Sessions Annual Conference'
                            data-testid="footer-resources-sessions-list-item">Annual Conference</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/privacy"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Legal'
                            data-testid="footer-resources-privacy-list-item">Privacy &amp; Terms</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/spc/licenses"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Licenses'
                            data-testid="footer-resources-licenses-list-item">Licenses</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/sitemap" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Sitemap' data-testid="footer-resources-sitemap-list-item">Sitemap</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/cookie-settings" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Cookie settings'
                            data-testid="footer-resources-cookie-settings-list-item">Cookie Settings</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/cookie-settings" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='CPRA privacy settings'>Your Privacy
                            Choices</a>
                        </li>
                      </ul>
                    </section>
                    <section className="List List--hasTitle">
                      <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title">Company</h1>
                      <ul className='List__list'>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://stripe.com/jobs"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Careers'
                            data-testid="footer-company-jobs-list-item">Jobs</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/newsroom" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Newsroom' data-testid="footer-company-newsroom-list-item">Newsroom</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://press.stripe.com/"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Stripe Press'
                            data-testid="footer-company-stripe-press-list-item">Stripe Press</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/partners/become-a-partner"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Become A Partner'
                            data-testid="footer-company-become-a-partner-list-item">Become a Partner</a>
                        </li>
                      </ul>
                    </section>
                    <section className="List List--hasTitle" data-js-controller="SiteFooterSectionSupportLinkList">
                      <h1 className="CopyTitle CopyTitle--variant CopyTitle--inline List__title">Support</h1>
                      <ul className='List__list'>
                        <li className="List__item ListItem"
                          data-js-target="SiteFooterSectionResourcesLinkList.contactSalesItem">
                          <a className="Link ListItem__label" href="/contact/sales" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Contact Sales'
                            data-testid="footer-resources-contact-sales-list-item">Contact Sales</a>
                        </li>
                        {/* <template data-js-target="SiteFooterSectionResourcesLinkList.liveChatItemTemplate"> */}
                          <li className="List__item ListItem">
                            <a className="Link ListItem__label" href="#" data-js-controller='AnalyticsButton'
                              data-analytics-category='Links' data-analytics-action='Clicked'
                              data-analytics-label='Chat With US'
                              data-testid="footer-resources-chat-with-us-list-item">
                              Chat with us
                            </a>
                          </li>
                        {/* </template> */}
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="https://support.stripe.com/?referrerLocale=en-us"
                            data-js-controller='AnalyticsButton' data-analytics-category='Links'
                            data-analytics-action='Clicked' data-analytics-label='Support request'
                            data-testid="footer-resources-support-list-item">Support Center</a>
                        </li>
                        <li className="List__item ListItem">
                          <a className="Link ListItem__label" href="/support-plans" data-js-controller='AnalyticsButton'
                            data-analytics-category='Links' data-analytics-action='Clicked'
                            data-analytics-label='Support Plans'
                            data-testid="footer-resources-support-plans-list-item">Support Plans</a>
                        </li>
                        <li className="List__item ListItem">
                          <span className="ListItem__label">+1 888 926 2289</span>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </nav>
              <div className="StripeSet StripeSet--TopLeft StripeSet--layoutIntersecting StripeSet--alignEnd"
                data-js-controller="StripeSet" aria-hidden="true" data-js-align="End">
                <div className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetNone Stripe--widthNormal"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes">
                </div>
                <div className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetSmall Stripe--widthFull"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes">
                </div>
                <div
                  className="Stripe Stripe--accentNone Stripe--variantIntersection Stripe--insetNone Stripe--widthNormal Stripe--intersectionInsetSmall Stripe--intersectionWidthFull"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes">
                  <div className="Stripe__intersection" data-js-target="StripeSet.intersection"></div>
                </div>
              </div>
              <div className="StripeSet StripeSet--TopRight StripeSet--layoutIntersecting StripeSet--alignCenter"
                data-js-controller="StripeSet" aria-hidden="true">
                <div className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetSmall Stripe--widthFull"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes">
                </div>
                <div className="Stripe Stripe--accentNone Stripe--variantSolid Stripe--insetNone Stripe--widthNormal"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes">
                </div>
                <div
                  className="Stripe Stripe--accentNone Stripe--variantIntersection Stripe--insetSmall Stripe--widthFull Stripe--intersectionInsetNone Stripe--intersectionWidthNormal"
                  aria-hidden="true" data-js-target-list="StripeSet.stripes">
                  <div className="Stripe__intersection" data-js-target="StripeSet.intersection"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
