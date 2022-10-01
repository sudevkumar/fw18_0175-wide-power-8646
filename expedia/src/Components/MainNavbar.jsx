import { Box, Flex, Select, Text } from "@chakra-ui/react";
import "./MainNavbar.css";

export default function MainNavbar() {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        justifyContent="space-around"
      >
        <Box p="2" display="flex">
          <img
            src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
            alt=""
          />
          <Select placeholder="More Travell" border="none" marginLeft="10px">
            <option value="option1">Stay</option>
            <option value="option2"> Flights</option>
            <option value="option3"> Cars</option>
            <option value="option3"> Packages</option>
            <option value="option3"> Holiday activities</option>
            <option value="option3">Deals</option>
            <option value="option3">Group & meetings</option>
            <option value="option3">Mobile</option>
          </Select>
        </Box>
        {/* <Spacer /> */}

        <Box display="flex" width="25%" justifyContent="space-around">
          <Text
            display="flex"
            _hover={{ color: "blue" }}
            alignItems="center"
            fontSize="14px"
            fontWeight="600"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/2048px-Globe_icon_2.svg.png"
              alt=""
              id="image_world"
            />{" "}
            English
          </Text>
          <Text
            display="flex"
            _hover={{ color: "blue" }}
            fontSize="14px"
            fontWeight="600"
          >
            Support
          </Text>
          <Text
            display="flex"
            _hover={{ color: "blue" }}
            fontSize="14px"
            fontWeight="600"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/OOjs_UI_icon_bell.svg/1200px-OOjs_UI_icon_bell.svg.png"
              alt=""
              id="bell_icons"
            />
          </Text>
          <Text
            display="flex"
            _hover={{ color: "blue" }}
            fontSize="14px"
            fontWeight="600"
          >
            Sign in
          </Text>
        </Box>
      </Flex>
      <hr />
    </>
  );
}
