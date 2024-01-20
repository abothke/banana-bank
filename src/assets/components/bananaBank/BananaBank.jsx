import { useState } from "react"
import './bananabank.css'
import logo from '../../img/logo.png'
import card from '../../img/bbcard.png'

const BananaBank = () => {
    const [accountData, setAccountData] = useState({
        entryValue: '',
        accountBalance: 0
    })


    const depositOrWithdraw = (option) => {
        let inputValue = document.querySelector("#balance").value
        if(option === "withdraw"){
            setAccountData({
                ...accountData,
                entryValue: inputValue,
                accountBalance: accountData.accountBalance - Number(inputValue)
            })
        } else {
            setAccountData({
                ...accountData,
                entryValue: inputValue,
                accountBalance: accountData.accountBalance + Number(inputValue)
            })
        }
    }
    return ( 
        <>
        <img src={logo} alt="" />
        <form>
            <div id="bankAccount">
                <p>Willkommen, Herr Banane!</p>
                <div id="accountPositions">
                <h3>Girokonto</h3>
                <h3>Kontostand</h3>
                </div>
                <div id="accountDetails">
                    <div id="accountInfo">
                    <img src={card} alt="" />
                    <p>IBAN DE 1234 1234 1234 00</p>
                    </div>
                        <div id="showBalance">
                        <h2 id="accountBalance">{accountData.accountBalance} EUR</h2>
                        </div>
                </div>
            </div>
            <input
            type="number"
            name="balance"
            id="balance"
            placeholder="Wieviel EUR möchten Sie ein oder auszahlen?" />
            <div id="buttons">
            <button onClick={(e) => {
                e.preventDefault();
                depositOrWithdraw("deposit")
                }}>Einzahlen</button>
            <button onClick={(e) => {
                e.preventDefault();
                depositOrWithdraw("withdraw")
                }}>Auszahlen</button>
                </div>
        </form>
        </>
     );
}
 
export default BananaBank;