import React from "react";
import { Content as ContentWrap } from "./Content.styles";
import { Route, RouteComponentProps } from "react-router-dom";
import { Group } from "./Group/Group";
import quizData from "../../data/groups/root";

export const Content: React.FC = () => (
    <ContentWrap>
        <Route
            path="/"
            render={({ match }) => <Group match={match} {...quizData} />}
        />
    </ContentWrap>
);
