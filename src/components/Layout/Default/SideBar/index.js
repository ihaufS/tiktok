import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar(props) {
    return <aside className={cx('wrapper')}> Sidebar Page</aside>;
}

export default SideBar;
