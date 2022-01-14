import { library } from "@fortawesome/fontawesome-svg-core";
import { faCat } from "@fortawesome/free-solid-svg-icons/faCat";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons/faHandPeace";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";

export const initializeIconList = () => {
  const iconList = [faHandPeace, faDog, faCat, faSpinner, faHeart];

  // Set up icon libraries
  library.add(...iconList);
};
