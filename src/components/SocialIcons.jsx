import React from 'react';
import { SiGithub, SiInstagram, SiLinkedin, SiGmail } from 'react-icons/si';

const SocialLinks = [
    {
        link: "https://www.linkedin.com/in/abhishek-soni-662028331/",
        label: "LinkedIn",
        Icon: SiLinkedin
    },
    {
        link: "https://github.com/Abhishek-soni6904",
        label: "GitHub",
        Icon: SiGithub
    },
    {
        link: "https://www.instagram.com/_abhishek._.soni_",
        label: "Instagram",
        Icon: SiInstagram
    },
    {
        link: "mailto:abhisheks6904@gmail.com",
        label: "Gmail",
        Icon: SiGmail
    }
];

export default function SocialIcons() {
    return (
        <div className='flex gap-2 flex-1' aria-label="Social links">
            {
                SocialLinks.map(({ link, label, Icon }) => (
                    <a
                        key={label}
                        href={link}
                        className=' w-10 h-10 text-xl text-white rounded-full bg-white/20 inline-flex items-center justify-center hover:bg-indigo-500 transition'
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                    >
                        <Icon />
                    </a>
                ))
            }
        </div >
    );
}
