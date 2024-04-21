import * as React from "react";
import styled from "styled-components";

export const DormitoryPage = () => {
  return (
    <Div>
      <Div2>Other Projects</Div2>
      <Div3>Other Projects</Div3>
      <Div4>
        <Div5>
          <Column>
            <Div6>
              <Div7>
                <Div8>
                  <Img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d2132178c248dcd5b16de50f4ec5967302bf521875f21928cd8a020c902d6b3?"
                  />
                  <Div9>CRM</Div9>
                </Div8>
                <Div10>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d2132178c248dcd5b16de50f4ec5967302bf521875f21928cd8a020c902d6b3?"
                  />
                  <Div11>Healthcare</Div11>
                </Div10>
              </Div7>
              <Div12>Meda</Div12>
              <Div13>
                Interactive & educational application with indoor navigation for
                a dental clinic. Using QR Marke’s customer can get information
                on doctors. cabinets, teatment, care & some useful advice. For
                the kids department, this will be the same type of information
                but in interactive & funny ways (using colorful animarion).
              </Div13>
              <Div14>
                <Div15>View project</Div15>
                <Img3
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/283c8ac47dd9b75edfd0cdd5097f87e8d3cc8f4090d6b2c32eb1c12fa412722c?"
                />
              </Div14>
            </Div6>
          </Column>
          <Column2>
            <Img4
              loading="lazy"
              src="https://lh5.googleusercontent.com/proxy/-Tjgdvay8JySNQsTiEk3P2Y_gSL-A6icnqnmRscx5xhErSRUEvSzrB_6blt2_ItPk5hgy-7TLwcLZx4kI43orAac5OjO_sIv0PtcLkNPwoCLQS3KSlIWfsaxkPiBceIQUBYBb9t4MAiOJPC8Hg"
            />
          </Column2>
        </Div5>
      </Div4>
      <Img5
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ded0e5f8c12d6cfa121cf11e7f27299b8183d77f9cf9b814225ec73009fc59?"
      />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Div2 = styled.div`
  color: var(--White, #fff);
  width: 100%;
  font: 700 52px RoadRadio, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Div3 = styled.div`
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #1a1a1a;
  border-color: rgba(26, 26, 26, 1);
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  width: 100%;
  font: 700 100px RoadRadio, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Div4 = styled.div`
  margin-top: 76px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div5 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div6 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 17px;
  color: var(--Text-color, #b6b6b6);
  font-weight: 700;
  line-height: 100%;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div7 = styled.div`
  align-self: start;
  display: flex;
  gap: 20px;
  font-size: 14px;
  white-space: nowrap;
  justify-content: space-between;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  display: flex;
  gap: 7px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.33;
  object-fit: auto;
  object-position: center;
  width: 24px;
  stroke-width: 1.5px;
  stroke: var(--Text-color, #b6b6b6);
  border-color: rgba(182, 182, 182, 1);
  border-style: solid;
  border-width: 2px;
`;

const Div9 = styled.div`
  font-family: RoadRadio, sans-serif;
  margin: auto 0;
`;

const Div10 = styled.div`
  display: flex;
  gap: 7px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div11 = styled.div`
  font-family: RoadRadio, sans-serif;
  margin: auto 0;
`;

const Div12 = styled.div`
  color: var(--White, #fff);
  margin-top: 29px;
  font: 42px Gilroy, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div13 = styled.div`
  font-family: Gilroy, sans-serif;
  font-weight: 500;
  line-height: 26px;
  margin-top: 37px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div14 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 38px;
  gap: 9px;
  color: var(--Yellow, #fddd0a);
  font-weight: 400;
`;

const Div15 = styled.div`
  font-family: RoadRadio, sans-serif;
  flex-grow: 1;
`;

const Img3 = styled.img`
  aspect-ratio: 0.91;
  object-fit: auto;
  object-position: center;
  width: 10px;
  stroke-width: 1.5px;
  stroke: var(--Yellow, #fddd0a);
  border-color: rgba(253, 221, 10, 1);
  border-style: solid;
  border-width: 2px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 59%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1.82;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

const Img5 = styled.img`
  aspect-ratio: 16.67;
  object-fit: auto;
  object-position: center;
  width: 1094px;
  margin-top: 52px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;


