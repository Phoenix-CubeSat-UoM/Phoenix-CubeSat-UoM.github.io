import { FaBatteryFull, FaSatellite, FaMicrochip, FaCube, FaCompass, FaTemperatureHigh } from "react-icons/fa";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaBatteryFull />,
    title: "Attitude Determination and Control SubSystem",
    des: "Controls HAB altitude, measures outside parameters from sensors and record them for the mission success.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Altitude-Determination-and-Control-Subsystem",
  },
  {
    id: 2,
    icon: <FaSatellite />,
    title: "Communication SubSystem",
    des: "Enables data transmission and tracking using onboard GPS, Radiosonde, and RF transmitters",
    link: "https://github.com/Phoenix-CubeSat-UoM/Communication-Subsystem",
  },
  {
    id: 3,
    icon: <FaMicrochip />,
    title: "Onboard Computing SubSystem",
    des: "Acts as the payload’s central brain, handling sensor data, power management, real-time processing, and autonomous communication for reliable mission control.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Onboard-Computing-Subsystem",
  },
  {
    id: 4,
    icon: <FaCube />,
    title: "Structural, Payload and Thermal SubSystem",
    des: "Ensures CubeSat survival by combining structural support, thermal control, and secure payload housing using advanced materials and both passive and active systems.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Structural-Payload-and-Thermal-Subsystem",
  },
  {
    id: 5,
    icon: <FaCompass />,
    title: "Power SubSystem",
    des: "Provides power to all systems using high density, low-temperature batteries optionally solar recharged for reliable operation down to -60°C.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Power-SubSystem",
  },
  {
    id: 6,
    icon: <FaTemperatureHigh />,
    title: "Finance and Management Division",
    des: "Project workflow and Financial Management Division, ensuring efficient resource allocation and project execution.",
    link: "https://ent.uom.lk/spark/",
  },
];
