import { useState } from "react";
import { initialTravelPlan } from "./assets/places";
import "./App.css";

function PlaceTree({ id, parentId, placesId, onComplete }) {
  const place = placesId[id];
  const childIds = place.childIds;

  return (
    <>
      <li>
        {place.title}
        <button onClick={() => onComplete(parentId, id)}>Complete</button>
      </li>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesId={placesId}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({ ...plan, [parentId]: nextParent });
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((planetId) => (
          <PlaceTree
            key={planetId}
            id={planetId}
            parentId={0}
            placesId={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

export default function App() {
  return <TravelPlan />;
}
