import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
    const [ categories, setCategories ] = useState([])
    const [ gameCategories, setGameCategories ] = useState([])

    const getCategories = () => {

        return fetch("http://localhost:8000/categories", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("rg_token")}`
            }
        })
            .then(response => response.json())
            .then(setCategories)
    }

    const getGameCategories = () => {
        return fetch("http://localhost:8000/gamecategories", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rg_token")}`
            }
        })
            .then(res => res.json())
            .then(setGameCategories)
    }
    

    return (
        <CategoryContext.Provider value={{ categories, setCategories, getCategories, getGameCategories, setGameCategories, gameCategories}}>
            { props.children}
        </CategoryContext.Provider>
    )
}