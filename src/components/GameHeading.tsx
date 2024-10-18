import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: IGameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find(g => gameQuery.genreId === g.id);
  const heading = `${gameQuery.platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
