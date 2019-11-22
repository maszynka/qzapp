import React from 'react'
import {Breadcrumbs as BreadcrumbsWrap} from "./Breadcrumbs.styles";
import { Route } from 'react-router-dom';

import {BreadcrumbsItem} from './BreadcrumbsItem';

export const Breadcrumbs: React.FC = () => (
  <div className='breadcrumbs'>
    <BreadcrumbsWrap>
      <Route path='/:path' component={BreadcrumbsItem} />
    </BreadcrumbsWrap>
  </div>
);