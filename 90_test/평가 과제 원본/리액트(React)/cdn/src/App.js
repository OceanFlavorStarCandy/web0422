function App() {
    return (
        <ul className="container">
            {Game.map((item, i) => (
                <Game
                    key={i}
                    gimg={item.gimg}
                    gtit={item.gtit}
                    gdate={item.gdate}
                    gpri={item.gpri}
                    gtag={item.gtag}
                    gage={item.gage}
                    gaget={item.gaget}
                />
            ))}
        </ul>
    );
}