export interface Course {
  title: string;
  number: string;
  link: string;
  /**
   * Must match a `Degree.school` in `src/data/resume/degrees.ts` exactly.
   * `src/lib/resumeJson.ts` files coursework under the education entry with
   * this name, and it compares the two strings whole — a shortened form here
   * would silently drop the courses from `/resume.json`.
   */
  university: string;
  /**
   * The `Degree.degree` it counted toward, needed only where one school
   * awarded more than one degree; the build stops when it is missing there.
   */
  degree?: string;
}

const courses: Course[] = [
  {
    title: 'Information Systems Project (Capstone)',
    number: 'PRO001',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Database Systems & Data Warehousing',
    number: 'ILS3A01',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Enterprise Systems & IS Management',
    number: 'ILS3B01',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'IT Infrastructure & Communication Networks',
    number: 'DEV2B01',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Enterprise Architecture & TOGAF Framework',
    number: 'ILS2A01',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'IT Project Management & Earned Value Analysis',
    number: 'ILS2B01',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Database Design & Python Development',
    number: 'DEV2A01',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Object-Oriented Programming & C# Applications',
    number: 'DEV1B01',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Systems Analysis & Design (SAD)',
    number: 'ILS1B01',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Lean Startup & Venture Financing',
    number: 'ETS13A3',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Creativity, Innovation & Business Modeling',
    number: 'ETS22B2',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
  {
    title: 'Business & Financial Management',
    number: 'BMA21B1',
    link: 'https://www.uj.ac.za',
    university: 'University of Johannesburg',
  },
];

export default courses;
