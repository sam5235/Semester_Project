import { Input, InputGroup, InputRightElement, Spinner, useColorModeValue } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";

const SearchBar = ({filter = () =>{}, value,  onChange, isLoading = false}) =>{

    return(
        <InputGroup>
        <InputRightElement
          onClick={filter}
          pt={2}
          pr={5}
          children= { isLoading? <Spinner size='sm'/> : <ImSearch fontSize="20px" />}
        />
        <Input
          size="lg"
          rounded="2xl"
          type="text"
          boxShadow="dark-lg"
          value={value}
          onChange={onChange}
          placeholder="Search the patient"
          bg={useColorModeValue("white", "gray.800")}
        />
      </InputGroup>
    )
}

export default SearchBar;