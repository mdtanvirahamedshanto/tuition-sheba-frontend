import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 pt-32 pb-16 md:py-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect <span className="text-primary-500">Tutor</span> Today
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-lg">
              Connect with qualified tutors for personalized learning experiences across Bangladesh. Achieve your academic goals with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/job-board" className="btn btn-lg btn-primary">
                Find Tuition Jobs
              </Link>
              <Link to="/categories" className="btn btn-lg btn-outline">
                Browse Categories
              </Link>
            </div>
            <div className="flex items-center gap-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/men/${index + 30}.jpg`}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-primary-500">2,000+ </span>
                <span className="text-slate-600 dark:text-slate-400">qualified tutors</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-xl slide-up">
            <img
              src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tutor teaching student"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-6">
              <Link 
                to="/tutors"
                className="bg-white/90 dark:bg-slate-800/90 text-primary-500 rounded-lg p-3 flex items-center gap-2 text-sm font-medium hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                View our top tutors
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-primary-300/20 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary-300/20 dark:bg-secondary-800/20 rounded-full blur-3xl"></div>
    </section>
  );
}