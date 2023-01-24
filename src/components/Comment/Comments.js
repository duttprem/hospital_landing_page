import React from "react";
import CommentCard from "../../UI/CommentCard/CommentCard";
import patient1 from "../../assets/patient1.svg";
import patient2 from "../../assets/patient2.svg";
import CommentIcon from "../../assets/CommentIcon.svg";
import "./Comments.css";
const data = [
  {
    id:1,
    icon: CommentIcon,
 
    img: patient1,
    patientName: "Jacqueline Asong",
    type: "Patient",
  },
  {
    id:2,
    icon: CommentIcon,
   
    img: patient2,
    patientName: "Patrícia Ribeiro",
    type: "Patient",
  },
];
const Comments = () => {
  return (
    <div className="commentContainer">
      <div className="Wrapper">
        <div className="heading">
          <h1>What Our Customers Say</h1>
        </div>
        <div className="cardComment">
          {data.map((item)=><CommentCard key={item.id} icon={item.icon}  img={item.img} name={item.patientName} type={item.type} />)}
        </div>
      </div>
    </div>
  );
};

export default Comments;
