import React from 'react';
import Header from '~/components/Layout/Default/Header';
import SideBar from '~/components/Layout/Default/SideBar';

function Default({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Default;
