"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">About ProxyOT</h2>

                    <div className="space-y-8 text-gray-300">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg"
                        >
                            Proxy Oblivious Transfer (ProxyOT) is a cryptographic protocol designed to enable secure data sharing
                            between parties without revealing sensitive information. It builds upon the foundation of Oblivious
                            Transfer (OT), a fundamental building block in cryptography that allows a sender to transfer
                            one of potentially many pieces of information to a receiver, but remains oblivious as to which piece
                            the receiver has received.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg"
                        >
                            The "Proxy" enhancement in ProxyOT introduces a third party that facilitates the data transfer,
                            making the protocol more flexible and efficient, particularly for applications like data
                            marketplaces, secure data sharing in industries like healthcare and finance, and privacy-preserving
                            distributed computing.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-lg"
                        >
                            Our implementation is based on the paper "Proxy Oblivious Transfer Scheme for Secure Data Sharing
                            Based on Blockchain," with different curve implementations provided in our repositories: the original
                            BN256 curve implementation and an enhanced version using the BLS12-381 curve for improved security
                            and performance.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 