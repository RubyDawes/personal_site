import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-4">About</h4>
        <div className="flex gap-6 flex-wrap text-sm font-semibold tracking-wide mt-8">
          <Link to="/work">Research →</Link>
          <Link to="/publications">Publications →</Link>
          <Link to="/software">Software & Tools →</Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;