import { Routes, Route } from "react-router-dom";
import Home from "./App";
import MemoryGame from "./projects/memory-game/MemoryGame";

export function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memory-game" element={<MemoryGame />} />
        </Routes>
    );
}
