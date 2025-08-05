import './App.css'
import { Button ,Box, Card, Inset, Text, Strong, Flex } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MemoryGame from "./memory-game/MemoryGame"; // ← не src/

function Home() {
    const works = [
        {
            image: "img1.png",
            name: "Memory game",
            text: "Flip the cards, find matching pairs...",
            route: "/memory-game",
            gurl: "#",
        },
        {
            image: "img1.png",
            name: "Memory game 2",
            text: "Another memory game...",
            route: "#",
            gurl: "#",
        }
    ];

    const renderWorks = works.map((work, index) => (
        <Box key={index} maxWidth="240px" width="100%">
            <Card size="2">
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
                <Text as="p" size="3">
                    <Strong>{work.name}</Strong> {work.text}
                </Text>
                    <Link to={work.route}>
                        <Button size="2">Visit site</Button>
                    </Link>
                <a href={work.gurl}> GitHub</a>
            </Card>
        </Box>
    ));

    return (
        <>
            <Flex direction="row" justify="between" align="center" className="Header">
                <Text size="5">Logo</Text>
                <Flex gap="4">
                    <Link to="/"><Button variant="ghost">Home</Button></Link>
                    <Button variant="ghost">Works</Button>
                    <Button variant="ghost">GitHub</Button>
                </Flex>
            </Flex>

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
