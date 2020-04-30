import React, {useState, useContext} from "react";
import {AlertContext} from "../Context/alert/alertContext";
import {FirebaseContext} from "../Context/Firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then( () => {
                alert.show('Note was created', 'success')
            }).catch( () => {
                alert.show('Oops! Something went wrong', 'danger')
            })

            setValue('')
        } else {
            alert.show('Enter a note name')
        }


    }

    return (
        <form onSubmit={submitHandler}>
            <div className={"form-group"}>
                <input type="text"
                       className={"form-control"}
                       placeholder={"Enter name note"}
                       value={value}
                       onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}