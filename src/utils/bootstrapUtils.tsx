import { Dropdown, DropdownButton, Form, Badge, BadgeProps } from 'react-bootstrap'
import React from 'react'

export interface BadgeInfo {
    variant?: BadgeProps['variant'],
    info: string
}

export function createBadge(b: BadgeInfo) {
    return (<span className={`m-2  badge badge-pill badge-${b.variant ?? 'light'}`}>{b.info}</span>)
}



export function createBadges(bs: BadgeInfo[]) {
    return <div>{bs.map(createBadge)}</div>
}


