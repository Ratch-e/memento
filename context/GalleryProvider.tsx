import * as React from "react";

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface GalleryContext {
    coordinates: Coordinates;
    setCoordinates: (lat: number, long: number) => void;
}

export const GalleryContext = React.createContext<GalleryContext>({
    coordinates: { latitude: 0, longitude: 0 },
    setCoordinates: () => null
});

export const GalleryProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const [coordinates, setCoordinates] = React.useState<Coordinates>({
        latitude: 0,
        longitude: 0
    });

    React.useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
                setCoordinates({ latitude, longitude });
            });
        }
    }, []);

    return (
        <GalleryContext.Provider
            value={{
                coordinates: {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude
                },
                setCoordinates: (latitude: number, longitude: number) =>
                    setCoordinates({ latitude, longitude })
            }}>
            {children}
        </GalleryContext.Provider>
    );
};
