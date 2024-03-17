import { Link } from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <div>
      <h1>React MySql</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
