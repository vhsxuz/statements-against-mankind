import { Button, Center, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function home() {
  return (
    <Stack mt="56">
      <Center>
        <Heading>
          Brace Yourself
        </Heading>
      </Center>
      <Center mt="16">
        <Link to="/gameplay">
          <Button>
            Get Question
          </Button>
        </Link>
      </Center>
    </Stack>
  )
}

export default home