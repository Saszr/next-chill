import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useSignInMutation } from 'lib/store/api/user.service';

type FormData = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const [signIn, { data: signInData }] = useSignInMutation();
  const toast = useToast();

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>(formOptions);

  function onSubmit({ username, password }: FormData) {
    signIn({
      username,
      password,
    });
  }

  useEffect(() => {
    if (signInData && signInData.code === 1) {
      toast({
        title: `Sign in success`,
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
    }
    if (signInData && signInData.code !== 1) {
      toast({
        title: signInData.msg,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  }, [signInData, toast]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors?.username}>
        <FormLabel>Username</FormLabel>
        <Input {...register('username')} />
        <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        <FormHelperText>Check the table&apos;s username for verification</FormHelperText>
      </FormControl>
      <FormControl isInvalid={!!errors?.password}>
        <FormLabel>Password</FormLabel>
        <Input {...register('password')} />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        <FormHelperText>Check the table&apos;s password for verification</FormHelperText>
      </FormControl>
      <Button
        w="100%"
        mt={4}
        colorScheme="teal"
        isLoading={isSubmitting}
        type="submit"
        disabled={!!errors?.username || !!errors?.password}
      >
        Submit
      </Button>
    </form>
  );
}
