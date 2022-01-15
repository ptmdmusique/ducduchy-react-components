import { library } from "@fortawesome/fontawesome-svg-core";
import { faCat } from "@fortawesome/free-solid-svg-icons/faCat";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons/faHandPeace";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

export const initializeIconList = () => {
  const iconList = [faHandPeace, faDog, faCat, faSpinner, faHeart, faCheck];

  // Set up icon libraries
  library.add(...iconList);
};
