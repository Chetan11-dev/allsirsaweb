import React from 'react'
import { Navbar } from '../components/routing/Navbar'
import { routes } from '../components/routing/routes'


export const NavbarComponent = () => (
    <Navbar routes={routes} />
)

export default {
    title: 'Navbar '
}
