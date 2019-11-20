import React from 'react';

export const Footer = props => {
    const styleFromProps = {backgroundColor: props.colorPage, color: props.colorFont};

    return (
        <footer style={styleFromProps}>
            <h1>Footer</h1>
        </footer>
    );
};