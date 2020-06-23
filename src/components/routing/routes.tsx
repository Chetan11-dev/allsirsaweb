import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { Button, NavDropdown, Form, FormControl, Nav } from 'react-bootstrap'
export interface Routes {
    path: string
    title: string
    component: React.ComponentType<any>
}



const routes: Routes[] = [{
    component: Button,
    path: '/orders',
    title: 'Orders',
}, {
    component: Button,
    path: '/completedorders',
    title: 'Completed Orders',
}, {
    component: Button,
    path: '/cancelledorders',
    title: 'Cancelled Orders',
}, {
    component: Button,
    path: '/add-products',
    title: 'Add Products',
}, {
    component: Button,
    path: '/edit-products',
    title: 'Edit Products',
}, {
    component: Button,
    path: '/profile',
    title: 'Profile',
},]

export function getRoutes(routes: Routes[]) {
    return routes.map((r) => <Route exact path={r.path} component={r.component} />)
}