import Nav from '@/components/Nav';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link';
// Định nghĩa kiểu dữ liệu cho props (nếu có)
interface HeaderProps {
  // Nếu component không nhận bất kỳ prop nào, bạn có thể để trống {}
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <><NavigationMenu></NavigationMenu>
    </>
   
  );
}

export default Header;
