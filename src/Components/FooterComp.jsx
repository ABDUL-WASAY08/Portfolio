import { Github, Linkedin, PhoneIcon } from 'lucide-react'
import React from 'react'

function FooterComp() {
    const phoneNumber = "923315789320";
    const message = "Hi Abdul Wasay, I saw your portfolio and wanted to connect!";
    const WhatSapURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    return (
        <div className='bg-gray/100 px-12 py-15 grid md:grid-cols-2'>
            <div>
                <p className='text-4xl mb-5 text-white'>ABDULWASAY</p>
                <p className='text-blue-300 text-md'>FULL STACK DEVELOPER</p>
                <p className='text-white/70 mt-4'>Building scalable web applications with modern technologies. Specialized in Next.js, NestJS, and creating exceptional user experiences.</p>
                <p className='mt-2'>© 2026 All rights reserved</p>
            </div>
            <div>
                <div className="flex justify-end gap-4 pt-4">
                    <a
                        href="https://github.com/ABDUL-WASAY08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <Github size={22} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdul-wasay-0a75283a4/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>
                    <a
                        href={WhatSapURL}
                        target='_blank'
                        className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                        aria-label="Email"
                    >
                        <PhoneIcon size={22} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterComp