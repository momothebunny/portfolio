import React, { useEffect } from 'react';
import { X, Award, Lock, Github, BrainCircuit, Globe, Terminal } from 'lucide-react';

const categoryIcon = {
  ai: <BrainCircuit size={16} />,
  fullstack: <Globe size={16} />,
  other: <Terminal size={16} />,
};

const categoryColor = {
  ai: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/25',
  fullstack: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
  other: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
};

const categoryLabel = {
  ai: 'AI / ML',
  fullstack: 'Full Stack',
  other: 'Other',
};

const ProjectModal = ({ project, labels, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />

      {/* Modal panel */}
      <div
        className="animate-modal-in relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top image */}
        {project.image && (
          <div className="relative w-full h-52 sm:h-64 overflow-hidden rounded-t-2xl shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover ${project.imagePosition ?? 'object-center'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900" />
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 transition-all z-20"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="p-6 pt-5">
          {/* Badge row */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold rounded-lg border ${categoryColor[project.category]}`}>
              {categoryIcon[project.category]}
              {categoryLabel[project.category]}
            </span>
            {project.award && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-500/10 text-yellow-400 text-[11px] font-bold rounded-lg border border-yellow-500/20 uppercase">
                <Award size={11} /> {labels.awardLabel}
              </span>
            )}
            {project.hackathon && (
              <span className="px-2.5 py-1 bg-violet-500/10 text-violet-400 text-[11px] font-bold rounded-lg border border-violet-500/20 uppercase">
                {labels.hackathonLabel}
              </span>
            )}
            {project.enterprise && (
              <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 text-[11px] font-bold rounded-lg border border-cyan-500/20 uppercase">
                {labels.enterpriseLabel}
              </span>
            )}
            {project.isPrivate && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-slate-800 text-slate-400 text-[11px] font-bold rounded-lg border border-slate-700 uppercase">
                <Lock size={11} /> {labels.privateLabel}
              </span>
            )}
          </div>

          {/* Hackathon name */}
          {project.hackathon && (
            <p className="mb-2 text-[11px] font-semibold text-violet-400 uppercase tracking-wider">
              {project.hackathon}
            </p>
          )}

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">{project.title}</h2>

          {/* Award pill */}
          {project.award && (
            <div className="mb-4 px-3 py-2 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-400 text-xs font-semibold flex items-center gap-1.5">
                <Award size={12} /> {project.award}
              </p>
            </div>
          )}

          {/* Short description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Detailed bullet points */}
          {project.details && project.details.length > 0 && (
            <div className="mb-5">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="flex-1 h-px bg-slate-800"></span>
                {labels.detailsLabel}
                <span className="flex-1 h-px bg-slate-800"></span>
              </h4>
              <ul className="space-y-3">
                {project.details.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-fuchsia-500/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-700/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub button */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-sm font-semibold text-white rounded-xl transition-all"
            >
              <Github size={15} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
