import { Flex, Image } from "@chakra-ui/react";


export const NavBar = () => {
  return (
    <Flex
      bg={"white"}
      padding={"6px 12px"}
    >
      <Flex
        align={"center"}
      >
        <Image src="images/redditFace.svg" height={"30px"} alt="" />
        <Image src="images/redditText.svg" height={"46px"} alt=""/>
      </Flex>
    </Flex>
  );
}
 
export default NavBar;
