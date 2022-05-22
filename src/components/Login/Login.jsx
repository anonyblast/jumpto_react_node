import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import "./Login.css";

function Login() {
    const handleClickLogin = (values) => {
        console.log(values);
    };

    const validationLogin = Yup.object().shape({
        email: Yup.string()
            .email("Email inválido")
            .required("*Insira um email"),
        senha: Yup.string()
            .min(8, "A senha precisa ter no mínimo 8 caracteres")
            .required("*Insira a senha"),
    });

    return (
        <div className="login">
            <div className="Login_container">
                <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                    <Form className="Login_container_form">
                        <div className="esc">
                            <img src="https://img.icons8.com/plumpy/24/000000/macos-close.png" />
                        </div>
                        <h1>Entrar</h1>
                        <label htmlFor="Login_container_form_input">Usuário</label>
                        <Field
                            name="email"
                            className="Login_container_form_input"
                            placeholder="Email"
                        />
                        <ErrorMessage
                            name="email"
                            className="Login_container_form_error"
                            component="span"
                        />
                        <label htmlFor="Login_container_form_input">Senha</label>
                        <Field
                            type="password"
                            name="senha"
                            className="Login_container_form_input"
                            placeholder="Senha"
                        />
                        <ErrorMessage
                            name="senha"
                            className="Login_container_form_error"
                            component="span"
                        />
                        <button className="Login_container_form_button">Entrar</button>
                        <div className="social">
                            <div className="zoom">
                                <img src="https://img.icons8.com/fluency/48/000000/zoom.png" />{" "}
                                Zoom
                            </div>
                        </div>
                        <div className="cadastrar">
                            Não tem uma conta? <NavLink to="/Cadastrar">Cadastre-se</NavLink>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;
