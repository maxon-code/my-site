import {Flex, TabNav, Text} from "@radix-ui/themes";
import {GitHubLogoIcon, HomeIcon} from "@radix-ui/react-icons";
import "./main/App.css"
import "@radix-ui/themes/styles.css";
export function Navigation() {
   return (
       <Flex justify="between" align="center" className="Header" >
    <Text size="6" weight="bold">Logo</Text>

           <Flex mr="5">
        <TabNav.Root color="lime" size="2" >
    <TabNav.Link href="/" active><HomeIcon style={{ marginRight: "5px", marginTop: "1px"}}/>Home</TabNav.Link>
    <TabNav.Link href="/works" >Works</TabNav.Link>
        <TabNav.Link href="https://github.com/maxon-code"> <GitHubLogoIcon style={{ marginRight: "5px", marginTop: "1px"}} /> GitHub</TabNav.Link>
    </TabNav.Root>
           </Flex>
    </Flex>
   );
}