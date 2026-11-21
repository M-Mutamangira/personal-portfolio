import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import certificates from '@/data/resume/certificates';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';
import ResumePage from '../resume/page';

// Job, degree, and certificate links are printed as text, and course links remain PDF
// annotations, so all need destinations that still mean something on paper.
describe('resume link data', () => {
  it('gives every company, school, certificate and course a lasting absolute URL', () => {
    for (const link of [
      ...work.map((job) => job.url),
      ...degrees.map((degree) => degree.link),
      ...certificates.map((cert) => cert.url),
      ...courses.map((course) => course.link),
    ]) {
      const url = new URL(link);

      expect(['http:', 'https:']).toContain(url.protocol);
      expect(url.hostname).not.toBe('');
      // A `jsessionid` is bound to a server session that has expired.
      expect(link.toLowerCase()).not.toContain('jsessionid');
    }
  });

  it('renders a link for every course', () => {
    const { container } = render(<ResumePage />);

    expect(
      container.querySelectorAll('.course-container a[href]'),
    ).toHaveLength(courses.length);
  });

  // Company domains should be stable URLs.
  it.each([
    ['theRally', 'https://therally.co.za/'],
    ['Kenac Computer Systems', 'https://kenac.co.zw'],
    ['Silverline Group of Companies', 'https://silverline.co.zw'],
  ])('uses a stable destination for company %s', (name, expected) => {
    expect(work.find((position) => position.name === name)?.url).toBe(expected);
  });

  // A title and its link must come from the same record.
  it.each([
    [
      'PRO001',
      'Information Systems Project (Capstone)',
      'https://www.uj.ac.za',
    ],
    ['ILS3A01', 'Database Systems & Data Warehousing', 'https://www.uj.ac.za'],
    ['ILS3B01', 'Enterprise Systems & IS Management', 'https://www.uj.ac.za'],
    [
      'DEV2B01',
      'IT Infrastructure & Communication Networks',
      'https://www.uj.ac.za',
    ],
    [
      'ILS2A01',
      'Enterprise Architecture & TOGAF Framework',
      'https://www.uj.ac.za',
    ],
    [
      'ILS2B01',
      'IT Project Management & Earned Value Analysis',
      'https://www.uj.ac.za',
    ],
    ['DEV2A01', 'Database Design & Python Development', 'https://www.uj.ac.za'],
    [
      'DEV1B01',
      'Object-Oriented Programming & C# Applications',
      'https://www.uj.ac.za',
    ],
    ['ILS1B01', 'Systems Analysis & Design (SAD)', 'https://www.uj.ac.za'],
    ['ETS13A3', 'Lean Startup & Venture Financing', 'https://www.uj.ac.za'],
    [
      'ETS22B2',
      'Creativity, Innovation & Business Modeling',
      'https://www.uj.ac.za',
    ],
    ['BMA21B1', 'Business & Financial Management', 'https://www.uj.ac.za'],
  ])('keeps %s aligned with its course record', (number, title, link) => {
    expect(courses.find((course) => course.number === number)).toMatchObject({
      title,
      link,
    });
  });
});

describe('resume print control', () => {
  it('opens the print dialog', () => {
    const print = vi.spyOn(window, 'print').mockImplementation(() => {});
    render(<ResumePage />);

    fireEvent.click(screen.getByRole('button', { name: 'Print / PDF' }));

    expect(print).toHaveBeenCalledOnce();
    print.mockRestore();
  });
});
