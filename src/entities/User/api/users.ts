import { api } from "@/shared/api";

interface UsersParams {
  q: string,
  sort: 'followers' | 'repositories' | 'joined',
  order: 'desc' | 'asc',
  per_page: number,
  page: number,
}

interface ResponseUser {
  login?: string,
  id?: number,
  node_id?: string,
  avatar_url?: string,
  gravatar_id?: string,
  url?: string,
  html_url?: string,
  followers_url?: string,
  subscriptions_url?: string,
  organizations_url?: string,
  repos_url?: string,
  received_events_url?: string,
  type?: string,
  score?: string,
  following_url?: string,
  gists_url?: string,
  starred_url?: string,
  events_url?: string,
  site_admin?: boolean
}

interface UsersResponse {
  total_count: number,
  incomplete_results: boolean,
  items: ResponseUser[],
}

export const getUsers = (params: UsersParams) => (
  api.get<Response | null>('/search/users', { params })
    .then((response) => response.data)
);

export type { UsersParams, UsersResponse };
