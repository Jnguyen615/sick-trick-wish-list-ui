import React, { useState } from 'react';

const Form = ({ submitNewTrick }) => {
  const initialFormData = {
    id: Date.now(),
    stance: 'Select Stance',
    tutorial: '',
  }
  
  const [formData, setFormData] = useState(initialFormData);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    submitNewTrick(formData)
    setFormData(initialFormData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <select
        name="stance"
        value={formData.stance}
        onChange={handleInputChange}
      >
        <option value="Select Stance" disabled>
          Select Stance
        </option>
        <option value="Regular">Regular</option>
        <option value="Switch">Goofy</option>
      </select>
      <input
        type="text"
        name='tutorial'
        placeholder='tutorial'
        value={formData.tutorial}
        onChange={handleInputChange}
      />
      <select
        name="obstacle"
        value={formData.obstacle}
        onChange={handleInputChange}
      >
        <option value="Select Obstacle" disabled>
          Select Obstacle
        </option>
        <option value="Flatground">Flatground</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Ledge">Ledge</option>
        <option value="Pool">Pool</option>

      </select>
      <input
        type="text"
        name="tutorial"
        placeholder="Tutorial"
        value={formData.tutorial}
        onChange={handleInputChange}
      />

      <button type="submit">SEND IT</button>
    </form>
  );
};

export default Form;
