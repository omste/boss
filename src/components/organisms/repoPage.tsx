import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { REPO_SEARCH } from '../../queries/queries';
import { QueryResult } from '../../types/repoQuery';
import { RepoTable } from '../molecules/repoTable';

export const RepoPage = (): JSX.Element => {
  const repoQuery = 'react';
  const resNo = 50;
  const [getSearchTerm, setSearchTerm] = useState<string>(repoQuery);
  const [getData, { loading, error, data }] = useLazyQuery<QueryResult>(REPO_SEARCH, {
    variables: { repoQuery: getSearchTerm, resNo }
  });

  useEffect(() => {
    // TO DO : fix TS promise error

    if (getSearchTerm.length > 2) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getData();
    }
  }, []);

  if (loading) return <div>loading...</div>;
  if (error !== undefined) {
    console.error(error);
    return <h1>Error found</h1>;
  }
  if (data !== undefined) {
    console.log(data);
  }

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-5">heyyy OM</h1>
      <input
        type="text"
        value={getSearchTerm}
        placeholder="search term"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />{' '}
      search term
      <RepoTable resultSet={data?.search.edges} />
    </div>
  );
};
