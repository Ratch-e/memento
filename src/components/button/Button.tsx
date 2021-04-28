import React from "react";
import classnames from "classnames";
import { ButtonCore, ButtonCoreProps } from "./ButtonCore";
import { BUTTON_TYPE } from "./constants";

import styles from "./Button.module.css";

const Component = (
    {
        children,
        className,
        type = BUTTON_TYPE.BUTTON,
        ...props
    }: React.PropsWithChildren<ButtonCoreProps>,
    ref
) => (
    <ButtonCore
        className={classnames(styles.button, className)}
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={type}
        {...props}>
        {children}
    </ButtonCore>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonCoreProps>(Component);
