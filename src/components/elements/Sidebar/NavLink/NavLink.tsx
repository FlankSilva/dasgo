import { ElementType } from "react";
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string
}

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => (
  <Link display="flex" alignItems="center" {...rest}>
    <Icon as={icon} fontSize="20"/>
    <Text ml="4" fontWeight="medium">{children}</Text>
  </Link>
)