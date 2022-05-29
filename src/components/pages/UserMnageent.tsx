import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { memo, FC, useEffect, useCallback } from 'react';
import { UserCard } from '../organisms/layout/user/Usercard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/layout/user/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUser';
import { useLoginUser } from '../../hooks/useLoginUsers';

export const UserManagement: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.ussplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
});
