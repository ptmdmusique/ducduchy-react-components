import React, { FC, ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../Button";

export const StorybookCommonWithForm: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [submittedValue, setSubmittedValue] = useState<{
    [key: string]: string;
  } | null>(null);
  const { handleSubmit } = useFormContext();

  const onSubmit = handleSubmit((data) => {
    setSubmittedValue(data);
  });

  return (
    <form onSubmit={onSubmit}>
      {children}

      <Button type="submit" borderType="outline" className="mt-4">
        Submit
      </Button>

      {submittedValue && (
        <pre className="mt-8 text-skin-base">
          <code>Submitted value {JSON.stringify(submittedValue)}</code>
        </pre>
      )}
    </form>
  );
};
