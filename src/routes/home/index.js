import React from 'react';
import { Link } from 'react-router-dom';
import './index.less'; // 导入LESS文件

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Project Management Tool</h1>
        <p>Manage your projects efficiently and effectively.</p>
        <div className="home-buttons">
          <Link to="/register" className="btn">Register</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
