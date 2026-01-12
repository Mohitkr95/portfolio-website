import { Code2, Server, Brain, Cloud } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Expertise',
    description: 'Deep knowledge in designing scalable AI solutions for document intelligence and data processing pipelines.',
  },
  {
    icon: Server,
    title: 'MLOps & Infrastructure',
    description: 'Expert in high-performance inference architectures with HA, disaster recovery, and fault tolerance.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Extensive experience with AWS, GCP, Azure, and OCI for enterprise ML workloads.',
  },
  {
    icon: Code2,
    title: 'Production Systems',
    description: 'Building robust systems processing 10,000+ documents daily with 99.9% availability.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-neutral-900 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-neutral-800 font-mono text-xs sm:text-sm overflow-x-auto">
              <div className="text-slate-500 dark:text-slate-400 mb-3"># profile.py</div>
              <div className="text-slate-700 dark:text-slate-300 space-y-1">
                <div><span className="text-amber-600 dark:text-amber-400">class</span> <span className="text-emerald-600 dark:text-emerald-400">MohitKumar</span>:</div>
                <div className="pl-4">name = <span className="text-sky-600 dark:text-sky-400">"Mohit Kumar"</span></div>
                <div className="pl-4">role = <span className="text-sky-600 dark:text-sky-400">"Senior ML Engineer"</span></div>
                <div className="pl-4">location = <span className="text-sky-600 dark:text-sky-400">"New Delhi, India"</span></div>
                <div className="pl-4">experience = <span className="text-amber-600 dark:text-amber-400">5.5</span>  <span className="text-slate-500"># years</span></div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a seasoned AI Architect and ML Engineer with a notable record of successfully
              managing enterprise-grade applications at scale. With around 5.5 years of experience
              in Machine Learning, I am an avid learner dedicated to staying abreast of cutting-edge
              technologies and research.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              From small solo projects to production-level creative collaborations, all are within
              my most pertinent skills. I firmly believe that hard work eventually pays off, and
              I am confident that each day brings me closer to reaching my goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-neutral-900 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-neutral-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
