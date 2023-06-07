import dayjs from "dayjs";

export const STANDARD_TIME_FORMAT = "HH:mm";
export const STANDARD_DATE_FORMAT = "MM/DD/YYYY";
export const STANDARD_DATE_TIME_FORMAT = "MM/DD/YYYY HH:mm";

export const formatDate = (
  date: string | Date,
  format = STANDARD_DATE_FORMAT,
) => dayjs(date).format(format);

export const formatDateRange = (
  dateList: (string | Date)[],
  format = STANDARD_DATE_FORMAT,
) => dateList.map((date) => formatDate(date, format)).join(" - ");

// TODO: Support locale for this
export const getDatePlaceholder = () => "__/__/____";

// TODO: Support locale for this
export const getTimePlaceholder = () => "__:__";

export const getDateTimePlaceholder = () =>
  `${getDatePlaceholder()} ${getTimePlaceholder()}`;

/** Sort date array IN PLACE */
export const sortDateArray = <T>({
  myArr,
  getDateFromItem,
  type = "ascending",
  dateFormat,
}: {
  myArr: T[];
  getDateFromItem?: (item: T) => string | Date;
  type?: "ascending" | "descending";
  dateFormat?: dayjs.OptionType;
}) => {
  myArr.sort((itemA, itemB) => {
    const dayA =
      getDateFromItem?.(itemA) ?? (itemA as unknown as string | Date);
    const dayB =
      getDateFromItem?.(itemB) ?? (itemB as unknown as string | Date);

    const aDate = dayjs(dayA, dateFormat);
    const bDate = dayjs(dayB, dateFormat);
    return (type === "ascending" ? -1 : 1) * (aDate.isAfter(bDate) ? 1 : -1);
  });
};

export const possibleDurationTypeList = [
  "days",
  "hours",
  "minutes",
  "seconds",
] as const;
export type PossibleDurationType = (typeof possibleDurationTypeList)[number];

export type Duration = Record<PossibleDurationType, number>;

export type DoDisabled = {
  [key in PossibleDurationType]: boolean;
};

const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;
const MILLISECOND_PER_HOUR = 1000 * 60 * 60;
const MILLISECOND_PER_MINUTE = 1000 * 60;
const MILLISECOND_PER_SECOND = 1000;

export const DEFAULT_DURATION_LOCALE_TEXT: Record<
  PossibleDurationType,
  string
> = {
  days: ":d",
  hours: "h",
  minutes: "m",
  seconds: "s",
};

export const DEFAULT_DURATION_DISABLE: DoDisabled = {
  days: true,
  hours: false,
  minutes: false,
  seconds: true,
};

export const getMsFromDurationWithType = (
  durationType: PossibleDurationType,
  durationValue: number,
) => dayjs.duration({ [durationType]: durationValue }).asMilliseconds();

/** Get duration object from millisecond */
export const getDurationFromMs = (
  timeInMilliseconds: number,
  doDisabled?: Partial<DoDisabled>,
): Duration => {
  let timeLeft = timeInMilliseconds;
  const duration: Duration = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (!doDisabled?.days) {
    duration.days = Math.floor(timeLeft / MILLISECOND_PER_DAY);
    timeLeft -= duration.days * MILLISECOND_PER_DAY;
  }

  if (!doDisabled?.hours) {
    duration.hours = Math.floor(timeLeft / MILLISECOND_PER_HOUR);
    timeLeft -= duration.hours * MILLISECOND_PER_HOUR;
  }

  if (!doDisabled?.minutes) {
    duration.minutes = Math.floor(timeLeft / MILLISECOND_PER_MINUTE);
    timeLeft -= duration.minutes * MILLISECOND_PER_MINUTE;
  }

  if (!doDisabled?.seconds) {
    duration.seconds = Math.floor(timeLeft / MILLISECOND_PER_SECOND);
  }

  return duration;
};

export const durationToString = (
  duration: Duration,
  localeText?: {
    [key in PossibleDurationType]?: string;
  },
  options: {
    doPrepend0?: boolean;
    doDisabled?: Partial<DoDisabled>;
    separatedBySpace?: boolean;
  } = { doPrepend0: true, separatedBySpace: true },
) => {
  const { doPrepend0, doDisabled, separatedBySpace } = options;
  const getLocaleText = (type: PossibleDurationType) =>
    localeText?.[type] ?? DEFAULT_DURATION_LOCALE_TEXT[type];

  const translatedTextMap = {
    days: getLocaleText("days"),
    hours: getLocaleText("hours"),
    minutes: getLocaleText("minutes"),
    seconds: getLocaleText("seconds"),
  } as const;

  const getFinalStringOfType = (type: PossibleDurationType) => {
    const value = duration[type];
    if (doDisabled?.[type]) {
      return null;
    }

    const valueInStr = doPrepend0 ? `${value}`.padStart(2, "0") : `${value}`;
    const translatedText = translatedTextMap[type];

    return `${valueInStr}${translatedText}`;
  };

  const dayString = getFinalStringOfType("days");
  const hourString = getFinalStringOfType("hours");
  const minuteString = getFinalStringOfType("minutes");
  const secondString = getFinalStringOfType("seconds");

  const finalStr = [dayString, hourString, minuteString, secondString]
    .filter((str) => str)
    .join(separatedBySpace ? " " : "");
  return !finalStr.trim() ? `0${getLocaleText("seconds")}` : finalStr;
};

export const getDurationInMsFromString = (
  durationString: string,
  localeText: {
    [key in PossibleDurationType]?: string;
  } = DEFAULT_DURATION_LOCALE_TEXT,
  doDisabled: Partial<DoDisabled> = DEFAULT_DURATION_DISABLE,
) => {
  // Split duration string based on localeText and transform into duration in ms
  //  string might not be separated by space
  const regexResult = possibleDurationTypeList.map((type) => {
    if (doDisabled?.[type]) {
      return 0;
    }

    const regex = new RegExp(`(\\d+)${localeText?.[type]}`, "g");
    const match = regex.exec(durationString);
    if (match) {
      const value = parseInt(match[1]);
      const ms = getMsFromDurationWithType(type, value);
      return ms;
    }

    return 0;
  });

  return regexResult.reduce((acc, ms) => acc + ms, 0);
};
