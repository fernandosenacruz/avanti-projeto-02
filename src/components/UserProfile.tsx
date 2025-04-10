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
      <Card
        style={{
          backgroundColor: '#d9d9d9',
          borderRadius: '25px',
          marginTop: '20px',
        }}
      >
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
                fontSize: { xs: '0.7rem', sm: '1rem', md: '20px' },
                fontWeight: 'bold',
                marginLeft: '1.5rem',
                marginBottom: '0.5rem',
                color: '#005cff',
              }}
            >
              {userData.name ?? 'Sem nome cadastrado'}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.5rem', sm: '0.8rem', md: '1rem' },
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
