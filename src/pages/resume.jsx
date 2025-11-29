import resumeImg from "../assets/resumeNoAddress.png";

export default function Resume() {
  return (
    <div className="resumePage">

      <img 
        src={resumeImg} 
        alt="My resume" 
        style={{
            
          display: "block",
          margin: "0 auto",
          width: "60%",
          height: "auto",

        }} />

    </div>
  );
}
