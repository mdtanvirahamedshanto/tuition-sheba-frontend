import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, location: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ 
  onSearch, 
  placeholder = "Search for tutors, subjects...", 
  className = "" 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim(), location.trim());
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`w-full flex flex-col sm:flex-row gap-2 ${className}`}
    >
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input pl-10 pr-4 py-3 w-full"
        />
      </div>
      
      <div className="relative sm:w-72">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input pl-10 pr-4 py-3 w-full"
        />
      </div>
      
      <button type="submit" className="btn btn-primary py-3 px-6">
        Search
      </button>
    </form>
  );
}