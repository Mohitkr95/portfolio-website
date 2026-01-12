import { Heart, Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-black border-t border-slate-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mohitkr95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mohitkumar1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/mohitxml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:krmohit101@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span className="font-mono">mohit_kumar</span>
            <span className="mx-2">|</span>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="mx-2">|</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
