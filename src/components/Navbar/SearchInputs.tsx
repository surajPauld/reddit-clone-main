import React from 'react';
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { User } from 'firebase/auth';

type SearchInputsProps = {
    user?: User | null;
};

const SearchInputs:React.FC<SearchInputsProps> = ({ user }) => {
    
    return (
        <Flex flexGrow={1} maxWidth={user ? "auto" : "600px"} mr={2} align="centre">
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.400' mb={1} />}
                />
                <Input
                    placeholder='Search Reddit'
                    fontSize='10pt'
                    _placeholder={{color: "gray.500"}}
                    _hover={{
                        bg: "whiite",
                        border: "1px solid", 
                        borderColor: "blue.500"
                    }}
                    _focus={{
                        outline: "none", 
                        border: "1px solid", 
                        borderColor: "blue.500"
                    }} 
                    height="34px" 
                    bg="gray.50" 
                />
            </InputGroup>
        </Flex>
    )
}
export default SearchInputs;