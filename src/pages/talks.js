import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const talks = [
  {
    type: 'Talk',
    event: 'Genomics England Research Summit',
    location: 'London, UK',
    year: '2024',
  },
  {
    type: 'Invited talk',
    event: 'Vanderbilt University Medical Center',
    location: 'Nashville, TN (online)',
    year: '2023',
  },
  {
    type: 'Industry presentation',
    event: 'Novo Nordisk–Oxford Big Data Partnership',
    location: 'Oxford, UK',
    year: '2023',
    note: 'January & October'
  },
  {
    type: 'Lightning talk',
    event: 'American Society of Human Genetics (ASHG)',
    location: 'Houston, TX',
    year: '2019',
  },
];

const posters = [
  { event: 'RNA Society Annual Meeting', location: 'Boulder, CO', year: '2022' },
  { event: 'American Society of Human Genetics (ASHG)', location: 'Virtual', year: '2021' },
  { event: 'Genome Informatics', location: 'Cold Spring Harbor, NY', year: '2019' },
];

const TalksPage = () => {
  return (
    <Layout>
      <Seo title="Talks" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-8">Talks & Presentations</h4>

        <h5 className="text-xl font-bold mb-4">Invited Talks & Conference Presentations</h5>
        <div className="mb-10 space-y-4">
          {talks.map((t, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-gray-400 text-sm w-10 pt-0.5 shrink-0">{t.year}</span>
              <div>
                <p className="font-semibold">{t.event}</p>
                <p className="text-sm text-gray-500">{t.type} · {t.location}{t.note ? ` · ${t.note}` : ''}</p>
              </div>
            </div>
          ))}
        </div>

        <h5 className="text-xl font-bold mb-4">Posters</h5>
        <div className="mb-10 space-y-4">
          {posters.map((p, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-gray-400 text-sm w-10 pt-0.5 shrink-0">{p.year}</span>
              <div>
                <p className="font-semibold">{p.event}</p>
                <p className="text-sm text-gray-500">{p.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          Interested in having me speak at your event or seminar? <a href="/contact">Get in touch.</a>
        </p>
      </section>
    </Layout>
  );
};

export default TalksPage;
