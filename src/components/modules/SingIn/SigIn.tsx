import { Flex, Stack } from '@chakra-ui/react'
import { FormHandles } from '@unform/core';
import { useRef } from 'react';
import * as Yup from 'yup'

import { Form } from '../../elements/Form'
import { Input } from '../../elements/Form/Input'
import { Button } from '../../elements/Form/Button'
import getValidationErrors from '../../../utils/getValidationError';
import { schema } from './scremaValidation';

interface SignInFormData {
  email: string;
  password: string;
}

export const SignIn = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }

  return (
   <Flex 
    w="100%" 
    h="100vh" 
    align="center" 
    justify="center"
  >
    <Form 
      onSubmit={handleSubmit} 
      formRef={formRef}
      maxW="360px"
    >
      <Stack spacing="4">
        <Input 
          id="email"
          label="E-Mail"
          type="email"
          name="email"
        />
        <Input 
          id="password"
          label="Senha"
          type="password"
          name="password"
        />
      </Stack>
      <Button
        type="submit"
        mt="6"
        colorScheme="pink"
        title="Entrar"
        w="100%"
        padding="25px 0"
      />
    </Form>
   </Flex>
  )
}
