export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-dark-600 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-mono text-primary-400 font-semibold text-sm">
          &lt;<span className="text-white">Ahmad's</span><span className="text-primary-300">Nadeem</span> /&gt;
        </a>

        <p className="text-gray-600 text-sm text-center">
          &copy; {year} All rights reserved. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex gap-4">
          {[
            
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary-400 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
