import React from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToRegisterButton } from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numero-residencia">
          Número da residência:
          <Input id="numero-residencia" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input id="telefone" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Finalizar cadastro</SendButton>
        <BackToRegisterButton onClick={() => props.mudarTela(2)}>
          Voltar
        </BackToRegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
