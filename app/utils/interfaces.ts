import { ReactNode } from 'react';
export interface PageLayoutProps {
 children : ReactNode,
};

export interface BasicButtonProps{
    onClick?: () => Promise<void>,
    children:ReactNode;
    disabled?: boolean;
};

export interface TopNavbarProps {
    pageTitle:String;
};

export interface SidebarProps{
    isSidebarOpen:Boolean;
    pageTitle:String;
};

export interface ShowSentimentProps{
    animationData: any;
};
  
export interface DropdownCaretProps {
    isUp: boolean;
}

export interface TopNavDropdownProps{
    options : MenuOptionsInterface [];
    isDropdownOpen: boolean;
};
  
export interface MenuOptionsInterface {
    label : string,
    url?: string | URL,
    subOptions?: {label:string,url:string | URL}[]
};
