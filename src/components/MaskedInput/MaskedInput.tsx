import cx from "classnames";
import IMask from "imask";
import { forwardRef, useEffect } from "react";
import { useIMask } from "react-imask";
import { OmitStrict } from "../../utils/types";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";

export type MaskedInputProps = OmitStrict<InputProps, "onChange"> & {
  maskOptions: IMask.AnyMaskedOptions;
  onChange?: (unmaskedValue: string, maskedValue: string) => void;
};

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ maskOptions, onChange, ...inputProps }, ref) => {
    const { ref: maskRef, value, unmaskedValue } = useIMask(maskOptions);
    useEffect(() => {
      onChange?.(unmaskedValue, value);
    }, [value, unmaskedValue]);

    return (
      <Input
        {...inputProps}
        className={cx(`${COMPONENT_PREFIX}-masked-input`, inputProps.className)}
        ref={(newRef) => {
          if (newRef) {
            maskRef.current = newRef;
          }

          if (typeof ref === "function") {
            ref(newRef);
          } else if (ref) {
            ref.current = newRef;
          }
        }}
      />
    );
  },
);
