import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
        <div className="container">
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1120.6170199796122!2d-5.8240038621409695!3d35.77041149547847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b809c6219f251%3A0xb3738c10b5178500!2sTanger%20City%20center!5e0!3m2!1sfr!2sma!4v1697683302294!5m2!1sfr!2sma" className='border-0 w-full h-full' allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[540px] lg:flex items-center bg-indigo-100 px-4 
                    lg:px-8 py-8">
                        <form action="" className="w-full">
                            <div className="mb-5">
                                <input type="text" placeholder='entrer your name' 
                                className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mb-5">
                                <input type="email" placeholder='entrer your email' 
                                className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mb-5">
                                <input type="text" placeholder='subject' 
                                className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className="mb-5">
                                <textarea type="text" rows={3} placeholder='write your message' 
                                className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white 
                            hover:bg-headingColor text-center ease-linear duration-150'>
                                Send Message</button>
                        </form>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Contact