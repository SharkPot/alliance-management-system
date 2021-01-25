import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About(props) {

    useEffect(() => {
		props.onRoute('About')
	})

    return (
        <div>
            About
            <div>
                <Link to='/'>
                    Go to home
                </Link>
            </div>
        </div>
    )
}

export default About;