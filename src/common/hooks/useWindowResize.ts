import * as React from "react";

export const useWindowResize = (cb: () => void): void => {
    React.useEffect(() => {
        window.addEventListener("resize", cb);
        return () => window.removeEventListener("resize", cb);
    }, [cb]);
};
