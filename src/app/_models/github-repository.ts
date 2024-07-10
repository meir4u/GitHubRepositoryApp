export interface GithubRepository {
  id: number | undefined;
  name: string | undefined;
  owner: Owner | undefined;
}

export interface Owner {
  avatarUrl: string | undefined;
}
