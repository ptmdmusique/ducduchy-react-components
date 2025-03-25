import { Switch, Transition } from "@headlessui/react";
import cx from "classnames";
import { nanoid } from "nanoid";
import {
  ForwardedRef,
  HTMLProps,
  ReactNode,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import { Controller, FieldValues } from "react-hook-form";
import { OmitStrict } from "../../utils/types";
import { Icon, IconProps } from "../Icon";
import { COMPONENT_PREFIX, ColorType } from "../resources/common.data";
import {
  FormValidationWithController,
  OnBlur,
  OnChange,
} from "../resources/form/types";
import "./Toggle.scss";

export interface ToggleProps<FormFields extends FieldValues = any>
  extends OmitStrict<
    HTMLProps<HTMLButtonElement>,
    "label" | "onChange" | "children" | "as" | "ref"
  > {
  className?: string;
  label?: ReactNode;
  labelLeft?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onBlur?: OnBlur;
  disabled?: boolean;
  onChange?: OnChange;
  formValidation?: FormValidationWithController<FormFields>;
  type?: "switch" | "checkbox";
  colorType?: ColorType;
  checkIcon?: IconProps["icon"];

  containerRef?: ForwardedRef<HTMLDivElement>;
  ref?: Ref<HTMLButtonElement>;
}

// TODO: figure out how to incorporate this into the type
// TODO: add ref for the whole switch container
// <FormFields extends FieldValues = any>
export const Toggle = ({
  className,
  label,
  labelLeft = false,
  checked,
  defaultChecked,
  disabled,
  onBlur,
  onChange,
  formValidation,
  type = "switch",
  colorType = "neutral",
  checkIcon = ["fas", "check"],
  containerRef,
  ref,
  ...buttonProps
}: ToggleProps) => {
  const [enabled, setEnabled] = useState(checked ?? (defaultChecked || false));
  const idRef = useRef(`toggle---${nanoid()}`);

  useEffect(() => {
    if (checked !== undefined) {
      setEnabled(checked);
    }
  }, [checked]);

  const renderLabel = () => (
    <Switch.Label
      className={cx("toggle-label", { "toggle-label--left": labelLeft })}
      htmlFor={idRef.current}
    >
      {label}
    </Switch.Label>
  );

  const renderContent = (formOnChange?: OnChange, formOnBlur?: OnBlur) => {
    const onChangeWrapper: OnChange = (newChecked) => {
      if (checked === undefined) {
        // Change on uncontrolled form only
        setEnabled(newChecked);
      }

      onChange?.(newChecked);
      formOnChange?.(newChecked);
    };

    const onBlurWrapper: OnBlur = (event) => {
      formOnBlur?.(event);
      onBlur?.(event);
    };

    return (
      <Switch.Group>
        <div
          className={cx(`${COMPONENT_PREFIX}-toggle`, className)}
          ref={containerRef}
        >
          {label && labelLeft && renderLabel()}
          {/* @ts-ignore --- not sure why but `Switch` on change only returns a `checked` */}
          <Switch
            {...buttonProps}
            id={idRef.current}
            checked={checked ?? enabled}
            onChange={onChangeWrapper}
            onBlur={onBlurWrapper}
            className={cx(
              `${COMPONENT_PREFIX}-toggle-${type}`,
              `${COMPONENT_PREFIX}-toggle-${type}--${colorType}`,
              { [`${COMPONENT_PREFIX}-toggle-${type}--enabled`]: enabled },
              { [`${COMPONENT_PREFIX}-toggle-${type}--disabled`]: disabled },
            )}
            disabled={disabled}
            ref={ref}
          >
            {type === "switch" ? (
              <span className="knob" />
            ) : (
              <Transition
                show={enabled}
                // @ts-ignore
                className="icon"
                enter="transition-opacity duration-25"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-25"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Icon icon={checkIcon} />
              </Transition>
            )}
          </Switch>
          {label && !labelLeft && renderLabel()}
        </div>
      </Switch.Group>
    );
  };

  if (!formValidation) {
    return renderContent();
  }

  const { control, name, rules } = formValidation;
  // TODO: Figure out this ignore
  return (
    <Controller
      name={name as any}
      rules={rules}
      control={control}
      // @ts-ignore
      defaultValue={enabled}
      render={({ field: { onChange, onBlur } }) =>
        renderContent(onChange, onBlur)
      }
    />
  );
};
