import { Transition } from "@headlessui/react";
import React, { Fragment, PropsWithChildren } from "react";
import { headlessTransitionData } from "../resources/animation";

type TransitionProp = PropsWithChildren<{
  show: boolean;
  as?: React.ElementType<any>;
  className?: string;
}>;

export const FadeTransition = ({
  show,
  children,
  className,
  as = Fragment,
}: TransitionProp) => (
  <Transition
    as={as}
    show={show}
    className={className}
    {...headlessTransitionData.fadeInOut}
  >
    {children}
  </Transition>
);

export const FadeAndSlideTransition = ({
  show,
  children,
  as = Fragment,
  className,
}: TransitionProp) => (
  <Transition
    as={as}
    show={show}
    className={className}
    {...headlessTransitionData.fadeAndSlide}
  >
    {children}
  </Transition>
);
