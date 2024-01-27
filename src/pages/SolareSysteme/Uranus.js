import React, { useState, useEffect } from 'react';
import GetPrompt from './GetPrompt'; // Update the path as needed

function Earth() {
  const [earthData, setEarthData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the GetPrompt function instead of the fetch function
        const response = await GetPrompt("give me information about Earth");

        // Update the state with the fetched data
        setEarthData(response.data.choices[0].message.content);
      } catch (error) {
        console.error("Error making the request:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className='border-2 border-dark rounded5'>
      <h1 className='text-black'>Name: Uranus</h1>
      <p className='text-dark'>Uranus, the seventh planet from the Sun in our solar system, stands out with its unique characteristics. It is a gas giant, predominantly composed of hydrogen and helium, akin to its planetary counterparts. One of Uranus' distinctive features is its extreme axial tilt, rotating almost perpendicular to its orbital plane. This tilt, approximately 98 degrees, gives the planet an appearance of rolling on its side.

The atmosphere of Uranus is primarily composed of hydrogen and helium, with the presence of methane imparting a distinct bluish-green hue. Unlike the well-known rings of Saturn, Uranus boasts a system of 13 rings, discovered relatively recently. These rings, composed of particles ranging in size, contribute to the planet's celestial allure.

Uranus hosts at least 27 known moons, with Miranda, Ariel, Umbriel, Titania, and Oberon among the largest. Miranda, in particular, exhibits a diverse and intriguing surface, suggesting past geological activity.

With an average distance of about 2.87 billion kilometers from the Sun, Uranus takes approximately 84 Earth years to complete one orbit. It was first observed by Sir William Herschel in 1781, marking a significant milestone in the exploration of the solar system.

Despite being a gas giant, Uranus remains less explored compared to its counterparts. The limited data obtained from missions like Voyager 2 underscore the need for further exploration to unravel the mysteries surrounding this distant ice giant. Uranus holds a unique place in our understanding of the solar system, offering a captivating glimpse into the complexities of celestial bodies beyond the more familiar planets.</p>
    </div>
  );
}

export default Earth;
