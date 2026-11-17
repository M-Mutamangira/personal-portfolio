import { describe, expect, it } from 'vitest';

import certificates from '../resume/certificates';
import courses from '../resume/courses';
import degrees from '../resume/degrees';
import { skills } from '../resume/skills';
import writing from '../writing';

const unique = (values: readonly unknown[]) =>
  new Set(values).size === values.length;
const isDescending = (values: readonly string[]) =>
  values.every((value, index) => index === 0 || values[index - 1] >= value);

describe('data the site publishes', () => {
  it('has no duplicate entries', () => {
    expect(unique(courses.map((course) => course.number))).toBe(true);
    expect(unique(degrees.map((degree) => degree.school))).toBe(true);
    expect(
      unique(certificates.map((cert) => `${cert.issuer}-${cert.name}`)),
    ).toBe(true);
    expect(unique(writing.map((item) => item.url))).toBe(true);
  });

  it('links only to absolute web addresses', () => {
    const links = [
      ...courses.map((course) => course.link),
      ...degrees.map((degree) => degree.link),
      ...certificates.map((cert) => cert.url),
      ...writing.map((item) => item.url),
    ];

    for (const link of links) {
      expect(link).toMatch(/^https?:\/\/.+/);
    }
  });

  // A skill with no category belongs to no group, so the résumé would drop it.
  it('files every skill under at least one category', () => {
    for (const skill of skills) {
      expect(skill.category.length).toBeGreaterThan(0);
    }
  });

  // Hand-ordered in the source.
  it('orders dated writing newest first', () => {
    const dated = writing.map((item) => item.date).filter(Boolean);

    expect(isDescending(dated)).toBe(true);
  });

  it('dates every certificate with a valid month or day', () => {
    for (const { date } of certificates) {
      expect(date).toMatch(/^\d{4}-\d{2}(-\d{2})?$/);
    }
  });
});
