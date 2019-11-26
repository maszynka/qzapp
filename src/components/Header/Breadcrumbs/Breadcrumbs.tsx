import React from "react";
import { Breadcrumbs as BreadcrumbsWrap } from "./Breadcrumbs.styles";
import { Route } from "react-router-dom";

import { BreadcrumbsItem } from "./BreadcrumbsItem/BreadcrumbsItem";

export const Breadcrumbs: React.FC = () => (
    <div className="breadcrumbs">
        <BreadcrumbsWrap left={10231230}>
            <Route path="/:path" component={BreadcrumbsItem} />
        </BreadcrumbsWrap>
    </div>
);
