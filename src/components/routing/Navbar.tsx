import React from 'react'
import { appname } from '../utils/apputils'


export const Navbar = () => {

    const ls = routes.map(e => (<li className='nav-item'>
        <a className='nav-link' href={e.path}>{e.title}<span className='sr-only'>(current)</span>
        </a>
    </li>))
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='/'>
                {appname}
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    {ls}
                </ul>
            </div>
        </nav>
    )
}
