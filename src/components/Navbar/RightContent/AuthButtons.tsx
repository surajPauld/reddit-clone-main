import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@component/atoms/authModalAtom";
import React from "react";

const AuthButtons: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState )
  return (
    <>
      <Button
        variant="outline"
        height="20px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "login"})}
      >
        log In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "signup"})}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
