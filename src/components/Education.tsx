import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science',
    field: 'Information Security',
    institution: 'Indira Gandhi National Open University',
    period: 'July 2022 - July 2024',
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Electronics & Communication Engineering',
    institution: 'Delhi Technical Campus',
    period: 'Aug 2017 - May 2021',
  },
];

const certifications = [
  'Intel Edge AI',
  'Data Analytics using R',
  'Data Scientist: Learning Path',
  'AI From the Data Center to the Edge - Intel Architecture',
  'Nutanix Hybrid Cloud Scholarship Recipient',
];

const awards = [
  'Bertelsmann Scholarship for Artificial Intelligence',
  'Intel Edge AI Scholarship',
];

const publications = [
  {
    title: 'SARS-Cov-2 detection using Deep Learning Techniques on the basis of Clinical Reports',
    type: 'Research Publication',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 font-medium">Education & Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Credentials
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-neutral-900 rounded-lg p-6 sm:p-8 border border-slate-200 dark:border-neutral-800">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-emerald-500">
                  <div className="absolute left-0 top-0 w-3 h-3 bg-emerald-500 rounded-full -translate-x-[7px]" />
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 mb-1">{edu.period}</div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-sky-600 dark:text-sky-400 mb-1">{edu.field}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-neutral-900 rounded-lg p-6 border border-slate-200 dark:border-neutral-800 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-sky-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-sky-500 mt-1 text-xs">▪</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-neutral-900 rounded-lg p-6 border border-slate-200 dark:border-neutral-800 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Awards
                </h3>
              </div>

              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-amber-500 mt-1 text-xs">▪</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-neutral-900 rounded-lg p-6 border border-slate-200 dark:border-neutral-800 h-full sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-rose-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Publications
                </h3>
              </div>

              <ul className="space-y-3">
                {publications.map((pub, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                    <span className="text-rose-500 mt-1 text-xs">▪</span>
                    <div>
                      <span className="text-xs text-rose-500 block mb-1">{pub.type}</span>
                      <p className="text-sm">{pub.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-sky-50 dark:from-emerald-950/30 dark:to-sky-950/30 rounded-lg p-6 sm:p-8 border border-emerald-200 dark:border-emerald-900/50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-1">Community Leadership</p>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Data Drivers - Co-Founder & Community Lead
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Purpose-driven, not-for-profit community built to democratize access to AI and Data Science education.
                  Providing free, top-tier mentorship and learning resources to students and professionals.
                </p>
                <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">Dec 2020 - Dec 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
