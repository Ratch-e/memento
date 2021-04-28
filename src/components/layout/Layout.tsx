import React from "react";
import { Header } from "../../features/header/Header";

import styles from "./Layout.module.css";

export const Layout = ({ children }) => (
    <main className={styles.layout}>
        <Header />
        {children}
    </main>
);
