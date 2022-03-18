import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}

        </div>
    );
}

export default Home;

{/* <h2>Homepage</h2>
<p>{name} is {age} years old</p>
<button onClick={handleClick}>Click me</button> */}

// const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);
//     const handleClick = () => {
//         setName('Luigi');
//         setAge(30);
//     }
//     const handleClickAgain = (name) => {
//         console.log('hello ' + name);
//     }

{/* <button onClick={ () => handleClickAgain('mario') } >Click me again</button> */ }