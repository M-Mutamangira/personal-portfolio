/** Based on the JSON Resume work item, with a local `commitment` extension. */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  /**
   * Marks an open-ended role that ran alongside the primary career. Omitted
   * means full-time; `sortPositions` uses this to keep an enduring side role
   * from outranking every later full-time position.
   */
  commitment?: 'part-time';
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'theRally',
    position: 'Operations Manager',
    url: 'https://therally.co.za/',
    startDate: '2026-02-01',
    commitment: 'part-time',
    summary: `Ensuring all day-to-day operational processes, internal systems management, and administrative functions run smoothly for the social sporting events company.`,
    highlights: [
      'Manage day-to-day operational processes and team workflows to support organizational goals.',
      'Maintain internal systems, digital tools, and comprehensive operational documentation.',
      'Coordinate team meetings, operational agendas, and action-item follow-ups.',
      'Onboard new team members and manage volunteer logistics and event staffing.',
      'Handle resource procurement of materials and operational equipment for sporting events.',
      'Identify and implement process improvements to enhance operational efficiency across the organization.',
      'Manage digital ticketing and check-in workflows, including ticket inventory management.',
    ],
  },
  {
    name: 'Kenac Computer Systems',
    position: 'Technical Services Junior Engineer',
    url: 'https://kenac.co.zw',
    startDate: '2023-06-01',
    endDate: '2024-02-01',
    summary: `Technical Services Junior Engineer supporting enterprise infrastructure for high-value corporate clients including Econet Wireless, ZB Bank, and the Reserve Bank of Zimbabwe.`,
    highlights: [
      'Contributed to the physical deployment of a Hybrid Cloud & AI infrastructure for Zimbabwe’s largest telecommunications provider Econet Wireless, enabling their Cloudera data-driven insights initiative.',
      'Diagnosed and resolved critical technical bottlenecks and hardware faults across servers, desktops, laptops, and printers for corporate clients including the Reserve Bank of Zimbabwe, ZB Bank, and Econet Wireless.',
      'Managed backup and recovery systems using Veeam and Veritas for enterprise clients, ensuring strict data security and redundancy.',
      'Maintained a comprehensive knowledge base of incident reports and resolution steps, ensuring accurate tracking and faster recovery for recurring system faults.',
      'Revised the Standard Operating Procedure for mobile repair ticketing, streamlining intake and improving resolution efficiency for the technical team.',
    ],
  },
  {
    name: 'Silverline Group of Companies',
    position: 'Sales and Marketing Intern',
    url: 'https://silverline.co.zw',
    startDate: '2023-01-01',
    endDate: '2023-05-01',
    summary: `Managed client growth initiatives and digital marketing campaigns across all business units in Zimbabwe.`,
    highlights: [
      'Oversaw key accounts and implemented targeted growth initiatives, resulting in expanded client retainers and increased revenue generation.',
      'Executed marketing campaigns across all business units, increasing client acquisition and engagement.',
      'Created digital content and executed data-driven social media strategies, boosting online brand reach and business visibility.',
    ],
  },
];

export default work;
