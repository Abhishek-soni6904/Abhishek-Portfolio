import React from 'react';

const filters = ["React", "PHP", "MySQL", "CSS", "JavaScript", "Tailwind CSS"];

export default function TechFilters({ selectedTechs, setSelectedTechs }) {
    const toggleSelected = (filter) => {
        if (selectedTechs.includes(filter)) {
            setSelectedTechs((selectedTechs) => selectedTechs.filter((tech) => tech !== filter))
        } else {
            setSelectedTechs([...selectedTechs, filter])
        }
    }

    return (
        <div className='mt-5 flex items-center justify-center flex-wrap gap-2'>
            {filters.map((filter) => (
                <button onClick={() => toggleSelected(filter)}
                    key={filter}
                    className={` max-md:text-sm text-gray-300 hover:bg-indigo-500 hover:text-white cursor-pointer rounded-full px-4 py-2 transition duration-300 ${selectedTechs.includes(filter) ? "bg-indigo-700" : "bg-white/5 "}`}>
                    {filter}
                </button>
            ))}
        </div>
    );
}

