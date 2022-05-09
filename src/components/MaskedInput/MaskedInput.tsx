import cx from "classnames";
import IMask from "imask";
import { forwardRef, useEffect, useRef } from "react";
import { OmitStrict } from "../../utils/types";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";

type MaskedInputProps = OmitStrict<InputProps, "onChange"> & {
  maskOptions: IMask.AnyMaskedOptions;
  onChange: (unmaskedValue: string, maskedValue: string) => void;
};

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ maskOptions, onChange, ...inputProps }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (inputRef.current) {
        const iMask = IMask(inputRef.current, maskOptions);
        iMask.on("accept", () => {
          onChange?.(iMask.unmaskedValue, iMask.value);
        });

        return () => {
          iMask.destroy();
        };
      }
    }, [maskOptions, onChange]);

    return (
      <Input
        {...inputProps}
        className={cx(`${COMPONENT_PREFIX}-masked-input`, inputProps.className)}
        ref={(newRef) => {
          inputRef.current = newRef;
          ref = inputRef;
        }}
      />
    );
  },
);
