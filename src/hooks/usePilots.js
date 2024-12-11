// hooks/usePilots.js
import { useQuery } from '@apollo/client';
import client from '../lib/apolloClient';
import { GET_PILOTS_NAME } from '../graphql/queries';

const usePilots = () => {
  const { data, loading, error } = useQuery(GET_PILOTS_NAME,{client});

  return {
    data: data?.pilots?.data || [],
    loading,
    error,
  };
};

export default usePilots;
