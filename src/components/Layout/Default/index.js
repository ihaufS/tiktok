import React from 'react';
import SideBar from '~/components/Layout/Default/SideBar';
import Header from '~/components/Layout/components/Header';

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
