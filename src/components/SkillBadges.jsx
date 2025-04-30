import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaPhp, FaCopyright } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandCpp } from "react-icons/tb";

const badges = [
    { name: 'HTML5', Icon: FaHtml5, description: 'Proficient in semantic tags and core HTML5 elements, used in multiple projects for better accessibility and SEO.' },
    { name: 'CSS3', Icon: FaCss3Alt, description: 'Skilled in layouts, animations, transitions, and pseudo-classes. Applied in various projects for dynamic designs.' },
    { name: 'JavaScript', Icon: FaJsSquare, description: 'Good understanding of ES6+ features including AJAX, DOM manipulation, and event handling. Utilized in multiple projects for interactivity.' },
    { name: 'React', Icon: FaReact, description: 'Experience with React.js for building dynamic user interfaces. Familiar with hooks, state management, and component lifecycle.' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, description: 'Basic proficiency in utility-first CSS, used in two projects for rapid, responsive design implementation.' },
    { name: 'PHP', Icon: FaPhp, description: 'Basic knowledge of PHP, used in one project for backend development.' },
    { name: 'Python', Icon: FaPython, description: 'Basic knowledge of Python made two very simple projects.' },
    { name: 'C++', Icon: TbBrandCpp, description: 'Basic knowledge of C++' },
    { name: 'C language', Icon: FaCopyright, description: 'Basic knowledge of C, used in academic for Dsa.' },
];

export default function SkillBadges() {
    const [activeSkill, setActiveSkill] = useState(null);

    const toggleSkill = (skillName) => {
        setActiveSkill(prevSkill => prevSkill === skillName ? null : skillName);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {badges.map(({ name, Icon, description }) => (
                <div
                    onKeyDown={(e) => e.key === "Enter" && toggleSkill(name)}
                    onClick={() => toggleSkill(name)}
                    role="button"
                    tabIndex={0}
                    className={`group flex items-center flex-col gap-4 p-4 rounded-lg bg-white/5 relative shadow-lg hover:shadow-indigo-500/20 focus:ring-2 focus:ring-indigo-500/30 outline-0 transition-all duration-300 ${activeSkill === name ? "ring-2 ring-indigo-500/30" : "hover:ring-2 hover:ring-indigo-500/30"}`}
                    key={name}
                >
                    <Icon className="text-6xl text-indigo-500" />
                    <h3 className="text-lg font-semibold mb-1">{name}</h3>
                    <div
                        className={`text-center absolute inset-0 bg-indigo-500/5 backdrop-blur-xl backdrop-brightness-50 w-full h-full rounded-lg p-4 flex flex-col items-center justify-center transition-opacity duration-300 ${activeSkill === name ? 'opacity-100' : 'opacity-0 hover:opacity-100 group-focus:opacity-100'}`}
                    >
                        <h3 className="text-xl font-bold mb-1 text-indigo-500">{name}</h3>
                        <p className="text-sm text-gray-300">{description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}