export default function Home () {
    return (
        <div className="wrapper">
            <div className="bio">
                <h1>👋Hey, I'm Alex!</h1>
                <br />
                <p>20 years-old programmer from 🇷🇴.</p>
                <p>
                    Currently studying Computer Science and Engineering at <a
                        href="https://www.tudelft.nl/en/"
                        className="tud-container"
                        target="_blank"
                    >
                            <img className="tud" /> Delft in 🇳🇱.
                    </a>
                </p>
                <p>Passionate about algorithms, competitive programming and game development.</p>
            </div>
            <img className="pic" />
        </div>
    );
}