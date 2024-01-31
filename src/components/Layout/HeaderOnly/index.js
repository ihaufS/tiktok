import React from 'react';
import Header from '~/components/Layout/Default/Header';

function Default({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Default;