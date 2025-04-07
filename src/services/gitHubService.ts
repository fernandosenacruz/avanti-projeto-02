export interface GitHubUser {
  name: string | null;
  avatar_url: string;
  bio: string | null;
}

export const getUserData = async (username: string): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(
      'Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente'
    );
  }
  return response.json();
};
