import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { CategoryContext } from "../category/CategoryProvider.js"

export const GameForm = props => {
    const { createGame } = useContext(GameContext)
    const { categories, getCategories} = useContext(CategoryContext)

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        title: "",
        description: "",
        designer: "",
        releaseYear: "",
        numberOfPlayers: 0,
        time: "",
        age: "",
        player_id: 0
    })

    /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    */
    useEffect(() => {
        getCategories()
    }, [])

    /*
        Update the `currentGame` state variable every time
        the state of one of the input fields changes.
    */
    const handleControlledInputChange = (event) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[event.target.name] = event.target.value
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="releaseYear">Release Year: </label>
                    <input type="text" name="releaseYear" required autoFocus className="form-control"
                        value={currentGame.releaseYear}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players: </label>
                    <input type="text" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Estimated time to play: </label>
                    <input type="text" name="time" required autoFocus className="form-control"
                        value={currentGame.time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="age">Recommended age: </label>
                    <input type="text" name="age" required autoFocus className="form-control"
                        value={currentGame.age}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryId">Category: </label>
                    <select name="categoryId" className="form-control"
                        value={currentGame.categoryId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a category...</option>
                        {
                            categories.map(category => (
                                <option value={category.id} key={category.id}>{category.label}</option>
                            ))
                        }
                    </select>
                </div>
           </fieldset>
         


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        title: currentGame.title,
                        description: currentGame.description,
                        designer: currentGame.designer,
                        releaseYear: currentGame.releaseYear,
                        numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                        time: currentGame.time,
                        age: currentGame.age,
                        player_id: parseInt(localStorage.getItem("rg_token"))
                    }

                    // Send POST request to your API
                    createGame(game)
                    props.history.push({pathname: "/games"})
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}