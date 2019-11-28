import React from 'react';
import { Header as HeaderWrap } from './Header.styles';
import { Link } from 'react-router-dom'

import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';

// const Header: React.FC = () => (
//
// )

export const Header: React.FC = () => (
 <HeaderWrap>
     <Link to='/'>
         <h1>qzzapp</h1>{' '}
     </Link>
     <Breadcrumbs />
 </HeaderWrap>
);