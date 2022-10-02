import "./Signin.css";
import { Heading, Input, Stack, Checkbox, Text, Wrap } from "@chakra-ui/react";
import NavbarForsignLog from "./NavbarForsignLog";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");

  const handleSub = (event) => {
    event.preventDefault();

    return <Link to={`/home`}></Link>;
  };

  //////////////////////////////////

  return (
    <>
      <NavbarForsignLog />

      <form className="input-field" onSubmit={handleSub}>
        <Heading fontSize="30px">Create an account</Heading>
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
            placeholder="First name"
            size="md"
            width="100%"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            name="fname"
          />
          <Input
            placeholder="Surname"
            size="md"
            width="100%"
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            name="lname"
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
        <Checkbox mt="6" defaultChecked>
          <Text fontSize="14px">
            I'd like to receive travel deals, special offers and other
            information from Expedia via email.
          </Text>
        </Checkbox>

        <Text fontSize="14px" mt="6">
          By creating an account, I agree to the Expedia Terms and Conditions,
          Privacy Statement and Expedia Rewards Terms and Conditions.
        </Text>
        <Link to={`/home`}>
          <Input
            type="submit"
            bgColor="blue.600"
            color="white"
            mt="8"
            // onClick={handleClick}
          />
        </Link>
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
