import React, { useEffect } from 'react';
import './Alert.css';

const Alert = ({alert, setAlert}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert('');
      console.log('useEffect Alert');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="alert">
      <p>{alert}</p>
    </div>
  );
};

export default Alert;
