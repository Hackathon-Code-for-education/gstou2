import styled from "styled-components";

export const HeaderMainPage = () => {
  return (
    <Content>
      <Wrapper>
        <Box>
          <Div3>
            <Div4>
              <Div5>Study</Div5>
              <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b510106f821b1d98a18ecc69dc2d67943e0bf03c32cee1ed708587a27a9aa910?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
              />
              <Div6>Moov</Div6>
            </Div4>
            <Div7>
              <Div8>
                <Div9>
                  <Div10>Услуги</Div10>
                  <Img2
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c334e52e528ed03bde4450a6d3565a9008354805344d1de04f11584fc2f7e41?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
                  />
                </Div9>
              </Div8>
              <Div11>
                <Div12>
                  <Div13>Страны</Div13>
                  <Img3
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c334e52e528ed03bde4450a6d3565a9008354805344d1de04f11584fc2f7e41?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
                  />
                </Div12>
              </Div11>
              <Div14>
                <Div15>
                  <Div16>Программы</Div16>
                  <Img4
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c334e52e528ed03bde4450a6d3565a9008354805344d1de04f11584fc2f7e41?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
                  />
                </Div15>
              </Div14>
              <Div17>
                <Div18>Контакты</Div18>
              </Div17>
            </Div7>
          </Div3>
        </Box>
        <Div21>
          <Div22>
            <Div23>
              <Div24>+7 495 284-44-23</Div24>
            </Div23>
          </Div22>
          <CallBack>Обратный звонок</CallBack>
          <Div26>
            <Img5
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d682cab6f94fba1bbc1e1130683bebea6fe33ae7be0648ecb69d1d473f8e51d5?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d682cab6f94fba1bbc1e1130683bebea6fe33ae7be0648ecb69d1d473f8e51d5?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d682cab6f94fba1bbc1e1130683bebea6fe33ae7be0648ecb69d1d473f8e51d5?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d682cab6f94fba1bbc1e1130683bebea6fe33ae7be0648ecb69d1d473f8e51d5?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d682cab6f94fba1bbc1e1130683bebea6fe33ae7be0648ecb69d1d473f8e51d5?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d682cab6f94fba1bbc1e1130683bebea6fe33ae7be0648ecb69d1d473f8e51d5?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d682cab6f94fba1bbc1e1130683bebea6fe33ae7be0648ecb69d1d473f8e51d5?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d682cab6f94fba1bbc1e1130683bebea6fe33ae7be0648ecb69d1d473f8e51d5?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
            />
            <Div27>
              <Div28 />
            </Div27>
          </Div26>
        </Div21>
      </Wrapper>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
`;

const Wrapper = styled.div`
background-color: black;
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
  margin-top: 7px;
  flex-direction: column;
  color: #fff;
  padding: 0 20px;
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
  font-size: 26px;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div5 = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  flex-grow: 1;
`;

const Img = styled.img`
  aspect-ratio: 0.7;
  object-fit: auto;
  object-position: center;
  width: 7px;
  stroke-width: 2.5px;
  stroke: #1894ff;
  border-color: rgba(24, 148, 255, 1);
  border-style: solid;
  border-width: 3px;
  margin: auto 0;
`;

const Div6 = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
`;

const Div7 = styled.div`
  display: flex;
  padding-right: 80px;
  gap: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const Div8 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div9 = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div10 = styled.div`
  font-family: Inter, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 0.36;
  object-fit: auto;
  object-position: center;
  width: 10px;
`;

const Div11 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div12 = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div13 = styled.div`
  font-family: Inter, sans-serif;
`;

const Img3 = styled.img`
  aspect-ratio: 0.36;
  object-fit: auto;
  object-position: center;
  width: 10px;
`;

const Div14 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div15 = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div16 = styled.div`
  font-family: Inter, sans-serif;
`;

const Img4 = styled.img`
  aspect-ratio: 0.36;
  object-fit: auto;
  object-position: center;
  width: 10px;
`;

const Div17 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div18 = styled.div`
  font-family: Inter, sans-serif;
  justify-content: center;
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

const Div22 = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  text-align: right;
  line-height: 28px;
  padding: 8px 0;
`;

const Div23 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div24 = styled.div`
  font-family: Inter, sans-serif;
  justify-content: center;
`;

const CallBack = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #2047b6;
  color: #fff;
  text-align: center;
  justify-content: center;
  padding: 12px 16px;
  font: 600 16px Inter, sans-serif;
`;

const Div26 = styled.div`
  disply: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 1.42;
  width: 61px;
  padding: 8px 0;
`;

const Img5 = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div27 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div28 = styled.div`
  height: 28px;
`;

