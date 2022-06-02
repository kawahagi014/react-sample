import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import { memo, FC, useState, useEffect, ChangeEvent } from 'react';
import { User } from '../../../../types/api/user';
import { PrimaryButton } from '../../../atoms/button/PrimaryButton';

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, isAdmin, onClose } = props;

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhon] = useState('');

  useEffect(() => {
    setUsername(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhon(user?.phone ?? '');
  }, [user]);

  const OnChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const OnChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const OnChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const OnChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onClickUpdate = () => alert('ooo');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={username}
                  isReadOnly={!isAdmin}
                  onChange={OnChangeUserName}
                />
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  isReadOnly={!isAdmin}
                  onChange={OnChangeName}
                />
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={email}
                  isReadOnly={!isAdmin}
                  onChange={OnChangeEmail}
                />
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  isReadOnly={!isAdmin}
                  onChange={OnChangePhone}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
