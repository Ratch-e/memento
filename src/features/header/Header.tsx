import React from "react";
import Link from "next/link";

import { Button } from "src/components/button/Button";

import styles from "./Header.module.css";
export const Header: React.FC = () => (
    <header className={styles.header}>
        <Link href="/">
            <h1>Memento</h1>
        </Link>
        <Link href="/upload">
            <Button>Add Photo</Button>
        </Link>
    </header>
);
