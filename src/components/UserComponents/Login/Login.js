import './Login.scss';

function Login(props) {
    return (
        <article className="login-container">
            <h1>Вход</h1>
            <section className="login">
                <div className="img-container">
                    <img src="music-notes.jpg" alt="img" />
                </div>
                <div className="form-container">
                    <form action="" className="login-form">
                        <input type="text" placeholder="Име" />
                        <input type="password" placeholder="Парола" />
                        <input className='input-btn' type="submit" value="Влез" />
                    </form>
                </div>
            </section>
            <div className='create-new-acc'>
                <h2>Нямаш профил?</h2>
                <p> Създай нов профил<a href="#">ТУК</a></p>
            </div>
        </article>
    )
}

export default Login;