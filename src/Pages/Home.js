import React, {Fragment, useContext, useEffect} from "react";
import {Form} from "../Components/Form";
import {Notes} from "../Components/Notes";
import {FirebaseContext} from "../Context/Firebase/firebaseContext";
import {Loader} from "../Components/Loader";

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect( () => {
        fetchNotes()
        // eslint-disable-next-line
    },[])
    return (
        <Fragment>
            <Form/>
            <hr/>
            {loading
            ? <Loader />
            : <Notes notes={notes} onRemove={removeNote}/>
            }
        </Fragment>
    )
}