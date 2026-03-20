import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const tools = [
  {
    name: 'SpliceVault',
    description:
      'SpliceVault predicts the precise nature of variant-associated mis-splicing by querying a compendium of 300,000 RNA-seq samples. For any splice site variant, it identifies the most likely aberrant splicing outcomes — including exon skipping and cryptic splice site activation — with quantified support across the compendium. SpliceVault is designed for use in variant classification in rare disease diagnostics.',
    paper: {
      label: 'Dawes et al., Nature Genetics (2023)',
      url: 'https://www.nature.com/articles/s41588-022-01293-8',
    },
    links: [
      { label: 'Web portal', url: 'https://kidsneuro.shinyapps.io/splicevault/' },
      { label: 'GitHub', url: 'https://github.com/kidsneuro-lab/SpliceVault' },
    ],
  },
  {
    name: 'SpliceVault VEP Plugin',
    description:
      'The SpliceVault VEP plugin integrates SpliceVault predictions directly into Ensembl VEP annotation pipelines, enabling batch annotation of splice site variants with SpliceVault-derived mis-splicing predictions. This allows clinical and research workflows to incorporate SpliceVault at scale without using the web interface.',
    paper: {
      label: 'Dawes et al., Nature Genetics (2023)',
      url: 'https://www.nature.com/articles/s41588-022-01293-8',
    },
    links: [
      { label: 'Ensembl VEP plugins', url: 'https://www.ensembl.org/info/docs/tools/vep/script/vep_plugins.html' },
      { label: 'Plugin source (GitHub)', url: 'https://github.com/Ensembl/VEP_plugins/blob/release/115/SpliceVault.pm' },
      { label: 'Usage documentation', url: 'https://github.com/kidsneuro-lab/SpliceVault/wiki/Use-of-SpliceVault-through-Ensembl-VEP' },
    ],
  },
  {
    name: 'SpliceAI-splint',
    description:
      'SpliceAI-splint is a command-line tool that identifies variants in a VCF file whose potential splice-altering effects would be missed by the precomputed SpliceAI scores. The precomputed scores — widely used for variant annotation — contain annotation and liftover errors affecting 8.34% of SNVs and 35% of disease-associated genes. Re-running SpliceAI with optimised parameters identifies 18.2% more predicted splice-altering variants, corresponding to an 11.7% increase in diagnostic candidates. SpliceAI-splint makes it straightforward to identify which variants in any cohort require re-scoring.',
    paper: {
      label: 'Martin-Geary, Lecoquierre, Walker, Whiffin & Dawes, medRxiv (2025)',
      url: 'https://doi.org/10.1101/2025.08.27.25334471',
    },
    links: [
      { label: 'GitHub', url: 'https://github.com/Computational-Rare-Disease-Genomics-WHG/spliceai-splint' },
    ],
  },
];

const SoftwarePage = () => {
  return (
    <Layout>
      <Seo title="Software & Tools" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-4">Software & Tools</h4>
        <p className="mb-10 text-gray-600">
          A core part of my research is developing computational tools that make state-of-the-art variant interpretation methods accessible to clinical and research genomics workflows.
        </p>
        <div className="space-y-12">
          {tools.map((tool) => (
            <div key={tool.name}>
              <h5 className="text-xl font-bold mb-2">{tool.name}</h5>
              <p className="mb-3 text-gray-600">{tool.description}</p>
              <p className="text-sm mb-2">
                <span className="text-gray-400">Paper: </span>
                <a href={tool.paper.url} target="_blank" rel="noreferrer">{tool.paper.label}</a>
              </p>
              <div className="flex flex-wrap gap-3">
                {tool.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm border border-current rounded px-3 py-1 hover:bg-orange-50 transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default SoftwarePage;
