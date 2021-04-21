import React from 'react'

const SubmitContext = React.createContext()

export const SubmitProvider = SubmitContext.Provider
export const SubmitConsumer = SubmitContext.Consumer

export default SubmitContext