import React, { useContext } from 'react';
import { AuthContext } from '../../../public/context/authContext';

const Header = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return (
    <header>
      {user ? (
        <p>Welcome, {user.name} ({user.role})</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </header>
  );
};

export default Header;
