import { Github, Zap, Database, FileText, FileText as Publication } from 'lucide-react';

const projects = [
  {
    title: 'Scalable spaCy Server',
    description: 'Enterprise-grade NER pipeline detecting sensitive data with custom-trained spaCy models at scale.',
    icon: FileText,
    highlights: [
      'Dynamic model registry enabling hot-swapping of NLP models without service interruption',
      'Optimized memory usage with shared disk MMap technique reducing RAM footprint by 60%',
      'FastAPI microservice with LFU caching and asyncio processing',
      'Achieved 3000 requests/5 minutes with average latency of 800ms',
      'Comprehensive CI/CD pipeline with automated model regression testing',
    ],
    tags: ['Python', 'spaCy', 'FastAPI', 'NLP', 'Docker'],
    github: null,
    external: null,
  },
  {
    title: 'Image Super Resolution',
    description: 'SRCNN architecture implementing end-to-end mapping for low-to-high resolution image transformation.',
    icon: Zap,
    highlights: [
      'Three-phase CNN with feature extraction, mapping, and reconstruction',
      'State-of-the-art deep convolutional networks with architecture optimizations',
      'Trained model reducing MSE by 30% compared to traditional bicubic interpolation',
      'Performance evaluation using PSNR, SSIM, and MSE metrics',
      'TensorRT optimized environment achieving 5x faster inference',
    ],
    tags: ['TensorFlow', 'CNN', 'Computer Vision', 'TensorRT', 'CUDA'],
    github: 'https://github.com/Mohitkr95/image-super-resolution',
    external: 'https://ieeexplore.ieee.org/document/9596455',
  },
  {
    title: 'Textual Similarity Analysis',
    description: 'Semantic search using Universal Sentence Encoder for high-dimensional text embedding vector generation.',
    icon: Database,
    highlights: [
      'Vector database using HNSW algorithm for approximate nearest neighbor search',
      'TensorFlow Serving with custom model signatures for high-throughput embedding',
      'Cosine similarity computation pipeline with vectorized operations',
      'Achieved 6000 requests/5 minutes throughput with average latency of 160ms',
      'A/B testing framework comparing different embedding models',
    ],
    tags: ['TensorFlow', 'Vector DB', 'NLP', 'Embeddings', 'HNSW'],
    github: null,
    external: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Featured Work
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800 overflow-hidden hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex-shrink-0">
                    <project.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start sm:items-center justify-between gap-2 mb-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.external && (
                          <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                            title="View Publication"
                          >
                            <Publication className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">
                      {project.description}
                    </p>

                    <ul className="space-y-1 mb-4">
                      {project.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                        >
                          <span className="text-emerald-500">-</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-slate-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
