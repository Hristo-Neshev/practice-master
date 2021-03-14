import './About.scss';

function About() {
    return (
        <section className="about">
            <h1>Какво е Practice Master?</h1>
            <article className='about-content'>
                <p>Practice Master е органайзер за музиканти.
                     Помага за по-добра организация на работният процес както при професионалисти, така и при начинаещи.</p>
                <section className="benefits">
                    <h2>Practice Master помага за:</h2>
                    <ul>
                        <li><i class="fas fa-check"></i>Поставяне на конкретни цели</li>
                        <li><i class="fas fa-check"></i>По-лесна организация на ежедневната работа</li>
                        <li><i class="fas fa-check"></i>Водене на бележки</li>
                        <li><i class="fas fa-check"></i>Следене на както на новите, както и готовите пиеси от репертоара</li>
                        <li><i class="fas fa-check"></i>Планиране на концерти и други изяви пред публика</li>
                    </ul>
                </section>
            </article>
        </section>
    );
}

export default About;