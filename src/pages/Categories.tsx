
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      id: 1,
      name: "Mathematics",
      slug: "mathematics",
      description: "From basic arithmetic to advanced calculus and statistics",
      tutorCount: 245,
      studentCount: 1240,
      trending: true,
      subcategories: ["Arithmetic", "Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry"],
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Physics",
      slug: "physics",
      description: "Classical mechanics, quantum physics, and modern physics",
      tutorCount: 134,
      studentCount: 856,
      trending: true,
      subcategories: ["Mechanics", "Thermodynamics", "Electromagnetism", "Quantum Physics", "Optics"],
      icon: "⚡",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Chemistry",
      slug: "chemistry",
      description: "Organic, inorganic, and physical chemistry for all levels",
      tutorCount: 112,
      studentCount: 672,
      trending: false,
      subcategories: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biochemistry"],
      icon: "🧪",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Biology",
      slug: "biology",
      description: "Life sciences including botany, zoology, and human biology",
      tutorCount: 98,
      studentCount: 589,
      trending: false,
      subcategories: ["Human Biology", "Botany", "Zoology", "Genetics", "Ecology", "Microbiology"],
      icon: "🧬",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "English",
      slug: "english",
      description: "Language skills, literature, and exam preparation",
      tutorCount: 156,
      studentCount: 934,
      trending: true,
      subcategories: ["Grammar", "Literature", "Creative Writing", "IELTS Prep", "Academic Writing"],
      icon: "📚",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "Computer Science",
      slug: "computer-science",
      description: "Programming, algorithms, and computer fundamentals",
      tutorCount: 87,
      studentCount: 523,
      trending: true,
      subcategories: ["Programming", "Data Structures", "Web Development", "Database", "AI/ML"],
      icon: "💻",
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 7,
      name: "Economics",
      slug: "economics",
      description: "Micro and macroeconomics, business studies",
      tutorCount: 76,
      studentCount: 445,
      trending: false,
      subcategories: ["Microeconomics", "Macroeconomics", "Business Studies", "Statistics"],
      icon: "📈",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 8,
      name: "Bangla",
      slug: "bangla",
      description: "Bengali language and literature",
      tutorCount: 123,
      studentCount: 756,
      trending: false,
      subcategories: ["Grammar", "Literature", "Poetry", "Essay Writing", "Creative Writing"],
      icon: "🇧🇩",
      color: "from-green-600 to-green-400"
    },
    {
      id: 9,
      name: "Islamic Studies",
      slug: "islamic-studies",
      description: "Quran, Hadith, and Islamic history",
      tutorCount: 89,
      studentCount: 567,
      trending: false,
      subcategories: ["Quran Recitation", "Hadith", "Islamic History", "Arabic Language", "Fiqh"],
      icon: "☪️",
      color: "from-emerald-600 to-teal-500"
    },
    {
      id: 10,
      name: "Art & Design",
      slug: "art-design",
      description: "Visual arts, graphic design, and creative expression",
      tutorCount: 45,
      studentCount: 234,
      trending: false,
      subcategories: ["Drawing", "Painting", "Graphic Design", "Digital Art", "Photography"],
      icon: "🎨",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 11,
      name: "Music",
      slug: "music",
      description: "Instrumental music, vocals, and music theory",
      tutorCount: 34,
      studentCount: 189,
      trending: false,
      subcategories: ["Piano", "Guitar", "Vocals", "Music Theory", "Classical Music"],
      icon: "🎵",
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 12,
      name: "Language Learning",
      slug: "language-learning",
      description: "Foreign languages including Arabic, Hindi, and European languages",
      tutorCount: 67,
      studentCount: 398,
      trending: true,
      subcategories: ["Arabic", "Hindi", "French", "German", "Spanish", "Chinese"],
      icon: "🌐",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const trendingCategories = categories.filter(cat => cat.trending);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Subject Categories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of subjects and find expert tutors for any topic you want to learn.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Trending Categories */}
        {!searchTerm && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              <h2 className="text-2xl font-semibold">Trending Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {trendingCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>{category.tutorCount} tutors</span>
                          <span>{category.studentCount} students</span>
                        </div>
                      </div>
                      <Link to={`/category-details/${category.id}/${category.slug}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Categories */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {searchTerm ? `Search Results (${filteredCategories.length})` : "All Categories"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-3xl`}>
                      {category.icon}
                    </div>
                    {category.trending && (
                      <Badge variant="secondary" className="text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{category.tutorCount} tutors</span>
                    </div>
                    <span className="text-muted-foreground">{category.studentCount} students</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Subcategories:</div>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.slice(0, 4).map((sub) => (
                        <Badge key={sub} variant="outline" className="text-xs">
                          {sub}
                        </Badge>
                      ))}
                      {category.subcategories.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.subcategories.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Link to={`/category-details/${category.id}/${category.slug}`} className="block">
                    <Button className="w-full">
                      View Tutors
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">No categories found.</div>
            <p className="text-sm text-muted-foreground mt-2">Try searching with different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
