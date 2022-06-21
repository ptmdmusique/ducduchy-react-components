import { Meta, Story } from "@storybook/react";
import DatePicker from "react-date-picker";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import { MaskedInput, MaskedInputProps } from ".";
import { storyDisabledOption } from "../resources/story-common";
import { StorybookCommonWithForm } from "../resources/StorybookCommonWithForm";

const meta: Meta<MaskedInputProps> = {
  title: "Components/Form/Masked Input",
  component: MaskedInput,
  argTypes: {
    maskOptions: storyDisabledOption,
    className: storyDisabledOption,
    onChange: storyDisabledOption,
    handlerRef: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const TelephoneNumber: Story<MaskedInputProps> = (args) => {
  return (
    <div className="text-skin-base">
      <div className="mb-4">
        <p>Default behavior with masked "+{1} (000) 000-0000"</p>
        <MaskedInput maskOptions={{ mask: "+{1} (000) 000-0000" }} />
      </div>

      <div>
        <p>
          Eager mode. Notice how pre-defined chars are shown when the char
          before that is typed while the other example require you to type the
          next character before the pre-defined char will show up
        </p>
        <MaskedInput
          maskOptions={{ mask: "+{1} (000) 000-0000", eager: true }}
        />
      </div>
    </div>
  );
};

export const WithForm: Story<MaskedInputProps> = (args) => {
  const methods = useForm<{ phoneNumber: string }>();
  const { errors } = useFormState({ control: methods.control });

  return (
    <FormProvider {...methods}>
      <StorybookCommonWithForm>
        <p className="text-skin-base mb-4">
          In onChange, <strong>Do not</strong> use unmaskedValue to set Input
          value, use maskedValue instead
        </p>

        <MaskedInput
          maskOptions={{ mask: "+{1} (000) 000-0000" }}
          label="Telephone Number"
          defaultValue="9999999999"
          state={errors["phoneNumber"]?.message ? "error" : "normal"}
          caption={errors["phoneNumber"]?.message}
          type="tel"
          {...methods.register("phoneNumber")}
          onChange={(unmaskedValue, maskedValue) => {
            methods.setValue("phoneNumber", maskedValue);
          }}
        />
      </StorybookCommonWithForm>
    </FormProvider>
  );
};
