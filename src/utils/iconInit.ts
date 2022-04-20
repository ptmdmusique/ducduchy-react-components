import { library } from "@fortawesome/fontawesome-svg-core";
import { faCat } from "@fortawesome/free-solid-svg-icons/faCat";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons/faHandPeace";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

export const initializeIconList = () => {
  const iconList = [
    faInfoCircle,
    faHandPeace,
    faDog,
    faCat,
    faSpinner,
    faHeart,
    faCheck,
    faChevronDown,
    faCalendarAlt,
    faTimes,
  ] as const;

  // Set up icon libraries
  // @ts-ignore
  library.add(...iconList);
};
