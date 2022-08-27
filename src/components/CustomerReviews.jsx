import React from 'react'
import '../styles/CustomerReviews.css'
import CustomersSay from '../images/customers-say.png'

const CustomerReviews = () => {
    return (
        <section id='customer--reviews'>
            <div className='customer--reviews--container'> {/* make responsive */}
                <div className='customer--reviews--text'>
                    <h2>What Our Customers Say</h2>
                    <p>
                        Purus, eget vitae quam quam id neque. Risus integer pharetra viverra sit.
                        Non, sed consequat morbi sit vitae mollis. Mauris eu diam adipiscing et amet, ut.
                        Donec viverra sed est elit pretium nibh et. Ut varius erat vulputate augue nulla consectetur.
                        Blandit tortor, bibendum mi magna sapien dictum. Ullamcorper ut risus pretium ac aliquam.
                        Risus ante in sit ac pellentesque aliquam ut. Commodo tristique commodo mi malesuada.
                        Sed tristique pharetra tincidunt quis convallis in elementum, aliquam blandit.
                        Purus tortor enim pharetra neque. Quisque sed ultricies fermentum malesuada.
                        Nulla pharetra non pellentesque massa arcu.
                        Feugiat odio sapien faucibus ante sit neque sagittis nibh massa.
                        In commodo nisl mattis et amet diam orci pharetra.
                    </p>
                    <div className='rating'>
                        <svg width="142" height="26" viewBox="0 0 142 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_430)">
                                <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
                                <path d="M53.8159 9.65549H44.1879L41.2028 -6.10352e-05L38.2177 9.65549H28.5897L36.3678 15.6141L33.4247 25.2261L41.2028 19.2675L48.9809 25.2261L45.9958 15.5706L53.8159 9.65549Z" fill="#FDD835" />
                                <path d="M84.0873 9.65549H73.8175L70.6334 -6.10352e-05L67.4493 9.65549H57.1794L65.476 15.6141L62.3367 25.2261L70.6334 19.2675L78.93 25.2261L75.7459 15.5706L84.0873 9.65549Z" fill="#FDD835" />
                                <path d="M112.677 9.65549H103.049L100.064 -6.10352e-05L97.0789 9.65549H87.4509L95.2289 15.6141L92.2859 25.2261L100.064 19.2675L107.842 25.2261L104.857 15.5706L112.677 9.65549Z" fill="#FDD835" />
                                <path d="M142 9.60475H132.092L129.02 -0.000183105L125.948 9.60475H116.041L124.045 15.5321L121.016 25.0938L129.02 19.1664L137.024 25.0938L133.953 15.4889L142 9.60475Z" fill="#FDD835" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M129.02 19.1667L129.02 19.1665L137.025 25.0938L133.953 15.4889L142 9.60481H132.092L129.02 -0.00012207L129.02 0.000723674V19.1667Z" fill="#E5E5E5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_430">
                                    <rect width="142" height="25.2262" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <strong>Oyeniyi Adedoyin</strong>
                    <p>Digital Marketer</p>
                </div>
                <div className='customer--reviews--image'>
                    <img src={CustomersSay} alt="customers-say" />
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews