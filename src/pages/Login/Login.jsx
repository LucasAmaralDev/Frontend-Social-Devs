import { useForm } from "react-hook-form";
import { login } from "../../services/userServices";
import styles from "./Login.module.css";


export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();


    async function enviarFormulario(data) {

        const result = await login(data)
        console.log(result)

        if (result.token) {
            localStorage.setItem("token", result.token);
            window.location.href = "/"
        }

        if (result.error) {
            alert(result.error)
        }

    }


    return (
        <div className={styles.main}>

            <section className={styles.loginPage}>

                <div className={styles.headerLoginPage}>
                    <div className={styles.logoSocial}>
                        <h1>Social<span>DEVS</span></h1>
                    </div>
                    <h1>Cadastro</h1>
                </div>

                <form className={styles.form} onSubmit={handleSubmit(enviarFormulario)}>

                    <div>
                        <input type="email" id="email" name="email" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span>Email é Obrigatório</span>}
                    </div>

                    <div>
                        <input type="password" id="password" name="password" placeholder="Password" {...register("password", { required: true })} />
                        {errors.password && <span>Password é Obrigatório</span>}
                    </div>

                    <button type="submit">Login</button>
                    
                    {/* Ir para o signup */}
                    <a href="/register">Não tem uma conta? Cadastre-se</a>

                </form>

            </section>

        </div>
    )
}