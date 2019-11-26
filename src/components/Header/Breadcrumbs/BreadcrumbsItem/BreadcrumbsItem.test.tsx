import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { MemoryRouter } from 'react-router';

import {BreadcrumbsItem} from './BreadcrumbsItem';

test('<BreadcrumbsItem /> outputs valid path', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/route/to/test' ]}>
            <BreadcrumbsItem />
        </MemoryRouter>
    );
    expect(wrapper.toMatchSnapshot());
});
