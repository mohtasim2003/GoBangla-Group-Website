'use client';

import Footer from "@/app/Component/Footer";
import Navbar from "@/app/Component/Navbar";

interface JobCard {
  id: number;
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
}

const jobOpenings: JobCard[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    description: 'We are looking for an experienced Frontend Developer to join our team and build amazing user experiences with React and Next.js. You will work on scalable applications and collaborate with cross-functional teams.',
    requirements: ['5+ years React experience', 'Next.js proficiency', 'TypeScript expertise', 'UI/UX collaboration skills'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Dhaka, Bangladesh',
    description: 'Join our backend and frontend team to develop robust and scalable web applications. You will be responsible for designing databases, APIs, and user interfaces that serve millions of users.',
    requirements: ['Node.js experience', 'Database design', 'REST API development', 'Frontend frameworks knowledge'],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    description: 'Create beautiful and intuitive user interfaces for our digital products. Work closely with product managers and developers to bring innovative design solutions to life.',
    requirements: ['Figma proficiency', 'Design system experience', 'User research knowledge', 'Prototyping skills'],
  },
  {
    id: 4,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Dhaka, Bangladesh',
    description: 'Lead our marketing initiatives and develop strategies to grow our brand presence. You will manage campaigns, analyze market trends, and drive customer acquisition.',
    requirements: ['3+ years marketing experience', 'Campaign management', 'Analytics skills', 'Leadership ability'],
  },
  {
    id: 5,
    title: 'Data Analyst',
    department: 'Data & Analytics',
    location: 'Remote',
    description: 'Analyze complex datasets to provide actionable insights. You will work with SQL, Python, and visualization tools to support business decision-making.',
    requirements: ['SQL expertise', 'Python or R knowledge', 'Data visualization', 'Statistical analysis'],
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    description: 'Manage and optimize our cloud infrastructure. You will implement CI/CD pipelines, ensure system reliability, and improve deployment processes.',
    requirements: ['AWS/GCP experience', 'Docker & Kubernetes', 'CI/CD pipeline setup', 'System administration'],
  },
  {
    id: 7,
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'Dhaka, Bangladesh',
    description: 'Develop high-performance mobile applications for iOS and Android. Collaborate with our team to create features that delight users.',
    requirements: ['React Native or Flutter', 'Mobile UI design', 'API integration', 'Version control expertise'],
  },
];

const googleFormLink = 'https://forms.gle/your-google-form-link'; // Replace with your actual Google Form link

export default function CareerPage() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are looking for talented individuals to join GoBangla. Explore our current job openings and grow your career with us.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col"
            >
              {/* Job Header */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded">
                    {job.department}
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded">
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Job Description */}
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {job.description}
              </p>

              {/* Requirements */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Key Requirements:
                </h3>
                <ul className="space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Didn't find the right position?
          </h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented people. Send us your resume and let's talk about how you can contribute to GoBangla.
          </p>
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Submit Your Application
          </a>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </main>
  );
}
