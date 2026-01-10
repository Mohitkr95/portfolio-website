import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-black border-t border-slate-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span className="font-mono">mohit_kumar</span>
            <span className="mx-2">|</span>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-500">
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
