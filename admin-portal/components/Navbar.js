import styles from "../styles/Navbar.module.css";
import { WrapItem, Avatar, Flex, useColorMode } from "@chakra-ui/react";
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import Register from "./RegisteringModal";
import { useState } from "react";
const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className={styles.navbar}>
        <Flex color="white"align="center">Welcome to Admin portal</Flex>
      <Flex align="center">
        <Register/>
      </Flex>
        <Flex  alignItems="center" >
        <div onClick={() => {
       
            toggleColorMode()

            }}>
                {colorMode === 'light' ? <SunIcon color= "white"boxSize={6}/> : <MoonIcon color="white" boxSize={6}/>}
           
        </div> 
        
          <WrapItem ml={6}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </WrapItem>
        </Flex>
   
    </div>
  );
};

export default Navbar;
