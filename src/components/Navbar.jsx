import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('user sign out successfully');
            })
            .catch(error => {
                console.log('SOME ERROR:', error.message);
            })
    }

    const links = <>
        <li className='list-none'><NavLink to='/'>Home</NavLink></li>
        <li className='list-none'><NavLink to='/login'>Login</NavLink></li>
        <li className='list-none'><NavLink to='/register'>Register</NavLink></li>
        {
            user && <>
                <li className='list-none'><NavLink to='/orders'>Orders</NavLink></li>
                <li className='list-none'><NavLink to='/profile'>Profile</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-green-400">Moha-Milon</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <p onClick={handleSignOut} className="btn">Sign Out</p>
                        </>
                        : <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;