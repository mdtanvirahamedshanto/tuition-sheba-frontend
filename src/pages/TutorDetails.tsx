
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  Calendar,
  MessageCircle,
  Phone,
  Video,
  CheckCircle,
  DollarSign
} from "lucide-react";

const TutorDetails = () => {
  const { id } = useParams();

  // Mock tutor data - in real app, fetch based on ID
  const tutor = {
    id: "A08639A",
    name: "Dr. Sarah Ahmed",
    title: "PhD in Applied Mathematics",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 1500,
    experience: "8 years",
    location: "Dhaka, Bangladesh",
    students: 45,
    totalHours: 1250,
    responseTime: "Within 2 hours",
    image: "https://images.unsplash.com/photo-1494790108755-2616b2d4c4f6?w=200&h=200&fit=crop&crop=face",
    verified: true,
    online: true,
    subjects: ["Mathematics", "Calculus", "Statistics", "Linear Algebra", "Differential Equations"],
    specializations: ["Advanced Calculus", "Statistical Analysis", "Mathematical Modeling"],
    languages: ["Bengali", "English", "Hindi"],
    education: [
      {
        degree: "PhD in Applied Mathematics",
        institution: "University of Dhaka",
        year: "2016-2020"
      },
      {
        degree: "MSc in Mathematics",
        institution: "Jahangirnagar University",
        year: "2014-2016"
      },
      {
        degree: "BSc in Mathematics",
        institution: "University of Dhaka",
        year: "2010-2014"
      }
    ],
    experience_details: [
      {
        position: "Senior Mathematics Lecturer",
        institution: "Private University",
        duration: "2020 - Present"
      },
      {
        position: "Research Assistant",
        institution: "University of Dhaka",
        duration: "2018 - 2020"
      }
    ],
    about: "Passionate mathematics educator with over 8 years of experience in teaching advanced mathematics. I specialize in making complex mathematical concepts accessible and engaging for students of all levels. My teaching methodology focuses on building strong foundational understanding while developing problem-solving skills.",
    teachingStyle: "I believe in interactive learning where students are encouraged to ask questions and explore mathematical concepts through practical applications. My lessons are structured yet flexible, adapting to each student's learning pace and style.",
    availability: [
      { day: "Monday", times: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"] },
      { day: "Tuesday", times: ["10:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"] },
      { day: "Wednesday", times: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"] },
      { day: "Thursday", times: ["10:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"] },
      { day: "Friday", times: ["9:00 AM - 12:00 PM"] }
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Ahmed Rahman",
      rating: 5,
      comment: "Excellent teacher! Dr. Sarah made calculus so much easier to understand. Her explanations are clear and she's very patient.",
      date: "2 weeks ago",
      subject: "Calculus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Fatima Khan",
      rating: 5,
      comment: "Amazing tutor! She helped me improve my statistics grades significantly. Highly recommended!",
      date: "1 month ago",
      subject: "Statistics",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2d4c4f6?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Karim Hassan",
      rating: 4,
      comment: "Very knowledgeable and professional. The sessions were well-structured and helpful.",
      date: "2 months ago",
      subject: "Linear Algebra",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <Avatar className="w-24 h-24 md:w-32 md:h-32">
                    <AvatarImage src={tutor.image} />
                    <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {tutor.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {tutor.online && (
                    <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-2xl md:text-3xl font-bold">{tutor.name}</h1>
                      {tutor.verified && (
                        <Badge variant="default" className="bg-green-500">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground">{tutor.title}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tutor.rating}</span>
                        <span className="text-muted-foreground">({tutor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{tutor.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="font-semibold text-lg">{tutor.students}</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg">{tutor.totalHours}+</div>
                      <div className="text-sm text-muted-foreground">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg">{tutor.experience}</div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-lg">৳{tutor.hourlyRate}</div>
                      <div className="text-sm text-muted-foreground">Per Hour</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subjects */}
          <Card>
            <CardHeader>
              <CardTitle>Subjects & Specializations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Teaching Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  {tutor.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {tutor.specializations.map((spec) => (
                    <Badge key={spec} variant="outline">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="about" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="availability">Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{tutor.about}</p>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Teaching Style</h4>
                    <p className="text-muted-foreground leading-relaxed">{tutor.teachingStyle}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {tutor.languages.map((lang) => (
                        <Badge key={lang} variant="outline">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Education & Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4">Education</h4>
                    <div className="space-y-4">
                      {tutor.education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4">
                          <h5 className="font-medium">{edu.degree}</h5>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-4">Professional Experience</h4>
                    <div className="space-y-4">
                      {tutor.experience_details.map((exp, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4">
                          <h5 className="font-medium">{exp.position}</h5>
                          <p className="text-muted-foreground">{exp.institution}</p>
                          <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Student Reviews ({tutor.reviews})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="space-y-3">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="font-medium">{review.name}</h5>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {review.subject}
                                </Badge>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="availability">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tutor.availability.map((day, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="font-medium">{day.day}</div>
                        <div className="flex flex-wrap gap-2">
                          {day.times.map((time, timeIndex) => (
                            <Badge key={timeIndex} variant="outline">
                              {time}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Card */}
          <Card>
            <CardHeader>
              <CardTitle>Book a Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold">৳{tutor.hourlyRate}</div>
                <div className="text-muted-foreground">per hour</div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Trial Session
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full">
                  <Video className="w-4 h-4 mr-2" />
                  Video Call
                </Button>
              </div>

              <Separator />

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response time:</span>
                  <span>{tutor.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant={tutor.online ? "default" : "secondary"}>
                    {tutor.online ? "Online" : "Offline"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Students</span>
                  <span className="font-semibold">{tutor.students}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Hours Taught</span>
                  <span className="font-semibold">{tutor.totalHours}+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-semibold">95%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Student Satisfaction</span>
                    <span className="font-semibold">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium">Top Rated</div>
                    <div className="text-sm text-muted-foreground">4.9+ rating</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Student Favorite</div>
                    <div className="text-sm text-muted-foreground">100+ reviews</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Verified Expert</div>
                    <div className="text-sm text-muted-foreground">Identity verified</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
