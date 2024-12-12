// hooks/usePlanes.js
import { useQuery } from '@apollo/client';
import { GET_PLANES } from '../graphql/queries';
import client from '../lib/apolloClient';

const usePlanes = () => {
  const { data, loading, error } = useQuery(GET_PLANES,{client});

  return {
    data: data?.planes?.data || [],
    loading,
    error,
  };
};

export default usePlanes;
