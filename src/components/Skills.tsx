import { Brain, Database, Wrench, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    title: 'Technologies',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', logo: 'scikitlearn' },
      { name: 'Data Science', logo: 'pandas' },
      { name: 'Deep Learning', logo: 'tensorflow' },
      { name: 'Computer Vision', logo: 'opencv' },
      { name: 'NLP (LLMs)', logo: 'huggingface' },
      { name: 'Data Engineering', logo: 'apachespark' },
      { name: 'Cloud-Native Architectures', logo: 'cncf' },
      { name: 'Distributed Systems', logo: 'apachekafka' },
      { name: 'MLOps', logo: 'databricks' },
      { name: 'DevOps', logo: 'gitlab' },
    ],
  },
  {
    title: 'Languages & Databases',
    icon: Database,
    skills: [
      { name: 'Python', logo: 'python' },
      { name: 'GoLang', logo: 'go' },
      { name: 'C/C++', logo: 'cplusplus' },
      { name: 'Qdrant', logo: 'vectordotdev' },
      { name: 'Weaviate', logo: 'databricks' },
      { name: 'Graph Databases', logo: 'neo4j' },
      { name: 'PostgreSQL', logo: 'postgresql' },
      { name: 'Elasticsearch', logo: 'elasticsearch' },
      { name: 'FAISS', logo: 'meta' },
      { name: 'Redis', logo: 'redis' },
      { name: 'Memcached', logo: 'amazondynamodb' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Docker', logo: 'docker' },
      { name: 'Kubernetes', logo: 'kubernetes' },
      { name: 'CI/CD', logo: 'githubactions' },
      { name: 'Jenkins', logo: 'jenkins' },
      { name: 'Terraform', logo: 'terraform' },
      { name: 'Prometheus', logo: 'prometheus' },
      { name: 'Grafana', logo: 'grafana' },
      { name: 'Git', logo: 'git' },
      { name: 'AWS', logo: 'amazonaws' },
      { name: 'Google Cloud', logo: 'googlecloud' },
      { name: 'Azure', logo: 'azure' },
      { name: 'IBM Cloud', logo: 'ibm' },
      { name: 'OCI', logo: 'oracle' },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Layers,
    skills: [
      { name: 'FastAPI', logo: 'fastapi' },
      { name: 'Flask', logo: 'flask' },
      { name: 'Langchain', logo: 'chainlink' },
      { name: 'LlamaIndex', logo: 'python' },
      { name: 'Gin', logo: 'go' },
      { name: 'TensorFlow', logo: 'tensorflow' },
      { name: 'PyTorch', logo: 'pytorch' },
      { name: 'Airflow', logo: 'apacheairflow' },
      { name: 'Nginx', logo: 'nginx' },
      { name: 'Celery', logo: 'python' },
    ],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const logoColor = theme === 'dark' ? 'white' : '334155';

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
                      <img
                        src={`https://cdn.simpleicons.org/${skill.logo}/${logoColor}`}
                        alt={skill.name}
                        className="w-4 h-4"
                      />
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
