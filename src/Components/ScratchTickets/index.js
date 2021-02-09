import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ScratchTicket(props) {

    useEffect(() => {
		props.onRoute('AC and SG Scratch Ticket')
	})

    return (
        <div>
            Scratch Ticket
        </div>
    )
}

export default ScratchTicket;