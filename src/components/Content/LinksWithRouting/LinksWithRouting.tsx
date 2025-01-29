import React  from 'react';
import { Route } from 'react-router-dom';
import { Group } from '../Group/Group';
import { List } from '../List/List';
import { slashSuffix } from '../../../data/helpers/string';
import { Match as MatchType } from '../../../types/routes';
import { Entry as EntryType } from '../../../types/quiz';

interface LinksWithRoutingProps {
 match: MatchType,
 entries: EntryType[] | readonly EntryType[]
}

export const LinksWithRouting: React.FC<LinksWithRoutingProps> = ({ match, entries }) => {
  return (
    <>
      <Route
        path={match.url}
        exact
        render={(props) => (
          <List entries={entries} type="groups" {...props} />
        )}
      />
      {entries.map((entry) => (
        <Route
          path={slashSuffix(match.url) + entry.alias}
          key={entry.alias}
          render={(props) => <Group {...entry} {...props} />}
        />
      ))}
    </>
  );
}