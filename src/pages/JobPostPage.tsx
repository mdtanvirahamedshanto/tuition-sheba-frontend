/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MapPin, Clock, Calendar, Users, DollarSign, BookOpen, GraduationCap, Eye, FileText } from 'lucide-react';

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

interface JobOffer {
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

const jobOffers: JobOffer[] = [
  {
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
    "total_view": 2,
    "total_application": 0,
    "created_at": "2025-06-01T13:34:52.000000Z",
    "additionalChild": []
  },
  {
    "id": 41192,
    "parent_id": 110592,
    "student_name": null,
    "institute_name": null,
    "student_gender": "male",
    "student_subject": [
      {
        "id": 224,
        "title": "All Arts"
      }
    ],
    "days_in_week": "4 days",
    "category_id": {
      "id": 3,
      "name": "Bangla Medium"
    },
    "course_id": {
      "id": 21,
      "category_id": 3,
      "name": "HSC 1st Year"
    },
    "tutoring_time": "19:30:00",
    "tutoring_duration": "1.5",
    "teaching_method_id": {
      "id": 1,
      "name": "Home Tutoring"
    },
    "salary": "3500",
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
      "id": 230,
      "country_id": 1,
      "city_id": 1,
      "name": "Ibrahimpur"
    },
    "full_address": "Near by Bongo Mela",
    "lat_long": "23.79425488139011, 90.38301994940782",
    "requirement": "\" Highly Experienced \" tutors are cordially invited to apply.",
    "special_note": null,
    "hiring_from": "2025-06-01 00:00:00",
    "relegion": null,
    "tutor_gender": "male",
    "tutor_school": null,
    "tutor_college": null,
    "tutor_board": null,
    "tutor_group": "Arts",
    "year": null,
    "tutor_university_type": null,
    "tutor_university": [],
    "tutor_study_types": [],
    "tutor_department": [],
    "tutor_courses": [],
    "tutor_categories": [],
    "tutor_subject": [],
    "tutor_curriculam": null,
    "total_view": 0,
    "total_application": 0,
    "created_at": "2025-06-01T13:30:06.000000Z",
    "additionalChild": []
  },
  {
    "id": 41191,
    "parent_id": 110592,
    "student_name": null,
    "institute_name": null,
    "student_gender": "male",
    "student_subject": [
      {
        "id": 201,
        "title": "Bangla"
      },
      {
        "id": 202,
        "title": "English"
      },
      {
        "id": 1570,
        "title": "ICT"
      }
    ],
    "days_in_week": "4 days",
    "category_id": {
      "id": 3,
      "name": "Bangla Medium"
    },
    "course_id": {
      "id": 21,
      "category_id": 3,
      "name": "HSC 1st Year"
    },
    "tutoring_time": "19:00:00",
    "tutoring_duration": "1.5",
    "teaching_method_id": {
      "id": 1,
      "name": "Home Tutoring"
    },
    "salary": "3500",
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
      "id": 230,
      "country_id": 1,
      "city_id": 1,
      "name": "Ibrahimpur"
    },
    "full_address": "Near by Bongo Mela",
    "lat_long": "23.79425488139011, 90.38301994940782",
    "requirement": "\" Highly Experienced \" tutors are cordially invited to apply.",
    "special_note": null,
    "hiring_from": null,
    "relegion": null,
    "tutor_gender": "male",
    "tutor_school": null,
    "tutor_college": null,
    "tutor_board": null,
    "tutor_group": null,
    "year": null,
    "tutor_university_type": null,
    "tutor_university": [],
    "tutor_study_types": [],
    "tutor_department": [],
    "tutor_courses": [],
    "tutor_categories": [],
    "tutor_subject": [],
    "tutor_curriculam": null,
    "total_view": 4,
    "total_application": 0,
    "created_at": "2025-06-01T13:27:44.000000Z",
    "additionalChild": []
  }
];

const JobCard: React.FC<{ job: JobOffer }> = ({ job }) => {
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
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {job.course_id.name} - {job.category_id.name}
          </h3>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <span className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              {job.total_view} views
            </span>
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              {job.total_application} applications
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">৳{job.salary}</div>
          <div className="text-sm text-gray-500">per month</div>
        </div>
      </div>

      {/* Subjects */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {job.student_subject.map((subject, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              <BookOpen className="h-3 w-3 mr-1" />
              {subject.title}
            </span>
          ))}
        </div>
      </div>

      {/* Job Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span>{job.location_id.name}, {job.city_id.name}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-gray-400" />
            <span>{formatTime(job.tutoring_time)} ({job.tutoring_duration} hours)</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span>{job.days_in_week}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-gray-400" />
            <span>{job.number_of_students} student(s)</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">Method:</span>
            <span>{job.teaching_method_id.name}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">Gender:</span>
            <span className="capitalize">Seeking {job.tutor_gender} tutor</span>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="mb-4 p-3 bg-gray-50 rounded-md">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Address:</span> {job.full_address}
        </div>
      </div>

      {/* Requirements */}
      {job.requirement && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
          <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-md border-l-4 border-yellow-400">
            {job.requirement.replace(/"/g, '')}
          </p>
        </div>
      )}

      {/* University Requirements */}
      {job.tutor_university.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Preferred Universities:</h4>
          <div className="flex flex-wrap gap-2">
            {job.tutor_university.map((uni, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800"
              >
                <GraduationCap className="h-3 w-3 mr-1" />
                {uni.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Department Requirements */}
      {job.tutor_department.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Preferred Departments:</h4>
          <div className="flex flex-wrap gap-2">
            {job.tutor_department.map((dept, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800"
              >
                {dept.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Posted: {formatDate(job.created_at)}
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
            View Details
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

const JobPostPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tutoring Jobs</h1>
              <p className="mt-1 text-sm text-gray-600">
                Find the perfect tutoring opportunity in Dhaka
              </p>
            </div>
            <div className="text-sm text-gray-500">
              {jobOffers.length} job{jobOffers.length !== 1 ? 's' : ''} available
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {jobOffers.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPostPage;