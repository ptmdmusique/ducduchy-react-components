import { FC } from "react";
import React from "react";
declare type TransitionProp = FC<{
    show: boolean;
    as?: React.ElementType<any>;
    className?: string;
}>;
export declare const FadeTransition: TransitionProp;
export declare const FadeAndSlideTransition: TransitionProp;
export {};
