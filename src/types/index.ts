export type SearchParams = {
  q?: string;
  page?: string;
};

export type ResponseUser = {
  login?: string | null;
  id?: number | null;
  node_id?: string | null;
  avatar_url?: string | null;
  gravatar_id?: string | null;
  url?: string | null;
  html_url?: string | null;
  followers_url?: string | null;
  following_url?: string | null;
  starred_url?: string | null;
  subscriptions_url?: string | null;
  organizations_url?: string | null;
  repos_url?: string | null;
  events_url?: string | null;
  received_events_url?: string | null;
  type?: string | null;
  site_admin?: boolean | null;
  name?: string | null;
  company?: string | null;
  blog?: string | null;
  location?: string | null;
  email?: string | null;
  hireable?: boolean | null;
  bio?: string | null;
  twitter_username?: string | null;
  public_repos?: number | null;
  public_gists?: number | null;
  followers?: number | null;
  following?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
};

export type ResponseUserNotFound = {
  message: string;
  documentation_url: string;
};

export interface ErrorResponseUser extends Error {
  info: string;
}

export type ResponseRepos = {
  id?: number;
  name?: string;
  full_name?: string;
  private?: false;
  html_url?: string;
  description?: string;
  homepage?: string;
  visibility?: string;
}[];

export type Historic = {
  id: string;
  timestamp: string;
  term: string;
};

export type HistoricContextType = {
  historic: Historic[];
  addHistoric: (term: string) => void;
};