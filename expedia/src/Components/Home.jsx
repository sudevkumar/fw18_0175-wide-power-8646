import {
  Box,
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";

import MainNavbar from "./MainNavbar";
import "./Home.css";

export default function Home() {
  const getDatas = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  return (
    <>
      <MainNavbar />

      <Box
        border="1px solid lightGray"
        margin="auto"
        mt="50px"
        width="90%"
        height="auto"
        borderRadius="10px"
      >
        <Box
          height="50px"
          width="55%"
          margin="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Tabs>
            <TabList>
              <Tab>Stays</Tab>
              <Tab>Flights</Tab>
              <Tab>Packages</Tab>
              <Tab>Things to do</Tab>
            </TabList>
          </Tabs>
        </Box>
        <center>
          <hr />
        </center>

        {/* /////// */}
        <Box width="95%" margin="auto" mt="18px" display="flex" gap={3}>
          <Input placeholder="📍 Goint to" size="lg" width="35%" />
          <Box size="lg" border="1px solid grey" width="23%" borderRadius="5px">
            <Input
              placeholder="Select Date and Time"
              size="lg"
              type="date"
              width="25"
              cursor="pointer"
              border="none"
              defaultValue={getDatas()}
              fontSize="15px"
            />
            Check In
          </Box>

          <Box size="lg" border="1px solid grey" width="23%" borderRadius="5px">
            <Input
              // placeholder="Select Date and Time"
              size="lg"
              type="date"
              defaultValue={getDatas()}
              width="25"
              border="none"
              cursor="pointer"
              fontSize="15px"
            />
            Check Out
          </Box>

          <InputGroup width="25" size="lg">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="👤"
            />
            <Input placeholder="Travlers" />
            {/* <InputRightElement children={<CheckIcon color="green.500" />} /> */}
          </InputGroup>
        </Box>

        {/* Check Box */}

        <Box width="95%" m="auto">
          <Box
            display="flex"
            width="25%"
            mt="10px"
            justifyContent="space-between"
          >
            <Checkbox letterSpacing="1px">Add a flight</Checkbox>
            <Checkbox letterSpacing="1px">Add a car</Checkbox>
          </Box>
        </Box>

        {/* Button */}
        <Box width="95%" m="auto" mt="10px">
          <button id="search-btn">
            Search
          </button>
        </Box>
      </Box>

    {/* ///////////////////// */}


    <Box width="90%" margin="auto" mt="70px">
      <img src="https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg" alt="" id="rewards"/>
    </Box>





    </>
  );
}
