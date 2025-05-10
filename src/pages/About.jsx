import React from 'react'
import SkillBadges from '../components/SkillBadges'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section className="md:py-10">
      <header className="pb-8 content-separator">
        <h1 className='text-4xl md:text-6xl poppins font-semibold border-b-4 border-indigo-500 pb-2 inline-block'>About Me</h1>
        <p className='text-gray-300 text-md sm:text-lg mt-6 '>I'm a self-driven and detail-focused Computer Applications student with a solid background in web development, programming, and problem-solving. I'm excited about learning new emerging technologies, developing scalable and user-friendly digital solutions, and working on meaningful projects. I'm now looking for an entry-level position in the IT sector where I can utilize my skills, develop professionally, and work with vibrant teams</p>
      </header>

      <section className="mt-10 content-separator">
        <SectionHeading number={1} >Education</SectionHeading>
        <ul className="mt-6 space-y-6 sm:pl-11">
          <li className="content-box">
            <h3 className=' font-medium text-lg'>Vision College of Commerce, Chittorgarh</h3>
            <p className='text-gray-400 mt-2 sm:ml-4' >Bachelor of Computer Application | June 2022-August 2025</p>
          </li>
          <li className="content-box">
            <h3 className=' font-medium text-lg'>Velocity High Sr. Sec. School, Chittorgarh</h3>
            <p className='text-gray-400 mt-2 sm:ml-4'>12th (Science) | Completed in 2022</p>
            <p className='text-gray-400 sm:ml-4'>10th | Completed in 2020</p>
          </li>
        </ul>
      </section>

      <section className="mt-10 content-separator">
      <SectionHeading number={2} >Experience</SectionHeading>
        <ul className="mt-6 sm:pl-11">
          <li className="content-box">
            <h3 className=" font-medium text-lg">Web Development Intern</h3>
            <ul className="list-disc pl-5 mt-3 space-y-2 sm:ml-4">
              <li className="text-gray-400">At SkillCraft Technology between October 2024 to November 2024</li>
              <li className="text-gray-400">Completed four projects using HTML, CSS, JavaScript: Product Landing Page, Stopwatch, Tic-Tac-Toe Game, and To-Do Web App.</li>
              <li className="text-gray-400">
                Source code available on
                <a href="https://github.com/Abhishek-soni6904/SkillCraft-Internship-Projects-Oct-Nov-2024" className="text-indigo-500 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>.
              </li>
              <li className="text-gray-400">Earned a Certificate of Completion and a Letter of Recommendation.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mt-10 py-8">
      <SectionHeading number={3} >Skills</SectionHeading>
        <div className="mt-6 sm:pl-11">
          <SkillBadges />
        </div>
      </section>
    </section>
  )
}