import React, { useState } from 'react';
import { MapPin, Book, Clock, DollarSign, Calendar, Filter, ChevronDown } from 'lucide-react';
import { cn, formatCurrency, timeAgo } from '../../lib/utils';

// Sample job data
const jobsData = [
  {
    id: 1,
    title: 'Math Tutor for 9th Grade Student',
    subjects: ['Mathematics'],
    location: 'Dhanmondi, Dhaka',
    rate: 2500,
    perSession: true,
    frequency: '3 times per week',
    posted: new Date('2025-01-02'),
    deadline: new Date('2025-01-25'),
    category: 'Mathematics',
    city: 'Dhaka',
    description: 'Looking for an experienced mathematics tutor for a 9th-grade student struggling with algebra and geometry. Need someone patient and skilled at explaining complex concepts in simple terms.',
    requirements: ['At least 2 years of teaching experience', 'Strong background in mathematics', 'Patient and good communicator'],
  },
  {
    id: 2,
    title: 'English Language Tutor for IELTS Preparation',
    subjects: ['English', 'IELTS'],
    location: 'Gulshan, Dhaka',
    rate: 3000,
    perSession: true,
    frequency: '2 times per week',
    posted: new Date('2025-01-05'),
    deadline: new Date('2025-01-30'),
    category: 'Languages',
    city: 'Dhaka',
    description: 'Seeking an IELTS preparation tutor for an undergraduate student planning to study abroad. Focus on improving speaking and writing skills to achieve a band score of 7+.',
    requirements: ['IELTS certification with 7.5+ score', 'Experience in IELTS coaching', 'Knowledge of exam patterns and marking criteria'],
  },
  {
    id: 3,
    title: 'Science Tutor for Primary School Children',
    subjects: ['Science', 'Biology', 'Physics'],
    location: 'Khulna City',
    rate: 1800,
    perSession: true,
    frequency: '2 times per week',
    posted: new Date('2025-01-08'),
    deadline: new Date('2025-02-10'),
    category: 'Science',
    city: 'Khulna',
    description: 'Need a tutor for two primary school children (grades 3 and 5) to help with general science subjects. Looking for someone who can make learning fun and engaging.',
    requirements: ['Experience teaching young children', 'Knowledge of primary school curriculum', 'Ability to use interactive teaching methods'],
  },
  {
    id: 4,
    title: 'Computer Programming Tutor',
    subjects: ['Programming', 'Python', 'Web Development'],
    location: 'Uttara, Dhaka',
    rate: 4000,
    perSession: false,
    frequency: 'Flexible',
    posted: new Date('2025-01-10'),
    deadline: new Date('2025-02-05'),
    category: 'Coding',
    city: 'Dhaka',
    description: 'Looking for a programming tutor who can teach Python and basic web development to a high school student interested in computer science. Flexible schedule required.',
    requirements: ['Professional experience in software development', 'Strong Python skills', 'Knowledge of HTML, CSS, and JavaScript', 'Ability to explain technical concepts clearly'],
  },
  {
    id: 5,
    title: 'Bengali Literature Tutor',
    subjects: ['Bengali', 'Literature'],
    location: 'Chittagong',
    rate: 2000,
    perSession: true,
    frequency: '1 time per week',
    posted: new Date('2025-01-12'),
    deadline: new Date('2025-02-15'),
    category: 'Literature',
    city: 'Chittagong',
    description: 'Seeking a Bengali literature expert to tutor a college student with a focus on classic Bengali poetry and novels. Should have deep knowledge of Bengali literary history and criticism.',
    requirements: ['Degree in Bengali Literature', 'In-depth knowledge of classic Bengali authors', 'Teaching experience at college level preferred'],
  },
  {
    id: 6,
    title: 'Piano Teacher for Beginner',
    subjects: ['Music', 'Piano'],
    location: 'Banani, Dhaka',
    rate: 2500,
    perSession: true,
    frequency: '2 times per week',
    posted: new Date('2025-01-15'),
    deadline: new Date('2025-02-20'),
    category: 'Music',
    city: 'Dhaka',
    description: 'Looking for a patient piano teacher for a 10-year-old beginner. Need someone who can make learning fun while teaching proper technique and music theory basics.',
    requirements: ['Formal music education', 'Experience teaching children', 'Patient and encouraging teaching style'],
  },
];

// Filter categories
const categories = ['All Categories', 'Mathematics', 'Science', 'Languages', 'Literature', 'Coding', 'Music', 'Arts'];
const cities = ['All Cities', 'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet'];

export default function JobList() {
  const [activeJobs, setActiveJobs] = useState(jobsData);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [showFilters, setShowFilters] = useState(false);

  const handleFilter = () => {
    let filtered = jobsData;
    
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(job => job.category === selectedCategory);
    }
    
    if (selectedCity !== 'All Cities') {
      filtered = filtered.filter(job => job.city === selectedCity);
    }
    
    setActiveJobs(filtered);
  };

  React.useEffect(() => {
    handleFilter();
  }, [selectedCategory, selectedCity]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center md:hidden mb-4 text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          <ChevronDown className={cn("h-4 w-4 ml-1 transition-transform", showFilters && "rotate-180")} />
        </button>
        
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", !showFilters && "hidden md:grid")}>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-input w-full"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              City
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="form-input w-full"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Job count */}
      <div className="mb-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing <span className="font-medium text-slate-700 dark:text-slate-300">{activeJobs.length}</span> available tuition jobs
        </p>
      </div>

      {/* Job listings */}
      <div className="space-y-6">
        {activeJobs.length > 0 ? (
          activeJobs.map((job) => (
            <div key={job.id} className="card hover:shadow-md transition-all duration-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-y-3 mb-4">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mr-6">
                      <MapPin className="h-4 w-4 mr-1 text-primary-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mr-6">
                      <Clock className="h-4 w-4 mr-1 text-primary-500" />
                      {job.frequency}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <DollarSign className="h-4 w-4 mr-1 text-primary-500" />
                      {formatCurrency(job.rate)} {job.perSession ? 'per session' : 'per month'}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.subjects.map((subject, index) => (
                      <span key={index} className="badge badge-primary">
                        {subject}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-3 w-3 mr-1" />
                      Posted {timeAgo(job.posted)}
                    </div>
                    <div>
                      Application deadline: {job.deadline.toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:items-end">
                  <button className="btn btn-md btn-primary mb-2 w-full md:w-auto">
                    Apply Now
                  </button>
                  <button className="btn btn-md btn-outline w-full md:w-auto">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No tuition jobs found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Categories');
                setSelectedCity('All Cities');
              }}
              className="mt-4 btn btn-md btn-outline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Post a job */}
      <div className="mt-12 bg-slate-100 dark:bg-slate-800 rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-xl font-semibold mb-2">Can't find what you're looking for?</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Post your tuition job and let qualified tutors come to you.
            </p>
          </div>
          <button className="btn btn-lg btn-primary whitespace-nowrap">
            Post a Tuition Job
          </button>
        </div>
      </div>
    </div>
  );
}