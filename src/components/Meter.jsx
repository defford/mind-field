import React, { useState } from "react";

const Meter = ({ onChange, value }) => {
    const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value
    setSliderValue(newValue)
    onChange(newValue)
  }

  return (
    <div className="importanceMeter">
      <p>Importance:</p>
      <div class="meterContainer">
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          onChange={handleChange}
          className="slider"
          id="meter"
        />
        <input
          type="number"
          value={sliderValue}
          onChange={handleChange}
          min="1"
          max="100"
        />
      </div>
    </div>
  );
};

export default Meter;
