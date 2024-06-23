import React, { useState } from 'react';

function Reservation() {
  const [trainNumber, setTrainNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Reservation made for Train Number: ${trainNumber}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Make a Reservation</h1>
      <label>
        Train Number:
        <input
          type="text"
          value={trainNumber}
          onChange={e => setTrainNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Reservation;
