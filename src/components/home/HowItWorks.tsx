import { Calendar, Bookmark, UserCheck, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const steps = [
  {
    id: 1,
    title: 'Search for Tutors',
    description: 'Browse through our extensive database of qualified tutors or post a tuition job based on your requirements.',
    icon: <Bookmark className="h-6 w-6" />,
    color: 'bg-primary-100 text-primary-500 dark:bg-primary-900/30',
  },
  {
    id: 2,
    title: 'Schedule Sessions',
    description: 'Connect with tutors, discuss your learning goals, and schedule sessions at times that work for you.',
    icon: <Calendar className="h-6 w-6" />,
    color: 'bg-secondary-100 text-secondary-500 dark:bg-secondary-900/30',
  },
  {
    id: 3,
    title: 'Meet Your Tutor',
    description: 'Start your personalized learning journey with your selected tutor either in-person or online.',
    icon: <UserCheck className="h-6 w-6" />,
    color: 'bg-accent-100 text-accent-500 dark:bg-accent-900/30',
  },
  {
    id: 4,
    title: 'Achieve Results',
    description: 'Track your progress, provide feedback, and continue improving with guidance from your expert tutor.',
    icon: <CheckCircle className="h-6 w-6" />,
    color: 'bg-success-100 text-success-500 dark:bg-success-900/30',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container-custom">
        <SectionTitle
          title="How Tuition Sheba Works"
          subtitle="Our simple process to connect you with the perfect tutor and start your learning journey"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-200 dark:bg-slate-700 -ml-4 z-0"></div>
              )}
              
              <div className="card p-6 relative z-10">
                <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  {step.icon}
                </div>
                <div className="inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Step {step.id}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}