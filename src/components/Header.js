import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Router</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">메인</Link></li>
          <li><Link to="/education">교육</Link></li>
          <li><Link to="/external-activities">대외활동</Link></li>
          <li><Link to="/careers">채용</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;