// hooks/usePilots.js
import { useQuery } from '@apollo/client';
import client from '../lib/apolloClient';
import { GET_AIRPORTS } from '../graphql/queries';

const usePilots = () => {
  const { data, loading, error } = useQuery(GET_AIRPORTS,{client});

  return {
    data: data?.airports?.data || [],
    loading,
    error,
  };
};

export default usePilots;
