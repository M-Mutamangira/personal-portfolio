import type { Metadata } from 'next';
import Link from 'next/link';

import { SchemaGraph } from '@/components/Schema';
import Entry from '@/components/Speaking/Entry';
import PageWrapper from '@/components/Template/PageWrapper';
import { getAppearances } from '@/data/speaking';
import { createPageMetadata } from '@/lib/metadata';
import { collectionPageNode, sectionPageNodes } from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const PAGE_TITLE = 'Speaking';

const SPEAKING_DESCRIPTION = `Panels and discussions on enterprise infrastructure, information systems, and analytics by ${AUTHOR_NAME}.`;

export const metadata: Metadata = createPageMetadata({
  title: PAGE_TITLE,
  description: SPEAKING_DESCRIPTION,
  path: '/speaking/',
});

export default function SpeakingPage() {
  const appearances = getAppearances();

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={sectionPageNodes(
          collectionPageNode,
          '/speaking/',
          PAGE_TITLE,
          SPEAKING_DESCRIPTION,
        )}
      />
      {/* The register's layout classes are shared with /projects. */}
      <div className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">{PAGE_TITLE}</h1>
          <p className="page-subtitle page-prose">
            I talk about enterprise infrastructure, information systems
            architecture, and data analytics. If you’re organizing an event or
            session, <Link href="/contact/">get in touch</Link>.
          </p>
        </header>

        <section className="projects-group" aria-labelledby="speaking-public">
          <div className="section-header">
            <h2 id="speaking-public" className="section-heading">
              Public sessions
            </h2>
          </div>
          {appearances.length > 0 ? (
            <ol className="projects-register">
              {appearances.map((appearance) => (
                <li key={appearance.link}>
                  <Entry data={appearance} />
                </li>
              ))}
            </ol>
          ) : (
            <p className="page-prose">
              No public sessions currently scheduled. For inquiries,
              invitations, or panel discussions, please reach out via the{' '}
              <Link href="/contact/">contact page</Link>.
            </p>
          )}
        </section>
      </div>
    </PageWrapper>
  );
}
