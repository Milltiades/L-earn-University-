import React from "react";
import styled from "styled-components";

export default function CoursesComponent() {
  return (
    <MainDiv>
      <H1>კურსები</H1>
      <CoursesDiv>
        <Course1>
          <Img src="/assets/tradingnew.svg" alt="" />
          <H3>Trading</H3>
        </Course1>
        <Course2>
          <Img src="/assets/cryptonew.svg" alt="" />
          <H3>Crypto & NFTs</H3>
        </Course2>
        <Course3>
          <Img src="/assets/aitoolsnew.svg" alt="" />
          <H3>AI Tools</H3>
        </Course3>
        <Course4>
          <Img src="/assets/copywriting.svg" alt="" />
          <H3>Copywriting</H3>
        </Course4>
        <Course5>
          <Img src="/assets/ecommerce.svg" alt="" />
          <H3>Ecommerce</H3>
        </Course5>
        <Course6>
          <Img src="/assets/marketing.svg" alt="" />
          <H3>Marketing/Advertising </H3>
        </Course6>
        <Course7>
          <Img src="/assets/video.svg" alt="" />
          <H3>Video - Photo Editing</H3>
        </Course7>
      </CoursesDiv>
    </MainDiv>
  );
}

const H3 = styled.h3`
  margin-top: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #181818;
  @media (min-width: 767px){
    margin-top: 16px;
  }
  @media (min-width: 1200px){
    margin-top: 24px;
  }
`;

const CoursesDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 24px;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: #181818;
  margin-left: 20px;
  @media (min-width: 767px) {
    margin-left: 0;
    font-size: 32px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px;
  @media (min-width: 767px) {
    padding: 80px 40px 0 40px;
  }
  @media (min-width: 1200px) {
    padding: 100px 80px 0 80px;
  }
`;

const Course1 = styled.div`
  width: 50%;
  height: 135.4px;
  border-right: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 767px) {
  
  justify-content: center;

width: 25%;
height: 198px;
  }
`;
const Course2 = styled(Course1)`
  border-right: 0px solid #d1d1d1;
  @media (min-width: 767px){
    border-right: 1px solid #d1d1d1;
  }
`;

const Course3 = styled.div`
  width: 50%;
  height: 180px;
  border-bottom: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 767px) {

width: 25%;
height: 198px;
  }
`;

const Course4 = styled(Course3)`
  border-right: 0px solid #d1d1d1;
  @media (min-width: 767px) {
    width: 25%;
height: 198px;
  }
  

`;
const Course5 = styled(Course3)`
@media (min-width: 767px) {
  
width: 33.333333%;
height: 198px;
border-bottom: 0px solid #d1d1d1;
}


`;
const Course6 = styled(Course4)`

@media (min-width: 767px) {
  border-right: 1px solid #d1d1d1;
width: 33.333333%;
height: 198px;
border-bottom: 0px solid #d1d1d1;
}
`;

const Course7 = styled.div`
  width: 100%;
  height: 176px;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
@media (min-width: 767px) {
  
width: 33.333333%;
height: 198px;
border-bottom: 0px solid #d1d1d1;
}
`;
const Img = styled.img`
  opacity: 100;
  @media (min-width: 1200px) {
    width: 80px;
    height: 80px;
  }
`;
