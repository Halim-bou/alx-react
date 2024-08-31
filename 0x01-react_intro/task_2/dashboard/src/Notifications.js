import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './closeIcon.png';

function Notifications() {
    return (
        <div className="Notifications">
            <button onClick={(e) => console.log("Close button has been clicked")}
            style={{
				color: '#3a3a3a',
				fontWeight: 'bold',
				background: 'none',
				border: 'none',
				fontSize: '15px',
				position: 'absolute',
				right: '2px',
				top: '2px',
				cursor: 'pointer',
			}}
            aria-label='Close'>
            <img src={closeIcon} alt='closeicon' width={10}></img>
            </button>
            <p>
            Here is the list of notifications
            </p>
            <ul>
                <li data-priority="default">
                    New course available
                </li>
                <li data-priority="urgent">
                    New resume available
                </li>
                <li data-priority="urgent"
                dangerouslySetInnerHTML={{__html: getLatestNotification()}}>
                </li>
            </ul>
        </div>
    );
};

export default Notifications;