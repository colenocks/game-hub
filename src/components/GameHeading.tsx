import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const { data: genres } = useGenres();
  const genre = genres?.results.find(g => genreId === g.id);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(g => platformId === g.id);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
