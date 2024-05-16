// import { useState, useEffect } from "react";

// export default function Component() {
//   const [city, setCity] = useState("");
//   const [values, setValue] = useState(null);
//   const [wind_speed, setWind] = useState("0 mph");
//   const [error, setError] = useState(null);

//   const API_KEY = "f304110dc52dd3a9e9e4b266ec9c3a79"; // Replace with your actual API key
//   const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

//   const fetchWeather = async () => {
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) {
//         throw new error("City not found");
//       }
//       const data = await response.json();

//       setValue(data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };
//   useEffect(() => {
//     if (values) {
//       setWind(`${values.wind.speed} mph`);
//     }
//   }, [values]); // Run this effect whenever the `values` state changes

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       fetchWeather();
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-blue-700">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//         <div className="flex items-center justify-between mb-4">
//           <h1 className="text-2xl font-bold text-transform: uppercase">
//             {city} city
//           </h1>
//           {values && (
//             <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
//               {values.sys.country}
//             </div>
//           )}
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img
//               alt="Weather Icon"
//               className="w-16 h-16 mr-4"
//               src="src/assets/cloud.svg"
//             />
//             <div>
//               <div className="text-4xl font-bold">
//                 {" "}
//                 {/* (32°F − 32) × 5/9 */}
//                 {values && values.main.temp + "°F"}
//               </div>
//               <div className="text-gray-500">Sunny</div>
//             </div>
//           </div>
//           <div className="text-gray-500">
//             <div className="flex items-center">
//               <WindIcon className="w-5 h-5 mr-2" />
//               {wind_speed && <span>{wind_speed}</span>}
//             </div>
//             <div className="flex items-center">
//               <CompassIcon className="w-5 h-5 mr-2" />
//               <span>NW</span>
//             </div>
//           </div>
//         </div>
//         <div className="mt-6">
//           <input
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your location"
//             type="text"
//             onChange={(event) => setCity(event.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//         </div>
//         {error && <p>error in name</p>}
//       </div>
//     </div>
//   );
// }

// function CompassIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
//     </svg>
//   );
// }

// function WindIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
//       <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
//       <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
//     </svg>
//   );
// }

import { useState, useEffect } from "react";

export default function Component() {
  const [city, setCity] = useState("");
  const [values, setValue] = useState(null);
  const [wind_speed, setWind] = useState("0 mph");
  const [error, setError] = useState(null);

  const API_KEY = "f304110dc52dd3a9e9e4b266ec9c3a79"; // Replace with your actual API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

  const fetchWeather = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();

      setValue(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    if (values) {
      setWind(`${values.wind.speed} mph`);
    }
  }, [values]); // Run this effect whenever the `values` state changes

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchWeather();
    }
  };

  const handleSubmit = () => {
    fetchWeather();
  };

  const convertFahrenheitToCelsius = (tempF) => {
    return ((tempF - 32) * 5) / 9;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-blue-700">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-transform: uppercase">
            {city} city
          </h1>
          {values && (
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {values.sys.country}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="Weather Icon"
              className="w-16 h-16 mr-4"
              src="cloud.svg"
            />
            <div>
              <div className="text-4xl font-bold">
                {values &&
                  `${convertFahrenheitToCelsius(values.main.temp).toFixed(
                    1
                  )}°C`}
              </div>
              <div className="text-gray-500">
                {values ? values.weather[0].main : "wait.."}
              </div>
            </div>
          </div>
          <div className="text-gray-500">
            <div className="flex items-center">
              <WindIcon className="w-5 h-5 mr-2" />
              {wind_speed && <span>{wind_speed}</span>}
            </div>
            <div className="flex items-center">
              <CompassIcon className="w-5 h-5 mr-2" />
              <span>NW</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your location"
            type="text"
            onChange={(event) => setCity(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
