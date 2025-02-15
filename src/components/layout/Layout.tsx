import MainHeader from './MainHeader';
import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({children}: Props) => {
    return (
        <>
            <MainHeader/>
            <main>{children}</main>
        </>
    );
};

export default Layout;