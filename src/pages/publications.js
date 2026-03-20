import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const publications = [
    {
        title: 'Using SpliceAI to triage splice-altering variants in 7,220 individuals with rare conditions highlights limitations of the precomputed scores',
        authors: 'Martin-Geary AC, Lecoquierre F, Walker S, Whiffin N, Dawes R.',
        journal: 'medRxiv',
        year: '2025',
        url: 'https://doi.org/10.1101/2025.08.27.25334471',
        note: 'Preprint · Senior author'
    },
    {
        title: 'De novo variants in the RNU4-2 snRNA cause a frequent neurodevelopmental syndrome',
        authors: 'Chen Y, Dawes R, Kim HC, et al., Whiffin N.',
        journal: 'Nature',
        year: '2024',
        url: 'https://www.nature.com/articles/s41586-024-07773-7',
        note: null
    },
    {
        title: 'Systematic identification of disease-causing promoter and untranslated region variants in 8,040 undiagnosed individuals with rare disease',
        authors: 'Martin-Geary AC, Blakes AJM, Dawes R, et al., Whiffin N.',
        journal: 'Genome Medicine',
        year: '2025',
        url: 'https://link.springer.com/article/10.1186/s13073-025-01464-2',
        note: null
    },
    {
        title: 'SpliceVault predicts the precise nature of variant-associated mis-splicing',
        authors: 'Dawes R, Bournazos AM, Bryen SJ, Bommireddipalli S, Marchant RG, Joshi H, Cooper ST.',
        journal: 'Nature Genetics',
        year: '2023',
        url: 'https://www.nature.com/articles/s41588-022-01293-8',
        note: 'First author'
    },
    {
        title: 'Empirical prediction of variant-activated cryptic splice donors using population-based RNA-Seq data',
        authors: 'Dawes R, Joshi H, Cooper ST.',
        journal: 'Nature Communications',
        year: '2022',
        url: 'https://www.nature.com/articles/s41467-022-29271-y',
        note: 'First author'
    },
    {
        title: 'Prevalence, parameters, and pathogenic mechanisms for splice-altering acceptor variants that disrupt the AG exclusion zone',
        authors: 'Bryen SJ, Yuen M, Joshi H, Dawes R, et al., Cooper ST.',
        journal: 'Human Genetics and Genomics Advances',
        year: '2022',
        url: 'https://www.cell.com/hgg-advances/fulltext/S2666-2477(22)00041-0',
        note: null
    },
    {
        title: 'Standardized practices for RNA diagnostics using clinically accessible specimens reclassifies 75% of putative splicing variants',
        authors: 'Bournazos AM, Riley LG, Bommireddipalli S, Dawes R, et al., Cooper ST.',
        journal: 'Genetics in Medicine',
        year: '2022',
        url: 'https://www.sciencedirect.com/science/article/pii/S1098360021041289',
        note: null
    },
    {
        title: 'Pro-inflammatory dopamine-2 receptor-specific T cells in paediatric movement and psychiatric disorders',
        authors: 'Pilli D, Zou A, Dawes R, et al., Brilot F.',
        journal: 'Clinical & Translational Immunology',
        year: '2020',
        url: 'https://doi.org/10.1002/cti2.1229',
        note: null
    },
    {
        title: 'Gene discovery informatics toolkit defines candidate genes for unexplained infertility and prenatal or infantile mortality',
        authors: 'Dawes R, Lek M, Cooper ST.',
        journal: 'NPJ Genomic Medicine',
        year: '2019',
        url: 'https://www.nature.com/articles/s41525-019-0081-z',
        note: 'First author'
    },
];

const Publication = ({ id, title, authors, journal, year, url, note }) => {
    return (
        <div className="mb-6">
            <p className="font-semibold leading-snug">
                {id + 1}.{' '}
                <a href={url} target="_blank" rel="noreferrer">{title}</a>
                {note && <span className="ml-2 text-xs font-normal bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">{note}</span>}
            </p>
            <p className="text-sm text-gray-600 mt-1">{authors}</p>
            <p className="text-sm text-gray-500 italic">{journal}, {year}</p>
        </div>
    );
};

const PublicationsPage = () => {
    return (
        <Layout>
            <Seo title="Publications" />
            <section className="text-gray-700">
                <h4 className="text-2xl font-bold mb-2">Publications</h4>
                <p className="text-sm text-gray-500 mb-8">
                    3 first-author papers · 148+ citations ·{' '}
                    <a href="https://scholar.google.com/citations?user=S2rkx9wAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
                    {' · '}
                    <a href="https://orcid.org/0000-0003-2135-0117" target="_blank" rel="noreferrer">ORCID</a>
                </p>
                {publications.map((pub, index) => (
                    <Publication key={index} id={index} {...pub} />
                ))}
            </section>
        </Layout>
    );
};

export default PublicationsPage;