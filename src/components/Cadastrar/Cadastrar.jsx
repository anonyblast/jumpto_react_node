import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Cadastrar.css";

function Cadastrar() {
    return (
        <div className="cadastrar">
            <div className="Cadastrar_container">
                <Formik initialValues={{}}>
                    <Form className="Cadastrar_container_form">
                        <div className="esc">
                            <img src="https://img.icons8.com/plumpy/24/000000/macos-close.png" />
                        </div>
                        <h1>Cadastrar</h1>

                        <label htmlFor="Cadastrar_container_form_input">Nome Completo</label>
                        <Field name="nome" className="Cadastrar_container_form_input" placeholder="Nome" />
                        <ErrorMessage name="nome" className="Cadastrar_container_form_error" component="span" />

                        {/* Usuário seleciona se é advogado ou instituição judiciária */}
                        <label htmlFor="Cadastrar_container_form_input">Tipo de conta</label>
                        <Field type="radio" name="advogado" className="Cadastrar_container_form_input" placeholder="Advogado" />
                        <Field type="radio" name="instituicao" className="Cadastrar_container_form_input" placeholder="Instituição" />
                        
                        <label htmlFor="Cadastrar_container_form_input">Email</label>
                        <Field name="email" className="Cadastrar_container_form_input" placeholder="O mesmo email da sua conta Zoom" />
                        <ErrorMessage name="email" className="Cadastrar_container_form_error" component="span" />

                        <label htmlFor="Cadastrar_container_form_input">Senha</label>
                        <Field name="senha" className="Cadastrar_container_form_input" placeholder="Senha" />
                        <ErrorMessage name="senha" className="Cadastrar_container_form_error" component="span" />

                        <label htmlFor="Cadastrar_container_form_input">Confirmar Senha</label>
                        <Field name="confirmarSenha" className="Cadastrar_container_form_input" placeholder="Confirmar Senha" />
                        <ErrorMessage name="confirmarSenha" className="Cadastrar_container_form_error" component="span" />

                        <button className="Cadastrar_container_form_button">Cadastrar</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
