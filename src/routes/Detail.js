import { useParams } from "react-router-dom";
function Detail() {
  const para = useParams();

  return (
    <div>
      <h1>{para.id}</h1>
    </div>
  );
}
export default Detail;
