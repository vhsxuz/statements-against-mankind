import { Stack, Center, Heading, FormControl, FormLabel, Button, Textarea, useControllableState, Flex } from '@chakra-ui/react';
import React from 'react';


function AddCard() {

  const [value, setValue] = useControllableState({ defaultValue: 'Question:' });

  return (
    <Stack>
      <Center mt="20">
        <Heading size='lg'>Add Card</Heading>
      </Center>
      <FormControl isRequired ps="56" pe="56" pt="8">
        <FormLabel>Card Type</FormLabel>
        <Flex>
          <Button colorScheme='red' me="8" onClick={() => { setValue('Question:') }}>Red Card (Question)</Button>
          <Button colorScheme="blue" onClick={() => { setValue('Answer:') }}>Blue Card (Answer)</Button>
        </Flex>
        <FormLabel mt="4"> {value} </FormLabel>
        <Textarea placeholder={value === "Question:" ? "Input your Question" : "Input your Answer"} />
        <Button colorScheme='teal' mt="4">
          Add Card
        </Button>
      </FormControl>
    </Stack >
  );
}

export default AddCard;