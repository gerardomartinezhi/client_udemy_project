import React from 'react';
import { Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import AgusLogo from '../../../assets/img/png/logo-white.png';
import "./MenuTop.scss";


export default function MenuTop( props ){
    
    const {menuCollapsed, setMenuCollapsed} = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={AgusLogo}
                    alt="David Gerardo Martínez"
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)} >
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined/>}
                    
                </Button>
            </div>

            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log("Desconexion...")}>
                    <PoweroffOutlined/>
                </Button>
            </div>
        </div>
    );
}