export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

const certificates: Certificate[] = [
  {
    name: 'IBM Trusteer Fraud Protection Specialist',
    issuer: 'IBM',
    date: '2024-03',
    url: 'https://www.ibm.com',
  },
  {
    name: 'Fortinet Certified Associate (FCA) in Cybersecurity',
    issuer: 'Fortinet',
    date: '2024-05',
    url: 'https://www.fortinet.com',
  },
  {
    name: 'Data Security & Key Lifecycle Management',
    issuer: 'Enterprise Security Architecture',
    date: '2024-07',
    url: 'https://www.uj.ac.za',
  },
];

export default certificates;
