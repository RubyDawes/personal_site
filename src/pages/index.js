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
        <p className="mb-4">
          I am a computational genomics researcher specialising in the interpretation of genetic variants that disrupt RNA splicing. My work focuses on developing methods and tools that improve the diagnosis of rare diseases — bridging bioinformatics, human genetics, and clinical genomics.
        </p>
        <p className="mb-4">
          I hold an <strong>NHMRC Investigator Grant (Emerging Leadership 1)</strong> supporting research on enhanced analysis of splice-altering variants to improve diagnostic rates in rare disease. I am currently based at the Nuffield Department of Medicine, University of Oxford, working with the{' '}
          <a href="https://rarediseasegenomics.org/" target="_blank" rel="noreferrer">Whiffin</a> and Sanders groups. I am also a Visiting Scientist at the Garvan Institute of Medical Research, UNSW Sydney.
        </p>
        <p className="mb-4">
          I completed my PhD at the University of Sydney (Cooper Lab), where I developed empirical approaches to predict splice-altering variants using large-scale RNA-seq data. This work led to <Link to="/software">SpliceVault</Link> and related tools, now used in clinical and research settings internationally.
        </p>
        <p className="mb-8">
          I am interested in collaborations at the intersection of variant interpretation, RNA biology, and rare disease diagnosis. Feel free to <Link to="/contact">get in touch</Link>.
        </p>
        <div className="flex gap-6 flex-wrap text-sm font-semibold tracking-wide">
          <Link to="/work">Research →</Link>
          <Link to="/publications">Publications →</Link>
          <Link to="/software">Software & Tools →</Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;