function Game(props){
    return (
        <li className="game_list">
            <div>
                <div className="game_img">
                    <img src={props.gimg} alt={gtit} />
                </div>
                <div className="boxShadow"></div>
            </div>
            <div>
                <div>
                    <a href="#" className="game_title">{props.gtit}</a>
                    <span className="game_date">{props.gdate}</span>
                    <p className="game_prise">{props.gpri}<span> 원</span></p>
                    <span>Nintendo Switch</span>
                    <a href="#" className="game_tag">{props.gtag}</a>
                </div>
                <div className="game_age">
                    <img src={props.gage} alt={props.gaget} />
                </div>
            </div>
        </li>
    );
}