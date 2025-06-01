
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Search, Star, MapPin, Clock, Users, DollarSign, BookOpen, TrendingUp } from "lucide-react";
import { useState } from "react";

const CategoryDetails = () => {
  const { id, name } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // Mock data for different categories
  const categoryData = {
    mathematics: {
      name: "Mathematics",
      description: "Expert mathematics tutors covering all levels from basic arithmetic to advanced calculus",
      icon: "📊",
      subcategories: ["Arithmetic", "Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry"],
      tutors: [
        {
          id: "A08639A",
          name: "Dr. Sarah Ahmed",
          rating: 4.9,
          reviews: 127,
          hourlyRate: 1500,
          experience: "8 years",
          location: "Dhaka",
          students: 45,
          specialties: ["Calculus", "Statistics", "Algebra"],
          description: "PhD in Applied Mathematics with expertise in calculus and statistical analysis.",
          image: "https://images.unsplash.com/photo-1494790108755-2616b2d4c4f6?w=150&h=150&fit=crop&crop=face",
          verified: true
        },
        {
          id: "M001",
          name: "Prof. Rahman Khan",
          rating: 4.8,
          reviews: 89,
          hourlyRate: 1300,
          experience: "12 years",
          location: "Chittagong",
          students: 62,
          specialties: ["Geometry", "Trigonometry", "Algebra"],
          description: "University professor specializing in pure mathematics and geometry.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          verified: true
        }
      ]
    },
    physics: {
      name: "Physics",
      description: "Comprehensive physics education from classical mechanics to quantum physics",
      icon: "⚡",
      subcategories: ["Mechanics", "Thermodynamics", "Electromagnetism", "Quantum Physics", "Optics"],
      tutors: [
        {
          id: "B12345B",
          name: "Prof. Mohammad Rahman",
          rating: 4.8,
          reviews: 89,
          hourlyRate: 1800,
          experience: "12 years",
          location: "Chittagong",
          students: 38,
          specialties: ["Quantum Physics", "Mechanics", "Thermodynamics"],
          description: "University professor with expertise in quantum physics and mechanics.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          verified: true
        }
      ]
    },
    english: {
      name: "English",
      description: "English language mastery including grammar, literature, and exam preparation",
      icon: "📚",
      subcategories: ["Grammar", "Literature", "Creative Writing", "IELTS Prep", "Academic Writing"],
      tutors: [
        {
          id: "C67890C",
          name: "Ms. Fatima Khan",
          rating: 4.9,
          reviews: 156,
          hourlyRate: 1200,
          experience: "6 years",
          location: "Sylhet",
          students: 52,
          specialties: ["IELTS", "Academic Writing", "Grammar"],
          description: "Native English speaker with TEFL certification and IELTS expertise.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          verified: true
        }
      ]
    }
  };

  const currentCategory = categoryData[name as keyof typeof categoryData] || categoryData.mathematics;
  
  const filteredTutors = currentCategory.tutors.filter(tutor =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedTutors = [...filteredTutors].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return a.hourlyRate - b.hourlyRate;
      case "price-high":
        return b.hourlyRate - a.hourlyRate;
      case "experience":
        return parseInt(b.experience) - parseInt(a.experience);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl">
              {currentCategory.icon}
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold">{currentCategory.name}</h1>
              <p className="text-muted-foreground max-w-2xl">
                {currentCategory.description}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">{currentCategory.tutors.length}</div>
                <div className="text-sm text-muted-foreground">Available Tutors</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">₹1,400</div>
                <div className="text-sm text-muted-foreground">Avg. Price/Hour</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Subcategories */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Specializations</h2>
          <div className="flex flex-wrap gap-2">
            {currentCategory.subcategories.map((sub) => (
              <Badge key={sub} variant="secondary" className="px-3 py-1">
                {sub}
              </Badge>
            ))}
          </div>
        </div>

        {/* Search and Sort */}
        <Card>
          <CardHeader>
            <CardTitle>Find Tutors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tutors or specializations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tutors */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {currentCategory.name} Tutors ({sortedTutors.length})
            </h2>
            {currentCategory.tutors.length > 3 && (
              <Badge variant="outline" className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                Popular Category
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedTutors.map((tutor) => (
              <Card key={tutor.id} className="hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={tutor.image}
                          alt={tutor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        {tutor.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-semibold text-lg">{tutor.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{tutor.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({tutor.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">৳{tutor.hourlyRate}</div>
                        <div className="text-sm text-muted-foreground">per hour</div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Specializations:</div>
                      <div className="flex flex-wrap gap-1">
                        {tutor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {tutor.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{tutor.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{tutor.students} students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{tutor.location}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Link to={`/tutors/tutor-details/${tutor.id}`} className="flex-1">
                        <Button className="w-full">View Profile</Button>
                      </Link>
                      <Button variant="outline" size="icon">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {sortedTutors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">No tutors found.</div>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;
