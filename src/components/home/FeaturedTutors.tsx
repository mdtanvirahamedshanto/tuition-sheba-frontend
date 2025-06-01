import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Book, ChevronRight, ChevronLeft } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { cn } from '../../lib/utils';

// Sample tutor data
const tutors = [
  {
    id: 'A08639A',
    name: 'Dr. Rahim Ahmed',
    avatar: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    reviewCount: 127,
    location: 'Dhaka, Bangladesh',
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    experience: 8,
    bio: 'Experienced educator with a PhD in Mathematics, specializing in making complex concepts easy to understand for students of all levels.',
  },
  {
    id: 'B12345B',
    name: 'Saima Khan',
    avatar: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    reviewCount: 93,
    location: 'Dhaka, Bangladesh',
    subjects: ['English Literature', 'Grammar', 'IELTS'],
    experience: 6,
    bio: 'Passionate English teacher with expertise in literature and language proficiency exams. I help students communicate confidently and effectively.',
  },
  {
    id: 'C67890C',
    name: 'Mohammad Hasan',
    avatar: 'https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    reviewCount: 78,
    location: 'Chittagong, Bangladesh',
    subjects: ['Computer Science', 'Programming', 'Web Development'],
    experience: 5,
    bio: 'Software engineer and educator teaching practical coding skills and computer science fundamentals to prepare students for tech careers.',
  },
  {
    id: 'D45678D',
    name: 'Nusrat Jahan',
    avatar: 'https://images.pexels.com/photos/5212664/pexels-photo-5212664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    reviewCount: 112,
    location: 'Dhaka, Bangladesh',
    subjects: ['Biology', 'Chemistry', 'Medical Entrance'],
    experience: 7,
    bio: 'Medical professional with a passion for teaching science subjects. Specialized in preparing students for medical college entrance exams.',
  },
];

export default function FeaturedTutors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTutors = 3;
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, tutors.length - visibleTutors) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex >= tutors.length - visibleTutors ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <SectionTitle
            title="Meet Our Top Tutors"
            subtitle="Learn from experienced and highly-rated tutors who specialize in various subjects"
            className="mb-4 md:mb-0"
          />
          
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="btn btn-sm btn-outline"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="btn btn-sm btn-outline"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => {
            const isVisible = index >= activeIndex && index < activeIndex + visibleTutors;
            
            return (
              <Link
                key={tutor.id}
                to={`/tutors/tutor-details/${tutor.id}`}
                className={cn(
                  "card group hover:shadow-lg transition-all duration-500 scale-in",
                  !isVisible && "hidden"
                )}
                style={{ animationDelay: `${(index - activeIndex) * 0.1}s` }}
              >
                <div className="aspect-[3/2] w-full relative overflow-hidden">
                  <img
                    src={tutor.avatar}
                    alt={tutor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary-500 transition-colors">
                      {tutor.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      <span className="text-sm font-medium">{tutor.rating}</span>
                      <span className="text-xs text-slate-500 ml-1">({tutor.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {tutor.location}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm line-clamp-2">
                    {tutor.bio}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <Book className="h-4 w-4 text-primary-500 mr-2" />
                    <div className="flex flex-wrap gap-2">
                      {tutor.subjects.map((subject, i) => (
                        <span 
                          key={i}
                          className="badge badge-primary"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium">{tutor.experience}+ years</span> of teaching experience
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/hub" className="btn btn-lg btn-primary">
            View All Tutors
          </Link>
        </div>
      </div>
    </section>
  );
}