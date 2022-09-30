import React, { useState } from "react";

const data = [
  {
    title: "para1",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos similique delectus repudiandae?",
  },
  {
    title: "para2",
    paragraph:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.",
  },
];

const Panel = ({ ownIndex, isActiveIndex, handleExpand, data }) => {
  return (
    <div>
      <h2>title:{data.title}</h2>
      {isActiveIndex === ownIndex ? (
        <p>{data.paragraph}</p>
      ) : (
        <button onClick={() => handleExpand(ownIndex)}>expand</button>
      )}
    </div>
  );
};

const LSU = () => {
  const [isActiveIndex, setIsActiveIndex] = useState(0);
  const handleExpand = (index) => {
    setIsActiveIndex(index);
  };
  return (
    <>
      {data.map((post, index) => (
        <Panel
          key={post.title}
          ownIndex={index}
          isActiveIndex={isActiveIndex}
          handleExpand={handleExpand}
          data={post}
        />
      ))}
    </>
  );
};

export default LSU;
