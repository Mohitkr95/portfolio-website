import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Machine Learning Engineer',
    company: 'TechnoMile',
    period: 'Feb 2025 - Present',
    description: 'Building end-to-end, state-of-the-art AI products for document intelligence.',
    highlights: [
      'Develop Generative AI models for enhanced contract understanding and efficient information extraction',
      'Optimize LLM throughput for various use-cases across cloud and on-premise deployment environments',
      'Build robust AI infrastructure for seamless metadata extraction from complex documents at enterprise scale',
      'Implement serverless architecture for AI microservices ensuring high availability',
      'Reduce inference latency by 45% while increasing model accuracy for key document processing workflows',
    ],
  },
  {
    title: 'ML & MLOps Lead',
    company: 'Sirion',
    period: 'Dec 2023 - Feb 2025',
    description: 'Developing and scaling enterprise-grade CLM software for Fortune 500 companies.',
    highlights: [
      'Directed MLOps operations managing system processing 10,000+ documents daily with 99.9% availability',
      'Led critical infrastructure transition from GCP Kubernetes to AWS EKS for enterprise ML workloads',
      'Implemented event-driven autoscaling via KEDA for Kubernetes clusters',
      'Achieved 60% reduction in cloud infrastructure expenses while maintaining all performance SLAs',
      'Working with H100, A100, A10 GPU stacks to support optimal performance of LLMs',
    ],
  },
  {
    title: 'Senior Machine Learning Engineer',
    company: 'Aligne Consulting',
    period: 'Aug 2021 - Dec 2023',
    description: 'Designing and implementing robust machine learning microservices for Axion SaaS Product.',
    highlights: [
      'Executed POCs using Large Language Models for upcoming product ML use cases',
      'Led migration of on-premises solutions to cloud-based SaaS environment',
      'Maintained and enhanced CI/CD pipelines ensuring optimal infrastructure availability',
      'Managed vector databases with high availability for serving multiple product verticals',
      'Architected distributed, load-balanced model serving infrastructure to handle 500+ concurrent inference requests',
    ],
  },
  {
    title: 'Founding Machine Learning Engineer',
    company: 'Sankshit Private Limited - Aaiena',
    period: 'Jan 2020 - Jul 2021',
    description: 'Redesigned and modernized apparel shopping experience using deep learning and computer vision.',
    highlights: [
      'Led ML & engineering teams, instilling best software practices across the company',
      'Built vision pipeline returning accurate human body measurements using deep learning pose estimation',
      'Created a virtual try-on feature that renders user avatars wearing selected outfits in real-time',
      'Contributed to deployment and scalability serving approximately 100,000 daily active users',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Work History
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-neutral-800 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-white dark:border-black z-10" />

                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-slate-50 dark:bg-neutral-900 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-neutral-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors">
                    <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                      {index % 2 !== 0 && <Calendar className="w-4 h-4 text-emerald-500 md:hidden" />}
                      <span className="text-sm text-emerald-600 dark:text-emerald-400">{exp.period}</span>
                      {index % 2 === 0 && <Calendar className="w-4 h-4 text-emerald-500 hidden md:block" />}
                    </div>

                    <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase className="w-4 h-4 text-sky-500" />
                      <span className="font-medium text-sky-600 dark:text-sky-400">{exp.company}</span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.title}
                    </h3>

                    <p className={`text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className={`text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="text-emerald-500 mt-1 flex-shrink-0">-</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
