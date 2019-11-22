import React from "react";
import { Route, Link, RouteComponentProps } from "react-router-dom";

import { BreadcrumbsItem as BreadcrumbsItemWrap } from "./BreadcrumbsItem.styles";

export const BreadcrumbsItem: React.FC<RouteComponentProps> = ({ match }) => {
    const urlParts = match.url.split("/");
    const lastUrlPart = urlParts[urlParts.length - 1];

    return (
        <>
            <BreadcrumbsItemWrap
                className={match.isExact ? "breadcrumb-active" : ''}
            >
                <Link to={match.url || ""}>{lastUrlPart}</Link>
            </BreadcrumbsItemWrap>
            <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
        </>
    );
};
