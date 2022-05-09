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
