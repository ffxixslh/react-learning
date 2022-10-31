import React from "react";
import instance from './request'

function AxiosReact() {
  instance({
    url: "/get",
    params: {
      name: "vv",
      age: 22,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return <div>AxiosReact</div>;
}

export default AxiosReact;
