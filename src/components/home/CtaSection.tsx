import { Link } from 'react-router-dom';
import { GraduationCap, Users } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Join thousands of students and tutors already using TuitionSheba to achieve their academic goals. Start your journey today!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Students</h3>
                  <p className="text-white/80 mb-4">Find expert tutors tailored to your learning needs</p>
                  <Link to="/register" className="inline-flex items-center text-sm font-medium text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md transition-colors">
                    Find a Tutor
                  </Link>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Tutors</h3>
                  <p className="text-white/80 mb-4">Join our platform and connect with eager students</p>
                  <Link to="/tutor-registration" className="inline-flex items-center text-sm font-medium text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md transition-colors">
                    Become a Tutor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 mb-6">
              Get the latest updates, teaching resources, and special offers delivered straight to your inbox.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-primary-600 font-medium py-3 px-4 rounded-md hover:bg-white/90 transition-colors"
              >
                Subscribe Now
              </button>
              
              <p className="text-xs text-white/70 text-center">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}