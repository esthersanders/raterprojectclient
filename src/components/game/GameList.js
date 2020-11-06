import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()

    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    props.history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>

            {
                games.map(game => {
                    return <Link key={`game--${game.id}`} className="game" to={`/games/${game.id}`}>{game.title}</Link>
                       
                })
            }
        </article>
    )
}
