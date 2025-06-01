
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Users, BookOpen, Award, Star, MapPin, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  const featuredTutors = [
    {
      id: "A08639A",
      name: "Dr. Sarah Ahmed",
      subject: "Mathematics",
      rating: 4.9,
      students: 45,
      experience: "8 years",
      location: "Dhaka",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2d4c4f6?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "B12345B",
      name: "Prof. Mohammad Rahman",
      subject: "Physics",
      rating: 4.8,
      students: 38,
      experience: "12 years",
      location: "Chittagong",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "C67890C",
      name: "Ms. Fatima Khan",
      subject: "English",
      rating: 4.9,
      students: 52,
      experience: "6 years",
      location: "Sylhet",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const categories = [
    { name: "Mathematics", count: 245, icon: "📊" },
    { name: "Science", count: 189, icon: "🔬" },
    { name: "English", count: 156, icon: "📚" },
    { name: "Physics", count: 134, icon: "⚡" },
    { name: "Chemistry", count: 112, icon: "🧪" },
    { name: "Biology", count: 98, icon: "🧬" }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🎓 Bangladesh's Leading Tuition Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Find Your Perfect{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tutor
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with qualified tutors across Bangladesh. Quality education made accessible for everyone.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-background rounded-lg shadow-lg border">
                <div className="flex-1">
                  <Input
                    placeholder="Search for subjects, tutors, or locations..."
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button size="lg" className="px-8">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/tutors">
                <Button variant="outline" size="lg">
                  <Users className="h-4 w-4 mr-2" />
                  Browse Tutors
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="lg">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Subjects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Tutors", value: "2,500+", icon: Users },
              { label: "Students Helped", value: "10,000+", icon: BookOpen },
              { label: "Success Rate", value: "95%", icon: Award },
              { label: "Cities Covered", value: "64", icon: MapPin },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Tutors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our top-rated tutors who have helped thousands of students achieve their academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutors.map((tutor) => (
              <Card key={tutor.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{tutor.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{tutor.rating}</span>
                        </div>
                      </div>
                      <Badge variant="secondary">{tutor.subject}</Badge>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Users className="h-3 w-3" />
                          <span>{tutor.students} students</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-3 w-3" />
                          <span>{tutor.experience} experience</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3" />
                          <span>{tutor.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={`/tutors/tutor-details/${tutor.id}`} className="block mt-4">
                    <Button className="w-full" variant="outline">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/tutors">
              <Button size="lg">View All Tutors</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Popular Subjects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of subjects and find the perfect tutor for your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link key={index} to="/categories">
                <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} tutors</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose TuitionSheba?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the best platform for connecting students with qualified tutors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Verified Tutors",
                description: "All tutors are thoroughly vetted and verified for quality assurance."
              },
              {
                icon: Star,
                title: "Top Rated",
                description: "Our tutors maintain high ratings and positive student feedback."
              },
              {
                icon: MapPin,
                title: "Local & Online",
                description: "Find tutors near you or learn online from anywhere."
              },
              {
                icon: Clock,
                title: "Flexible Timing",
                description: "Schedule lessons that fit your busy lifestyle and preferences."
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Track record of helping students achieve their academic goals."
              },
              {
                icon: Users,
                title: "Community",
                description: "Join thousands of students and tutors in our learning community."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Learning?</h2>
            <p className="text-xl opacity-90">
              Join thousands of students who have found their perfect tutor on TuitionSheba.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutors">
                <Button size="lg" variant="secondary">
                  Find a Tutor
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Become a Tutor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
