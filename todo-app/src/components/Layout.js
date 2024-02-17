import React from 'react';
import {Button, Layout as LayoutAntd, Space, theme} from 'antd';
import {Link, NavLink, Outlet} from 'react-router-dom';
import styles from '../App.module.css';

const {
    Header,
    Content,
    Footer
} = LayoutAntd;

export function Layout() {
    const active = ({ isActive }) => (isActive ? styles.active : '');
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <LayoutAntd>
            <Header style={{ background: '#ffffff', padding: '0', borderBottom: '1px solid #e8e8e8' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Space size={20}>
                        <NavLink to="/user/list" className={active}>
                            Users
                        </NavLink>
                        <NavLink to="/post/list" className={active}>
                            Posts
                        </NavLink>
                        <NavLink to="/todo/list" className={active}>
                            Todo
                        </NavLink>
                    </Space>
                </div>
            </Header>
            <Content>
                <div style={{ background: colorBgContainer, minHeight: '80vh', padding: '20px' }}>
                    <Link to='/'>
                        <Button type='primary' style={{float:'right'}}>Go Home</Button>
                    </Link>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>© {new Date().getFullYear()} Shepelev Ivan App</Footer>
        </LayoutAntd>
    );
}
