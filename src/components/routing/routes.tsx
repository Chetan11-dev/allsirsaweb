import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { Button, NavDropdown, Form, FormControl, Nav } from 'react-bootstrap'
import ProductMaster from '../../features/productMaster/ProductMaster'
export interface RouteData {
    path: string
    title: string
    component: React.ComponentType<any>
}



export const routes: RouteData[] = [{
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

export function addHomeRoute(component: React.ComponentType<any>) {
    return {
        component,
        path: '/',
        title: 'Home'
    }
}

export function toRoutes(routes: RouteData[], initialComponent: React.ComponentType<any>, shouldAddNotFound = true) {
    const rs = [...routes]

    rs.unshift(addHomeRoute(initialComponent))

    const ls = rs.map((r) => <Route exact path={r.path} component={r.component} />)

    if (shouldAddNotFound) {
        ls.push(<Route component={() => <h1> 404 not found</h1>} />)
    }
    return { appRoutes: ls, rawRoutes: rs }
}