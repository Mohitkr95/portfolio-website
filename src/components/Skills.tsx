import { Brain, Database, Wrench, Package } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technologies',
    icon: Brain,
    color: 'emerald',
    skills: [
      'Machine Learning',
      'Data Science',
      'Deep Learning',
      'Computer Vision',
      'NLP (LLMs)',
      'Data Engineering',
      'Cloud-Native Architectures',
      'Distributed Systems',
      'MLOps',
      'DevOps',
    ],
  },
  {
    title: 'Languages & Databases',
    icon: Database,
    color: 'sky',
    skills: [
      'Python',
      'GoLang',
      'C/C++',
      'Qdrant',
      'Weaviate',
      'Graph Databases',
      'PostgreSQL',
      'Elasticsearch',
      'FAISS',
      'Redis',
      'Memcached',
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    color: 'orange',
    skills: [
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Jenkins',
      'Terraform',
      'Prometheus',
      'Grafana',
      'Git',
      'AWS',
      'Google Cloud',
      'Azure',
      'IBM Cloud',
      'OCI',
    ],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Package,
    color: 'blue',
    skills: [
      'FastAPI',
      'Flask',
      'Langchain',
      'LlamaIndex',
      'Gin',
      'TensorFlow',
      'PyTorch',
      'Airflow',
      'Nginx',
      'Celery',
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
            Tech Stack
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-xl p-5 border border-slate-200 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 group"
              >
                <div className={`inline-flex p-2.5 rounded-lg bg-${category.color}-50 dark:bg-${category.color}-950/30 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 text-${category.color}-600 dark:text-${category.color}-400`} />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-slate-300 rounded hover:bg-emerald-100 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-default"
                    >
                      {skill}
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
