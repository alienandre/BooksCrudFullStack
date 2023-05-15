import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "./styles.css"
export default function Navigationbar(){
    return (
          <nav className="nav">
            <Link to="" className='site-title'>BookList</Link>
            <ul>
              <li>
                <Link to="">Books</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
            </ul>
          </nav>

    );
}