import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default Detail;
