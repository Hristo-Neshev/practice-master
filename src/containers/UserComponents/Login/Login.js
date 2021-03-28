import './Login.scss';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <article className="user-form-container">
            <h1>Вход</h1>
            <section className="user-form">
                <div className="img-container">
                    <img src="music-notes.jpg" alt="img" />
                </div>
                <div className="form-container">
                    <form action="" className="user-form-form">
                        <input type="text" placeholder="Име" />
                        <input type="password" placeholder="Парола" />
                        <input className='input-btn' type="submit" value="Влез" />
                    </form>
                </div>
            </section>
            <div className='create-new-acc'>
                <h2>Нямаш профил?</h2>
                <p> Създай нов профил<Link to="/register">ТУК</Link></p>
            </div>
        </article>
    )
}

export default Login;