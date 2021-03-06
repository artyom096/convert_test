import classes from './Header.module.scss'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className={classes.header}>
            <Navbar bg="dark" variant="dark">
                <NavLink to='/'>
                    <Navbar.Brand className={classes.Header}>
                        <div className={classes.title}>
                            <span className="material-icons">
                                euro
                            </span>
                                Конвертер валют
                        </div>
                    </Navbar.Brand>
                </NavLink>
                <NavLink className={classes.Link} to='/'>Список валют</NavLink>
                <NavLink className={classes.Link} to='/converter'>Конвертер</NavLink>
            </Navbar>
        </div>
    )
}