/**
 * The register of things I have built.
 *
 * Two groups, both kept deliberately:
 *
 * - `shipped` — selected production work Munashe built, led, or contributed
 *   to, and can be pointed at.
 * - `archive` — academic projects and student-era experiments.
 *
 * Shipped entries cite either a role in `src/data/resume/work.ts` or the
 * source repository for a personal project, while client or freelance work
 * with a private codebase links directly to the production site.
 * Résumé-backed dates and numeric claims are cross-checked; repository
 * evidence is reviewed when adding or updating an entry. Archive entries are
 * maintained here directly.
 */
type ProjectStatus = 'shipped' | 'archive';

export interface Project {
  title: string;
  /** Role, venue, or one-line positioning. Rendered as a mono label. */
  subtitle?: string;
  /**
   * Public destination for the work. Entries without one are rendered as
   * visibly inert rather than as cards that look clickable and are not.
   */
  link?: string;
  /** Résumé role that backs a shipped entry's dates and numeric claims. */
  sourceWork?: string;
  /** Source repository backing a personal project's dates and description. */
  sourceRepository?: string;
  /**
   * Screenshot, where one exists. Optional: the card and the register row are
   * both designed to read on type and rules alone, so a new entry does not
   * need art invented for it.
   */
  image?: string;
  /**
   * ISO date Munashe's work on the project started, or a one-off shipped.
   * This is project activity, not necessarily a public launch date.
   */
  date: string;
  /** ISO date project activity ended. Omitted on one-offs and live work. */
  endDate?: string;
  /**
   * The project is still active. This is deliberately independent of the
   * historical role named by `subtitle`: a project can continue after an
   * acquisition or employment transition. Drives the amber `Present` reading
   * and is mutually exclusive with `endDate`.
   */
  ongoing?: boolean;
  desc: string;
  /** Technologies named by the résumé or source repository. */
  tech?: string[];
  status: ProjectStatus;
}

/**
 * Hand-ordered, most recent activity first within each group. Live work leads,
 * then sorts by its own start date; finished work sorts by its end (or one-off)
 * date. `projects.test.ts` pins the complete comparator, including ties.
 */
const data: Project[] = [
  {
    title: 'Global Business Consulting',
    subtitle: 'Freelance Developer',
    link: 'https://global-business-consulting-pi.vercel.app/',
    date: '2025-06-01',
    desc: 'Designed and developed a modern web platform for Global Business Consulting, a management consulting and strategic advisory firm providing business strategy, operational excellence, and digital transformation for enterprises across South Africa and Zimbabwe.',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
    status: 'shipped',
  },
  {
    title: 'Enterprise Backup & Recovery Systems',
    subtitle:
      'Kenac Computer Systems · Reserve Bank of Zimbabwe, ZB Bank, Econet',
    link: 'https://kenac.co.zw',
    sourceWork: 'Kenac Computer Systems',
    date: '2023-06-01',
    endDate: '2024-02-01',
    desc: 'Managed backup and recovery systems using Veeam and Veritas for enterprise clients, ensuring strict data security and redundancy.',
    tech: ['Veeam', 'Veritas', 'Backup Systems', 'Risk Mitigation'],
    status: 'shipped',
  },
  {
    title: 'Hybrid Cloud & AI Infrastructure',
    subtitle: 'Kenac Computer Systems · Econet Wireless',
    link: 'https://kenac.co.zw',
    sourceWork: 'Kenac Computer Systems',
    date: '2023-06-01',
    endDate: '2024-02-01',
    desc: 'Contributed to the physical deployment of a Hybrid Cloud & AI infrastructure for Zimbabwe’s largest telecommunications provider Econet Wireless, enabling their Cloudera data-driven insights initiative.',
    tech: [
      'Hybrid Cloud',
      'AI Infrastructure',
      'Cloudera',
      'Enterprise Systems',
    ],
    status: 'shipped',
  },
  {
    title: 'Client Growth & Digital Marketing',
    subtitle: 'Silverline Group of Companies',
    link: 'https://silverline.co.zw',
    sourceWork: 'Silverline Group of Companies',
    date: '2023-01-01',
    endDate: '2023-05-01',
    desc: 'Implemented targeted growth initiatives and data-driven marketing campaigns across business units to expand client retainers and enhance online visibility.',
    tech: ['Client Retention', 'Growth Strategy', 'Digital Marketing'],
    status: 'shipped',
  },
  {
    title: 'EcoTrack: Industrial Environmental Intelligence',
    subtitle:
      'Full-Stack Developer · University of Johannesburg (Team Artemi9)',
    link: 'https://eco-track-omega-ten.vercel.app',
    date: '2026-02-01',
    endDate: '2026-10-31',
    desc: 'Engineered the offline-first PWA and collaborated closely with Sonke Vilakazi across backend services, REST APIs, the AI assistant, and emissions intelligence engines to process live ESP32 IoT sensor telemetry for industrial operators on the Mpumalanga Highveld.',
    tech: [
      'Next.js 16',
      'TypeScript',
      'FastAPI',
      'Python',
      'AI Assistant',
      'Emissions Intelligence',
      'PWA',
      'Tailwind CSS',
      'Mapbox GL',
      'Supabase',
      'ESP32 IoT',
    ],
    status: 'archive',
  },
  {
    title: 'Green City Tycoon: Sustainable Urban Strategy Game',
    subtitle: 'Game Logic & Mechanics Lead · University of Johannesburg',
    link: 'https://www.uj.ac.za',
    date: '2025-08-01',
    endDate: '2025-08-15',
    desc: 'Designed gameplay logic, player progression, and scoring mechanics for a strategic simulation board game focused on UN Sustainable Development Goal 11 (Sustainable Cities), integrating resource allocation across renewable energy, water, transit, and housing zones.',
    tech: [
      'Game Design',
      'System Dynamics',
      'SDG 11',
      'Resource Modeling',
      'Creative Problem Solving',
    ],
    status: 'archive',
  },
  {
    title: 'Enterprise Architecture Alignment & Modeling',
    subtitle: 'Architecture Modeler · University of Johannesburg',
    link: 'https://www.uj.ac.za',
    date: '2025-03-01',
    endDate: '2025-05-07',
    desc: 'Developed an enterprise architecture blueprint using the ArchiMate modeling language and TOGAF-9 framework, mapping business layer capabilities to application services and underlying technology infrastructure.',
    tech: [
      'ArchiMate',
      'TOGAF-9',
      'Enterprise Architecture',
      'Archi',
      'Business Process Modeling',
    ],
    status: 'archive',
  },
  {
    title: 'Healthcare Data Management Case Study',
    subtitle: 'University of Johannesburg',
    link: 'https://www.uj.ac.za',
    date: '2024-08-01',
    desc: 'Utilized SQL to clean, normalize, and extract trends from large datasets of patient records, generating structured analytical reports for decision-support scenarios.',
    tech: ['SQL', 'Data Normalization', 'Relational Databases', 'Analytics'],
    status: 'archive',
  },
];

export default data;

/** The register: production work, most recent first. */
export const shipped = data.filter((project) => project.status === 'shipped');

/** Student-era history, most recent first. */
export const archive = data.filter((project) => project.status === 'archive');
