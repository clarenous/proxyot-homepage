"use client";

import { motion } from "framer-motion";
import Placeholder from "@/components/ui/Placeholder";

interface Project {
    title: string;
    description: string;
    githubUrl: string;
    language: string;
    highlights: string[];
}

const projects: Project[] = [
    {
        title: "ProxyOT",
        description: "The original implementation of Proxy Oblivious Transfer for Data Sharing based on BN256 curve.",
        githubUrl: "https://github.com/clarenous/proxyot",
        language: "Go",
        highlights: [
            "Secure data sharing mechanism",
            "BN256 curve implementation",
            "High performance optimizations",
            "Complete cryptographic toolkit"
        ],
    },
    {
        title: "POT",
        description: "Enhanced Proxy Oblivious Transfer Toolkit based on BLS12-381 curve.",
        githubUrl: "https://github.com/ProxyOT/POT",
        language: "Go",
        highlights: [
            "BLS12-381 curve implementation",
            "Improved security features",
            "Better performance metrics",
            "Extended cryptographic primitives"
        ],
    },
];

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-xl"
        >
            <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-800 flex items-center justify-center">
                <Placeholder text={project.title} />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-3 rounded-full">
                        {project.language}
                    </span>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                        {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-gray-400">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors w-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        View Repository
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Projects</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Explore our Proxy Oblivious Transfer implementations to enable secure data sharing in your applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 