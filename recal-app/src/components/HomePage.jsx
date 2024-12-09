import React from 'react'
import Button from '@mui/material/Button';
import AnimatedTitle from '../utils/AnimatedTitle';
const HomePage = () => {
  return (
    <div className="app-container">
      <div className="flex flex-col items-center justify-center h-full">
        <AnimatedTitle fontSize="8rem" text="ReCal 365" />
        <div className="space-x-4">
          <Button size="large" variant="outlined">Log in</Button>
          <Button size="large" variant="outlined">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;