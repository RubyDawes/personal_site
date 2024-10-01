import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const publications = [
    {
        title: 'A new diagnostic tool for rare diseases',
        authors: 'R. Dawes, J. Smith, and K. Johnson',
        journal: 'Journal of Rare Diseases',
        year: '2021',
        url: 'https://example.com'
    },
    {
        title: 'Genetic basis of rare diseases',
        authors: 'R. Dawes, J. Smith, and K. Johnson',
        journal: 'Journal of Genetics',
        year: '2020',
        url: 'https://example.com'
    },
    {
        title: 'Advances in rare disease research',
        authors: 'R. Dawes, J. Smith, and K. Johnson',
        journal: 'Journal of Rare Diseases',
        year: '2019',
        url: 'https://example.com'
    }
];


const Publication = ({ key, title, authors, journal, year, url }) => {
    return (
        <div className="mb-4">
            <h5 className="text-lg font-bold">{key}. {title}</h5>
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
                    <Publication key={index} {...publication} />
                ))}
            </section>
        </Layout>
    );
}

export default PublicationsPage;