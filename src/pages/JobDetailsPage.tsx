import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  DollarSign, 
  BookOpen, 
  GraduationCap, 
  Eye, 
  FileText,
  ArrowLeft,
  Share2,
  Bookmark,
  BookmarkCheck,
  Heart,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle,
  User,
  Home,
  Star,
  MessageCircle
} from 'lucide-react';

// TypeScript interfaces
interface Subject {
  id: number;
  title: string;
}

interface Category {
  id: number;
  name: string;
}

interface Course {
  id: number;
  category_id: number;
  name: string;
}

interface TeachingMethod {
  id: number;
  name: string;
}

interface Country {
  id: number;
  city_id: number | null;
  name: string;
}

interface City {
  id: number;
  country_id: number;
  name: string;
}

interface Location {
  id: number;
  country_id: number;
  city_id: number;
  name: string;
}

interface University {
  name: string;
}

interface Department {
  name: string;
}

interface TutorCategory {
  name: string;
}

interface JobDetails {
  id: number;
  parent_id: number;
  student_name: string | null;
  institute_name: string | null;
  student_gender: string;
  student_subject: Subject[];
  days_in_week: string;
  category_id: Category;
  course_id: Course;
  tutoring_time: string;
  tutoring_duration: string;
  teaching_method_id: TeachingMethod;
  salary: string;
  number_of_students: number;
  country_id: Country;
  city_id: City;
  location_id: Location;
  full_address: string;
  lat_long: string;
  requirement: string;
  special_note: string | null;
  hiring_from: string | null;
  relegion: string | null;
  tutor_gender: string;
  tutor_school: string | null;
  tutor_college: string | null;
  tutor_board: string | null;
  tutor_group: string | null;
  year: string | null;
  tutor_university_type: string | null;
  tutor_university: University[];
  tutor_study_types: any[];
  tutor_department: Department[];
  tutor_courses: any[];
  tutor_categories: TutorCategory[];
  tutor_subject: any[];
  tutor_curriculam: string | null;
  total_view: number;
  total_application: number;
  created_at: string;
  additionalChild: any[];
}

interface AppliedTutor {
  tutor_id: number;
}

interface JobData {
  jobDetails: JobDetails;
  appliedTutorIds: AppliedTutor[];
  bookmarkTutorIds: any[];
}

const jobData: JobData = {
  "jobDetails": {
    "id": 41193,
    "parent_id": 17,
    "student_name": null,
    "institute_name": null,
    "student_gender": "male",
    "student_subject": [
      {
        "id": 522,
        "title": "Bangla"
      }
    ],
    "days_in_week": "1 days",
    "category_id": {
      "id": 4,
      "name": "English Medium"
    },
    "course_id": {
      "id": 47,
      "category_id": 4,
      "name": "Standard 5"
    },
    "tutoring_time": "17:00:00",
    "tutoring_duration": "1.5",
    "teaching_method_id": {
      "id": 1,
      "name": "Home Tutoring"
    },
    "salary": "4000",
    "number_of_students": 1,
    "country_id": {
      "id": 1,
      "city_id": null,
      "name": "Bangladesh"
    },
    "city_id": {
      "id": 1,
      "country_id": 1,
      "name": "Dhaka"
    },
    "location_id": {
      "id": 107,
      "country_id": 1,
      "city_id": 1,
      "name": "Kalabagan"
    },
    "full_address": "Opposite Lane Of Square Hospital Limited",
    "lat_long": "23.7528437986668, 90.38156248190165",
    "requirement": "\" DU/JNU/JU \" experienced tutors are cordially requested to apply.",
    "special_note": null,
    "hiring_from": "2025-06-01 00:00:00",
    "relegion": null,
    "tutor_gender": "female",
    "tutor_school": null,
    "tutor_college": null,
    "tutor_board": null,
    "tutor_group": null,
    "year": null,
    "tutor_university_type": null,
    "tutor_university": [
      {
        "name": "Jagannath University ( JNU )"
      },
      {
        "name": "Jahangirnagar University ( JU )"
      },
      {
        "name": "University of Dhaka"
      }
    ],
    "tutor_study_types": [],
    "tutor_department": [
      {
        "name": "Bangla"
      }
    ],
    "tutor_courses": [],
    "tutor_categories": [
      {
        "name": "English Medium"
      }
    ],
    "tutor_subject": [],
    "tutor_curriculam": null,
    "total_view": 9,
    "total_application": 1,
    "created_at": "2025-06-01T13:34:52.000000Z",
    "additionalChild": []
  },
  "appliedTutorIds": [
    {
      "tutor_id": 64816
    }
  ],
  "bookmarkTutorIds": []
};

