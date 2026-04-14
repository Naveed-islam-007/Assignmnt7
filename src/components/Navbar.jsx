import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
 <div>
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Keen<span className='text-green-800'>Keeper</span></a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
       <NavLink to={'/'}><IoHomeOutline /> Home</NavLink>
      </li>
      <li>
       <NavLink to={'/Timeline'}><CiClock2 /> Timeline</NavLink>
      </li>
      <li>
       <NavLink to={'/Stats'}> <TfiStatsUp /> Stats</NavLink>
      </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;