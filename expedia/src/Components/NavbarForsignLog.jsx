import { Link } from "react-router-dom";
import "./navbarForSignLog.css";

export default function NavbarForsignLog() {
  return (
    <>
      <div className="nav-bar">
        <div className="button-class">
          <Link to={`/home`}>
            <button>←</button>
          </Link>
        </div>

        <div className="image-class">
          <img
            src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
            alt="fkk"
          />
        </div>
      </div>
      <hr />
    </>
  );
}
