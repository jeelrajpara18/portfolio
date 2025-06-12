import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full bg-gradient-to-b from-storm via-slate-900 to-indigo"       
    style={{
        backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
        backgroundSize: "20px 20px",
      }} id="work">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;