import { Routes, Route } from "react-router-dom";
import Home from "./App";
import MemoryGame from "./projects/memory-game/MemoryGame";
import MainMapWrapper from "./projects/weather-app/MainWrapper.tsx";
import ShopApp from "./projects/shop/ShopApp.tsx";
export function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memory-game" element={<MemoryGame />} />
            <Route path="/weather-app" element={<MainMapWrapper />} />
            <Route path="/shop" element={ <ShopApp/>} />
        </Routes>
    );
}
