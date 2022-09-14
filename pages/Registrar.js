import styles from '../styles/Login.module.css'
import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
    

export default function Registrar(){
    return(
        <>
        <Head>
            <title>Estilo Criação: Cadastrar</title>
        </Head>
        <div id={styles.register}>
            <h1><Link href="/Login"><i className={"fa-solid fa-chevron-left"} id={styles.arrow}></i></Link>Crie sua conta</h1>
            <p id={styles.conta}>Crie sua conta é grátis</p>

            <form>
                <div className={styles.formImput}>
                    <label>Nome</label>
                    <input id={styles.email} type={"name"} />

                    <label>E-mail</label>
                    <input id={styles.email} type={"email"} />

                    
                    <label>Senha</label>
                    <input id={styles.email} type={"password"} />
                </div>
               {/*<button id={styles.Entrar}>
                    Comece Agora!
                </button>
                <div className={styles.FooterLogin}>
                    Já tem uma conta?
                    <Link href="../Login">Faça login</Link>
                </div>*/}
            </form>
        </div>
        <div id={styles.dadosP}>
            <div id={styles.dados}>
                <p id={styles.dadosPessoais}><i className={"fa-solid fa-list fa-1x"}></i> Dados Pessoais</p>
                <hr/>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Nome Completo: </label><input type={"text"} style={{width: "50%"}}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>CPF: </label><input type={"text"} style={{width: "30%"}}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Celular: </label><input type="tel" id="phone" name="phone"
                                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                            required style={{width: "30%"}}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Telefone fixo: </label><input type="tel" id="phone" name="phone"
                                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                            required style={{width: "30%"}}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Sexo: </label>
                        <Form.Select id={styles.formSelect} aria-label="Default select example" style={{width: "32%", height: "30px"}}>
                            <option>-selecione-</option>
                            <option value="1">Feminino</option>
                            <option value="2">Masculino</option>
                            <option value="2">Prefiro não responder</option>
                        </Form.Select>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Data de nascimento: </label><input id={styles.DataDeNascimento} style={{width: "18%"}} type={"date"}/>
                    </div>
                </form>
            </div>





            <div id={styles.endereço}>
                <p id={styles.dadosPessoais}><i className={"fa-solid fa-location-dot "}></i> Endereço</p>
                <hr/>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>CEP: </label><input type={"number"} style={{width: "50%"}}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Endereço: </label><input type={"text"} style={{width: "30%"}}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Número: </label><input type={"number"} style={{width: "30%"}}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Complemento: </label><input type={"number"} style={{width: "30%"}}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Referência: </label><input id={styles.DataDeNascimento} style={{width: "18%"}} type={"text"}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Bairro: </label><input id={styles.DataDeNascimento} style={{width: "18%"}} type={"text"}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Cidade: </label><input id={styles.DataDeNascimento} style={{width: "18%"}} type={"text"}/>
                    </div>
                </form>
                <form id={styles.formDados}>
                    <div className={styles.inputs}>
                        <label>Estado: </label><input id={styles.DataDeNascimento} style={{width: "18%"}} type={"text"}/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}