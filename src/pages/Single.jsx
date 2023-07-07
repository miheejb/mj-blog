import Cactus from "../assets/cactus.png"
import Mihee from "../assets/miheejeong.png"
import Edit from "../assets/edit.jpeg";
import Delete from "../assets/delete.png"
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={Cactus} alt="" />
        <div className="user">
          <img src={Mihee} alt="" />
          <div className="info">
            <span>Mihee</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="update">
            <Link to={`/write?edit=2`}>
              <img className="edit" src={Edit} alt="" />
            </Link>
            
            <img className="delete" src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, architecto?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fuga culpa nam, molestiae explicabo ipsam magni maxime quia, minima vel nemo recusandae eos officia minus mollitia voluptas omnis nulla! Aut non cumque ipsa, placeat, perferendis consequatur sit doloribus<b></b> explicabo assumenda unde excepturi. Eius, porro non deleniti doloribus fugiat earum aliquam sequi, quibusdam suscipit, doloremque ex corporis aspernatur placeat maxime praesentium totam fuga velit incidunt. Beatae, sed sapiente amet reprehenderit tempora aspernatur a saepe itaque, corrupti placeat molestias quae quibusdam. Maiores quae recusandae expedita corrupti odit sequi magni dolorem. Sunt eos esse nostrum, quaerat ipsum temporibus veritatis fugiat cum aperiam nobis.</p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
}

export default Single