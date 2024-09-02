function Game(props){
    return (
        <li className="game_list">
            <div>
                <div className="game_img">
                    <img src={props.cimg} alt={props.ctit} />
                </div>
                <div className="boxShadow"></div>
            </div>
            <div>
                <div className="text">
                    <a href="#" className="game_title">{props.ctit}</a>
                    <span className="game_date">{props.cdate}</span>
                    <p className="game_prise">{props.cpri}<span> 원</span></p>
                    <span>Nintendo Switch</span>
                    <a href="#" className="game_tag">{props.ctag}</a>
                </div>
                <div className="game_age">
                    <img src={props.cage} alt={props.caget} />
                </div>
            </div>
        </li>
    );
}