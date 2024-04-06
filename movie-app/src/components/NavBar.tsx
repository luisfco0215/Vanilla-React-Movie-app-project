import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/Warner_Bros._Games_2023.svg";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"12px"}>
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
