import React from "react";
import styled from "styled-components";

export default function FooterComponent() {
  return (
    <MainDiv>
      <Logo src="/assets/learn-logo.svg" alt="" />
      <IconsDiv>
        <Button>
          <Icon src="assets/smile.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/insta.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/tiktok.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/twitter.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/youtube.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/linkedin.svg" alt="" />
        </Button>
        <Button>
          <Icon src="assets/fb.svg" alt="" />
        </Button>
      </IconsDiv>
      <Content>
        <H5>გამოყენების პირობები</H5>
        <H5>კონფიდენციალობის წესები</H5>
        <H5Light>© 2023 L-earn</H5Light>
      </Content>
    </MainDiv>
  );
}

const H5Light = styled.h5`
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
color: #181818;
opacity: 0.5;
`

const H5 = styled.h5`
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
color: #181818;
margin-bottom: 24px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`

const Button = styled.button`
    border: none;
    background: transparent;
    margin-right: 25px;
    width: 44px;
    margin-bottom: 35px;
`
const Icon = styled.img`
    height: 32px;
`

const IconsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 39px;
  
`;

const Logo = styled.img`
  width: 185.91px;
  height: 26.09px;
`;
const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0 40px 20px;
`;