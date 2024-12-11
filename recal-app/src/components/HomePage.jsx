import React, { useEffect } from 'react';
import AnimatedTitle from '../utils/AnimatedTitle';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Load Google OAuth2 script
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return script;
    };

    const script = loadGoogleScript();

    // Initialize Google OAuth client
    window.onload = () => {
      if (typeof google !== 'undefined') {
        google.accounts.id.initialize({
          client_id: '54039515932-nsrrr167mpih1kic7phbqfb2e9rlaofk.apps.googleusercontent.com',
          callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          { 
            theme: 'outline', 
            size: 'large',
            type: 'standard',
            text: 'continue_with',
            shape: 'rectangular',
            width: 250
          }
        );
      }
    };

    return () => {
      // Cleanup script when component unmounts
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);
  const parseGoogleResponse = (response) => {
    const base64Url = response.credential.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const decodedToken = JSON.parse(jsonPayload);
    return decodedToken.email;
  }

  const handleCredentialResponse = async (response) => {
    // Handle the response from Google Sign-In
    console.log('Google Sign-In Response:', response);

    const userEmail = parseGoogleResponse(response);
    console.log('User email:', userEmail);
    try {
      const response = await fetch('https://5r8f0n7d1h.execute-api.us-east-2.amazonaws.com/prod', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: userEmail })
      });
      
      if (!response.ok) {
        throw new Error('Failed to save email');
      } else {
        console.log('Email saved successfully');
      }
      
      navigate('/calendar');
    } catch (error) {
        console.error('Error:', error);
    }
    navigate('/calendar');
  };

  return (
    <div className="app-container">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <AnimatedTitle fontSize="8rem" text="ReCal 365" />
        <div id="google-signin-button"></div>
      </div>
    </div>
  );
};

export default HomePage;