import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
export default function PrivveRouter(props) {
  // const auth = useSelector((state) => state.auth);
  let navigate = useNavigate();
  const auth = {
    login: true,
  };
  if (auth.login) {
    return <Route {...props} />;
  }
  return navigate("/auth");
}
