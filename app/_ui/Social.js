import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social() {
  return (
    <div className="h-[400] w-[400] border border-dashed rounded-full relative">
       <a><FontAwesomeIcon icon={faFacebook} /></a>
    </div>
  )
}
