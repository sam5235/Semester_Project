import { useState } from "react";

const TimeSlotSelector = () => {
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);

  const handleTimeSlotChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedTimeSlots([...selectedTimeSlots, value]);
    } else {
      setSelectedTimeSlots(selectedTimeSlots.filter((slot) => slot !== value));
    }
  };

  return (
    <div>
      <label>Select time slot(s):</label>
      <div>
        <input
          type="checkbox"
          id="time1"
          value="8:00 AM - 10:00 AM"
          checked={selectedTimeSlots.includes("8:00 AM - 10:00 AM")}
          onChange={handleTimeSlotChange}
        />
        <label htmlFor="time1">8:00 AM - 10:00 AM</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="time2"
          value="10:00 AM - 12:00 PM"
          checked={selectedTimeSlots.includes("10:00 AM - 12:00 PM")}
          onChange={handleTimeSlotChange}
        />
        <label htmlFor="time2">10:00 AM - 12:00 PM</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="time3"
          value="12:00 PM - 02:00 PM"
          checked={selectedTimeSlots.includes("12:00 PM - 02:00 PM")}
          onChange={handleTimeSlotChange}
        />
        <label htmlFor="time3">12:00 PM - 02:00 PM</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="time3"
          value="02:00 PM - 04:00 PM"
          checked={selectedTimeSlots.includes("02:00 PM - 04:00 PM")}
          onChange={handleTimeSlotChange}
        />
        <label htmlFor="time3">02:00 PM - 04:00 PM</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="time3"
          value="04:00 AM - 06:00 PM"
          checked={selectedTimeSlots.includes("04:00 AM - 06:00 PM")}
          onChange={handleTimeSlotChange}
        />
        <label htmlFor="time3">04:00 AM - 06:00 PM</label>
      </div>
    </div>
  );
};

export default TimeSlotSelector;
