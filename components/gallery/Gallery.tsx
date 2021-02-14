import React from "react";
import { GalleryProvider } from "../../context/GalleryProvider";
import { Map } from "../map/Map";

import styles from "./Gallery.module.css";

export const Gallery = () => (
    <GalleryProvider>
        <section className={styles.gallery}>
            <Map />
        </section>
    </GalleryProvider>
);
