import React from "react";
import { useState } from "react";
import {ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() { 
  return (
  <div>
    <ProSidebarProvider>
    <Sidebar id="sidebar" >
    <Menu className="menu">
        <MenuItem> SB ADMIN <sup>2</sup> </MenuItem>
            <hr></hr>
        <MenuItem><Link to="/preview/dashboard">Dashboard</Link>  </MenuItem>
            <hr></hr>

        <p> INTERFACE </p>
        <SubMenu label="Components">
            <MenuItem> <Link to="/preview/buttons">Buttons </Link> </MenuItem>
            <MenuItem> <Link to="/preview/cards">Cards</Link> </MenuItem>
        </SubMenu>
            <hr></hr>

        <p> ADDONS </p>
            <MenuItem> <Link to="/preview/charts">Charts</Link></MenuItem>
            <MenuItem> <Link to="/preview/table">Tables</Link></MenuItem>
            <hr></hr>

    </Menu>
    </Sidebar>
    </ProSidebarProvider>
  </div>
  )
}

export default Header;
