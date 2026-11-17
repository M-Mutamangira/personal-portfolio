import type { Certificate } from '@/data/resume/certificates';
import { smartQuotes } from '@/lib/typography';

export default function Certificates({ data }: { data: Certificate[] }) {
  return (
    <div className="certificates">
      <div className="section-header">
        <h2 className="section-heading">Certifications</h2>
      </div>
      <div className="certificates-list">
        {data.map((cert) => (
          <article
            className="degree-container"
            key={`${cert.issuer}-${cert.name}`}
          >
            <header>
              <h3 className="degree">
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  {smartQuotes(cert.name)}
                </a>
              </h3>
              <p className="school">
                <span>{smartQuotes(cert.issuer)}</span>,{' '}
                <time dateTime={cert.date}>{cert.date}</time>
              </p>
            </header>
          </article>
        ))}
      </div>
    </div>
  );
}
