export default (first_name: string, urlChangePassword: string): string => {
    return `
        <head>
            <style>
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                a{
                    background-color: #00ADB5; /* Green */
                    font-family: Arial, Helvetica, sans-serif;
                    border: none;
                    color: white;
                    padding: 7.5px 16px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    border-radius: 5px;
                    transition-duration: 0.5s;
                    cursor: pointer;
                    align-items: center;
                }

                a:hover {
                    background-color: #AAD8D3; /* Green */
                    color: black;
                }

                td {
                    padding: 10px;
                    text-align: center;
                }

                h1 {
                    font-size: 26px;
                    font-family: Arial, Helvetica, sans-serif;
                }

                p {
                    font-size: 14px;
                    font-family: Arial, Helvetica, sans-serif;
                }


            </style>
        </head>

        <body>
            <div>
                <table>
                    <tr>
                        <td>
                            <h1>
                                Olá, ${first_name}
                            </h1>
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            <p>
                                Houve uma solicitação de recuperação de senha com esse e-mail!
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>
                                Para alterar sua senha, clique no botão abaixo, ou acesse: ${urlChangePassword}
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a href="${urlChangePassword}" target="_blank">Alterar Minha Senha</a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>
                                Caso você não tenha feito essa solicitação, por favor ignore esse e-mail.
                            </p>
                        </td>
                    </tr>
                </div>

                </table>
            </div>
        </body>
    `
}
