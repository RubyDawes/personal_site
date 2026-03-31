import React from "react";
import { Github, Linkedin, BookOpen, ExternalLink } from "lucide-react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const links = [
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/ruebenadawes.bsky.social",
    sub: "@ruebenadawes.bsky.social",
    Icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruebena-dawes-153713157/",
    sub: "ruebena-dawes",
    Icon: Linkedin,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=S2rkx9wAAAAJ",
    sub: "Publication record",
    Icon: BookOpen,
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0003-2135-0117",
    sub: "0000-0003-2135-0117",
    Icon: ExternalLink,
  },
  {
    label: "GitHub",
    href: "https://github.com/RubyDawes",
    sub: "RubyDawes",
    Icon: Github,
  },
];

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <section className="text-gray-700">
        <h4 className="text-2xl font-bold mb-4">Contact</h4>
        <p className="mb-8 text-gray-600">
          I am always happy to discuss potential collaborations, research
          questions, or speaking opportunities.
        </p>
        <ul className="space-y-5">
          {links.map(({ label, href, sub, Icon }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <Icon className="w-5 h-5 text-gray-400 shrink-0" />
                <span>
                  <span className="font-medium">{label}</span>
                  {sub && (
                    <span className="block text-xs text-gray-400">{sub}</span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default ContactPage;
