import { library } from "@fortawesome/fontawesome-svg-core";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons/faAnglesLeft";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons/faAnglesRight";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faCat } from "@fortawesome/free-solid-svg-icons/faCat";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons/faFileAudio";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons/faHandPeace";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";

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

    faTriangleExclamation,
    faCircleCheck,
    faCircleInfo,

    faChevronLeft,
    faChevronRight,
    faAnglesLeft,
    faAnglesRight,
  ] as const;

  // Set up icon libraries
  library.add(...iconList);
};
