import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

const titles = [
  'AI Solution Architect',
  'Senior ML Engineer',
  'MLOps Specialist',
  'Cloud Infrastructure Expert',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-black dark:via-neutral-950 dark:to-black" />

      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]">
        <div className="absolute top-24 left-4 sm:left-10 font-mono text-xs text-slate-900 dark:text-slate-100 whitespace-pre">
{`class MLEngineer:
    def __init__(self):
        self.skills = []
        self.experience = 5`}
        </div>
        <div className="absolute top-48 right-4 sm:right-16 font-mono text-xs text-slate-900 dark:text-slate-100 whitespace-pre">
{`import tensorflow as tf
model = tf.keras.Sequential()`}
        </div>
        <div className="absolute bottom-32 left-8 sm:left-24 font-mono text-xs text-slate-900 dark:text-slate-100 whitespace-pre">
{`pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('model', XGBClassifier())
])`}
        </div>
        <div className="absolute bottom-48 right-8 sm:right-24 font-mono text-xs text-slate-900 dark:text-slate-100 whitespace-pre">
{`def deploy_model(model):
    return model.serve()`}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block">
          <div className="text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-900">
            Open to opportunities
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
          Mohit Kumar
        </h1>

        <div className="h-12 mb-8 flex items-center justify-center">
          <p className="text-xl sm:text-2xl font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Seasoned AI Architect and ML Engineer with 5+ years of experience designing
          and deploying scalable, production-grade AI solutions that drive business impact.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
          <MapPin className="w-4 h-4" />
          <span>New Delhi, India</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="https://github.com/mohitkr95"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-100 dark:bg-neutral-900 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-110 transition-all border border-slate-200 dark:border-neutral-800"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/mohitkumar1999"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-100 dark:bg-neutral-900 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:scale-110 transition-all border border-slate-200 dark:border-neutral-800"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:krmohit101@gmail.com"
            className="p-3 rounded-lg bg-slate-100 dark:bg-neutral-900 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:scale-110 transition-all border border-slate-200 dark:border-neutral-800"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Explore Portfolio
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-600" />
      </div>
    </section>
  );
}
