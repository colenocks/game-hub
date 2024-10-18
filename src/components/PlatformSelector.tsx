import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { IPlatform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: IPlatform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data: platforms, error } = usePlatforms();
  const platformItem = platforms?.results.find(p => selectedPlatformId === p.id);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformItem?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(platform => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
