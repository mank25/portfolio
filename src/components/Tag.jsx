import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tag = ({ props }) => {
    return (
        <div className='tag-badge px-3 py-1.5 max-w-fit h-fit'>
            <span>
                {props.path ? (
                    <img
                        src={`/${props.img}`}
                        alt={props.title}
                        className={props.class || 'w-4 h-4 inline'}
                    />
                ) : (
                    <FontAwesomeIcon
                        style={{ color: props.color }}
                        icon={`fa-brands ${props.img}`}
                        className={`text-base`}
                    />
                )}
            </span>
            <span className='text-gray-600 text-sm font-medium ml-2'>{props.title}</span>
        </div>
    );
};

export default Tag;
