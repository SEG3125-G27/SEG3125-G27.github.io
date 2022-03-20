import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';



const Create = () => {



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
      alert("New item added!");
    }

    return (

        <div className="create">
            <h2>Add a New Item</h2>

            <form  >

                <label> Item title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label> Item details: </label>
               <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
               ></textarea>

               <label> Item author: </label>
               <select
                    value = { author }
                    onChange={(e) => setAuthor(e.target.value)}
               >
                   <option value="Samy">Samy</option>
                   <option value="Kishan">Kishan</option>
                   <option value="Rida">Rida</option>
                   <option value="Kori">Kori</option>
               </select>


               <button className="btn" onClick={wrapperFunction}>Add</button>
               <Link to="/" className="btn">Cancel</Link>
                <br />
               {/* { !isPending && <button>Add Blog</button> } <br /> this is ugly and seems unnecessary */}
               {/* { isPending && <button disabled>Adding blog...</button> } <br /> this is ugly and seems unnecessary */}

                <p> {title} </p> <br />
                <p> {body} </p> <br />
                <p> { author } </p>
            </form>

        </div>

    );
}

export default Create;
