import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h2>About</h2>

                {/* add some links */}
                <ul>
                    <li><NavLink to="/about/problem1/something1">Problem st1</NavLink></li>
                    <li><NavLink to="/about/problem2/something2">Problem st2</NavLink></li>
                </ul>
                {this.props.children}

            </div>
        )
    }
})
