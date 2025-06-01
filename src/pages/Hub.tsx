
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Users, 
  Star, 
  DollarSign, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Clock,
  MessageCircle,
  Award,
  ChevronRight
} from "lucide-react";

const Hub = () => {
  const stats = [
    { label: "Total Students", value: "45", icon: Users, change: "+12%" },
    { label: "Average Rating", value: "4.9", icon: Star, change: "+0.2" },
    { label: "Monthly Earnings", value: "৳25,400", icon: DollarSign, change: "+18%" },
    { label: "Hours Taught", value: "127", icon: Clock, change: "+23 hrs" }
  ];

  const recentStudents = [
    {
      id: 1,
      name: "Arif Rahman",
      subject: "Calculus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      lastSession: "2 hours ago",
      progress: 85
    },
    {
      id: 2,
      name: "Fatima Ahmed",
      subject: "Statistics",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2d4c4f6?w=40&h=40&fit=crop&crop=face",
      lastSession: "1 day ago",
      progress: 72
    },
    {
      id: 3,
      name: "Karim Hassan",
      subject: "Algebra",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      lastSession: "3 days ago",
      progress: 91
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      student: "Sarah Khan",
      subject: "Advanced Calculus",
      time: "Today, 3:00 PM",
      duration: "2 hours",
      type: "Online"
    },
    {
      id: 2,
      student: "Ahmed Ali",
      subject: "Linear Algebra",
      time: "Tomorrow, 10:00 AM",
      duration: "1.5 hours",
      type: "In-person"
    },
    {
      id: 3,
      student: "Rashida Begum",
      subject: "Statistics",
      time: "Friday, 2:00 PM",
      duration: "2 hours",
      type: "Online"
    }
  ];

  const achievements = [
    { title: "Top Rated Tutor", description: "Maintained 4.9+ rating for 6 months", icon: "🏆" },
    { title: "Student Favorite", description: "50+ positive reviews", icon: "❤️" },
    { title: "Master Educator", description: "100+ hours taught", icon: "🎓" },
    { title: "Subject Expert", description: "Mathematics specialist", icon: "📊" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Tutor Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Dr. Sarah Ahmed</p>
          </div>
          <Link to="/tutors/tutor-details/A08639A">
            <Button>View Public Profile</Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">{stat.change}</span>
                  <span className="text-sm text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Students */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Students</CardTitle>
                  <CardDescription>Students you've taught recently</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentStudents.map((student) => (
                    <div key={student.id} className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{student.name}</p>
                          <Badge variant="outline">{student.subject}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{student.lastSession}</p>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>{student.progress}%</span>
                          </div>
                          <Progress value={student.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Students
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled tutoring sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="border rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{session.student}</h4>
                        <Badge variant={session.type === "Online" ? "default" : "secondary"}>
                          {session.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{session.subject}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {session.time}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {session.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View Full Schedule
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your milestones and accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="space-y-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Students</CardTitle>
                <CardDescription>Manage your student relationships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Student Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Detailed student management features coming soon
                  </p>
                  <Button>Add New Student</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Management</CardTitle>
                <CardDescription>Manage your availability and sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Calendar Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced scheduling features coming soon
                  </p>
                  <Button>Set Availability</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your tutor profile information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Profile Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive profile editing features coming soon
                  </p>
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Hub;
