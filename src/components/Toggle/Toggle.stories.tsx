import { Meta, StoryFn } from "@storybook/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Toggle } from ".";
import { Button, ToggleProps, Tooltip } from "..";
import { storyDisabledOption } from "../resources/story-common";

const meta: Meta<ToggleProps> = {
  title: "Components/Form/Toggle",
  component: Toggle,
  argTypes: {
    formValidation: storyDisabledOption,
    onChange: storyDisabledOption,
    className: storyDisabledOption,
    onBlur: storyDisabledOption,
    checkIcon: storyDisabledOption,
    type: storyDisabledOption,
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<ToggleProps> = (args) => <Toggle {...args} />;
export const Default: typeof Template = Template.bind({});
Default.args = {
  label: "My toggle",
};

export const Checkbox: typeof Template = Template.bind({});
Checkbox.args = {
  label: "My checkbox",
  type: "checkbox",
};

const TemplateWithForm: StoryFn<ToggleProps> = (args) => {
  const [submittedValue, setSubmittedValue] = useState<{
    [key: string]: string;
  } | null>(null);
  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data) => {
    setSubmittedValue(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Toggle
        label="What a Label"
        formValidation={{ control, name: "toggle" }}
        type="checkbox"
        {...args}
      />

      <Button type="submit" borderType="outline" className="mt-4">
        Submit
      </Button>

      {submittedValue && (
        <pre className="mt-8">
          <code>Submitted value {JSON.stringify(submittedValue)}</code>
        </pre>
      )}
    </form>
  );
};

export const WithForm: typeof TemplateWithForm = TemplateWithForm.bind({});

export const WithRef: StoryFn<ToggleProps> = () => {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="root">
      <code>
        You can forward ref into the component for cool stuff like tooltip too!
        Try to hover over the toggle below!
      </code>

      <Toggle
        label="Toggle ref example"
        type="checkbox"
        ref={toggleRef}
        className="mb-8 mt-16"
      />
      <Tooltip offset={[0, 10]} stylePreset="preset-1" refElement={toggleRef}>
        <p>A tooltip for just the toggle ╰(*°▽°*)╯</p>
      </Tooltip>

      <Toggle label="Container ref example" containerRef={containerRef} />
      <Tooltip
        offset={[0, 10]}
        stylePreset="preset-1"
        refElement={containerRef}
      >
        <p>A tooltip for the whole container ╰(*°▽°*)╯</p>
      </Tooltip>
    </div>
  );
};
