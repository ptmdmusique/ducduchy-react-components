import { Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { headlessTransitionData } from "../resources/animation";

type TransitionProp = FC<{
  show: boolean;
  as?: React.ElementType<any>;
  className?: string;
}>;

export const FadeTransition: TransitionProp = ({
  show,
  children,
  className,
  as = Fragment,
}) => (
  <Transition
    as={as}
    show={show}
    className={className}
    {...headlessTransitionData.fadeInOut}
  >
    {children}
  </Transition>
);

export const FadeAndSlideTransition: TransitionProp = ({
  show,
  children,
  as = Fragment,
  className,
}) => (
  <Transition
    as={as}
    show={show}
    className={className}
    {...headlessTransitionData.fadeAndSlide}
  >
    {children}
  </Transition>
);
