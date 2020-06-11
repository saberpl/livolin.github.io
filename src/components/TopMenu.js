import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
} from 'reactstrap';
import logo from '../img/logo.png';

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color='white' light expand='md' className='Navbar'>
        <NavbarBrand href='/'>
          <img src={logo} className='Img-logo' alt='' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} className='flex-container' navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href=''>Về Livolin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=''>Cẩm nang gan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=''>Câu hỏi thường gặp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=''>Trải nghiệm</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=''>Tin tức</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=''>Điểm bán</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=''>Về chúng tôi</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <Form className='form'>
          <i className='fa fa-search Icon-search' aria-hidden='true'></i>
          <Input
            type='text'
            name='search'
            className='Input-search'
            placeholder='Tìm Kiếm'
          />
        </Form>
      </Navbar>
    </div>
  );
};

export default TopMenu;
