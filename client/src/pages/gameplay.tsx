import { Button, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Gameplay() {
  const [cards, setCards] = useState<any>([]);
  const [blueCards, setBlueCards] = useState<any>([]);
  let token = document.cookie.slice(6);

  useEffect(() => {
    playCard();

  }, []);


  const playCard = async () => {
    let response: any;
    console.log("test");
    try {
      response = await Axios.get('http://localhost:8000/api/v1/card/ffa', {
        headers: {
          Authorization: token,
        }
      });
      // const test_var = response.data.blueCards[0];
      let blueCardList: any = [];
      response.data.blueCards.forEach((element: any) => {
        blueCardList.push(element.answer);
      });
      console.log(blueCardList);
      setCards({ redCard: response.data.redCard.question });
      setBlueCards(blueCardList);
    } catch (error) {
      console.log(error);
    }

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
          {JSON.stringify(cards.redCard)}
        </Text>
      </Center>
      <VStack spacing={8} direction='column'>
        <Center>
          {blueCards.map((index: any) => {
            return (
              <Link to='/home'>
                <Button colorScheme='blue' m="8">
                  {JSON.stringify(index)}
                </Button>
              </Link>
            );
          })}
        </Center>
      </VStack>
    </Stack>
  );
}

export default Gameplay;