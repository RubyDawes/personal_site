import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-2">Contact</h4>
        <p>If you would like to learn more about my research or collaborate on a project, please feel free to reach out to me through the <Link to="/contact" className="text-blue-600 hover:text-blue-800">contact page</Link>.</p>
      </section>
    </Layout>
  );
};

export default IndexPage;