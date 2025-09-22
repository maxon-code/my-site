import './App.css'
import {Button, Box, Card, Inset, Text, Strong, Flex, Heading, Avatar, Blockquote, Badge} from "@radix-ui/themes";

import * as HoverCard from "@radix-ui/react-hover-card";

import "@radix-ui/themes/styles.css";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation.tsx";
import { RenderCards } from "../Cards.tsx"
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
            route: "/weather-app",
            gurl: "https://github.com/maxon-code/weather-app",
        },
        {
            image: "img3.svg",
            name: "Store",
            text: "Buy products on this website",
            route: "/shop",
            gurl: "https://github.com/maxon-code/react-shop",
        },
    ];



    const renderWorks = works.map((work, index) => (
        <Box key={index} width="240px">
            <Card size="4" >
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        alt="Img"
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
                        <Button size="2" className="hvr-grow">Visit site</Button>

                    </Link>

                <a href={work.gurl} style={{ marginLeft: "60px" }} className="hvr-grow">
                   <GitHubLogoIcon width="24" height="24" color="white" />
                </a>
                </Flex>
            </Card>
        </Box>
    ));

    return (
        <>


            <Flex height="100px" border radius="full">
            <Navigation />
            </Flex>


            <Flex gap="9" justify="space-between" border radius="large"  m="220px" >

                <Box width="300px" height="200px" mt="9">
                    <Avatar src="/public/591.jpg" alt="Profile" style={{ width: "100%", height: "100%" }}/>
                </Box>


                <Box width="100%" height="100%" >
                    <Heading weight="light" size="9" align="right" color="lime" wrap="balance" radius="full" >
                        About me
                    </Heading>
                    <Blockquote size="5" weight="light" align="right" wrap="balance">
                        Hi, I’m a Frontend Developer. I build modern websites and apps with React, Next.js, and
                        Radix UI — focusing on clean design and smooth user experience.
                        <br />
                        <br />
                        I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm
                        not coding, I like to explore new technologies, design trends, and spend time in nature.
                        <br />
                        <br />
                        This text block is intentionally long to create a scrollable area on the right, so you can
                        see the ScrollArea effect in action.
                    </Blockquote>
                </Box>
            </Flex>




            <Flex m="9">

                <RenderCards/>
            </Flex>


            <Flex gap="9" direction="row" wrap="wrap" align="center" justify="center" p="9" m="3">
                <Heading weight="bold" color="lime" align="center" size="9" className="typing-text"> My works </Heading>
                </Flex>
            <Flex gap="2" direction="row" wrap="wrap" align="center" justify="center" p="9">

                {renderWorks}
            </Flex>






        </>
    );
}

export default Home;
