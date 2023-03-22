import { Link } from "react-router-dom";
import { NotFoundText } from "./NotFoundStyled";

export default function NotFound() {
  return (
    <>
      <NotFoundText>
        404 Page not found, please go back to the <Link to="/">HOME PAGE</Link>{" "}
      </NotFoundText>
    </>
  );
}
