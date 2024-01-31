import React from 'react';
import SideBar from '~/components/Layout/Default/SideBar';
import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';

import styles from './Default.module.scss';

const cx = classNames.bind(styles);

function Default({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Default;
