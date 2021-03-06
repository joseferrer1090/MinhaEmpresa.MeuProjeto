import React from 'react';
import {Layout} from "antd";
import {HeaderLogo} from './header-logo';
import PropTypes from 'prop-types';
import {LogoutHeaderBtn} from './logout-header-btn';
import {UserHeaderPopover} from './../specific-components/user/user-header-popover';

export const Header = props =>
    <Layout.Header style={{
      backgroundColor: 'white',
      display: 'flex',
      padding: 0,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottom: '2px solid #2A74FF'
    }} >
      <HeaderLogo/>
      <div style={{flexGrow: 1}} />
      <UserHeaderPopover onUserConfigClick={props.onUserConfigClick}/>
      <LogoutHeaderBtn onClick={props.logout}/>
    </Layout.Header>

Header.propTypes={
  onUserConfigClick: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}
