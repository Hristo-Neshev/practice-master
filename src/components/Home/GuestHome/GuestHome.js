import './GuestHome.scss';

function GuestHome(props) {
    return (
        <section className="guest-home">
            <section className="guest-heading">
                <h1>Practice Master</h1>
                <p>Работи Ефективно</p>
            </section>
            <section className="btn-controls">
                <button className="start-now"><a href="#">Започни сега!</a></button>
                <button className=" start-now learn-more"><a href="#">Научи повече</a></button>
            </section>
        </section>
    )
}

export default GuestHome;