import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameDetails = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()

    }, [])

    return (
        <article className="games">


            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} </div>
                        <div className="game__designer">Designed by: {game.designer} </div>
                        <div className="game__year">Year relased: {game.release_year} </div>
                        <div className="game__time">Estimated time to play: {game.time} </div>
                        <div className="game__age">Recommended age: {game.age} </div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        
                    </section>
                })
            }
        </article>
    )
}