import { Box, Text } from "@chakra-ui/react";

export default function Footers() {
  return (
    <Box
      width="90%"
      height="auto"
      //   border="1px solid red"
      margin="auto"
      mt="40px"
    >
      <Box height="auto" width="22%" m="auto">
        <Text textAlign="center" fontSize="15px" fontWeight="bold">
          Explore a world of travel with Expedia
        </Text>
        <Text color="blue" textAlign="center" fontSize="13px" cursor="pointer">
          Discover new places and experiences
        </Text>
      </Box>
      <Box
        display="flex"
        height="auto"
        width="100%"
        // border="1px solid blue"
        mt="30px"
        gap="100px"
        padding="30px"
      >
        <Box>
          <img
            src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
            alt=""
          />
        </Box>

        <Box>
          <Text fontSize="12px" fontWeight="bold" mb="17px">
            Company
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            About Us
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Jobs
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            List your property
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer"> 
            Partnerships
          </Text>
        </Box>

        <Box>
          <Text fontSize="12px" fontWeight="bold" mb="17px">
            Explore
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            India travel guide
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Hotels in India
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Holiday rentals in India
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Holiday packages in India
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Domestic flights
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Car hire in India
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            All accommodation types
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Travel blog
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="bold" mb="17px">
            Policies
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Privacy Statement
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Vrbo terms and conditions
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Terms of use
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="bold" mb="17px">
            Help
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Support
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Change or cancel your booking
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Refund process and timelines
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            Book a flight using an airline credit
          </Text>
          <Text fontSize="12px" color="blue" mb="10px" cursor="pointer">
            International travel documents
          </Text>
        </Box>
      </Box>

      {/* ///////////////////////////// */}
      <hr />
      {/* //////////////////////////////// */}

      <Box height="auto" width="20%" m="auto" mt="20px">
        <img
          src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"
          alt=""
        />
      </Box>
      <Box height="20px" width="88%" m="auto">
        <Text fontSize="15px" textAlign="center">
          © 2022 Expedia, Inc., an Expedia Group company. All rights reserved.
          Expedia and the Airplane Logo are trademarks or registered trademarks
          of Expedia, Inc.
        </Text>
      </Box>
    </Box>
  );
}

// fontSize="12px"
// fontWeight="bold"
