function App() {
    return (
        <ul className="container">
            {games.map((item, idx) => (
                <Game
                    key={idx}
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