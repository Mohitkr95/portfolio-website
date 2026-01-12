import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email directly.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Let's Connect
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-neutral-800 font-mono text-xs sm:text-sm overflow-x-auto">
            <div className="text-slate-500 dark:text-slate-400 mb-3"># contact.py</div>
            <div className="text-slate-700 dark:text-slate-300 space-y-1">
              <div>email = <span className="text-sky-600 dark:text-sky-400">"krmohit101@gmail.com"</span></div>
              <div>phone = <span className="text-sky-600 dark:text-sky-400">"+91-9599336589"</span></div>
              <div>location = <span className="text-sky-600 dark:text-sky-400">"New Delhi, India"</span></div>
              <div>status = <span className="text-sky-600 dark:text-sky-400">"Open to opportunities"</span></div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:krmohit101@gmail.com"
              className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors group"
            >
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/70 transition-colors">
                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500">email</div>
                <div className="text-slate-900 dark:text-white">krmohit101@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:+919599336589"
              className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800 hover:border-sky-300 dark:hover:border-sky-800 transition-colors group"
            >
              <div className="p-3 bg-sky-50 dark:bg-sky-950/50 rounded-lg group-hover:bg-sky-100 dark:group-hover:bg-sky-950/70 transition-colors">
                <Phone className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500">phone</div>
                <div className="text-slate-900 dark:text-white">+91-9599336589</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800">
              <div className="p-3 bg-amber-50 dark:bg-amber-950/50 rounded-lg">
                <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500">location</div>
                <div className="text-slate-900 dark:text-white">New Delhi, India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 max-w-lg mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, or just having a chat about AI/ML and tech.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://github.com/mohitkr95"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </a>
            <a
              href="https://linkedin.com/in/mohitkumar1999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800 hover:border-sky-300 dark:hover:border-sky-800 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </a>
            <a
              href="mailto:krmohit101@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Send className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>

        <div className="mt-16">
          <div className="max-w-2xl mx-auto bg-white dark:bg-neutral-900 rounded-lg p-6 sm:p-8 border border-slate-200 dark:border-neutral-800">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 text-slate-900 dark:text-white"
                  placeholder="Your name"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 text-slate-900 dark:text-white"
                  placeholder="your.email@example.com"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 text-slate-900 dark:text-white resize-none"
                  placeholder="Your message..."
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'success' && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-lg text-emerald-700 dark:text-emerald-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
