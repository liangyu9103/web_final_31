import { useQuery } from '@tanstack/react-query';
import { getSneakers } from '../../services/apiSneakers';

export const getSneakers = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['sneakers_31'],
    queryFn: getSneakers,
  });
  return { data, isLoading, error };
};
