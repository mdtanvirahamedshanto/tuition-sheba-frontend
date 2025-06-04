
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { Search, Filter, Star, MapPin, Clock, Users, BookOpen, DollarSign } from "lucide-react";

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const tutors = [
    {
      id: "A08639A",
      name: "Dr. Sarah Ahmed",
      subject: "Mathematics",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 1500,
      experience: "8 years",
      location: "Dhaka",
      students: 45,
      description: "Experienced mathematics teacher with PhD in Applied Mathematics. Specialized in SSC, HSC, and university level courses.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      verified: true,
      subjects: ["Mathematics", "Calculus", "Statistics"]
    },
    {
      id: "B12345B",
      name: "Prof. Mohammad Rahman",
      subject: "Physics",
      rating: 4.8,
      reviews: 89,
      hourlyRate: 1800,
      experience: "12 years",
      location: "Chittagong",
      students: 38,
      description: "University professor with expertise in quantum physics and mechanics. Teaches O/A levels and university courses.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      subjects: ["Physics", "Quantum Mechanics", "Thermodynamics"]
    },
    {
      id: "C67890C",
      name: "Ms. Fatima Khan",
      subject: "English",
      rating: 4.9,
      reviews: 156,
      hourlyRate: 1200,
      experience: "6 years",
      location: "Sylhet",
      students: 52,
      description: "Native English speaker with TEFL certification. Specializes in IELTS preparation and academic writing.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true,
      subjects: ["English", "IELTS", "Academic Writing"]
    },
    {
      id: "D11111D",
      name: "Dr. Ahmed Hassan",
      subject: "Chemistry",
      rating: 4.7,
      reviews: 94,
      hourlyRate: 1600,
      experience: "10 years",
      location: "Dhaka",
      students: 41,
      description: "PhD in Organic Chemistry with 10+ years teaching experience. Expert in HSC and university level chemistry.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true,
      subjects: ["Chemistry", "Organic Chemistry", "Biochemistry"]
    },
    {
      id: "E22222E",
      name: "Ms. Rashida Begum",
      subject: "Biology",
      rating: 4.8,
      reviews: 73,
      hourlyRate: 1400,
      experience: "7 years",
      location: "Rajshahi",
      students: 33,
      description: "Medical graduate with specialization in human biology and genetics. Great with SSC and HSC students.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true,
      subjects: ["Biology", "Genetics", "Human Anatomy"]
    },
    {
      id: "F33333F",
      name: "Mr. Karim Uddin",
      subject: "Computer Science",
      rating: 4.9,
      reviews: 112,
      hourlyRate: 2000,
      experience: "5 years",
      location: "Dhaka",
      students: 67,
      description: "Software engineer turned educator. Expert in programming languages and computer science fundamentals.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      verified: true,
      subjects: ["Computer Science", "Programming", "Web Development"]
    }
  ];

  const cities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal"];
  const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Computer Science"];

  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutor.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutor.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCity = selectedCity === "all" || tutor.location === selectedCity;
    const matchesSubject = selectedSubject === "all" || tutor.subjects.includes(selectedSubject);
    const matchesPrice = tutor.hourlyRate >= priceRange[0] && tutor.hourlyRate <= priceRange[1];
    
    return matchesSearch && matchesCity && matchesSubject && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Find Your Perfect Tutor</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our verified tutors and find the best match for your learning needs.
          </p>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tutors, subjects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Hourly Rate: ৳{priceRange[0]} - ৳{priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000}
                  min={0}
                  step={100}
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredTutors.length} of {tutors.length} tutors
          </p>
          <Select defaultValue="rating">
            <SelectTrigger className="w-40">
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

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
            <Card key={tutor.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
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
                  </div>

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject) => (
                      <Badge key={subject} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tutor.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
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
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>৳{tutor.hourlyRate}/hr</span>
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

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">No tutors found matching your criteria.</div>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
