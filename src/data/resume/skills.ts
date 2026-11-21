export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

const skills: Skill[] = [
  // Databases
  {
    title: 'SQL (PostgreSQL & SQL Server)',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'Database Design & Normalization (1NF–3NF)',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'Data Warehousing & OLAP',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Stored Procedures & Triggers',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Relational Algebra & ERD Modeling',
    competency: 4,
    category: ['Databases'],
  },

  // Languages
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C# (.NET)',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Languages'],
  },

  // Systems & Architecture
  {
    title: 'Enterprise Architecture (TOGAF-9 & ArchiMate)',
    competency: 4,
    category: ['Systems & Architecture'],
  },
  {
    title: 'Systems Analysis & Design (UML, DFDs)',
    competency: 4,
    category: ['Systems & Architecture'],
  },
  {
    title: 'SDLC & Agile Methodologies',
    competency: 4,
    category: ['Systems & Architecture'],
  },
  {
    title: 'IT Project Management (WBS, EVM)',
    competency: 4,
    category: ['Systems & Architecture'],
  },

  // Infrastructure
  {
    title: 'Hardware Diagnostics & Technical Support',
    competency: 5,
    category: ['Infrastructure'],
  },
  {
    title: 'Hybrid Cloud Infrastructure',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Backup & Recovery (Veeam / Veritas)',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Computer Networking (OSI & TCP/IP)',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'VMware Virtualization',
    competency: 4,
    category: ['Infrastructure'],
  },

  // Security & Compliance
  {
    title: 'Data Privacy & Compliance (POPIA / GDPR)',
    competency: 4,
    category: ['Security & Compliance'],
  },
  {
    title: 'Business Continuity & Disaster Recovery (BCP/DR)',
    competency: 4,
    category: ['Security & Compliance'],
  },
  {
    title: 'Fraud Protection (IBM Trusteer)',
    competency: 4,
    category: ['Security & Compliance'],
  },
  {
    title: 'Identity & Access Management (IAM)',
    competency: 4,
    category: ['Security & Compliance'],
  },
  {
    title: 'Network Security (Fortinet FCA/FCF)',
    competency: 4,
    category: ['Security & Compliance'],
  },

  // Business & Strategy
  {
    title: 'Operations Management',
    competency: 5,
    category: ['Business & Strategy'],
  },
  {
    title: 'Process Improvement',
    competency: 4,
    category: ['Business & Strategy'],
  },
  {
    title: 'Stakeholder Management',
    competency: 5,
    category: ['Business & Strategy'],
  },
  {
    title: 'Cross-Functional Collaboration',
    competency: 5,
    category: ['Business & Strategy'],
  },
  {
    title: 'Lean Startup & Business Model Canvas',
    competency: 4,
    category: ['Business & Strategy'],
  },
  {
    title: 'Business Case & Feasibility Analysis',
    competency: 4,
    category: ['Business & Strategy'],
  },
  {
    title: 'Financial Management & Budgeting',
    competency: 4,
    category: ['Business & Strategy'],
  },
  {
    title: 'Client Growth Strategy',
    competency: 4,
    category: ['Business & Strategy'],
  },

  // Tools
  {
    title: 'Microsoft Excel',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Microsoft PowerPoint & Word',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'SQL Server Management Studio (SSMS)',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Archi (Enterprise Architecture Modeling)',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Visual Studio & VS Code',
    competency: 4,
    category: ['Tools'],
  },
];

export { skills };
