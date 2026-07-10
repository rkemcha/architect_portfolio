import { useTranslation } from 'react-i18next';
import profilePic from '../assets/image_1.png';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm p-8 md:p-16 rounded-2xl transition-all duration-300">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-12">
          <img src={profilePic} alt="Salah Abdennebi" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg" />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary-dark tracking-tight">Salah Abdennebi</h1>
            <p className="text-xl font-light opacity-80 mb-6">{t('home.subtitle')}</p>
            <p className="text-base leading-relaxed opacity-70">
              {t('home.bio')}
            </p>
          </div>
        </div>

        <hr className="border-gray-200 my-12" />

        {/* Resume Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Experience */}
          <div>
            <h2 className="text-2xl font-serif mb-8 text-primary-dark">Experience</h2>
            <div className="space-y-8">
              <div className="group">
                <h3 className="font-semibold text-lg text-primary-dark">Principal Architect & Founder</h3>
                <p className="opacity-70 text-sm mb-1">Studio Abdennebi</p>
                <p className="opacity-50 text-sm mb-3">2021 - Present</p>
                <p className="opacity-70 text-sm leading-relaxed">
                  Leading all phases of design for high-end residential, commercial, and sustainable architecture projects. Focusing on minimalist aesthetics and environmental harmony.
                </p>
              </div>
              <div className="group">
                <h3 className="font-semibold text-lg text-primary-dark">Architectural Designer</h3>
                <p className="opacity-70 text-sm mb-1">Design & Build Atelier</p>
                <p className="opacity-50 text-sm mb-3">2023 - 2025</p>
                <p className="opacity-70 text-sm leading-relaxed">
                  Managed multi-disciplinary teams to deliver innovative urban spaces. Specialized in 3D visualization and client presentations.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Skills */}
          <div>
            <h2 className="text-2xl font-serif mb-8 text-primary-dark">Education</h2>
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="font-semibold text-lg text-primary-dark">Master of Architecture</h3>
                <p className="opacity-70 text-sm mb-1">Université de Blida</p>
                <p className="opacity-50 text-sm">2021 - 2026</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif mb-8 text-primary-dark">Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {['Sustainable Design', 'Urban Planning', '3D Visualization', 'Interior Architecture', 'Project Management', 'AutoCAD', 'Revit', 'Rhino'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-black/5 text-primary-dark text-sm rounded-full border border-black/5 hover:bg-black/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
