import { Button, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <Flex direction={['column', 'row']}>
      {/* <Button
        onClick={() => auth.signinWithTwitter()}
        leftIcon={<FaTwitter color='#1da1f2' />}
        my={4}
        mx={2}
        _active={{
          // bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
      >
        Continue with Twitter
      </Button> */}
      <Button
        variant='solid'
        onClick={() => auth.signinWithGoogle('/dashboard')}
        leftIcon={<FcGoogle />}
        my={4}
        _active={{
          transform: 'scale(0.95)',
        }}
      >
        Continue with Google
      </Button>
    </Flex>
  );
};

export default LoginButtons;
