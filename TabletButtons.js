import React, { useState } from 'react';

const activities = [
  {
    id: 1,
    title: 'Activity 1',
    description: 'This is the description of Activity 1.'
  },
  {
    id: 2,
    title: 'Activity 2',
    description: 'This is the description of Activity 2.'
  },
  {
    id: 3,
    title: 'Activity 3',
    description: 'This is the description of Activity 3.'
  }
];


const TabletButtons = () => {
  const [selectedActivity, setSelectedActivity] = useState("null");

  const handleClick = (id) => {
    const selected = activities.find(activity => activity.id === id);
    setSelectedActivity(selected);
  }

  return (
    <div>
        
      <div className="tablet-buttons">
        {activities.map(activity => (
          <button key={activity.id} onClick={() => handleClick(activity.id)}>{activity.title}</button>
        ))}
      </div>

      {selectedActivity && (
        <div className="activity-details">
          <h2>{selectedActivity.title}</h2>
          <p>{selectedActivity.description}</p>
        </div>
      )}
    </div>
  );
};

export default TabletButtons;
