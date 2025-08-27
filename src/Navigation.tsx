import {Flex, TabNav, Text} from "@radix-ui/themes";
import {GitHubLogoIcon, HomeIcon} from "@radix-ui/react-icons";
import "./App.css"
export function Navigation() {
   return (
       <Flex justify="between" align="center" className="Header" >
    <Text size="5" weight="bold">Logo</Text>

        <TabNav.Root color="lime">
    <TabNav.Link href="/" active><HomeIcon style={{ marginRight: "4px" }}/>Home</TabNav.Link>
    <TabNav.Link href="/documents">Works</TabNav.Link>
        <TabNav.Link href="https://github.com/maxon-code"> <GitHubLogoIcon style={{ marginRight: "4px" }} /> GitHub</TabNav.Link>
    </TabNav.Root>
    </Flex>
   );
}