import {
  FaSatelliteDish,
  FaBroadcastTower,
  FaMicrochip,
  FaCogs,
  FaBolt,
  FaChartLine,
} from "react-icons/fa";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaSatelliteDish />, // Attitude Control – orientation-focused icon
    title: "Attitude Determination and Control Subsystem",
    des: "Controls HAB altitude, measures outside parameters from sensors and record them for the mission success.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Altitude-Determination-and-Control-Subsystem",
  },
  {
    id: 2,
    icon: <FaBroadcastTower />, // Communication – radio/signal-focused
    title: "Communication Subsystem",
    des: "Enables data transmission and tracking using onboard GPS, Radiosonde, and RF transmitters",
    link: "https://github.com/Phoenix-CubeSat-UoM/Communication-Subsystem",
  },
  {
    id: 3,
    icon: <FaMicrochip />, // Computing – already suitable
    title: "Onboard Computing Subsystem",
    des: "Acts as the payload’s central brain, handling sensor data, power management, real-time processing, and autonomous communication for reliable mission control.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Onboard-Computing-Subsystem",
  },
  {
    id: 4,
    icon: <FaCogs />, // Mechanical/structural systems
    title: "Structural, Payload and Thermal Subsystem",
    des: "Ensures CubeSat survival by combining structural support, thermal control, and secure payload housing using advanced materials and both passive and active systems.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Structural-Payload-and-Thermal-Subsystem",
  },
  {
    id: 5,
    icon: <FaBolt />, // Power – lightning bolt for energy
    title: "Power Subsystem",
    des: "Provides power to all systems using high density, low-temperature batteries optionally solar recharged for reliable operation down to -60°C.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Power-SubSystem",
  },
  {
    id: 6,
    icon: <FaChartLine />, // Management/analytics
    title: "Finance and Management Division",
    des: "Project workflow and Financial Management Division, ensuring efficient resource allocation and project execution.",
    link: "https://ent.uom.lk/spark/",
  },
];
