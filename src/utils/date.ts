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
export type PossibleDurationType = typeof possibleDurationTypeList[number];

const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;
const MILLISECOND_PER_HOUR = 1000 * 60 * 60;
const MILLISECOND_PER_MINUTE = 1000 * 60;
const MILLISECOND_PER_SECOND = 1000;

export const DEFAULT_DURATION_PREFIX: Record<PossibleDurationType, string> = {
  days: "d",
  hours: "h",
  minutes: "m",
  seconds: "s",
};

/** Get duration object from millisecond */
export const getDurationFromMs = (
  timeInMilliseconds: number,
  doDisabled?: {
    [key in PossibleDurationType]?: boolean;
  },
): Record<PossibleDurationType, number> => {
  let timeLeft = timeInMilliseconds;
  const duration: Record<PossibleDurationType, number> = {
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
  duration: Record<PossibleDurationType, number>,
  localeText?: {
    [key in PossibleDurationType]?: string;
  },
  doAppend0 = true,
) => {
  const getLocaleText = (type: PossibleDurationType) =>
    localeText?.[type] ?? DEFAULT_DURATION_PREFIX[type];

  const { days, hours, minutes, seconds } = duration;

  let dayString = days ? `${days}${getLocaleText("days")}` : null;
  if (doAppend0 && dayString?.length === 2) {
    dayString = `0${dayString}`;
  }

  let hourString = hours ? `${hours}${getLocaleText("hours")}` : null;
  if (doAppend0 && hourString?.length === 2) {
    hourString = `0${hourString}`;
  }

  let minuteString = minutes ? `${minutes}${getLocaleText("minutes")}` : null;
  if (doAppend0 && minuteString?.length === 2) {
    minuteString = `0${minuteString}`;
  }

  let secondString = seconds ? `${seconds}${getLocaleText("seconds")}` : null;
  if (doAppend0 && secondString?.length === 2) {
    secondString = `0${secondString}`;
  }

  const finalStr = [dayString, hourString, minuteString, secondString]
    .filter((str) => str)
    .join(" ");
  return !finalStr.trim() ? "0'" : finalStr;
};
