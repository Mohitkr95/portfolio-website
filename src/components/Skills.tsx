const skillCategories = [
  {
    title: 'Technologies',
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
    <section id="skills" className="py-24 bg-slate-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Tech Stack
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-neutral-800"
            >
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-slate-300 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
