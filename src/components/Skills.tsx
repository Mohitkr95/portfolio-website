import { Brain, Database, Wrench, Package, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technologies',
    icon: Brain,
    gradient: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Machine Learning', level: 95 },
      { name: 'Data Science', level: 92 },
      { name: 'Deep Learning', level: 90 },
      { name: 'Computer Vision', level: 88 },
      { name: 'NLP (LLMs)', level: 93 },
      { name: 'Data Engineering', level: 85 },
      { name: 'Cloud-Native Architectures', level: 87 },
      { name: 'Distributed Systems', level: 86 },
      { name: 'MLOps', level: 91 },
      { name: 'DevOps', level: 84 },
    ],
  },
  {
    title: 'Languages & Databases',
    icon: Database,
    gradient: 'from-sky-500 to-blue-500',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'GoLang', level: 85 },
      { name: 'C/C++', level: 80 },
      { name: 'Qdrant', level: 87 },
      { name: 'Weaviate', level: 86 },
      { name: 'Graph Databases', level: 82 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Elasticsearch', level: 88 },
      { name: 'FAISS', level: 89 },
      { name: 'Redis', level: 91 },
      { name: 'Memcached', level: 83 },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    gradient: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Docker', level: 93 },
      { name: 'Kubernetes', level: 90 },
      { name: 'CI/CD', level: 89 },
      { name: 'Jenkins', level: 85 },
      { name: 'Terraform', level: 87 },
      { name: 'Prometheus', level: 84 },
      { name: 'Grafana', level: 86 },
      { name: 'Git', level: 95 },
      { name: 'AWS', level: 92 },
      { name: 'Google Cloud', level: 88 },
      { name: 'Azure', level: 83 },
      { name: 'IBM Cloud', level: 80 },
      { name: 'OCI', level: 81 },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Package,
    gradient: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'FastAPI', level: 94 },
      { name: 'Flask', level: 91 },
      { name: 'Langchain', level: 90 },
      { name: 'LlamaIndex', level: 88 },
      { name: 'Gin', level: 86 },
      { name: 'TensorFlow', level: 92 },
      { name: 'PyTorch', level: 93 },
      { name: 'Airflow', level: 87 },
      { name: 'Nginx', level: 85 },
      { name: 'Celery', level: 89 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/50 rounded-full mb-4 border border-emerald-200 dark:border-emerald-900">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Expertise</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-neutral-800 hover:border-slate-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-neutral-950/50 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-neutral-800 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                          style={{
                            width: `${skill.level}%`,
                            transform: 'translateX(0)',
                          }}
                        />
                      </div>
                    </div>
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
