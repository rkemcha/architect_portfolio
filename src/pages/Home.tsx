import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="relative z-20 text-center px-6 mt-12">
          <h1 className="text-5xl md:text-8xl font-serif mb-6 tracking-tight drop-shadow-lg">
            Salah Abdennebi
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto drop-shadow-md mb-8">
            {t('home.subtitle')}
          </p>
          <p className="text-sm md:text-base font-light opacity-80 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {t('home.bio')}
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className="group block transition-all duration-300 hover:opacity-100 opacity-90 bg-white/50 backdrop-blur-md border border-gray-300/50 hover:border-gray-400 p-8 md:p-12 rounded-2xl"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl md:text-6xl font-serif font-light text-primary-dark/40 group-hover:text-primary-dark transition-colors drop-shadow-sm">
                  {project.index}
                </span>
                <div className="text-right">
                  <h3 className="text-2xl font-serif mb-2 drop-shadow-md">{project.title}</h3>
                <p className="opacity-70 text-sm font-light drop-shadow-md">{project.description}</p>
                </div>
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
