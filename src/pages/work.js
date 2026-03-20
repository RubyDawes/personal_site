import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ResearchPage = () => {
  return (
    <Layout>
      <Seo title="Research" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-4">Research</h4>
        <p className="mb-8">
          My research sits at the intersection of computational genomics, RNA biology, and rare disease diagnostics. I develop methods and tools to interpret genetic variants — particularly those that disrupt RNA splicing — with the goal of improving diagnostic yield for patients with rare and undiagnosed conditions.
        </p>

        <h5 className="text-xl font-bold mb-2">Splice Variant Interpretation</h5>
        <p className="mb-6">
          Variants that alter pre-mRNA splicing are a major cause of rare disease but are notoriously difficult to interpret computationally. My PhD work established that the natural mis-splicing patterns observed across tens of thousands of RNA-seq samples can serve as an empirical atlas for predicting the precise outcome of pathogenic splice variants. This led to <a href="/software">SpliceVault</a>, a tool and web portal built on 300,000 RNA-seq samples that predicts both whether and how a variant will disrupt splicing — enabling more accurate variant classification in clinical and research settings.
        </p>

        <h5 className="text-xl font-bold mb-2">Improving Rare Disease Diagnosis</h5>
        <p className="mb-6">
          Diagnostic rates in rare disease remain unacceptably low, often due to limitations in how variants are prioritised and interpreted. My work addresses this at multiple levels: identifying classes of variants systematically missed by standard pipelines (such as errors in precomputed SpliceAI scores), extending interpretation to non-coding regions including promoters and untranslated regions, and developing resources that allow clinical labs to apply state-of-the-art methods at scale.
        </p>

        <h5 className="text-xl font-bold mb-2">Current Projects</h5>
        <p className="mb-3">
          My <strong>NHMRC Investigator Fellowship (EL1)</strong> funds research on enhanced analysis of splice-altering variants to improve diagnostic rates in rare disease. This work is conducted across two collaborative strands at Oxford:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            With the <a href="https://rarediseasegenomics.org/" target="_blank" rel="noreferrer">Whiffin group</a> (Computational Rare Disease Genomics): applying and extending variant interpretation methods across large rare disease cohorts, including work on splice variant triage and non-coding variant identification.
          </li>
          <li>
            With the Sanders group: investigating the role of small open reading frames (smORFs) in disease risk, expanding the scope of variant interpretation beyond canonical coding sequences.
          </li>
        </ul>

        <h5 className="text-xl font-bold mb-2">Collaborations</h5>
        <p className="mb-4">
          I work closely with the <a href="https://rarediseasegenomics.org/" target="_blank" rel="noreferrer">Computational Rare Disease Genomics group</a> at the University of Oxford and the Garvan Institute of Medical Research. I am always interested in new collaborations, particularly those connecting computational methods with clinical genomics applications. Please <a href="/contact">get in touch</a> if you'd like to discuss.
        </p>
      </section>
    </Layout>
  );
};

export default ResearchPage;
