import classes from './Header.module.scss'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" className={classes.Header}>
                <div className={classes.title}>
                    <span className="material-icons">
                        euro
                    </span>
                Конвертер валют
                </div>
            </Navbar.Brand>
            <NavLink className={classes.Link} to='/'>Список валют</NavLink>
            <NavLink className={classes.Link} to='/converter'>Конвертер</NavLink>
        </Navbar>
    )
}