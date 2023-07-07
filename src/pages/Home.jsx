import { Link } from "react-router-dom";
import Photo from "../assets/miheejeong.png";

const Home = () => {

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet conseteteur",
    desc: "Lorem ipsum dolor sit amet conseteteur",
    img: {Photo},
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet conseteteur",
    desc: "Lorem ipsum dolor sit amet conseteteur",
    img: "https://www.pexels.com/photo/arch-formation-17390197/",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet conseteteur",
    desc: "Lorem ipsum dolor sit amet conseteteur",
    img: "https://www.pexels.com/photo/arch-formation-17390197/",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet conseteteur",
    desc: "Lorem ipsum dolor sit amet conseteteur",
    img: "https://www.pexels.com/photo/arch-formation-17390197/",
  },
];


  return (
    <div className="home">
    <div className="posts">
    {posts.map((post) => (
        <div className="post" key={post.id}>
            <div className="img">
                <img src={Photo} alt="" />
            </div>
            <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                    <p>{post.desc}</p>
                    <button>Read More</button>
                </Link>
            </div>
        </div>

    ))    
    }
    </div>
    </div>
  )
}

export default Home;