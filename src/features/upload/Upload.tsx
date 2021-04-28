import React from "react";
import exifr from "exifr";

import { PhotosMap } from "src/components/photosMap/PhotosMap";

import styles from "./Upload.module.css";
import { GalleryProvider } from "src/context/GalleryProvider";
export const Upload = () => {
    const [file, setFile] = React.useState(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [info, setInfo] = React.useState<any>(null);
    const [error, setError] = React.useState<string | null>(null);

    const getFileExt = (file: File) => {
        const name = file.name;
        return name.substring(name.lastIndexOf(".") + 1);
    };

    const convertFile = async (file: File) => {
        const x = null;

        console.log(x);
    };

    const onChange = (e) => {
        setError(null);
        const photo: File = e.target.files[0];
        const ext = getFileExt(photo);
        console.log(ext);

        if (ext === "HEIC") {
            convertFile(photo);
            setFile(photo);
        } else {
            setFile(photo);
        }
    };

    const onFormSubmit = async () => {
        const exif = await exifr.parse(file);
        if (exif) {
            setInfo(exif);
        } else {
            setError("Please upload a photo with exif data");
        }
        const formData = new FormData();
        formData.append("photo", file);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
    };

    return (
        <GalleryProvider>
            <section className={styles.page}>
                <div className={styles.upload}>
                    <h1>File Upload</h1>
                    <input type="file" onChange={onChange} />
                    <button type="button" onClick={onFormSubmit}>
                        Upload
                    </button>
                    {error && <p>{error}</p>}
                </div>
                <PhotosMap
                    className={styles.map}
                    markers={
                        info
                            ? [
                                  {
                                      coordinates: {
                                          latitude: info.latitude,
                                          longitude: info.longitude
                                      }
                                  }
                              ]
                            : []
                    }
                />
            </section>
        </GalleryProvider>
    );
};
