import React from "react";

import { Gallery } from "../components/gallery/Gallery";
import { Header } from "../components/header/Header";

const HomePage: React.FC = () => (
    <main>
        <Header />
        <Gallery />
    </main>
);
export default HomePage;
