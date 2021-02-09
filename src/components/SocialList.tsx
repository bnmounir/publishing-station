import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Linkedin from "../assets/linkedin-alt.svg";
import Calendly from "../assets/calendly-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Linkedin"
        href={`https://linkedin.com/in/${config.linkedin_account}`}
        target="_blank"
        rel="noopener"
      >
        <Linkedin width={26} height={26} fill={"#222"} />
      </a>
      <a
        title="Calendly"
        href={`https://calendly.com/${config.calendly_account}/30min`}
        target="_blank"
        rel="noopener"
      >
        <Linkedin width={26} height={26} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
