import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faCat } from "@fortawesome/free-solid-svg-icons/faCat";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons/faFileAudio";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons/faHandPeace";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

export const initializeIconList = () => {
  const iconList = [
    faInfoCircle,
    faFileAudio,
    faHandPeace,
    faDog,
    faCat,
    faSpinner,
    faHeart,
    faCheck,
    faChevronDown,
    faCalendarAlt,
    faTimes,
    faTrash,
    faClock,
  ] as const;

  // Set up icon libraries
  // @ts-ignore
  library.add(...iconList);
};
