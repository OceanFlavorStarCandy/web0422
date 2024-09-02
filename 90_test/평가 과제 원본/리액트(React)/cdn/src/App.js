function App() {
    return (
        <ul className="container">
            {games.map((item, idx) => (
                <Game
                    key={idx}
                    cimg={item.gimg}
                    ctit={item.gtit}
                    cdate={item.gdate}
                    cpri={item.gpri}
                    ctag={item.gtag}
                    cage={item.gage}
                    caget={item.gaget}
                />
            ))}
        </ul>
    );
}
