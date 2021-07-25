import { Button, Flex, Stack } from '@chakra-ui/react'
import { FormHandles } from '@unform/core';
import { useRef } from 'react';
import * as Yup from 'yup'

import { Form } from '../components/Form'
import { Input } from '../components/Form/Input'
import getValidationErrors from '../utils/getValidationError';

interface SignInFormData {
  email: string;
  password: string;
}

export default function Home() {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail valido')
          .trim(),
        password: Yup.string()
          .min(6, 'No minimo 6 digitos')
          .required('Senha obrigatório'),
      })

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
      formRef={formRef
    }>
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
      >
        Entrar
      </Button>
    </Form>
   </Flex>
  )
}
