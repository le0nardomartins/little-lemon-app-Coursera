import './home.css';

import About from './About';
import Hero from './Hero';
import Highlights from './Highlights';

function Main() {
    return (
        <main className="App">
            <article>
                <Hero />
                <Highlights />
                <About />
            </article>
        </main>
    );
}

export default Main;
