import React, { useState } from "react";
import { Botao } from "../../Components/Botao";
import Input from "../../Components/Input";
import UserService from "../../Service/UserService";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import { Container, Form } from "./styles";

const  userService = new UserService()

export function Login() {
    const [loading, setLoading] = useState();
    const [form, setForm] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await userService.login(form)
            console.log('response do Login', response)
            if(response === true) {
              alert('Usuário logado com SUCESSO!')
            }
            setLoading(false)
        }
        catch (err) {
            alert('Algo deu errado com o Login ' + err)
        }

    }
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
    }

    console.log('Form está valido? ', validadorInput())
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
                    disabled={loading === true || !validadorInput()}
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