import React, { useContext } from "react";
import PageTemplate from "../../components/showComponents/templateShowListPage";
import { ShowsContext } from "../../contexts/showsContext";
import { useQueries } from "react-query";
import { getShow } from "../../api/tmdb-api";
import Spinner from '../../components/spinner'
import RemoveFromMustWatch from "../../components/cardIcons/removeShowFromMustWatch";

const MustWatchShowsPage = () => {
  const {mustWatchShows: showIds } = useContext(ShowsContext);

  // Create an array of queries and run in parallel.
  const mustWatchShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = mustWatchShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      name="Must Watch TV Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromMustWatch show={show} />
          </>
        );
      }}
    />
  );
};

export default MustWatchShowsPage;