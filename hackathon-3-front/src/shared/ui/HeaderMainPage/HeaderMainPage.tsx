import styled from "styled-components";
import { MainPageLanguageSelectable } from "../Selectable/MainPageLanguageSelectable";
import { MainPageServiceSelectable } from "../Selectable/MainPageServiceSelectable";
import { MainPageCountrySelectable } from "../Selectable/MainPageCountrySelectable";
import { MainPageProgramsSelectable } from "../Selectable/MainPageProgramsSelectable";

export const HeaderMainPage = () => {
  return (
    <Content>
      <Wrapper>
        <Box>
          <Div3>
            <Div4>
              <LogoText>Gentalmen</LogoText>
              {/* <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b510106f821b1d98a18ecc69dc2d67943e0bf03c32cee1ed708587a27a9aa910?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
              /> */}
            </Div4>
            <Div7>
              <MainPageServiceSelectable />
              <MainPageCountrySelectable />
              <MainPageProgramsSelectable />
              <ContactsDiv>Контакты</ContactsDiv>
            </Div7>
          </Div3>
        </Box>
        <Div21>
          <NumberDiv>+7 495 284-44-23</NumberDiv>
          <CallBack>Обратный звонок</CallBack>
          <MainPageLanguageSelectable />
        </Div21>
      </Wrapper>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  margin: auto;
  color: red;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  display: flex;
  gap: 20px;
  white-space: nowrap;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const Div4 = styled.div`
  display: flex;
  gap: 4px;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LogoText = styled.div`
  flex-grow: 1;
  color: #1677ff;
  font-size: 40px;
  margin-right: 15px
`;

const Div7 = styled.div`
  display: flex;
  padding-right: 80px;
  gap: 20px;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const ContactsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1677ff;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div21 = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;


const NumberDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1677ff;
  cursor: pointer
`;

const CallBack = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #1677ff;
  
  color: #fff;
  text-align: center;
  justify-content: center;
  padding: 12px 16px;
  cursor: pointer
`;

