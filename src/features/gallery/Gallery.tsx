import React from "react";
import { GalleryProvider } from "../../context/GalleryProvider";
import { MainMap } from "../mainMap/MainMap";

import styles from "./Gallery.module.css";

export const Gallery = () => (
    <GalleryProvider>
        <section className={styles.gallery}>
            <MainMap />
        </section>
    </GalleryProvider>
);
