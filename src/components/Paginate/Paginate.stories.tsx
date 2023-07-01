import { Meta, StoryFn } from "@storybook/react";
import {
  storyDisabledOption,
  storyIconOption,
} from "../resources/story-common";
import { Paginate, PaginateProps } from "./Paginate";
import { useState } from "react";
import { Button } from "../Button";

const meta: Meta<PaginateProps> = {
  title: "Components/Paginate",
  component: Paginate,
  argTypes: {
    className: storyDisabledOption,
    nextLabelButtonProps: storyDisabledOption,
    previousLabelButtonProps: storyDisabledOption,
    nextLabelIcon: { ...storyIconOption },
    previousLabelIcon: { ...storyIconOption },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const MAX_PAGE_COUNT = 9;

const Template: StoryFn<PaginateProps> = (args) => (
  <Paginate
    breakLabel="..."
    onPageChange={({ selected }) => console.info(`Navigate to ${selected}`)}
    renderOnZeroPageCount={null}
    pageRangeDisplayed={2}
    marginPagesDisplayed={3}
    {...args}
    pageCount={args.pageCount ?? MAX_PAGE_COUNT}
  />
);
export const Default: typeof Template = Template.bind({});

export const Controlled: StoryFn<PaginateProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Paginate
        breakLabel="..."
        onPageChange={({ selected }) => console.info(`Navigate to ${selected}`)}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={2}
        marginPagesDisplayed={3}
        {...args}
        pageCount={args.pageCount ?? MAX_PAGE_COUNT}
        forcePage={currentPage}
      />

      <div className="flex mt-8">
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}>
          Previous page
        </Button>

        <Button
          className="ml-4"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, MAX_PAGE_COUNT - 1))
          }
        >
          Next page
        </Button>
      </div>
    </>
  );
};
