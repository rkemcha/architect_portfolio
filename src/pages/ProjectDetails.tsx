import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Download, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <h2 className="text-2xl font-serif">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-16 opacity-70 hover:opacity-100 transition-opacity uppercase tracking-wider text-sm"
        >
          <ArrowLeft size={16} />
          {t('project.back')}
        </Link>

        <header className="border-b border-white/10 pb-12">
        <h1 className="text-5xl md:text-7xl font-serif mb-8">{project.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
              {project.description}
            </p>
          </div>
          <div className="space-y-4 text-sm uppercase tracking-wider border-l border-white/10 pl-6">
            <div>
              <span className="opacity-50 block mb-1">{t('project.year')}</span>
              <span className="font-semibold">{project.year}</span>
            </div>
            <div>
              <span className="opacity-50 block mb-1">{t('project.location')}</span>
              <span className="font-semibold">{project.location}</span>
            </div>
            <div>
              <span className="opacity-50 block mb-1">{t('project.scope')}</span>
              <span className="font-semibold">{project.scope}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Download Action */}
      <div className="flex justify-center md:justify-start">
        <a 
          href="/mock-docs/project-specs.pdf" 
          download="project-specs.pdf"
          className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors rounded-full"
        >
          <Download size={18} />
          {t('nav.downloadPdf')}
        </a>
      </div>

      {/* Image Gallery */}
      <div className="space-y-4 md:space-y-8">
        {project.images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${project.title} gallery ${idx + 1}`}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        ))}
      </div>
      </div>
    </div>
  );
}
