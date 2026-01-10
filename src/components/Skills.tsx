import { Brain, Database, Wrench, Package } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technologies',
    icon: Brain,
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
    <section id="skills" className="py-20 bg-slate-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Tech Stack & Expertise
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-slate-200 dark:border-neutral-800 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/50">
                    <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 dark:bg-emerald-600 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
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
