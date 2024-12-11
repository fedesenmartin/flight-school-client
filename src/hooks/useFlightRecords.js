// hooks/useFlightRecords.js
import { useQuery } from '@apollo/client';
import { GET_FLIGHT_RECORDS } from '../graphql/queries';

const useFlightRecords = () => {
  const { data, loading, error } = useQuery(GET_FLIGHT_RECORDS);

  return {
    data: data?.flightRecords?.data || [],
    loading,
    error,
  };
};

export default useFlightRecords;
