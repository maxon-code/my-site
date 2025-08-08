import './App.css'
import { Button ,Box, Card, Inset, Text, Strong, Flex} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MemoryGame from "./memory-game/MemoryGame"; // ← не src/
import { Navigation } from "./Navigation.tsx";
import { createCursorMagic } from "cursor-magic";

createCursorMagic();
function Home() {
    const works = [
        {
            image: "img1.png",
            name: "Memory game",
            text: "Flip the cards, find matching pairs",
            route: "/memory-game",
            gurl: "https://github.com/maxon-code/memory-game",
        },
        {
            image: "img2.svg",
            name: "Weather Map",
            text: "Check the weather right on the map",
            route: "#",
            gurl: "https://github.com/maxon-code/weather-app",
        },
        {
            image: "img3.svg",
            name: "Store",
            text: "Buy products on this website",
            route: "#",
            gurl: "https://github.com/maxon-code/react-shop",
        },
    ];

    const renderWorks = works.map((work, index) => (
        <Box key={index} width="240px">
            <Card size="4">
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        alt="Memory game"
                        src={work.image}
                        style={{
                            display: "block",
                            objectFit: "cover",
                            width: "100%",
                            height: 140,
                            backgroundColor: "var(--gray-5)",
                        }}
                    />
                </Inset>

                <Text as="p" size="4" align="center">
                    <Strong>{work.name}</Strong>
                </Text>
                <Text as="p" size="3" align="center">
                    {work.text}
                </Text>
                <Flex justify="between" align="center" >
                    <Link to={work.route}>
                        <Button size="2" >Visit site</Button>
                    </Link>

                <a href={work.gurl} style={{ marginLeft: "60px" }}>
                   <GitHubLogoIcon width="24" height="24" color="white" />
                </a>
                </Flex>
            </Card>
        </Box>
    ));

    return (
        <>
            <Navigation />

            <Flex gap="2" direction="row" wrap="wrap" align="center" justify="center">
                {renderWorks}
            </Flex>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/memory-game" element={<MemoryGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
