import cx from "classnames";
import IMask, { AnyMaskedOptions, InputMask } from "imask";
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { OmitStrict } from "../../utils/types";
import { Input, InputProps } from "../Input";
import { COMPONENT_PREFIX } from "../resources/common.data";

export interface MaskedInputHandle {
  setValue: (value: string) => void;
  setUnmaskedValue: (value: string) => void;
}

export type MaskedInputProps = OmitStrict<InputProps, "onChange"> & {
  maskOptions: AnyMaskedOptions;
  onChange?: (unmaskedValue: string, maskedValue: string) => void;

  handlerRef?: Ref<MaskedInputHandle>;
};

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ maskOptions, onChange, handlerRef, ...inputProps }, ref) => {
    // Use useRef to prevent re-rendering of the component whenever `maskOptions` changes.
    const opts = useMemo(() => maskOptions, [maskOptions]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const iMaskRef = useRef<InputMask<AnyMaskedOptions>>();

    useEffect(() => {
      if (inputRef.current) {
        const iMask = IMask(inputRef.current, opts);
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
      if (iMaskRef.current) {
        iMaskRef.current.updateOptions(opts);
      }
    }, [opts]);

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

    useImperativeHandle(
      handlerRef,
      () => ({
        setValue: (newVal) =>
          iMaskRef.current && (iMaskRef.current.value = newVal),
        setUnmaskedValue: (newVal) =>
          iMaskRef.current && (iMaskRef.current.unmaskedValue = newVal),
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
  },
);
