import { FaBatteryFull, FaSatellite, FaMicrochip, FaCube, FaCompass, FaTemperatureHigh } from "react-icons/fa";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaBatteryFull />,
    title: "Power SubSystem",
    des: "Provides power to all systems using high density, low-temperature batteries optionally solar recharged for reliable operation down to -60°C.",
    link: "https://github.com/Phoenix-CubeSat-UoM/Power-SubSystem",
  },
  {
    id: 2,
    icon: <FaSatellite />,
    title: "Communication SubSystem",
    des: "Enables data transmission and tracking using onboard GPS, Radiosonde, and RF transmitters, with ground-based SDR receivers decoding signals from devices like SPOT Tracer and iMet-4.",
  },
  {
    id: 3,
    icon: <FaMicrochip />,
    title: "Onboard Computing SubSystem",
    des: "Acts as the payload’s central brain, handling sensor data, power management, real-time processing, and autonomous communication for reliable mission control.",
  },
  {
    id: 4,
    icon: <FaCube />,
    title: "Structural, Payload and Thermal SubSystem",
    des: "Ensures CubeSat survival by combining structural support, thermal control, and secure payload housing using advanced materials and both passive and active systems.",
  },
  {
    id: 5,
    icon: <FaCompass />,
    title: "Attitude Determination and Control SubSystem",
    des: "Controls satellite orientation using sensors and actuators to maintain alignment, pointing accuracy, and mission success.",
  },
  {
    id: 6,
    icon: <FaTemperatureHigh />,
    title: "Thermal Management Subsystem",
    des: "Thermal Management controls satellite temperature for safe operation in space.",
  },
];
