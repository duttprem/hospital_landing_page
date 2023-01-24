import "./indexModule.css";
import OvalIcon from '../../assets/OvalIcon.svg';
import CardProfile from "../../UI/CardProfile/CardProfile";
const data = [
  { name: "Dr. Awaatif Al", profession: "Dental Care", id: 1 },
  { name: "Dr. Filipa Gaspar", profession: "Cardiology", id: 2 },
  { name: "Dr. Sukhmeet Gorae", profession: "Neurological", id: 3 },
  { name: "Dr. Siri Jakobsson", profession: "Prediatrics", id: 4},
];
const OurTeam = () => {
  return (
    <div className="teamContainer">
      <img src={OvalIcon} alt="icon" />
      <div className="teamInfo">
        <h1>We Have The Best Specialist</h1>
        <p>
          We have a wide experience in experience design and strategy, <br />{" "}
          with locally-rooted knowledge.
        </p>
      </div>
      <div className="cardDetail">
        {data.map((item) => (
          <CardProfile
            key={item.id}
            name={item.name}
            profession={item.profession}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
