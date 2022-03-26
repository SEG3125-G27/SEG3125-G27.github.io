import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Create = () => {

    const { t } = useTranslation();

    const alert = useAlert();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Samy');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // const handleCancel=()=>{};
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1) // this will take the user back to the page he was in before clicking on submit button
            history.push('/');

        })

    }
    //this function will be called when the user clicked on add/
    //it displays a popup message and adds the item to json Database

    const wrapperFunction = (e) => {
      handleSubmit(e);
      alert.success("New item added!");
    }

    return (

        <div className="create">
            <h2>{t("add")}</h2>

            <form  >

                <label> {t("item_title")} </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label> {t("item_details")} </label>
               <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
               ></textarea>

               <label> {t("item_author")} </label>
               <select
                    value = { author }
                    onChange={(e) => setAuthor(e.target.value)}
               >
                   <option value="Samy">Samy</option>
                   <option value="Kishan">Kishan</option>
                   <option value="Rida">Rida</option>
                   <option value="Kori">Kori</option>
               </select>


               <button className="btn" onClick={wrapperFunction}>{t("add_item")} <b style={{color: 'white'}} className='links'>+</b> </button>
               <Link to="/" className="btn">{t("cancel_item")} <b style={{color: 'white'}} className='links'>X</b> </Link>
                <br />
                <br />
               {/* { !isPending && <button>Add Blog</button> } <br /> this is ugly and seems unnecessary */}
               {/* { isPending && <button disabled>Adding blog...</button> } <br /> this is ugly and seems unnecessary */}

            </form>

        </div>

    );
}

export default Create;
