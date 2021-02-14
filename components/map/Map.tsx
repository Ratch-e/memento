import React from "react";
import ReactMapGL, { ViewportProps } from "react-map-gl";
import { useWindowResize } from "@hooks";

import { GalleryContext } from "../../context/GalleryProvider";

import styles from "./Map.module.css";

export const Map = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const {
        coordinates: { latitude, longitude },
        setCoordinates
    } = React.useContext(GalleryContext);

    const [viewport, setViewport] = React.useState<ViewportProps>({
        width: ref.current?.offsetWidth ?? 0,
        height: ref.current?.offsetHeight ?? 0,
        zoom: 8
    });

    const updateViewport = () =>
        setViewport((state) => ({
            ...state,
            width: ref.current?.offsetWidth ?? 0,
            height: ref.current?.offsetHeight ?? 0
        }));

    useWindowResize(updateViewport);

    React.useEffect(() => {
        updateViewport();
    }, [ref]);

    const onVieportChange = React.useCallback(
        (newViewport: ViewportProps) => {
            setCoordinates(newViewport.latitude, newViewport.longitude);
            setViewport(newViewport);
        },
        [setCoordinates]
    );

    return (
        <div className={styles.wrapper} ref={ref}>
            <ReactMapGL
                {...viewport}
                latitude={latitude}
                longitude={longitude}
                /* TODO add .env */
                mapboxApiAccessToken="pk.eyJ1IjoicmF0Y2giLCJhIjoiY2tnZmhreHN0MTNobTJ6bnYxa2hkMXlzOSJ9.XUZdEVvPSrVBU8Spi6ZWvg"
                onViewportChange={onVieportChange}
            />
        </div>
    );
};
