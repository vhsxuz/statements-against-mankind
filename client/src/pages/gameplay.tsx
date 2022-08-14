import { Button, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Gameplay() {
  const [cards, setCards] = useState<any>([]);
  let token = document.cookie.slice(6);

  useEffect(() => {
    playCard();
  }, []);

  const playCard = async () => {
    const response = await Axios.get('http://localhost:8000/api/v1/card/ffa', {
      headers: {
        Authorization: token,
      }
    });
    console.log(await response.data);
    setCards(await response.data);
  }

  return (
    <Stack>
      <Center mt="16">
        <Heading>
          Question
        </Heading>
      </Center>
      <Center>
        <Text>
          {cards.redCard.question}
          {/* Hello */}
        </Text>
      </Center>
      <VStack spacing={8} direction='column'>
        <Center>
          <Link to='/home'>
            <Button colorScheme='blue' m="8">
              {cards.blueCards[0].answer}
            </Button>
          </Link>
          <Link to='/home'>
            <Button colorScheme='blue' m="8">
              {cards.blueCards[1].answer}
            </Button>
          </Link>
          <Link to='/home'>
            <Button colorScheme='blue' m="8">
              {cards.blueCards[2].answer}
            </Button>
          </Link>
          <Link to='/home'>
            <Button colorScheme='blue' m="8">
              {cards.blueCards[3].answer}
            </Button>
          </Link>
          <Link to='/home'>
            <Button colorScheme='blue' m="8">
              {cards.blueCards[4].answer}
            </Button>
          </Link>
        </Center>
      </VStack>
    </Stack>
  );
}

export default Gameplay;