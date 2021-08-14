import { useRef } from "react"
import { Box, Flex, HStack, Button, VStack } from "@chakra-ui/react"
import { FormHandles } from "@unform/core"
import { Card } from "../../../elements/Card"
import { DefaultLayout } from "../../../elements/DefaultLayout"
import { Form } from '../../../elements/Form'
import { Input } from '../../../elements/Form/Input'
import { RowGrid } from "./RowGrid"
import Link from "next/link"
import * as Yup from 'yup'
import { schema } from './schemaValidation'
import getValidationErrors from '../../../../utils/getValidationError';

export const CreateUser = () => {
  const formRef = useRef<FormHandles>(null);

  const handleOnFocus = () => {
    formRef.current?.setErrors({});
  }

  const handleSubmit = async (data) => {    
    try {
      handleOnFocus()
      
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
    <DefaultLayout>
      <Card title="Criar Usuário">
        <Form
          onSubmit={handleSubmit} 
          formRef={formRef}
          bg="transparent"
        >
          <VStack spacing="8">
            <RowGrid>
            <Input
                name="name"
                label="Nome Completo"
                id="name"
                autoFocus
              />
               <Input
                name="email"
                label="E-Mail"
                id="email"
              />
            </RowGrid>

            <RowGrid>
              <Input
                name="password"
                label="Senha"
                id="password"
                type="password"
              />
               <Input
                type="password"
                name="password_confirmation"
                label="Confirmação da senha"
                id="password_confirmation"
              />
            </RowGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Form>
      </Card>
    </DefaultLayout>
  )
}