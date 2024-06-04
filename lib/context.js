import React, { createContext, useContext, useState} from 'react'



const Context = createContext()

export const StateContext = ({children}) => {
    // Add our state
    const [items,setItems] = useState([]) // same as productCart
    const [showCart,setShowCart] = useState(false)
    const [walletAddress,setWalletAddress] = useState("")
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPriceETH, setTotalPriceETH] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [itemsPrints,setItemsPrints] = useState([]) // same as productCart
    // daily vote tracking
    const [hasVoted,setHasVoted] = useState(false) // was 0 when working
    const [hasNoBreeze,setHasNoBreeze] = useState(false)
    // api call for votes
    const [hasEarlyAccess,setHasEarlyAccess] = useState(false)

    const [titlePage,setTitlePage] = useState("Seiya Portfolio Website")
 
    const [totalPricePreDiscount,setTotalPricePreDiscount]=useState(0)
    const [totalPriceETHPreDiscount,setTotalPriceETHPreDiscount]=useState(0)
    const [discountCodeApplied,setDiscountCodeApplied] = useState("")

    const [totalPriceConfirmation,setTotalPriceConfirmation] = useState(0)
    const [totalPriceETHConfirmation,setTotalPriceETHConfirmation] = useState(0)
    const [mintCurrency,setMintCurrency]=useState("USDC")
    // 0x51f672eB4160Dd9645a3cfc369b6fAF237493FFA
    //const [walletUser,setWalletUser] = useState(user.get("ethAddress"))
    //const [userID,setUserID] = useState(user.id)


    //const [idInt, setIdInt] = useState(parseInt(id,16))

    // get usdc wallet balance




    return(
        <Context.Provider value={{showCart,setShowCart, items, setItems, totalPrice,setTotalPrice,totalQty, setTotalQty,itemsPrints,setItemsPrints,totalPriceETH,setTotalPriceETH,hasVoted,setHasVoted,titlePage,setTitlePage,hasNoBreeze,setHasNoBreeze,hasEarlyAccess,setHasEarlyAccess,totalPricePreDiscount,setTotalPricePreDiscount,totalPriceETHPreDiscount,setTotalPriceETHPreDiscount,discountCodeApplied,setDiscountCodeApplied,totalPriceConfirmation,setTotalPriceConfirmation,totalPriceETHConfirmation,setTotalPriceETHConfirmation,mintCurrency,setMintCurrency}}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);