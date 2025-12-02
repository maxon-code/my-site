import {Flex, TabNav, Text} from "@radix-ui/themes";
import {FileTextIcon, GitHubLogoIcon, HomeIcon} from "@radix-ui/react-icons";
import "./main/App.css"
import "@radix-ui/themes/styles.css";
export function Navigation() {
   return (
       <Flex justify="between" align="center" className="Header" >
    <Text size={{initial: "4",sm: "5", md: "6"}} weight="bold">site.</Text>

           <Flex className="nav-container">
               <TabNav.Root color="lime" size={{initial: "1", sm: "2"}} >

    <TabNav.Link href="/" active>
        <HomeIcon/>
        <span className="nav-text">Home</span>
    </TabNav.Link>

    <TabNav.Link href="/#works" >
        <FileTextIcon/>
        <span className="nav-text">Works</span>
    </TabNav.Link>

    <TabNav.Link href="https://github.com/maxon-code">
         <GitHubLogoIcon  />
        <span className="nav-text">GitHub</span>
    </TabNav.Link>

    </TabNav.Root>
           </Flex>
    </Flex>
   );
}