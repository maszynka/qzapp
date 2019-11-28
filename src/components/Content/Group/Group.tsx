import React from 'react'
import { Route } from 'react-router-dom'
import { LinksWithRouting } from '../LinksWithRouting/LinksWithRouting';
import { Match as MatchType } from '../../../types/routes';
import { Entry as EntryType } from '../../../types/quiz';

interface GroupProperties extends EntryType {
    match: MatchType
}

export const Group: React.FC<GroupProperties> = ({ match, label, groups, quizzes }) => (
  <>
    <Route
      path={match.url}
      exact
      render={() => (
        <>
          <h2>{label}</h2>
          {groups ? <div>Grupy:</div> : ''}
        </>
      )}
    />

    {groups ? LinksWithRouting({ match, entries: groups }) : ''}

    {quizzes ? (
      <>
        <Route path={match.url} exact render={() => <div>Pytania:</div>} />
        {LinksWithRouting({ match, entries: quizzes })}
      </>
    ) : (
      ''
    )}
  </>
)
