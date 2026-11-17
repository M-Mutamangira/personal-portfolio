export interface WritingEntry {
  title: string;
  url: string;
  date: string;
  description: string;
}

const data: WritingEntry[] = [
  {
    title:
      'The Rise of Climate Innovation in Africa: Trends, Opportunities, and Impact',
    url: 'https://cleantechhub.medium.com/the-rise-of-climate-innovation-in-africa-trends-opportunities-and-impact-27095ac21bb7',
    date: '2024-08-14',
    description:
      'How African innovators and clean-tech entrepreneurs are pioneering decentralized solutions across renewable energy, sustainable agriculture, and ecological resilience.',
  },
  {
    title: 'Will AI End the World?',
    url: 'https://www.moneyweb.co.za/financial-advisor-views/will-ai-end-the-world/',
    date: '2024-04-18',
    description:
      'An analytical assessment of artificial intelligence risks versus real-world economic transformation, separating existential hype from pragmatic governance.',
  },
  {
    title: 'Global Security Threats 2026: Defence & Strategic Intelligence',
    url: 'https://www.janes.com/defence-intelligence-insights/defence-and-national-security-analysis/global-security-threats-2026',
    date: '',
    description:
      'A comprehensive strategic intelligence assessment by Janes mapping global threat trajectories, geopolitical friction, and multi-domain defense dynamics in 2026.',
  },
];

export default data;
