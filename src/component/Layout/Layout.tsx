import React from "react";
import NavBar from "../NavBar/NavBar";


type LayoutProps = {
  children: JSX.Element
};
export const Layout: React.FC<LayoutProps> = ({children}) => {
	return (
		<>
			<NavBar />
			<main>{children}</main>
		</>
	);
}
 
export default Layout;