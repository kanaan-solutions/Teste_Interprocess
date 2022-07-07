import React from 'react';

import { Container, TopBar, Name } from './styles';

interface PageHeaderProps {
    title?: string;
    arrow?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, arrow }) => {
    return(
        <Container>
            <TopBar>
              {arrow && 
                <a href="/">
                    <img src="/back.svg" alt="Voltar"/>
                </a>
              }
                <a href="/">
                  <Name>{title}</Name>
                </a>
            </TopBar>      
        </Container>
    )
};

export default PageHeader;