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
import { Button } from "../Button";
import Icon, { IconProps } from "../Icon/Icon";
import { BorderType, COMPONENT_PREFIX } from "../resources/common.data";
import { FormAdornment } from "../resources/form/types";
import "./Input.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  borderType?: BorderType;
  caption?: ReactNode;
  captionIcon?: IconProps["icon"];
  state?: "normal" | "error";
  label?: ReactNode;
  leadingAdornment?: FormAdornment;
  leadingAdornmentOnClick?: () => void;
  trailingAdornment?: FormAdornment;
  trailingAdornmentOnClick?: () => void;

  hasContent?: boolean;

  debounceParam?: {
    /** in millisecond */
    debounceTime: number;
    flushOnUnmount?: boolean;
  };

  formControl?: Control<any>;
}

const checkIsIcon = (prop: FormAdornment): prop is IconProps["icon"] => {
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
      hasContent: propHasContent,
      debounceParam,
      className,
      formControl,
      ...inputProps
    },
    ref,
  ) => {
    const myId = useRef(inputProps?.id ?? `input---${nanoid()}`);
    const hasError = state === "error";

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(inputRef.current);
        } else {
          ref.current = inputRef.current;
        }
      }
    }, [inputRef.current]);

    const debounceRef = useRef(
      debounce((event: ChangeEvent<HTMLInputElement>) => {
        inputProps?.onChange?.(event);
      }, debounceParam?.debounceTime ?? 0),
    );

    const [hasContent, setHasContent] = useState(propHasContent ?? false);
    const checkInputPropsHasContent = useCallback(
      () =>
        !!propHasContent ||
        !!inputProps?.value ||
        !!inputProps?.defaultValue ||
        !!inputProps?.placeholder,
      [
        inputProps?.value,
        inputProps?.placeholder,
        inputProps?.defaultValue,
        propHasContent,
      ],
    );
    useEffect(() => {
      if (propHasContent != null) {
        setHasContent(propHasContent);
      }
    }, [propHasContent]);

    const renderAdornment = (adornment?: FormAdornment, left = false) => {
      if (!adornment) {
        return null;
      }

      const iconCN = cx("fa-fw adornment-icon", {
        "adornment-icon--left": left,
      });

      let onClick = trailingAdornmentOnClick;
      if (left) {
        onClick = leadingAdornmentOnClick;
      }

      if (checkIsIcon(adornment)) {
        return onClick ? (
          <div
            className={cx("adornment-wrapper", {
              "adornment-wrapper--left": left,
            })}
          >
            <Button
              className="adornment-button"
              borderType="plain"
              type="button"
              onClick={onClick}
              iconClassName="fa-fw adornment-icon"
              icon={adornment}
            />
          </div>
        ) : (
          <Icon icon={adornment} className={iconCN} />
        );
      }

      return <div className={iconCN}>{adornment}</div>;
    };

    const handleWatchValueChange = (value: any) => {
      setHasContent(!!value || checkInputPropsHasContent());
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setHasContent(
        !!inputProps?.placeholder ||
          checkInputPropsHasContent() ||
          !!event.target.value,
      );

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
          {renderAdornment(leadingAdornment, true)}

          <label htmlFor={myId.current}>{label}</label>

          <input
            {...inputProps}
            id={myId.current}
            ref={inputRef}
            onChange={onInputChange}
          />

          {renderAdornment(trailingAdornment)}

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
