import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./game/GameProvider"
import {GameList} from "./game/GameList"
import {GameDetails } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"
import { CategoryProvider } from "./category/CategoryProvider"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            
        <GameProvider>
            <CategoryProvider>
            <Route exact path = "/games" render = {
                props => <GameList {...props} />
            } />
            <Route exact path = "/games/:gameId(\d+)" render = {
                props => <GameDetails {...props} /> 
            } />
            <Route exact path = "/games/new" render = {
                props => <GameForm {...props} />
            } />

            </CategoryProvider>
        </GameProvider>
     
        </main>
    </>
}