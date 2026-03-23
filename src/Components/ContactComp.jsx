import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Send, MessageSquare, CheckCircle, ArrowLeft, PhoneIcon } from 'lucide-react';
import HeaderComp from './HeaderComp';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const phoneNumber = "923315789320";
    const message = "Hi Abdul Wasay, I saw your portfolio and wanted to connect!";
    const WhatSapURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    const [state, handleSubmit] = useForm("mqeyrpzk");
    const navigate = useNavigate();
    if (state.succeeded) {
        return (
            <div className="bg-gradient-to-b from-black/5 to-gray-900  flex items-center justify-center py-16 px-4">
                <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate('/')}>
                                <ArrowLeft className="text-blue-600 dark:text-blue-400" />

                                <p className=" opacity-0 group-hover:opacity-100 transition-all duration-300 text-md font-bold text-gray-900 dark:text-white pointer-events-none">
                                    <span className="text-blue-600 dark:text-blue-400">ABDUL</span>WASAY
                                </p>
                            </div>
                            <div className="block">
                                <a
                                    href="/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="max-w-md w-full min-h-[110vh] p-8 text-center flex items-center justify-center">
                    <div className='flex-col pointer-envents-none'>
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Thanks for joining!</h3>
                        <p className="text-gray-300">We'll get back to you soon.</p>
                        <button className='text-2xl p-3 mt-5 text-white cursor-pointer bg-gray-900 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 active:scale-95'
                            onClick={() => navigate('/')}
                        >
                            Back to home
                        </button>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-black/5 to-gray-900 w-full flex items-center py-16 px-4 ">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate('/')}>
                            <ArrowLeft className="text-blue-600 dark:text-blue-400" />

                            <p className=" opacity-0 group-hover:opacity-100 transition-all duration-300 text-md font-bold text-gray-900 dark:text-white pointer-events-none">
                                <span className="text-blue-600 dark:text-blue-400">ABDUL</span>WASAY
                            </p>
                        </div>
                        <div className="block">
                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="max-w-2xl mx-auto w-full mt-20 min-h-[100vh]">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                        <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Get In Touch
                    </h2>
                    <p className="text-gray-300 max-w-xl mx-auto">
                        Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-white font-medium mb-2">
                                Email Address <span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                                    required
                                />
                            </div>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-400 text-sm mt-1"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-white font-medium mb-2">
                                Message <span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute top-3 left-3 pointer-events-none">
                                    <MessageSquare className="h-5 w-5 text-gray-400" />
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project or inquiry..."
                                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="text-red-400 text-sm mt-1"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {state.submitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <div className="text-center pt-4">
                            <p className="text-xs text-gray-400">
                                I'll get back to you within 24-48 hours
                            </p>
                        </div>
                    </form>
                </div>
                <div className='border-b w-1/2 border-dashed border-white/10 mt-10 mx-auto '>
                </div>
                <a
                    href={WhatSapURL}
                    target='_blank'
                    className=" flex gap-2 mt-5 items-center justify-center"
                    aria-label="Email"
                >
                    <span>contact On whatsap</span>
                    <PhoneIcon size={22} />
                </a>
            </div>
        </div>
    );
}

export default ContactForm;