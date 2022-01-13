export const headlessTransitionData = {
  fadeInOut: {
    enter: "transition-opacity duration-75",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity duration-150",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  fadeAndSlide: {
    enter: "transition duration-75 transform",
    enterFrom: "opacity-0 translate-y-full",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition duration-150 transform",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-full",
  },
};
