import {
  Flex,
  Box,
  Heading,
  Button,
  Divider,
  Input,
  Stack,
} from '@chakra-ui/react';
import { memo, FC, useState, ChangeEvent } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setuserId] = useState('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setuserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
            <PrimaryButton
              onClick={onClickLogin}
              loading={loading}
              disabled={userId === ''}
            >
              ログイン
            </PrimaryButton>
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
