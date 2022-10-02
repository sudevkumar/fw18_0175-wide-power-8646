import { Checkbox, Heading, Input, Stack, Text, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import NavbarForsignLog from "./NavbarForsignLog";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  return (
    <>
      <NavbarForsignLog />

      <form className="input-field">
        <Heading fontSize="30px">Sign in</Heading>
        <Stack spacing={3} mt="20px">
          <Input
            placeholder="Email address"
            size="md"
            width="100%"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />

          <Input
            placeholder="Password"
            size="md"
            width="100%"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </Stack>
        <Checkbox mt="6" defaultChecked>
          <Text fontSize="14px">Keep me signed in</Text>
        </Checkbox>
        <Text fontSize="12px" mt="6">
          Selecting this checkbox will keep you signed into your account on this
          device until you sign out. Do not select this on shared devices.
        </Text>

        <Text fontSize="14px" mt="6">
          By creating an account, I agree to the Expedia Terms and Conditions,
          Privacy Statement and Expedia Rewards Terms and Conditions.
        </Text>
        <Link to={`/home`}><Input type="submit" bgColor="blue.600" color="white" mt="8" /></Link>
        <Text fontSize="12" justifyContent="center" display="flex" mt="6">
          Already have an account? Sign in
        </Text>
        <Text fontSize="12" justifyContent="center" display="flex" mt="6">
          or continue with
        </Text>
        <Wrap display="flex" justifyContent="center" mt="20px">
          <img
            className="images-com"
            name="Apple"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png"
            bgColor="white"
            alt="hdkhfl"
          />
          <img
            className="images-com"
            src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            alt=""
          />
          <img
            className="images-com"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />
        </Wrap>
      </form>
    </>
  );
}
