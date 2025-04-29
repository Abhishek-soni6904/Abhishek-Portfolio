import React, { useState } from 'react';
import { FaReact, FaPython, FaPhp } from 'react-icons/fa';
import ProjectDetail from './ProjectDetail';

export default function ProjectCards({ projects }) {
    const [activeProject, setActiveProject] = useState(null);
    const getIcon = (tech = "python") => {
        const iconMap = {
            react: FaReact,
            python: FaPython,
            php: FaPhp,
        };
        const key = tech.toLowerCase();
        const Icon = iconMap[key];
        return Icon ? <Icon size={100} className="mt-15 mx-auto text-indigo-500" /> : null;
    };
    const toggleActiveProject = (index) => {
        setActiveProject(index);
    };
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => toggleActiveProject(index)}
                        role="button"
                        tabIndex={0}
                        className="group relative bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 hover:ring-2 hover:ring-indigo-500/30 transition-all duration-300 cursor-pointer h-full flex flex-col"
                    >
                        <div className="h-48 overflow-hidden">
                            {project.image === null ?
                                getIcon(project.techStack[0]) : <img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover h-full w-full object-left-top"
                                />
                            }
                        </div>
                        <h3 className="p-5 text-xl font-semibold mt-2 text-gray-300 text-center">
                            {project.name}
                        </h3>
                        <div className="absolute inset-0 bg-indigo-500/10 backdrop-blur-xl backdrop-brightness-25 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 rounded-xl">
                            <span className="px-4 py-2 bg-indigo-700 text-white rounded-lg text-sm">
                                Click to View Details
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            {activeProject!==null && <ProjectDetail setActiveProject={setActiveProject} activeProject={projects[activeProject]} />}
        </>
    );
}