import './main/App.css'
import {Button, Box, Card, Inset, Text, Strong, Flex, Heading, Avatar, Blockquote, Badge} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {GitHubLogoIcon, RocketIcon, CheckIcon, GlobeIcon, LightningBoltIcon, PersonIcon} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation.tsx";


export function RenderCards() {
    const Cards = [
        {
            MainText: "Fast Learner",
            Texts: "I quickly adapt to new technologies and frameworks, always eager to improve my skills.",
            Icon: <RocketIcon />,
        },
        {
            MainText: "Strong Work Ethic",
            Texts: "I am responsible, disciplined, and focused on delivering results on time.",
            Icon: <CheckIcon />,
        },
        {
            MainText: "English Proficiency",
            Texts: "Fluent in English, which allows me to read documentation, learn from global resources, and communicate with international teams.",
            Icon: <GlobeIcon />,
        },
        {
            MainText: "Problem-Solving",
            Texts: "I can break down complex problems into smaller tasks and find efficient solutions.",
            Icon: <LightningBoltIcon />,
        },
        {
            MainText: "Team Collaboration",
            Texts: "I enjoy working in a team, sharing ideas, and supporting colleagues to achieve common goals.",
            Icon: <PersonIcon />,
        },
        {
            MainText: "Passion for Coding",
            Texts: "Programming is not just a job for me — I love creating, experimenting, and constantly learning.",
            Icon: <GitHubLogoIcon />,
        },
    ];




    return (
        <Flex gap="9" direction="row" wrap="wrap" align="center" justify="center" className="card-list">
            {Cards.map((card, i) => (
                <Box key={i} width="500px" >
                    <Card asChild size="3" width="100%" height="100%" className="carde">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <Text as="div" size="2" weight="bold">
                                {card.Icon} {card.MainText}
                            </Text>
                            <Text as="div" color="gray" size="2">
                                {card.Texts}
                            </Text>
                        </a>
                    </Card>
                </Box>
            ))}
        </Flex>

    )
}

