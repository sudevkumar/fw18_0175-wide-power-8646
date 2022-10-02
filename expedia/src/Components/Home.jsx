import {
  Box,
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";

import MainNavbar from "./MainNavbar";
import Footers from "./Footers";
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
              <Tab fontWeight="bold" fontSize="13px">Stays</Tab>
              <Tab fontWeight="bold" fontSize="13px">Flights</Tab>
              <Tab fontWeight="bold" fontSize="13px">Packages</Tab>
              <Tab fontWeight="bold" fontSize="13px">Things to do</Tab>
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
          <button id="search-btn">Search</button>
        </Box>
      </Box>

      {/* ///////////////////// */}

      <div className="pictures">
        <div id="pictures">
          <Text
            color="white"
            fontWeight="bold"
            fontSize="40px"
            p="90px 0px 0px 40px"
          >
            Save instantly with
          </Text>
          <Text
            color="white"
            fontWeight="bold"
            fontSize="40px"
            p="0px 0px 0px 40px"
            mt="-20px"
          >
            Expedia Rewards
          </Text>
          <Text color="white" p="0px 0px 0px 40px">
            You can enjoy access to perks like Member Prices, <br /> saving an
            average of 15% on thousands of hotels. <br /> Terms may apply.
          </Text>
          <button id="mem-price">See Member Price</button>
        </div>
      </div>

      <Box display="flex" height="auto" width="90%" m="auto" mt="40px">
        <Box height="210px" width="55%">
          <img
            id="beach-img"
            src="https://img.freepik.com/premium-photo/beautiful-tropical-beaches-sea-with-blue-background-beach-bright-blue-sky-background-copying-space-panorama_524876-608.jpg?w=2000"
          />
        </Box>

        <Box
          height="210px"
          width="55%"
          borderTop="1px solid lightGray"
          borderRight="1px solid lightGray"
          borderBottom="1px solid lightGray"
          borderRadius="5px"
        >
          <img
            id="usa"
            src="https://tpc.googlesyndication.com/simgad/5197503855605148686?"
            alt=""
          />
          <Text margin="10px 0px 0px 20px" fontSize="20px" fontWeight="500">
            Discover USA
          </Text>
          <Text margin="10px 0px 0px 20px" fontSize="14px">
            From beaches and national parks to iconic big cities, the USA awaits
            you.
          </Text>
        </Box>
      </Box>

      <div className="plan-now">
        <div id="plan-now-left">
          <Text
            textAlign="left"
            m="177px 0px 0px 30px"
            color="white"
            fontWeight="bold"
          >
            Plan ahead and save
          </Text>
          <Text
            textAlign="left"
            m="0px 0px 0px 30px"
            color="white"
            fontWeight="500"
            fontSize="13px"
          >
            Book 60 days in advance for 20% off select stays.
          </Text>
        </div>

        <div id="plan-now-right"></div>
      </div>
      <Footers />
    </>
  );
}
