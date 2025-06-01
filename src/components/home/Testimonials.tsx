import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { cn } from '../../lib/utils';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    content: "My son's grades improved dramatically after just a few months with his math tutor from TuitionSheba. The personalized approach and regular feedback made all the difference.",
    author: "Fahmida Rahman",
    role: "Parent of a 9th grader",
    avatar: "https://images.pexels.com/photos/3746314/pexels-photo-3746314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    content: "Finding a qualified science tutor used to be so difficult until I discovered TuitionSheba. The platform made it easy to connect with experienced teachers who really know their subject.",
    author: "Rafiq Ahmed",
    role: "Parent of a 12th grader",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    content: "As a tutor, TuitionSheba has been an incredible platform for connecting with students who are truly interested in learning. The system is easy to use and the team is very supportive.",
    author: "Nafisa Khanam",
    role: "English Tutor, 6 years experience",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    content: "My IELTS preparation became much more focused and effective with the help of my tutor from TuitionSheba. I achieved my target band score and am now pursuing my studies abroad.",
    author: "Samir Hossain",
    role: "University Student",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50 overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          title="What Our Users Say"
          subtitle="Hear from students, parents and tutors who have experienced the Tuition Sheba difference"
          center={true}
        />

        <div className="relative mt-12">
          <div className="absolute top-1/4 -left-16 w-32 h-32 bg-primary-300/20 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-16 w-32 h-32 bg-secondary-300/20 dark:bg-secondary-800/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 md:p-10">
                    <Quote className="h-12 w-12 text-primary-200 dark:text-primary-800 mb-6" />
                    
                    <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  activeIndex === index 
                    ? "bg-primary-500" 
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="btn btn-md btn-outline"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="btn btn-md btn-outline"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}