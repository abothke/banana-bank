import { useState } from "react"
import './bananabank.css'
import logo from '../../img/logo.png'
import card from '../../img/bbcard.png'

const BananaBank = () => {
    const [accountData, setAccountData] = useState({ // Usestate wird hier verwendet um den Kontostand zu speichern und zu aktualisieren
        entryValue: '', // entryValue wird hier verwendet um den Wert des Eingabefeldes zu speichern
        accountBalance: 0 // accountBalance wird hier verwendet um den Kontostand zu speichern
    })


    const depositOrWithdraw = (option) => {
        let inputValue = document.querySelector("#balance").value // inputValie ist hier das Inputfeld mit der ID balance
        if(option === "withdraw"){ // Wenn der Button Auszahlen geklickt wird, wird der Kontostand um den Wert des Eingabefeldes verringert
            setAccountData({
                ...accountData, // ...accountData wird hier verwendet um die Daten des Kontos zu behalten
                entryValue: inputValue,  // entryValue wird hier mit dem Wert des Eingabefeldes aktualisiert
                accountBalance: accountData.accountBalance - Number(inputValue) // accountBalance wird hier mit dem aktuellen Kontostand minus dem Wert des Eingabefeldes aktualisiert
            })
        } else {
            setAccountData({
                ...accountData,
                entryValue: inputValue,
                accountBalance: accountData.accountBalance + Number(inputValue) // accountBalance wird hier mit dem aktuellen Kontostand plus dem Wert des Eingabefeldes aktualisiert
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
                depositOrWithdraw("deposit") // Wenn der Button Einzahlen geklickt wird, wird der Kontostand um den Wert des Eingabefeldes erhöht, weil depositOrWithdraw("deposit") aufgerufen wird
                }}>Einzahlen</button>
            <button onClick={(e) => {
                e.preventDefault();
                depositOrWithdraw("withdraw") // Wenn der Button Auszahlen geklickt wird, wird der Kontostand um den Wert des Eingabefeldes verringert, weil depositOrWithdraw("withdraw") aufgerufen wird
                }}>Auszahlen</button>
                </div>
        </form>
        </>
     );
}
 
export default BananaBank;