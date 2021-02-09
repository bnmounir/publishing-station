import config from "../../config.json";

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: string[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly github_account: string;
  readonly linkedin_account: string;
  readonly calendly_account: string;
  readonly notion_account: string;
  readonly medium_account: string;
};

export default config as Config;
