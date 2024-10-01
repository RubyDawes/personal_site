import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-2">About Me</h4>
        <p className="mb-4">I am Ruebena Dawes, a postdoctoral researcher in clinical genetics at the University of Oxford. My research focuses on understanding the genetic basis of rare diseases and developing new diagnostic tools to improve patient care.</p>
        <h4 className="text-2xl font-bold mb-2">Current Research</h4>
        <p className="mb-4">Currently, I am working on a project that aims to identify novel genetic mutations associated with inherited metabolic disorders. By using advanced genomic technologies and bioinformatics tools, we hope to uncover new insights into the molecular mechanisms underlying these conditions.</p>
        <h4 className="text-2xl font-bold mb-2">Publications</h4>
        <p className="mb-4">I have published several papers in leading scientific journals, including Nature Genetics and The American Journal of Human Genetics. My work has been recognized with multiple awards and grants from prestigious organizations.</p>
        <h4 className="text-2xl font-bold mb-2">Contact</h4>
        <p>If you would like to learn more about my research or collaborate on a project, please feel free to reach out to me through the <Link to="/contact" className="text-blue-600 hover:text-blue-800">contact page</Link>.</p>
      </section>
    </Layout>
  );
};

export default IndexPage;