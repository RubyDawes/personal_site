import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const CurrentResearchPage = () => {
  return (
    <Layout>
      <Seo title="Current Research" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-2">Current Research</h4>
        <p className="mb-4">My research is focused on understanding the genetic mutations responsible for inherited metabolic disorders. By leveraging cutting-edge genomic and bioinformatics technologies, we aim to identify new mutations and molecular mechanisms to improve the diagnosis and treatment of these rare conditions.</p>
        <p className="mb-4">We are collaborating with several international research teams and healthcare institutions to translate our findings into practical clinical applications, which can ultimately improve patient care and outcomes.</p>
        <p className="mb-4">Stay tuned for updates on our latest findings, publications, and collaborations.</p>
      </section>
    </Layout>
  );
};

export default CurrentResearchPage;
