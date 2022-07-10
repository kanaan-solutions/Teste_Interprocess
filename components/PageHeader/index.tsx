import React from 'react';

import { Container, TopBar, Name } from './styles';
import { IPageHeaderProps } from "../../utils/Interfaces";

const PageHeader: React.FC<IPageHeaderProps> = ({ title, arrow }) => {
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