import { MapPin } from 'lucide-react';
import JobList from '../components/job-board/JobList';

export default function JobBoardPage() {
  return (
    <div>
      {/* Header section */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Tuition Job</h1>
            <p className="text-lg text-white/90 mb-8">
              Browse through hundreds of tuition opportunities across Bangladesh. Filter by subject, location, and more to find the perfect match.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for tuition jobs..."
                  className="w-full px-4 py-3 pr-12 bg-white text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary-500 text-white p-2 rounded-md">
                  <span className="sr-only">Search</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular locations */}
      <div className="bg-white dark:bg-slate-900 py-8 border-b border-slate-200 dark:border-slate-700">
        <div className="container-custom">
          <div className="flex flex-wrap items-center">
            <div className="mr-4 mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Popular Locations:
            </div>
            {['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet'].map((city) => (
              <a
                key={city}
                href={`#${city.toLowerCase()}`}
                className="flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 mr-5 mb-2"
              >
                <MapPin className="h-3 w-3 mr-1" />
                {city}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-slate-50 dark:bg-slate-900 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Search Jobs</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Keywords
                    </label>
                    <input
                      type="text"
                      id="keywords"
                      placeholder="e.g. Mathematics, Physics"
                      className="form-input w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="e.g. Dhanmondi, Gulshan"
                      className="form-input w-full"
                    />
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button className="btn btn-md btn-primary w-full">
                      Search Jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Job listings */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6">Available Tuition Jobs</h2>
              <JobList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}