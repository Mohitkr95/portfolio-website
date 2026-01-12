import { Brain, Code2, Database, Wrench, Layers, Zap, Cloud, GitBranch, Boxes, Network } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technologies',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', icon: '🤖' },
      { name: 'Data Science', icon: '📊' },
      { name: 'Deep Learning', icon: '🧠' },
      { name: 'Computer Vision', icon: '👁️' },
      { name: 'NLP (LLMs)', icon: '💬' },
      { name: 'Data Engineering', icon: '⚙️' },
      { name: 'Cloud-Native Architectures', icon: '☁️' },
      { name: 'Distributed Systems', icon: '🌐' },
      { name: 'MLOps', icon: '🔄' },
      { name: 'DevOps', icon: '🚀' },
    ],
  },
  {
    title: 'Languages & Databases',
    icon: Database,
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'GoLang', icon: '🔷' },
      { name: 'C/C++', icon: '⚡' },
      { name: 'Qdrant', icon: '🔍' },
      { name: 'Weaviate', icon: '🕸️' },
      { name: 'Graph Databases', icon: '🕸️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Elasticsearch', icon: '🔎' },
      { name: 'FAISS', icon: '📐' },
      { name: 'Redis', icon: '⚡' },
      { name: 'Memcached', icon: '💾' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'CI/CD', icon: '♻️' },
      { name: 'Jenkins', icon: '🔧' },
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Prometheus', icon: '📈' },
      { name: 'Grafana', icon: '📊' },
      { name: 'Git', icon: '📝' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Azure', icon: '☁️' },
      { name: 'IBM Cloud', icon: '☁️' },
      { name: 'OCI', icon: '☁️' },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Layers,
    skills: [
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Flask', icon: '🌶️' },
      { name: 'Langchain', icon: '🔗' },
      { name: 'LlamaIndex', icon: '🦙' },
      { name: 'Gin', icon: '🍸' },
      { name: 'TensorFlow', icon: '🔷' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Airflow', icon: '🌊' },
      { name: 'Nginx', icon: '🟢' },
      { name: 'Celery', icon: '🥬' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Tech Stack
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-neutral-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg">
                    <IconComponent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-slate-300 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-default"
                    >
                      <span className="text-base">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
