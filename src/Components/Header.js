import React from "react";
import { useState } from "react";
import {ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import "./Header.css"

function Header() { 
  return (
  <div>
    <ProSidebarProvider>
    <Sidebar className="sidebar" >
    <Menu className="menu">
        <MenuItem> SB ADMIN <sup>2</sup> </MenuItem>
            <hr></hr>
        <MenuItem> Dashboard </MenuItem>
            <hr></hr>
        <MenuItem> INTERFACE </MenuItem>
        <SubMenu label="Components">
            <MenuItem> Buttons </MenuItem>
            <MenuItem> Cards </MenuItem>
        </SubMenu>
        <SubMenu label="Utilities">
            <MenuItem> Colors </MenuItem>
            <MenuItem> Borders </MenuItem>
            <MenuItem> Animations </MenuItem>
            <MenuItem> Others </MenuItem>
        </SubMenu>
            <hr></hr>
        <MenuItem> ADDONS </MenuItem>
        <SubMenu label="Pages">
            <MenuItem> Login </MenuItem>
            <MenuItem> Register </MenuItem>
            <MenuItem> Forgot password </MenuItem>
        </SubMenu>
            <MenuItem> Charts </MenuItem>
            <MenuItem> Tables</MenuItem>
            <hr></hr>
    </Menu>
    </Sidebar>
    </ProSidebarProvider>
  </div>
  )
}

export default Header;
