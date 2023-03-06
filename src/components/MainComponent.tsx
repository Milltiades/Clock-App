import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function MainComponent() {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [isNight, setIsNight] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [ip, setIp] = useState<any>("");
  const [location, setLocation] = useState<any>("");
  const [isCity, setIsCity] = useState<any>("");
  const [time, setTime] = useState<any>("");
  const Quotes = async () => {
    await axios
      .get(`https://api.quotable.io/random`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  const GetIp = async () => {
    await axios
      .get("https://api.ipify.org/?format=json")
      .then((response) => setIp(response.data.ip))
      .catch((error) => console.log(error));
  };

  const getLocation = async () => {
    try {
      let resLocation = await axios.get(
        `https://worldtimeapi.org/api/timezone/Asia/Tbilisi`
      );

      let dataLocation = resLocation.data;

      setLocation(dataLocation);
    } catch (error) {
      console.log(error);
    }
  };

  const clockNow = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    setTime(`${hours}:${minutes}`);
  };

  setInterval(clockNow, 100);

  const getCity = async () => {
    await axios
      .get(`https://ipinfo.io/[${ip}]?token=44f9b6a5c062a8`)
      .then((response) => setIsCity(response.data))
      .catch((error) => console.log(error));
  };

  const DayTime = () => {
    const date = new Date();
    const Hours = date.getHours();
    if (Hours > 7 && Hours < 19) {
      setIsNight(false);
    } else {
      setIsNight(true);
    }
    console.log(Hours);
  };

  useEffect(() => {
    Quotes();
    GetIp();
    getLocation();
    getCity();
    DayTime();
  }, []);

  console.log(isCity.city)
  console.log(isCity.country)
  return (
    <Background>
      <Img
        src={
          isNight
            ? window.innerWidth < 768
              ? "/assets/mobile/bg-image-nighttime.jpg"
              : window.innerWidth > 1200
              ? "/assets/desktop/bg-image-nighttime.jpg"
              : "/assets/tablet/bg-image-nighttime.jpg"
            : window.innerWidth < 768
            ? "/assets/mobile/bg-image-daytime.jpg"
            : window.innerWidth > 1200
            ? "/assets/desktop/bg-image-daytime.jpg"
            : "/assets/tablet/bg-image-daytime.jpg"
        }
        alt=""
      />

      <GrayDiv />

      <Content>
        <Text display={isMore ? "none" : "flex"}>
          <DivP>
            <P1>{data?.content}</P1>
            <P2>{data?.author}</P2>
          </DivP>

          <ButtonRefresh
            onClick={() => {
              Quotes();
            }}
          >
            <RefreshImg src="/assets/desktop/icon-refresh.svg" alt="" />
          </ButtonRefresh>
        </Text>
        <AllPosit top={isMore ? (window.innerWidth < 768 ? "-147px" : window.innerWidth > 1200 ? "-130px" : "-342px") : "0"}>
          <MainDivFull>
          
          <Clock>
            <ClockHeader>
              <ClockImg
                src={
                  isNight
                    ? "/assets/desktop/icon-moon.svg"
                    : "/assets/desktop/icon-sun.svg"
                }
                alt=""
              />
              <ClockHeaderP>
                {isNight
                  ? window.innerWidth > 767
                    ? "GOOD EVENING, IT’S CURRENTLY"
                    : "GOOD EVENING"
                  : window.innerWidth > 767
                  ? "GOOD MORNING, IT’S CURRENTLY"
                  : "GOOD MORNING"}
              </ClockHeaderP>
            </ClockHeader>
            <Time>
              <TimeNum>{time}</TimeNum>
              <TimeZone>{isCity.country}</TimeZone>
            </Time>
            <Location>
              <LocationP>
                IN {isCity.city} , {isCity.country}
              </LocationP>
            </Location>
          </Clock>
          <More>
            <MoreButton onClick={() => setIsMore(!isMore)}>
              <MoreP>{isMore ? "less" : "more"}</MoreP>
              <Circle>
                <img
                  src={
                    isMore
                      ? "/assets/desktop/icon-arrow-up.svg"
                      : "/assets/desktop/icon-arrow-down.svg"
                  }
                  alt=""
                />
              </Circle>
            </MoreButton>
            
          </More>
          </MainDivFull>
          <MoreDiv
              display={isMore ? (window.innerWidth < 767 ? "column" : "flex") : "none"}
              background={
                isNight ? "rgba(0, 0, 0, 0.75)" : "rgba(255, 255, 255, 0.75)"
              }
            >
              <MoreDivUnder>
                <MoreDivUnder1>
                  <MoreDivP1 color={isNight ? "#FFFFFF" : "#303030"}>
                    CURRENT TIMEZONE
                  </MoreDivP1>
                  <MoreDivP2 color={isNight ? "#FFFFFF" : "#303030"}>
                    {location.timezone}
                  </MoreDivP2>
                </MoreDivUnder1>
                <MoreDivUnder1>
                  <MoreDivP1 color={isNight ? "#FFFFFF" : "#303030"}>
                    Day of the year
                  </MoreDivP1>
                  <MoreDivP2 color={isNight ? "#FFFFFF" : "#303030"}>
                    {location.day_of_year}
                  </MoreDivP2>
                </MoreDivUnder1>
              </MoreDivUnder>
              
              <Inline display={window.innerWidth < 1200 ? "none" : "block"}/>
              <MoreDivUnder >
              
                <MoreDivUnder1>
                  <MoreDivP1 color={isNight ? "#FFFFFF" : "#303030"}>
                    Day of the week
                  </MoreDivP1>
                  <MoreDivP2 color={isNight ? "#FFFFFF" : "#303030"}>
                    {location.day_of_week}
                  </MoreDivP2>
                </MoreDivUnder1>
                <MoreDivUnder1>
                  <MoreDivP1 color={isNight ? "#FFFFFF" : "#303030"}>
                    Week number
                  </MoreDivP1>
                  <MoreDivP2 color={isNight ? "#FFFFFF" : "#303030"}>
                    {location.week_number}
                  </MoreDivP2>
                </MoreDivUnder1>
              </MoreDivUnder>
              
            </MoreDiv>
        </AllPosit>
      </Content>
    </Background>
  );
}
const LastOne = styled.div`
  
`

const Inline = styled.div<any>`
  width: 1px;
  height: auto;
  background: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.25;
display: ${(props) => props.display};
transform: translateX(50px);

`
const MainDivFull = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  
  @media (width > 1200px) {
      display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
  }
`
const AllPosit = styled.div<any>`
  position: relative;
  top: ${(props) => props.top};
  overflow: visible;
  /* @media (width > 1200px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
  } */
`;

const RefreshImg = styled.img`
  width: 16.67px;
  height: 16.67px;
`;
const MoreDivUnder1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  @media (width > 767px) {
    flex-direction: column;
   margin-bottom: 49px;
  }
  @media (width > 1200px) {
    margin-top: 42px;
  }
`;
const MoreDivUnder = styled.div<any>`
  display: flex;
  flex-direction: column;
  @media (width > 767px) {
    flex-direction: column;
     
  }

  
`;



const MoreDiv = styled.div<any>`
  display: ${(props) => props.display};
  /* overflow: hidden; */
  padding: 40px 26px;
  width: 100%;
  background: ${(props) => props.background};
  height: 60vh;
  backdrop-filter: blur(20.3871px);
  @media (width > 767px) {
    padding: 119px 168px 71px 64px;
    justify-content: space-between;
    flex-direction: row;
  }
  @media (width > 1200px) {
   padding: 74px 434px 164px  165px;
   width: 100%;
   
  }
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
  color: ${(props) => props.color};
  @media (width > 767px) {
    font-size: 13px;
    line-height: 28px;
    letter-spacing: 2.6px;
    align-self: flex-start
  }
  @media (width > 1200px) {
    font-size: 15px;
line-height: 28px;
letter-spacing: 3px;
  }
`;

const MoreDivP2 = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  text-align: right;
  color: ${(props) => props.color};
  @media (width > 767px) {
    font-size: 40px;
    line-height: 48px;
    align-self: flex-start
  }
  @media (width > 1200px) {
    font-size: 56px;
line-height: 68px;
margin-top: 9px;
  }
`;

const Circle = styled.div<any>`
  width: 32px;
  height: 32px;
  background: #303030;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (width > 767px) {
    width: 40px;
    height: 40px;
  }
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
  @media (width > 767px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const More = styled.div`
  margin-top: 48px;
  /* overflow: hidden; */
  @media (width > 767px) {
    margin-top: 88px;
  }
  @media (width > 1200px) {
    /* width: 10%; */
    margin-bottom: 98px;
    margin-right: 165px;
  }
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
  &:hover div {
    background-color: #999999;
  }

  @media (width > 767px) {
    margin-bottom: 64px;
    margin-left: 64px;
    padding: 8px 9px 8px 21px;
  }
  @media (width > 1200px) {
   align-self: flex-end;
    margin: 0;
    

  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  @media (width > 767px) {
    margin-top: 0;
  }
  @media (width > 1200px) {
    margin-top: 16px;
  }
`;
const LocationP = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  align-items: flex-end;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffffff;
  @media (width > 767px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 3.6px;
  }
  @media (width > 1200px) {
    font-size: 24px;
line-height: 28px;
letter-spacing: 4.8px;
  }
 
`;

const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 16px;
  width: 100%;
  @media (width > 767px) {
    margin-top: 0;
  }
  @media (width > 1200px) {
    margin-top: 16px;
  }
`;

const Clock = styled.div`
  width: 100%;
  margin-top: 228px;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 26px;
  @media (width > 767px) {
    padding: 0 0 0 64px;
    margin-top: 388px;
  }
  @media (width > 1200px) {
margin-top: 233px;
width: 60%;
margin-bottom: 98px;
padding: 0;
margin-left: 165px;
  }
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
  width: calc(100% -55px);
  @media (width > 767px) {
    font-size: 175px;
    line-height: 175px;
    letter-spacing: -4.375px;
    margin-right: 12px;
  }
  @media (width > 1200px) {
font-size: 200px;
line-height: 200px;
letter-spacing: -5px;
margin-right: 11px;
  }
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
  @media (width > 767px) {
    font-size: 32px;
    line-height: 28px;
    transform: translateY(-20px);
  }
  @media (width > 1200px) {
    font-size: 40px;
line-height: 28px;
transform: translateY(-25px);
  }
  
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
  @media (width > 767px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    letter-spacing: 3.6px;
  }
  @media (width > 1200px) {
    font-size: 20px;
line-height: 28px;
letter-spacing: 4px;
  }
`;
const ClockImg = styled.img`
  width: 23.56px;
  height: 23.56px;
  margin-right: 16.44px;
`;

const GrayDiv = styled.div`
  background: #000000;
  width: 100%;

  /* height: 667px; */
  height: 100vh;
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
  /* height: 667px; */
  height: 100vh;
`;
const Background = styled.div`
  width: 100%;
  /* height: 667px; */
  height: 100vh;
  overflow: hidden;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  padding: 31.67px 0 0 0;
  z-index: 5;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media (width > 767px) {
    padding: 80px 0 0 0;
  }
  @media (width > 1200px) {
    padding: 56px 0 0 0;
  }
`;

const Text = styled.div<any>`
  display: ${(props) => props.display};
  flex-direction: row;
  align-items: flex-start;
  padding: 0 0 0 26px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (width > 767px) {
    padding: 0 132px 0 64px;
  }
  @media (width > 1200px) {
    width: 50%;
    padding: 0 0 0 165px;
    
  }
`;

const DivP = styled.div`
  display: flex;
  flex-direction: column;
  width: 77.333%;
  height: auto;
  @media (width > 767px) {
    width: 100%;
    margin-right: 15.67px;
  }
`;

const P1 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: flex-start;
  color: #ffffff;
  height: 100%;
  @media (width > 767px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
`;

const P2 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 8px;
  height: auto;
  align-items: flex-start;
  @media (width > 767px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const ButtonRefresh = styled.button`
  border: none;
  background: transparent;
  margin-right: 25.67px;
`;
