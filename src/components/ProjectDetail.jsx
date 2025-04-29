import React from 'react'
import { LuGlobe, LuX } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { FaReact, FaPython, FaPhp } from 'react-icons/fa';
export default function ProjectDetail({ setActiveProject, activeProject: project }) {
    const closeModal = () => {
        setActiveProject(null);
    };
    const getIcon = (tech = "python") => {
        const iconMap = {
            react: FaReact,
            python: FaPython,
            php: FaPhp,
        };
        const key = tech.toLowerCase();
        const Icon = iconMap[key];
        return Icon ? <Icon size={100} className=" mx-auto text-indigo-500" /> : null;
    };
    return (
        <article className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
                className="bg-[#111827] ring-2 ring-indigo-700 rounded-xl max-w-3xl w-full max-h-dvh overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-2xl font-bold">
                        {project.name}
                    </h2>
                    <button
                        onClick={closeModal}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                        aria-label="Close modal"
                    >
                        <LuX size={24} className="text-gray-300 " />
                    </button>
                </div>

                <div className="p-6">
                    <div className="mb-6 rounded-lg overflow-hidden">
                        {project.image === null ?
                            getIcon(project.techStack[0]) : <div>
                                <img onClick={() => window.open(project.image, "_blank")}
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-64 object-cover object-left-top"
                                />
                            </div>
                        }
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2 text-indigo-500">Summary</h3>
                        <p className="text-gray-400">
                            {project.summary}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-2 text-indigo-500">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1 font-bold bg-gray-300 text-indigo-700 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white/10 hover:bg-indigo-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300"
                            >
                                <SiGithub size={20} />
                                <span>GitHub</span>
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                            >
                                <LuGlobe size={20} />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}
