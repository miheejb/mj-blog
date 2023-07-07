import Photo from "../assets/cherry.png"

const Menu = () => {
const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet conseteteur",
    desc: "Lorem ipsum dolor sit amet conseteteur",
    img: { Photo },
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
  <div className="menu">
    <h1> Other posrts you may like</h1>
    {posts.map((post)=>(
        <div className="post" key={post.id}>
            <img src={Photo} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button></div>
    ))};
  </div>
);
}
 
export default Menu