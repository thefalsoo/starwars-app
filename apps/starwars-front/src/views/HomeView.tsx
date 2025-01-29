import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div>
      HomeView
      <Link to={'/characters'}> characters</Link>
      <Link to={'/planets'}> planets</Link>
    </div>
  );
};

export default HomeView;
