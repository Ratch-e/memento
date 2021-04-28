import React from "react";
import ReactMapGL, { Marker, ViewportProps } from "react-map-gl";
import { useWindowResize } from "src/common/hooks";
import { Coordinates } from "src/common/types";

import { GalleryContext } from "../../context/GalleryProvider";

interface MapProps {
    className?: string;
    markers?: {
        coordinates: Coordinates;
    }[];
}

export const PhotosMap = ({ className, markers }: MapProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const {
        coordinates: { latitude, longitude },
        setCoordinates
    } = React.useContext(GalleryContext);

    const [viewport, setViewport] = React.useState<ViewportProps>({
        width: ref.current?.offsetWidth ?? 0,
        height: ref.current?.offsetHeight ?? 0,
        zoom: 15
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

    const renderedMarkers = React.useMemo(
        () =>
            markers?.map(({ coordinates: { latitude, longitude } }, index) => (
                <Marker key={index} longitude={longitude} latitude={latitude}>
                    You are here
                </Marker>
            )),
        [markers]
    );

    return (
        <div className={className} ref={ref}>
            <ReactMapGL
                {...viewport}
                latitude={latitude}
                longitude={longitude}
                mapStyle="mapbox://styles/ratch/cknw42h5g25g517jg4swcnya9"
                /* TODO add .env */
                mapboxApiAccessToken="pk.eyJ1IjoicmF0Y2giLCJhIjoiY2tnZmhreHN0MTNobTJ6bnYxa2hkMXlzOSJ9.XUZdEVvPSrVBU8Spi6ZWvg"
                onViewportChange={onVieportChange}>
                {renderedMarkers}
            </ReactMapGL>
        </div>
    );
};
