import { Switch, Transition } from "@headlessui/react";
import cx from "classnames";
import { nanoid } from "nanoid";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { Icon } from "../Icon";
import { COMPONENT_PREFIX, StatusType } from "../resources/common.data";
import {
  FormValidationWithController,
  OnBlur,
  OnChange,
} from "../resources/form/types";
import "./Toggle.scss";

export interface ToggleProps<F = any> {
  className?: string;
  label?: ReactNode;
  labelLeft?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onBlur?: OnBlur;
  disabled?: boolean;
  onChange?: OnChange;
  formValidation?: FormValidationWithController<F>;
  type?: "switch" | "checkbox";
  status?: StatusType;
  checkIcon?: [string, string];
}

export function Toggle<F>({
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
  status = "neutral",
  checkIcon = ["fas", "check"],
}: ToggleProps<F>) {
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
          className={cx(
            `${COMPONENT_PREFIX}-toggle`,
            "toggle-container",
            className,
          )}
        >
          {label && labelLeft && renderLabel()}

          <Switch
            id={idRef.current}
            checked={checked ?? enabled}
            onChange={onChangeWrapper}
            onBlur={onBlurWrapper}
            className={cx(
              `${COMPONENT_PREFIX}-toggle-${type}`,
              `${COMPONENT_PREFIX}-toggle-${type}--${status}`,
              { [`${COMPONENT_PREFIX}-toggle-${type}--enabled`]: enabled },
              { [`${COMPONENT_PREFIX}-toggle-${type}--disabled`]: disabled },
            )}
            disabled={disabled}
          >
            {type === "switch" ? (
              <span className={`knob knob--${status}`} />
            ) : (
              <Transition
                show={enabled}
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
}
