import { Routes, Route } from "react-router-dom";
import Home from "./main/App";
import MemoryGame from "./projects/memory-game/MemoryGame";
import MainMapWrapper from "./projects/weather-app/MainWrapper";
import ShopApp from "./projects/shop/ShopApp";
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
