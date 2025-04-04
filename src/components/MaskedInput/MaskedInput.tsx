import cx from "classnames";
import IMask from "imask";
import { Ref, useEffect, useImperativeHandle, useRef } from "react";
import { OmitStrict } from "../../utils/types";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";

export interface MaskedInputHandle {
  setValue: (value: string) => void;
}

// ! somehow "nonce" become a required prop for InputProps
export type MaskedInputProps = OmitStrict<InputProps, "onChange" | "nonce"> & {
  maskOptions: IMask.AnyMaskedOptions;
  onChange?: (unmaskedValue: string, maskedValue: string) => void;

  handlerRef?: Ref<MaskedInputHandle>;
  ref?: Ref<HTMLInputElement>;
};

export const MaskedInput = ({
  maskOptions,
  onChange,
  handlerRef,
  ref,
  ...inputProps
}: MaskedInputProps) => {
  // Use useRef to prevent re-rendering of the component whenever `maskOptions` changes.
  const opts = useRef(maskOptions);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const iMaskRef = useRef<IMask.InputMask<IMask.AnyMaskedOptions>>(null);

  useEffect(() => {
    if (inputRef.current) {
      const iMask = IMask(inputRef.current, opts.current);
      iMask.on("accept", () => {
        onChange?.(iMask.unmaskedValue, iMask.value);
      });

      iMaskRef.current = iMask;

      return () => {
        iMask.destroy();
      };
    }
  }, [onChange]);

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
  }, [ref]);

  useImperativeHandle(
    handlerRef,
    () => ({
      setValue: (newVal) =>
        iMaskRef.current && (iMaskRef.current.value = newVal),
    }),
    [],
  );

  return (
    <Input
      {...inputProps}
      className={cx(`${COMPONENT_PREFIX}-masked-input`, inputProps.className)}
      ref={inputRef}
    />
  );
};
