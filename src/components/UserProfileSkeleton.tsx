import React from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';

const UserProfileSkeleton: React.FC = () => {
  return (
    <Card
      style={{
        marginTop: '20px',
        padding: '20px',
        width: '100%',
      }}
    >
      <CardContent style={{ textAlign: 'center' }}>
        <Skeleton
          variant="circular"
          width={100}
          height={100}
          style={{ margin: '0 auto' }}
        />
        <Skeleton
          variant="text"
          width="60%"
          height={30}
          style={{ margin: '10px auto' }}
        />
        <Skeleton
          variant="text"
          width="80%"
          height={20}
          style={{ margin: '10px auto' }}
        />
      </CardContent>
    </Card>
  );
};

export default UserProfileSkeleton;
