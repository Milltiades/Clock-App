import React, { useState } from "react";
import styled from "styled-components";

export default function MainComponent() {

    const [isMore, setIsMore] = useState(false);


  return (
    <Background>
      <Img src="/assets/mobile/bg-image-daytime.jpg" alt="" />
      <GrayDiv />

      <Content>
        <Text display={isMore? "none" : "flex"}>
          <DivP>
            <P1>
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </P1>
            <P2>Ada Lovelace</P2>
          </DivP>

          <ButtonRefresh>
            <RefreshImg src="/assets/desktop/icon-refresh.svg" alt="" />
          </ButtonRefresh>
        </Text>
        <AllPosit top={isMore? "-157px" : "0"}>
        <Clock>
          <ClockHeader>
            <ClockImg src="/assets/desktop/icon-sun.svg" alt="" />
            <ClockHeaderP>GOOD MORNING</ClockHeaderP>
          </ClockHeader>
          <Time>
            <TimeNum>11:37</TimeNum>
            <TimeZone>BST</TimeZone>
          </Time>
          <Location>
            <LocationP>IN LONDON, UK</LocationP>
          </Location>
        </Clock>
        <More>
          <MoreButton onClick={() => setIsMore(!isMore)}>
            <MoreP>{isMore? "less" : "more"}</MoreP>
            <Circle>
              <img src={isMore ? "/assets/desktop/icon-arrow-up.svg" :"/assets/desktop/icon-arrow-down.svg"} alt="" />
            </Circle>
          </MoreButton>
          <MoreDiv display={isMore? "column" : "none"}>
            <MoreDivUnder>
              <MoreDivUnder1>
                <MoreDivP1>CURRENT TIMEZONE</MoreDivP1>
                <MoreDivP2>Europe/London</MoreDivP2>
              </MoreDivUnder1>
              <MoreDivUnder1>
                <MoreDivP1>Day of the year</MoreDivP1>
                <MoreDivP2>295</MoreDivP2>
              </MoreDivUnder1>
            </MoreDivUnder>
            <MoreDivUnder>
              <MoreDivUnder1>
                <MoreDivP1>Day of the week</MoreDivP1>
                <MoreDivP2>5</MoreDivP2>
              </MoreDivUnder1>
              <MoreDivUnder1>
                <MoreDivP1>Week number</MoreDivP1>
                <MoreDivP2>42</MoreDivP2>
              </MoreDivUnder1>
            </MoreDivUnder>
          </MoreDiv>
        </More>
        </AllPosit>
      </Content>
    </Background>
  );
}

const AllPosit = styled.div<any>`
    position: relative;
  top: ${(props) => props.top}
`

const RefreshImg = styled.img`
    width: 16.67px;
    height: 16.67px
`
const MoreDivUnder1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;
const MoreDivUnder = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreDiv = styled.div<any>`
display: ${(props) => props.display};
overflow: hidden;
  padding: 40px 26px;
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  
  backdrop-filter: blur(20.3871px);
`;
const MoreDivP1 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #303030;
`;

const MoreDivP2 = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  text-align: right;
  color: #303030;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  background: #303030;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoreP = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 3.75px;
  text-transform: uppercase;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-right: 15px;
`;

const More = styled.div`
  margin-top: 48px;
  overflow: hidden;
 
`;

const MoreButton = styled.button`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-radius: 28px;
  padding: 3px 4px 4px 17px;
  border: none;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 26px;
`;

const Location = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;
const LocationP = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  align-items: flex-end;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffffff;
`;

const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 16px;
`;

const Clock = styled.div`
  width: 100%;
  margin-top: 228px;
  display: flex;
  flex-direction: column;
  padding: 0 71px 0 26px;
`;

const TimeNum = styled.p`
  font-weight: 700;
  font-size: 100px;
  line-height: 100px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -2.5px;
  color: #ffffff;
  margin-right: 5px;
`;

const TimeZone = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: #ffffff;
`;

const ClockHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ClockHeaderP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffffff;
`;
const ClockImg = styled.img`
  width: 23.56px;
  height: 23.56px;
  margin-right: 16.44px;
`;

const GrayDiv = styled.div`
  background: #000000;
  width: 100%;

  height: 667px;
  position: absolute;
  top: 0;
  opacity: 0.4;
  z-index: 0;
`;

const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -5;
  height: 667px;
`;
const Background = styled.div`
  width: 100%;
  height: 667px;
  overflow: hidden;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  padding: 31.67px 0 0 0;
  z-index: 5;
  overflow: hidden;
  width: 100%;
`;

const Text = styled.div<any>`
  display: ${(props) => props.display};
  flex-direction: row;
  align-items: flex-start;
  padding: 0 0 0 26px;
  justify-content: space-between;
  width: 100%;
 
`;

const DivP = styled.div`
  display: flex;
  flex-direction: column;
  width: 77.333%;
`;

const P1 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
 
`;

const P2 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 8px;
`;

const ButtonRefresh = styled.button`
  border: none;
  background: transparent;
  margin-right: 25.67px;
`;
