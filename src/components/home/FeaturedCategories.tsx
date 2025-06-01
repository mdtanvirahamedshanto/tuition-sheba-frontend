import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { Book, Calculator, Globe, Microscope, Music, Palette, Code, Award } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Mathematics',
    icon: <Calculator className="h-6 w-6" />,
    color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
    count: 245,
  },
  {
    id: 2,
    name: 'Science',
    icon: <Microscope className="h-6 w-6" />,
    color: 'text-green-500 bg-green-100 dark:bg-green-900/30',
    count: 189,
  },
  {
    id: 3,
    name: 'Languages',
    icon: <Globe className="h-6 w-6" />,
    color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30',
    count: 167,
  },
  {
    id: 4,
    name: 'Arts',
    icon: <Palette className="h-6 w-6" />,
    color: 'text-pink-500 bg-pink-100 dark:bg-pink-900/30',
    count: 132,
  },
  {
    id: 5,
    name: 'Music',
    icon: <Music className="h-6 w-6" />,
    color: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30',
    count: 98,
  },
  {
    id: 6,
    name: 'Coding',
    icon: <Code className="h-6 w-6" />,
    color: 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30',
    count: 76,
  },
  {
    id: 7,
    name: 'Literature',
    icon: <Book className="h-6 w-6" />,
    color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
    count: 120,
  },
  {
    id: 8,
    name: 'Competitive Exams',
    icon: <Award className="h-6 w-6" />,
    color: 'text-red-500 bg-red-100 dark:bg-red-900/30',
    count: 185,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <SectionTitle
          title="Browse by Subject Category"
          subtitle="Explore our wide range of subject categories and find the perfect tutor to help you excel"
          center={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category-details/${category.id}/${category.name.toLowerCase()}`}
              className="group card hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center scale-in"
            >
              <div className={`p-4 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {category.count} tutors available
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/categories" className="btn btn-lg btn-outline">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}