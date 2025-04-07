import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { GitHubUser, getUserData } from './services/gitHubService';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    setUserData(null);
    setError('');
    setLoading(true);

    try {
      const data = await getUserData(username);
      setUserData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: '50px',
        width: '80%',
      }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <img src="/gitHub-icon.png" alt="GitHubu icon" />
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: '#ffffff',
            margin: '0.5rem',
            fontSize: { xs: 30, sm: 60 },
          }}
        >
          Perfil <span style={{ fontWeight: 'bold' }}>GitHub</span>
        </Typography>
      </Box>
      <SearchBar
        username={username}
        onUsernameChange={(e) => setUsername(e.target.value)}
        onSearch={handleSearch}
      />
      <UserProfile userData={userData} loading={loading} error={error} />
    </Container>
  );
};

export default App;
