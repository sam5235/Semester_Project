import {Flex, Image, Input, Button} from '@chakra-ui/react'
import { useState } from 'react'
const LogIn = () => {
  const [clicked, setClick] = useState(false)
  return (
    <Flex height="100vh" alignItems = "center" justifyContent = "center">
      <Flex height="268px" alignItems = "center" padding={12} rounded={8}>
        <Image src= 'Admin.svg' width="270px" height="270px"></Image>
      </Flex>
      <Flex direction="column" background="gray.100" padding={12} rounded={6}>
          <Input type="email" variant="outlined" placeholder="samiyaH@gmail.com" mb={6}/>
          <Input type="password" variant="outlined" placeholder='**********' mb={6}/>
          <Button onClick={()=> setClick(true)} isLoading={clicked} color="white" background="#1565c0">Log in</Button>
      </Flex>
    </Flex>
  )
}

export default LogIn