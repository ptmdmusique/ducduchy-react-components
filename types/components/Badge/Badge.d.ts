/// <reference types="react" />
import { StatusType } from "../resources/common.data";
import "./Badge.scss";
export interface BadgeProps {
    status?: StatusType;
    className?: string;
    type?: "outline" | "filled";
    icon?: [string, string];
    iconClassName?: string;
    text: string;
}
export declare const Badge: ({ icon, text, status, type, iconClassName, className, }: BadgeProps) => JSX.Element;
