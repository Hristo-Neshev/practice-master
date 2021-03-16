import './Register.scss';

function Register(props) {
    return (
        <article className="user-form-container">
            <h1>Създай профил</h1>
            <section className="user-form">
                <div className="img-container">
                    <img src="music-notes.jpg" alt="img" />
                </div>
                <div className="form-container">
                    <form action="" className="user-form-form">
                        <input type="text" placeholder="Име" />
                        <input type="password" placeholder="Парола" />
                        <input type="password" placeholder="Повтори парола" />
                        <input className='input-btn' type="submit" value="Влез" />
                    </form>
                </div>
            </section>
            <div className='create-new-acc'>
                <h2>Вече имаш профил?</h2>
                <p> Влез<a href="#">ТУК</a></p>
            </div>
        </article>
    )
}

export default Register;