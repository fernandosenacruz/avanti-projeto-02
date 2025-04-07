import React from 'react';
import { Card, CardContent, Avatar, Typography, Box } from '@mui/material';
import UserProfileSkeleton from './UserProfileSkeleton';
import { GitHubUser } from '../services/gitHubService';

interface UserProfileProps {
  userData: GitHubUser | null;
  loading: boolean;
  error: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  userData,
  loading,
  error,
}) => {
  if (loading) return <UserProfileSkeleton />;

  if (error) {
    return (
      <Typography
        variant="body1"
        color="error"
        align="center"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#d9d9d9',
          minHeight: '88px',
          maxWidth: '710px',
          borderRadius: '10px',
          marginTop: '20px',
          padding: '0 50px',
        }}
      >
        {error}
      </Typography>
    );
  }

  if (userData) {
    return (
      <Card style={{ marginTop: '20px' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
          <Avatar
            alt={userData.name ?? 'Sem nome cadastrado'}
            src={userData.avatar_url}
            sx={{
              width: { xs: 100, sm: 150, md: 220 },
              height: { xs: 100, sm: 150, md: 220 },
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.5em', md: '20px' },
                fontWeight: 'bold',
                marginLeft: '1.5rem',
                color: '#005cff',
              }}
            >
              {userData.name ?? 'Sem nome cadastrado'}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                marginLeft: '1.5rem',
              }}
            >
              {userData.bio ?? 'Sem bio cadastrada'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default UserProfile;
