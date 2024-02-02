import React, { Suspense, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { STATS_GET } from '../api/api';
import Loading from '../helper/Loading/Loading';
import Error from '../helper/Error';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs/UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (data) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  } else {
    return null;
  }
};

export default UserStats;
