import { useForm } from "react-hook-form";
import { registerAccount } from "../../services/userServices";
import styles from "./Register.module.css";



export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function enviarFormulario(data) {

        try {
            console.log(data)

            const result = await registerAccount(data);

            console.log(result)

            if (result.token) {
                localStorage.setItem("token", result.token);
                window.location.href = "/"
            }

            if (result.error) {
                alert(result.error)
            }

        } catch (error) {

            console.log(error)

        }

    }



    return (
        <div className={styles.main}>

            <section className={styles.registerPage}>

                <div className={styles.headerRegisterPage}>
                    <div className={styles.logoSocial}>
                        <h1>Social<span>DEVS</span></h1>
                    </div>
                    <h1>Cadastro</h1>
                </div>

                

                <form className={styles.form} onSubmit={handleSubmit(enviarFormulario)}>

                    <div>
                        <input type="text" id="name" name="name" placeholder="Nome" {...register("name", {
                            required: {
                                value: true,
                                message: "Nome é Obrigatório"
                            }
                        })} />
                        {errors.name?.message && <span>{errors.name?.message}</span>}
                    </div>

                    <div>
                        <input type="text" id="username" name="username" placeholder="Username" {...register("username", {
                            required: {
                                value: true,
                                message: "Username é Obrigatório"
                            }
                        })} />
                        {errors.username?.message && <span>{errors.username?.message}</span>}
                    </div>

                    <div>
                        <input type="email" id="email" name="email" placeholder="Email" {...register("email", {
                            required: {
                                value: true,
                                message: "Email é Obrigatório"
                            }
                        })} />
                        {errors.email?.message && <span>{errors.email?.message}</span>}
                    </div>

                    <div>
                        <input type="password" id="password" name="password" placeholder="Password" {...register("password", {
                            required: {
                                value: true,
                                message: "Password é Obrigatório"
                            }
                        })} />
                        {errors.password?.message && <span>{errors.password?.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="date_birth">Data de Nascimento</label>
                        <input className={styles.inputDate} type="date" id="date_birth" name="date_birth" {...register("date_birth", {
                            required: {
                                value: true,
                                message: "Data de Nascimento é Obrigatório"
                            }
                        })} />
                        {errors.date_birth?.message && <span>{errors.date_birth?.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="sex">Sexo</label>
                        <select name="select" {...register("sex", {
                            required: {
                                value: true
                            }
                        })}>
                            <option value="masc" selected>Masculino</option>
                            <option value="fem" >Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <button type="submit">Cadastre-se</button>

                    {/* Ir para o login */}
                    <a href="/login">Já tem uma conta? Faça Login</a>

                </form>

            </section>




        </div>
    )
}