import cx from "classnames";
import { nanoid } from "nanoid";
import {
  ChangeEvent,
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Control, useWatch } from "react-hook-form";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";
import { debounce } from "../../utils/lodash/debounce";
import { OmitStrict } from "../../utils/types";
import { FadeTransition } from "../animation/CustomTransition";
import Icon, { IconProps } from "../Icon/Icon";
import { BorderType, COMPONENT_PREFIX } from "../resources/common.data";
import "./TextArea.scss";

export interface TextAreaProps
  extends OmitStrict<TextareaAutosizeProps, "label"> {
  borderType?: BorderType;
  caption?: ReactNode;
  captionIcon?: IconProps["icon"];
  state?: "normal" | "error";
  label?: ReactNode;

  hasContent?: boolean;

  debounceParam?: {
    /** in millisecond */
    debounceTime: number;
    flushOnUnmount?: boolean;
  };

  formControl?: Control<any>;

  // Textarea specific
  resize?: React.CSSProperties["resize"];
}

const UseFormWatcher = ({
  control,
  name,
  onChange,
}: {
  control: TextAreaProps["formControl"];
  name: string;
  onChange: (value: any) => void;
}) => {
  const dataToWatch = useWatch({ name, control });
  useEffect(() => {
    onChange(dataToWatch);
  }, [dataToWatch]);

  return null;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      borderType = "outline",
      caption,
      captionIcon,
      state,
      label,
      hasContent: propHasContent,
      debounceParam,
      className,
      formControl,
      resize = "both",
      ...textAreaProps
    },
    ref,
  ) => {
    const myId = useRef(textAreaProps?.id ?? `input---${nanoid()}`);
    const hasError = state === "error";

    const inputRef = useRef<HTMLTextAreaElement>(null);
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
      debounce((event: ChangeEvent<HTMLTextAreaElement>) => {
        textAreaProps?.onChange?.(event);
      }, debounceParam?.debounceTime ?? 0),
    );

    const [hasContent, setHasContent] = useState(propHasContent ?? false);
    const checkInputPropsHasContent = useCallback(
      () =>
        !!propHasContent ||
        !!textAreaProps?.value ||
        !!textAreaProps?.defaultValue ||
        !!textAreaProps?.placeholder,
      [
        textAreaProps?.value,
        textAreaProps?.placeholder,
        textAreaProps?.defaultValue,
        propHasContent,
      ],
    );
    useEffect(() => {
      if (propHasContent != null) {
        setHasContent(propHasContent);
      }
    }, [propHasContent]);

    const handleWatchValueChange = (value: any) => {
      setHasContent(!!value || checkInputPropsHasContent());
    };

    const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setHasContent(
        !!textAreaProps?.placeholder ||
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
      <div className={cx(`${COMPONENT_PREFIX}-text-area`, className)}>
        <div
          className={cx(
            "text-area-container",
            `text-area-container--${borderType}`,
            { "text-area-container--error": hasError },
            { "text-area-container--has-content": hasContent },
            { "text-area-container--read-only": textAreaProps?.readOnly },
          )}
        >
          <label htmlFor={myId.current}>{label}</label>

          <TextareaAutosize
            resize="horizontal"
            {...textAreaProps}
            id={myId.current}
            // @ts-ignore
            ref={inputRef}
            onChange={onInputChange}
            style={{ resize }}
          />

          {formControl && (
            <UseFormWatcher
              control={formControl}
              name={textAreaProps.name ?? ""}
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
