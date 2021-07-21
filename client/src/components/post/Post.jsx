import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
      <div className="postInfo">
        <div className="postCat">
          <span className="postCat">Food</span>
          <span className="postCat">Fitness</span>
        </div>
        <span className="postTitle">Some Random Title</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque itaque, velit voluptatum facere eligendi inventore id quidem sapiente consequuntur eveniet possimus praesentium officiis libero placeat atque odit quia dicta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam unde maiores aliquam numquam sunt ut sint ex sit magni error, eligendi aperiam expedita magnam mollitia laborum ratione delectus maxime perspiciatis.
      </p>
    </div>
  )
}
