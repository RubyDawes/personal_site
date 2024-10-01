import React from 'react';
import { Mail, Twitter, Linkedin, FileText } from 'lucide-react'; // Import specific icons
import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-4">Contact Me</h4>
        <p className="mb-6">Feel free to reach out through any of the following platforms:</p>
        <ul className="space-y-4">
          {/* Twitter */}
          <li>
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
              <Twitter className="w-6 h-6 mr-2" />
              Twitter
            </a>
          </li>

          {/* Google Scholar */}
          <li>
            <a href="https://scholar.google.com/citations?user=your-google-scholar-id" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
              <FileText className="w-6 h-6 mr-2" />
              Google Scholar
            </a>
          </li>

          {/* ORCID */}
          <li>
            <a href="https://orcid.org/your-orcid-id" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
              <Linkedin className="w-6 h-6 mr-2" />
              ORCID
            </a>
          </li>

          {/* Email */}
          <li>
            <a href="mailto:ruebena.dawes@ox.ac.uk" className="flex items-center text-blue-600 hover:text-blue-800">
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default ContactPage;
