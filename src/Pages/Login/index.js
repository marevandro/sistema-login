import React, { useState } from "react";
import { Botao } from "../../Components/Botao";
import Input from "../../Components/Input";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import { Container, Form } from "./styles";


export function Login() {
    const [loading, setLoading] = useState();
    const [form, setForm] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            alert('Login')
            setLoading(false)
        }
        catch (err) {
            alert('Algo deu errado com o Login' + err)
        }

    }
    const handleChange = (event) => {
        console.log('Digitando...', event.target.name, event.target.value)
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form, "linha 27")
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