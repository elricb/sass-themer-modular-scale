import React from 'react';
import './index.scss';

const sets = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'body'
];

const Component = () => (
    <div className="modularscale">
        <div className="scaled title">
            Scaled
        </div>
        <div className="scaled scale">
            {sets.map(($_item) => (
                <div className={$_item}>Lorem Ipsom Donar</div>
            ))}
        </div>
        <div className="desktop title">
            Desktop
        </div>
        <div className="desktop scale">
            {sets.map(($_item) => (
                <div className={$_item}>Lorem Ipsom Donar</div>
            ))}
        </div>
        <div className="tablet title">
            Tablet
        </div>
        <div className="tablet scale">
            {sets.map(($_item) => (
                <div className={$_item}>Lorem Ipsom Donar</div>
            ))}
        </div>
        <div className="mobile title">
            Mobile
        </div>
        <div className="mobile scale">
            {sets.map(($_item) => (
                <div className={$_item}>Lorem Ipsom Donar</div>
            ))}
        </div>
    </div>
);

export default Component;
