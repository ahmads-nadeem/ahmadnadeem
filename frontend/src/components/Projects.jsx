import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
// import esthetics from '../assets/esthetics_project.webp'
// import remini from '../assets/remini.webp'
// import pos from '../assets/restuarent_pos.webp'
// Placeholder data — replace this with a real API call when your backend is ready.
// Example: const res = await fetch('https://your-api.com/projects')
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'Tool-Base – Web Utilities Platform',
    description: 'A multi-tool web application featuring SEO audit utilities, image & video compression, PDF & resume generation, youtube video downloader and an AI chatbot assistant etc .',
    tags: ['Next.js', 'Tailwind CSS', 'FastAPI', 'Docker'],
    image: '/toolbasewebsite.webp',
    liveUrl: 'https://toolbasewebsite.vercel.app',
    githubUrl: 'https://github.com/ahmads-nadeem/Tool-Base',
    featured: true,
  },
  {
    id: 2,
    title: 'Doctor Appointment & Booking System',
    description: 'A modern healthcare booking web application built with Next.js, allowing patients to schedule doctor appointments online and view clinic schedules with a seamless user experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/doctor.webp',
    liveUrl: 'https://drshaguftausman.vercel.app/',
    githubUrl: 'https://github.com/asyouknowme-clients/Doctor-Frontend',
    featured: true,
  },
  {
    id: 3,
    title: 'Electrical Store & Services Platform',
    description: 'An e-commerce platform to buy electrical items like LED lights and fans, and book professional electrician services online.',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL Database'],
    image: '/electricstore.webp',
    liveUrl: 'https://chohanelectricstore.vercel.app/',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Salma Hospital Management System',
    description: 'A hospital management platform for patient scheduling, medical checkups, doctor portals, and clinic billing workflows.',
    tags: ['React', 'Tailwind CSS','Node.js', 'Express.js', 'MySQL Database'],
    image: '/smh.webp',
    liveUrl: 'https://smh-hospital.vercel.app/',
    githubUrl: 'https://github.com/ahmads-nadeem/SMH-Hospital',
    featured: false,
  },
  {
    id: 5,
    title: 'Technmark – Digital Marketing & Web Agency',
    description: 'A global agency web platform for SEO, Google Ads, and custom development services, integrated with an AI chatbot assistant.',
    tags: ['Next.js', 'Tailwind CSS', 'FastAPI','AI Chatbot'],
    image: '/technmark.webp',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Remini MOD APK Landing Platform',
    description: 'A targeted WordPress landing platform built for downloading modified APKs like Remini, optimized for fast downloads and high SEO search ranking.',
    tags: ['WordPress', 'Elementor Page Builder'],
    image: '/remini.webp',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

const allTags = ['All', 'React', 'Next.js', 'Node.js', 'FastAPI', 'MySQL', 'WordPress']

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`group bg-dark-700 border border-dark-500 rounded-2xl overflow-hidden hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-dark-700/20 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-dark-600 border border-dark-400 text-gray-400 px-2 py-1 rounded-md font-mono">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {
            project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex-1 text-center text-sm py-2 bg-primary-500/10 border border-primary-500/30 text-primary-400 rounded-lg hover:bg-primary-500/20 transition-colors font-medium"
              >
                Live Demo
              </a>
            ) :
              (
                null
              )
          }
          {
            project.githubUrl ? (<a
              href={project.githubUrl}
              target='_blank'
              className="flex-1 text-center text-sm py-2 bg-dark-600 border border-dark-400 text-gray-400 rounded-lg hover:text-white hover:border-gray-400 transition-colors font-medium"
            >
              GitHub
            </a>) :
              (
                null
              )
          }

        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState('All')

  useEffect(() => {
    // When your REST API is ready, replace this with:
    // fetch('https://your-api.com/projects')
    //   .then(res => res.json())
    //   .then(data => setProjects(data))
    //   .catch(() => setProjects(FALLBACK_PROJECTS))
    //   .finally(() => setLoading(false))
    const timer = setTimeout(() => {
      setProjects(FALLBACK_PROJECTS)
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeTag.toLowerCase())))

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(32,169,161,0.06)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-subheading">What I've Built</p>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A selection of projects I've worked on — each one a chance to solve real problems with clean, maintainable code.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTag === tag
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 border border-dark-500 text-gray-400 hover:border-primary-500/40 hover:text-primary-400'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-dark-700 border border-dark-500 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-dark-600" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-dark-600 rounded w-3/4" />
                  <div className="h-3 bg-dark-600 rounded" />
                  <div className="h-3 bg-dark-600 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No projects found for this filter.
          </div>
        )}
      </div>
    </section>
  )
}
