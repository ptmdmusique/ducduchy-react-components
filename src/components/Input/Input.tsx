import cx from "classnames";
import { nanoid } from "nanoid";
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { Control, useWatch } from "react-hook-form";
import { debounce } from "../../utils/lodash/debounce";
import { FadeTransition } from "../animation/CustomTransition";
import Icon from "../Icon/Icon";
import { COMPONENT_PREFIX } from "../resources/common.data";
import { FormAdornment } from "../resources/form/types";
import "./Input.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  borderType?: "fill" | "outline" | "plain";
  caption?: ReactNode;
  captionIcon?: [string, string];
  state?: "normal" | "error";
  label?: ReactNode;
  leadingAdornment?: FormAdornment;
  leadingAdornmentOnClick?: () => void;
  trailingAdornment?: FormAdornment;
  trailingAdornmentOnClick?: () => void;

  debounceParam?: {
    /** in millisecond */
    debounceTime: number;
    flushOnUnmount?: boolean;
  };

  formControl?: Control<any>;
}

const checkIsIcon = (prop: FormAdornment): prop is [string, string] => {
  return (
    Array.isArray(prop) &&
    prop.length === 2 &&
    prop.every((entry) => typeof entry === "string")
  );
};

const UseFormWatcher = ({
  control,
  name,
  onChange,
}: {
  control: InputProps["formControl"];
  name: string;
  onChange: (value: any) => void;
}) => {
  const dataToWatch = useWatch({ name, control });
  useEffect(() => {
    onChange(dataToWatch);
  }, [dataToWatch]);

  return null;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      borderType = "outline",
      caption,
      captionIcon,
      state,
      label,
      leadingAdornment,
      leadingAdornmentOnClick,
      trailingAdornment,
      trailingAdornmentOnClick,
      debounceParam,
      className,
      formControl,
      ...inputProps
    },
    ref,
  ) => {
    const myId = useRef(inputProps?.id ?? `input---${nanoid()}`);
    const hasError = state === "error";

    const inputRef = useRef<HTMLInputElement>();

    const debounceRef = useRef(
      debounce((event: ChangeEvent<HTMLInputElement>) => {
        inputProps?.onChange?.(event);
      }, debounceParam?.debounceTime ?? 0),
    );

    const [hasContent, setHasContent] = useState(false);
    const checkInputPropsHasContent = useCallback(
      () =>
        !!inputProps?.value ||
        !!inputProps?.defaultValue ||
        !!inputProps?.placeholder,
      [inputProps?.value, inputProps?.placeholder, inputProps?.defaultValue],
    );

    const renderAdornment = (adornment?: FormAdornment, left = false) => {
      if (!adornment) {
        return null;
      }

      const iconCN = cx("fa-fw adornment-icon", {
        "adornment-icon-left": left,
      });

      let onClick = trailingAdornmentOnClick;
      if (left) {
        onClick = leadingAdornmentOnClick;
      }

      if (checkIsIcon(adornment)) {
        const renderIcon = () => <Icon icon={adornment} className={iconCN} />;
        return onClick ? (
          <button className="adornment-wrapper" type="button" onClick={onClick}>
            {renderIcon()}
          </button>
        ) : (
          renderIcon()
        );
      }

      return <div className={iconCN}>{adornment}</div>;
    };

    const handleWatchValueChange = (value: any) => {
      setHasContent(!!value || checkInputPropsHasContent());
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setHasContent(!!inputProps?.placeholder || !!event.target.value);
      debounceRef.current(event);
    };

    useEffect(() => {
      setHasContent(checkInputPropsHasContent());
    }, [checkInputPropsHasContent]);

    useLayoutEffect(() => {
      // ! Workaround for auto-filling and manually setting input's `value`
      setTimeout(() => {
        setHasContent(checkInputPropsHasContent() || !!inputRef.current?.value);
      }, 1);
    }, []);

    useEffect(() => {
      const debouncer = debounceRef.current;
      return () => {
        if (debounceParam) {
          if (debounceParam.flushOnUnmount) {
            debouncer.flush();
          } else {
            debouncer.cancel();
          }
        }
      };
    }, [debounceParam]);

    return (
      <div className={cx(`${COMPONENT_PREFIX}-input`, className)}>
        <div
          className={cx(
            "input-container",
            `input-container--${borderType}`,
            { "input-container--error": hasError },
            { "input-container--has-content": hasContent },
            { "input-container--with-leading-icon": leadingAdornment },
            { "input-container--with-trailing-icon": trailingAdornment },
            { "input-container--read-only": inputProps?.readOnly },
          )}
        >
          {renderAdornment(trailingAdornment)}
          {renderAdornment(leadingAdornment, true)}

          <label htmlFor={myId.current}>{label}</label>

          <input
            {...inputProps}
            id={myId.current}
            ref={(ele) => {
              inputRef.current = ele ?? undefined;

              if (ref) {
                if (typeof ref === "function") {
                  ref(ele);
                } else {
                  ref.current = ele;
                }
              }
            }}
            onChange={onInputChange}
          />

          {formControl && (
            <UseFormWatcher
              control={formControl}
              name={inputProps.name ?? ""}
              onChange={handleWatchValueChange}
            />
          )}
        </div>

        <FadeTransition show={!!caption}>
          <div
            className={cx("caption-container", {
              "caption-container--error": hasError,
            })}
          >
            {(hasError || captionIcon) && (
              <Icon
                icon={captionIcon || ["far", "info-circle"]}
                className="fa-fw icon"
              />
            )}
            {caption}
          </div>
        </FadeTransition>
      </div>
    );
  },
);
