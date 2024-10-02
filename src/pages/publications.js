import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const publications = [
    {
        title: 'De novo variants in the RNU4-2 snRNA cause a frequent neurodevelopmental syndrome',
        authors: 'Chen Y, DAWES R, Kim HC, Ljungdahl A, Stenton SL, Walker S, [112 authors], Whiffin N.',
        journal: 'Nature',
        year: '2024',
        url: 'https://www.nature.com/articles/s41586-024-07773-7'
    },
    {
        title: 'Refining clinically relevant parameters for mis-splicing risk in shortened introns with donor-to-branchpoint space constraint',
        authors: 'Zhang K, Joshi H, Marchant R, Bryen S, DAWES R, Yuen M, Cooper S, Evesson F.',
        journal: 'European Journal of Human Genetics',
        year: '2024',
        url: 'https://example.com'
    },{
        title: 'Systematic identification of disease-causing promoter and untranslated region variants in 8,040 undiagnosed individuals with rare disease',
        authors: 'Martin-Geary AC, Blakes AJM, DAWES R, Findlay SD, Lord J, Walker S, Talbot-Martin J, Wieder N, D\'Souza EN, Fernandes M, Hilton S, Lahiri N, Campbell C, Jenkinson S, DeGoede CGEL, Anderson ER, Burge CB, Sanders SJ, Ellingford J, Baralle D, Banka S, Whiffin N.',
        journal: 'medRxiv',
        year: '2023',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10516070/'
    },
    {
        title: 'SpliceVault predicts the precise nature of variant-associated mis-splicing',
        authors: 'DAWES R, Bournazos AM, Bryen SJ, Bommireddipalli S, Marchant RG, Joshi H, Cooper ST',
        journal: 'Nature Genetics',
        year: '2023',
        url: 'https://www.nature.com/articles/s41588-022-01293-8'
    },
    {
        title: 'Prevalence, parameters, and pathogenic mechanisms for splice-altering acceptor variants that disrupt the AG exclusion zone',
        authors: 'Bryen SJ, Yuen M, Joshi H, DAWES R, Zhang K, Lu JK, Jones KJ, Liang C, Wong W, Peduto AJ, Waddell LB, Evesson FJ, Cooper ST',
        journal: 'Human Genetics and Genomics Advances',
        year: '2022',
        url: 'https://www.cell.com/hgg-advances/fulltext/S2666-2477(22)00041-0'
    },
    {
        title: 'Empirical prediction of variant-activated cryptic splice donors using population-based RNA-Seq data',
        authors: 'DAWES R, Joshi H, Cooper ST',
        journal: 'Nature communications',
        year: '2022',
        url: 'https://www.nature.com/articles/s41467-022-29271-y'
    },

    {
        title: 'Standardized practices for RNA diagnostics using clinically accessible specimens reclassifies 75% of putative splicing variants',
        authors: 'Bournazos AM, Riley LG, Bommireddipalli S, Ades L, Akesson LS, Al-Shinnag M, Alexander SI, Archibald AD, Balasubramaniam S, Berman Y, Beshay V, Boggs K, Bojadzieva J, Brown NJ, Bryen SJ, Buckley MF, Chong B, Davis MR, DAWES R,[89 authors], Cooper ST',
        journal: 'Genetics in Medicine',
        year: '2022',
        url: 'https://www.sciencedirect.com/science/article/pii/S1098360021041289'
    },
    {
        title: 'Gene discovery informatics toolkit defines candidate genes for unexplained infertility and prenatal or infantile mortality',
        authors: 'DAWES R, Lek M, Cooper ST',
        journal: 'NPJ genomic medicine',
        year: '2019',
        url: 'https://www.nature.com/articles/s41525-019-0081-z'
    }
];


const Publication = ({ id, title, authors, journal, year, url }) => {
    return (
        <div className="mb-4">
            <h5 className="text-lg font-bold">{id+1}. {title}</h5>
            <p className="text-sm">{authors}</p>
            <p className="text-sm">{journal}, {year}</p>
            <a href={url} className="text-sm text-blue-500 hover:underline">{url}</a>
        </div>
    );
}




const PublicationsPage = () => {
    return (
        <Layout>
            <Seo title="Publications" />
            <section className="text-gray-700">
                <h4 className="text-2xl font-bold mb-2">Publications</h4>
                {publications.map((publication, index) => (
                    <Publication key={index} id={index} {...publication} />
                ))}
            </section>
        </Layout>
    );
}

export default PublicationsPage;