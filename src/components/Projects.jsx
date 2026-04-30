import React, { useState } from 'react';
import { Code, BrainCircuit, Globe, Terminal, Award, Lock, Github } from 'lucide-react';
import { projects as projectsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from './ProjectModal';

const categoryIcon = {
  ai: <BrainCircuit size={22} />,
  fullstack: <Globe size={22} />,
  other: <Terminal size={22} />,
};
const categoryColor = {
  ai: 'text-fuchsia-400 bg-fuchsia-500/10',
  fullstack: 'text-violet-400 bg-violet-500/10',
  other: 'text-cyan-400 bg-cyan-500/10',
};

/* Large featured card */
const FeaturedCard = ({ project, labels }) => (
  <div className="group relative flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-fuchsia-500/40 transition-all hover:-translate-y-1 overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>

    {project.image && (
      <div className="relative w-full h-48 shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />
      </div>
    )}

    <div className="flex flex-col flex-1 p-6">
    <div className="flex justify-between items-start mb-5">
      <div className={`p-3 rounded-xl ${categoryColor[project.category]}`}>
        {categoryIcon[project.category]}
      </div>
      <div className="flex gap-2 items-center flex-wrap justify-end">
        {project.award && (
          <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 text-yellow-400 text-[10px] font-bold rounded-lg uppercase border border-yellow-500/20">
            <Award size={10} /> {labels.awardLabel}
          </span>
        )}
        {project.hackathon && (
          <span className="px-2 py-1 bg-violet-500/10 text-violet-400 text-[10px] font-bold rounded-lg uppercase border border-violet-500/20">
            {labels.hackathonLabel}
          </span>
        )}
        {project.enterprise && (
          <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold rounded-lg uppercase border border-cyan-500/20">
            {labels.enterpriseLabel}
          </span>
        )}
        {project.isPrivate ? (
          <span title={labels.privateLabel} className="p-1.5 text-slate-600 bg-slate-800 rounded-lg border border-slate-700">
            <Lock size={15} />
          </span>
        ) : project.github ? (
          <a
            href={project.github}
            aria-label="GitHub"
            className="p-1.5 text-slate-500 hover:text-white bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-500 transition-all"
          >
            <Github size={15} />
          </a>
        ) : null}
      </div>
    </div>

    {project.hackathon && (
      <p className="mb-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider">
        {project.hackathon}
      </p>
    )}

    <h3 className="text-lg font-bold mb-2 group-hover:text-fuchsia-400 transition-colors leading-snug">
      {project.title}
    </h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
      {project.description}
    </p>

    {project.award && (
      <div className="mb-4 px-3 py-2 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
        <p className="text-yellow-400 text-xs font-semibold flex items-center gap-1.5">
          <Award size={12} /> {project.award}
        </p>
      </div>
    )}

    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="text-[10px] font-semibold px-2 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-700/60"
        >
          {tag}
        </span>
      ))}
    </div>
    </div>
  </div>
);

/* Compact card */
const ProjectCard = ({ project, labels, onOpenModal }) => (
  <div
    className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 hover:bg-slate-900/70 transition-all hover:-translate-y-0.5 cursor-pointer"
    onClick={onOpenModal}
  >
    {project.image && (
      <div className="relative w-full h-36 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover ${project.imagePosition ?? 'object-center'} group-hover:scale-105 transition-transform duration-700`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70" />
      </div>
    )}
    <div className="flex flex-col flex-1 p-5">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 rounded-lg text-sm ${categoryColor[project.category]}`}>
        {categoryIcon[project.category]}
      </div>
      <div className="flex gap-1.5 items-center">
        {project.award && <Award size={13} className="text-yellow-400" />}
        {project.isPrivate ? (
          <span title={labels.privateLabel} className="text-slate-600">
            <Lock size={13} />
          </span>
        ) : project.github ? (
          <a href={project.github} aria-label="GitHub" className="text-slate-500 hover:text-white transition-colors">
            <Github size={13} />
          </a>
        ) : null}
      </div>
    </div>
    <h3 className="text-sm font-bold mb-1.5 group-hover:text-fuchsia-400 transition-colors leading-snug">
      {project.title}
    </h3>
    <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-1 mt-auto pt-1">
      {project.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="text-[9px] font-semibold px-1.5 py-0.5 bg-slate-800 text-slate-500 rounded">
          {tag}
        </span>
      ))}
      {project.tags.length > 3 && (
        <span className="text-[9px] text-slate-600 px-1.5 py-0.5">
          +{project.tags.length - 3}
        </span>
      )}
    </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();
  const { sectionTitle, subtitle, tabs, items: tItems, ...labels } = t.projects;

  // Merge translated text with structural data from portfolioData
  const projects = projectsData.map((p, i) => ({
    ...p,
    title: tItems[i]?.title ?? p.title,
    description: tItems[i]?.description ?? p.description,
    hackathon: tItems[i]?.hackathon ?? p.hackathon ?? null,
    award: tItems[i]?.award ?? p.award ?? null,
    details: tItems[i]?.details ?? [],
  }));

  const tabList = [
    { key: 'all',       label: tabs.all },
    { key: 'ai',        label: tabs.ai },
    { key: 'fullstack', label: tabs.fullstack },
    { key: 'other',     label: tabs.other },
  ];

  const filtered =
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  const PAGE = 6;
  const visible = showAll ? filtered : filtered.slice(0, PAGE);
  const hasMore = filtered.length > PAGE;

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <Code className="text-fuchsia-500" size={22} />
              <h2 className="text-3xl font-bold">{sectionTitle}</h2>
            </div>
            <p className="text-slate-400 text-sm">{subtitle}</p>
          </div>

          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 shrink-0 flex-wrap gap-1">
            {tabList.map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key); setShowAll(false); }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === tab.key
                    ? 'bg-fuchsia-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project, idx) => (
            <ProjectCard key={idx} project={project} labels={labels} onOpenModal={() => setSelectedProject(project)} />
          ))}
        </div>

        {/* Show more / less */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-2.5 bg-slate-900 border border-slate-700 hover:border-fuchsia-500/50 text-slate-400 hover:text-fuchsia-300 text-xs font-semibold rounded-xl transition-all"
            >
              {showAll
                ? `▲ ${labels.showLess}`
                : `▼ ${labels.showMore.replace('{n}', filtered.length - PAGE)}`}
            </button>
          </div>
        )}

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            labels={labels}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
