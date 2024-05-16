import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from '../store';
import Project from '../entities/Project';

const apiClient = new APIClient<Project>('/games');

const useProjects = () => {

  const gameQuery = useGameQueryStore(selector => selector.gameQuery);

  return useInfiniteQuery<FetchResponse<Project>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms('24h'),
  });
};


export default useProjects;
