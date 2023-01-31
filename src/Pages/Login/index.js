import React from "react";
import { Botao } from "../../Components/Botao";
import Input from "../../Components/Input";
import { Container, Form } from "./styles";

export function Login() {

    const handleSubmit = async () => {
        alert('Login')
    }
    const handleChange = (event) => {
        console.log('Digitando...', event.target.name, event.target.value)
    }

    return (
        <Container>
            <Form>
                <h1>Faça o seu Login! 👋🏽</h1>
                <Input
                    name="email"
                    placeholder="Digite o seu e-mail"
                    onChange={handleChange}
                    type="email"
                />
                <Input
                    name="password"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    type="password"
                />
                <Botao 
                    type='submit'
                    text='Entrar!'
                    onClick={handleSubmit}
                />
                <div>
                    <p>Não possui conta?</p>
                    <a>Cadastrar</a>
                </div>
            </Form>
        </Container>
    )
}
export default Login;