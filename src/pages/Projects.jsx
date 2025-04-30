import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import TechFilters from '../components/TechFilters';
import projectData from "../assets/projectsData.js"
import ProjectCards from '../components/ProjectCards.jsx';
export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTechs, setSelectedTechs] = useState([])
  const filteredProjects = projectData.filter((project) => {

    const matchesSearch = project.name.toLowerCase().includes(searchTerm) || project.summary.toLowerCase().includes(searchTerm) || project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm))

    const matchesTech = selectedTechs.length === 0 || selectedTechs.every((tech) => project.techStack.includes(tech))
    return matchesSearch && matchesTech
  })

  return (
    <section className="md:py-10" >
      <header className="content-separator">
        <h1 className='text-4xl md:text-6xl poppins font-semibold border-b-4 border-indigo-500 pb-2 inline-block'>Projects</h1>
        <div className='mt-6'>
          <div className="relative group">
            <input
              type="text"
              id="search"
              placeholder="Search for a project..."
              aria-label="Search Projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              className="w-full py-3 px-7 bg-white/5 ring-1 ring-white/20 focus:ring-2 focus:ring-indigo-500 rounded-lg focus:outline-none text-gray-300 placeholder:text-white/30 transition-all duration-300 hover:ring-indigo-500/50 shadow-lg"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-500 transition duration-300">
              <FaSearch className="text-lg" />
            </div>
          </div>
          <TechFilters selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs} />
        </div>
      </header>
      <section className="mt-10 py-8">
        <ProjectCards projects={filteredProjects} />
      </section>
    </section>
  )
}
