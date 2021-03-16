import './About.scss';
import { Link } from 'react-router-dom';

function About() {
    const aboutText = " е органайзер за музиканти. Помага за по-добра организация на работният процес както при професионалисти, така и при начинаещи. Добро помощно средства за учениците от детските музикални школи, както и за тези от музикалните училища."
    return (
        <section className="about">
            <h1>Какво е <span className='logo-span'>Practice Master</span>?</h1>
            <article className='about-content'>
                <p><span className='logo-span'>Practice Master</span>{aboutText} </p>
                <section className="benefits">
                    <h2>Practice Master помага за:</h2>
                    <ul className='benefits-list'>
                        <li><i class="fas fa-check"></i>Поставяне на конкретни цели</li>
                        <li><i class="fas fa-check"></i>По-лесна организация на ежедневната работа</li>
                        <li><i class="fas fa-check"></i>Водене на бележки</li>
                        <li><i class="fas fa-check"></i>Следене на както на новите, така и готовите пиеси от репертоара</li>
                        <li><i class="fas fa-check"></i>Планиране на концерти и други изяви пред публика</li>
                    </ul>
                </section>
                <button className="start-now">  <li><Link to="/register">Регистрирай се</Link></li></button>
            </article>
        </section>
    );
}

export default About;