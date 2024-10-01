import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const TalksPage = () => {
  return (
    <Layout>
      <Seo title="Talks" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-2">Talks & Presentations</h4>
        <p className="mb-4">I regularly present my work at international conferences and academic seminars. Below are some of my recent and upcoming talks:</p>
        <ul className="list-disc pl-6">
          <li className="mb-2"><strong>Genomics 2024 Conference:</strong> "The Role of Genomic Medicine in Rare Disease Diagnosis" (June 2024, London)</li>
          <li className="mb-2"><strong>Oxford Genomic Seminar:</strong> "Advances in Identifying Novel Mutations in Inherited Metabolic Disorders" (March 2024, Oxford)</li>
          <li className="mb-2"><strong>European Genetics Symposium:</strong> "Genetic Innovations for Metabolic Disorders" (November 2023, Barcelona)</li>
        </ul>
        <p className="mb-4">Please feel free to reach out if you'd like me to speak at your event or participate in a panel discussion.</p>
      </section>
    </Layout>
  );
};

export default TalksPage;
