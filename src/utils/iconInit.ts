import { library } from '@fortawesome/fontawesome-svg-core';
import * as fas from '@fortawesome/free-solid-svg-icons';

export const initializeIconList = () => {
  const iconList = [fas.faHandPeace, fas.faDog, fas.faCat, fas.faSpinner];

  // Set up icon libraries
  library.add(...iconList);
};
