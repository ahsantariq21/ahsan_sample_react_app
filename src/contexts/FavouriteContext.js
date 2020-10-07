
// convert component, talk with salman

import React from 'react'

const FavouritesContext = React.createContext({favList : []})

export const FavouriteProvider = FavouritesContext.Provider
export const FavouriteConsumer = FavouritesContext.Consumer

export default FavouritesContext