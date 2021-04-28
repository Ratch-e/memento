import * as React from "react";
import classnames from "classnames";
import { BUTTON_TYPE } from "./constants";

import styles from "./ButtonCore.module.css";

export interface ButtonCoreProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: BUTTON_TYPE;
}

const Component = (
    {
        children,
        className,
        type = BUTTON_TYPE.BUTTON,
        ...props
    }: React.PropsWithChildren<ButtonCoreProps>,
    ref
) => (
    <button
        className={classnames(styles.button, className)}
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={type}
        {...props}>
        {children}
    </button>
);

export const ButtonCore = React.forwardRef<HTMLButtonElement, ButtonCoreProps>(Component);
