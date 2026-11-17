export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of Johannesburg',
    degree: 'Bachelor of Commerce in Information Systems',
    link: 'https://www.uj.ac.za',
    year: 2027,
  },
  {
    school: 'High Achievers Coach International Academy',
    degree: 'Cambridge GCE Advanced Level',
    link: 'https://www.cambridgeinternational.org',
    year: 2022,
  },
];

export default degrees;
