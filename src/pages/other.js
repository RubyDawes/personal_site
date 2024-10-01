import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const OtherWritingPage = () => {
  return (
    <Layout>
      <Seo title="Other Writing" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-2">Other Writing</h4>
        <p className="mb-4">In addition to my academic publications, I occasionally write articles and blog posts on topics related to genomics, rare diseases, and science communication. Below are some of my recent pieces:</p>
        <ul className="list-disc pl-6">
          <li className="mb-2"><a href="https://example.com/article1" className="text-blue-600 hover:text-blue-800">"The Future of Genomic Medicine"</a> (Published in <em>Scientific Journal</em>, September 2023)</li>
          <li className="mb-2"><a href="https://example.com/article2" className="text-blue-600 hover:text-blue-800">"Challenges and Opportunities in Diagnosing Rare Diseases"</a> (Personal Blog, June 2023)</li>
        </ul>
      </section>
    </Layout>
  );
};

export default OtherWritingPage;