const JobDetailsPage: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const { jobDetails, appliedTutorIds } = jobData;

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleApply = () => {
    setHasApplied(true);
    setShowContactInfo(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Job Details</h1>
                <p className="text-sm text-gray-500">Job ID: #{jobDetails.id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleBookmark}
                className={`p-2 rounded-full transition-colors ${
                  isBookmarked 
                    ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isBookmarked ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Title & Basic Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {jobDetails.course_id.name} - {jobDetails.category_id.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {jobDetails.total_view} views
                    </span>
                    <span className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {jobDetails.total_application} applications
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>Posted {formatDate(jobDetails.created_at)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">৳{jobDetails.salary}</div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              </div>

              {/* Subjects */}
              <div className="flex flex-wrap gap-2 mb-6">
                {jobDetails.student_subject.map((subject, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    <BookOpen className="h-3 w-3 mr-1" />
                    {subject.title}
                  </span>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{jobDetails.days_in_week}</div>
                  <div className="text-xs text-gray-500">Weekly</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{jobDetails.tutoring_duration}h</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{jobDetails.number_of_students}</div>
                  <div className="text-xs text-gray-500">Students</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900">{jobDetails.teaching_method_id.name}</div>
                  <div className="text-xs text-gray-500">Method</div>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Tutoring Time</div>
                      <div className="text-sm text-gray-600">{formatTime(jobDetails.tutoring_time)}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Student Profile</div>
                      <div className="text-sm text-gray-600 capitalize">{jobDetails.student_gender} student</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Start Date</div>
                      <div className="text-sm text-gray-600">{formatDate(jobDetails.hiring_from)}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-sm text-gray-600">
                        {jobDetails.location_id.name}, {jobDetails.city_id.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{jobDetails.full_address}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Preferred Tutor</div>
                      <div className="text-sm text-gray-600 capitalize">{jobDetails.tutor_gender} tutor preferred</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
              
              {jobDetails.requirement && (
                <div className="mb-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-1">Special Requirements</h4>
                        <p className="text-sm text-yellow-700">
                          {jobDetails.requirement.replace(/"/g, '')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* University Requirements */}
              {jobDetails.tutor_university.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Preferred Universities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {jobDetails.tutor_university.map((uni, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200"
                      >
                        <GraduationCap className="h-5 w-5 text-purple-600 mr-3" />
                        <span className="text-sm font-medium text-purple-800">{uni.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Department Requirements */}
              {jobDetails.tutor_department.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Preferred Departments</h4>
                  <div className="flex flex-wrap gap-2">
                    {jobDetails.tutor_department.map((dept, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                      >
                        {dept.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            {showContactInfo && (
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-md">
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Application Submitted Successfully!</h4>
                      <p className="text-sm text-green-700 mb-3">
                        Your application has been sent to the student's family. They will contact you soon.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-green-700">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>Contact will be shared after selection</span>
                        </div>
                        <div className="flex items-center text-sm text-green-700">
                          <Mail className="h-4 w-4 mr-2" />
                          <span>You'll receive updates via email</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Status */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <Eye className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-900">Total Views</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{jobDetails.total_view}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-900">Applications</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{jobDetails.total_application}</span>
                </div>
              </div>

              {!hasApplied ? (
                <button
                  onClick={handleApply}
                  className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Apply for this Job
                </button>
              ) : (
                <div className="mt-6 bg-green-100 text-green-800 py-3 px-4 rounded-lg font-medium text-center flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Applied Successfully
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ask a Question
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share this Job
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Report Issue
                </button>
              </div>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                <div className="p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Standard 6 - English Medium</h4>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>Dhanmondi</span>
                    <span className="font-medium text-green-600">৳3500</span>
                  </div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Standard 4 - Bangla Medium</h4>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>Uttara</span>
                    <span className="font-medium text-green-600">৳3000</span>
                  </div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">Standard 5 - English Medium</h4>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>Gulshan</span>
                    <span className="font-medium text-green-600">৳4500</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
                View More Similar Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;