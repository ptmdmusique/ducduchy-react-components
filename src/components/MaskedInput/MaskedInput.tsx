import cx from "classnames";
import IMask from "imask";
import { forwardRef, useEffect, useRef } from "react";
import { OmitStrict } from "../../utils/types";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";

export type MaskedInputProps = OmitStrict<InputProps, "onChange"> & {
  maskOptions: IMask.AnyMaskedOptions;
  onChange?: (unmaskedValue: string, maskedValue: string) => void;
};

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ maskOptions, onChange, ...inputProps }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const iMaskRef = useRef<IMask.InputMask<IMask.AnyMaskedOptions>>();

    useEffect(() => {
      if (inputRef.current) {
        const iMask = IMask(inputRef.current, maskOptions);
        iMask.on("accept", () => {
          onChange?.(iMask.unmaskedValue, iMask.value);
        });

        iMaskRef.current = iMask;

        return () => {
          iMask.destroy();
        };
      }
    }, [maskOptions, onChange]);

    useEffect(() => {
      iMaskRef.current?.updateValue();
    }, [inputProps.value, inputProps.defaultValue]);

    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(inputRef.current);
        } else {
          ref.current = inputRef.current;
        }
      }
    }, [inputRef.current]);

    return (
      <Input
        {...inputProps}
        className={cx(`${COMPONENT_PREFIX}-masked-input`, inputProps.className)}
        ref={inputRef}
      />
    );
  },
);
