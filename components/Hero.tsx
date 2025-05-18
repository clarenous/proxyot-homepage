"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
            <div className="container mx-auto px-4 pt-32 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Proxy
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Oblivious</span>
                            Transfer
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            A secure, efficient framework for privacy-preserving data sharing based on blockchain technology
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="#projects"
                            className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors transform hover:scale-105 duration-300"
                        >
                            View Projects
                        </Link>
                        <a
                            href="https://github.com/clarenous/proxyot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-8 rounded-lg transition-colors transform hover:scale-105 duration-300"
                        >
                            View on GitHub
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="animate-bounce"
                >
                    <Link href="#features" className="text-gray-400 hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 