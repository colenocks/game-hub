import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const { data: platforms, error } = usePlatforms();
  const platformItem = platforms?.results.find(p => platformId === p.id);
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformItem?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(platform => (
          <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
