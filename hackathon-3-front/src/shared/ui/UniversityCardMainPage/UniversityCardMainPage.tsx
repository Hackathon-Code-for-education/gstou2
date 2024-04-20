import * as React from 'react';
import styled from 'styled-components';

interface UniversityCardProps {
  universityName: string;
  location: string;
  backgroundImage?: string;
}

export const UniversityCardMainPage: React.FC<UniversityCardProps> = ({
  universityName,
  location,
  backgroundImage,
}) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        {backgroundImage ? (
          <BackgroundImage src={backgroundImage} alt="sadas" />
        ) : (
          <Img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/08da7a15c6dc4d3d58b61d3f90a1c2649b6a7a21f876606ef4a98d08c1636d73?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/08da7a15c6dc4d3d58b61d3f90a1c2649b6a7a21f876606ef4a98d08c1636d73?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08da7a15c6dc4d3d58b61d3f90a1c2649b6a7a21f876606ef4a98d08c1636d73?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/08da7a15c6dc4d3d58b61d3f90a1c2649b6a7a21f876606ef4a98d08c1636d73?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/08da7a15c6dc4d3d58b61d3f90a1c2649b6a7a21f876606ef4a98d08c1636d73?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08da7a15c6dc4d3d58b61d3f90a1c2649b6a7a21f876606ef4a98d08c1636d73?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/08da7a15c6dc4d3d58b61d3f90a1c2649b6a7a21f876606ef4a98d08c1636d73?apiKey=e42cd9368a8e421884a35ab82a3ff557&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/08da7a15c6dc4d3d58b61d3f90a1c2649b6a7a21f876606ef4a98d08c1636d73?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
          />
        )}
      </ImageWrapper>
      <CardContent>
        <UniversityName>{universityName}</UniversityName>
        <LocationWrapper>
          <Location>Город:</Location>
          <Location>{location}</Location>
        </LocationWrapper>
        <Divider />
        <ApplicantsWrapper>
          <ApplicantsLabel>Поступающих</ApplicantsLabel>
          <ApplicantsCount>2 394</ApplicantsCount>
        </ApplicantsWrapper>
      </CardContent>
    </CardWrapper>
  );
};

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 92%;
  object-fit: cover;
  object-position: center;
`;

const CardWrapper = styled.article`
  border-radius: 16px;
  box-shadow: 0px 12px 20px 0px rgba(124, 117, 104, 0.2);
  background-color: #fff;
  max-width: 354px;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.47;
  overflow: hidden;
  padding: 16px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Logo = styled.img`
  width: 121px;
  max-width: 100%;
  aspect-ratio: 3.7;
  object-fit: contain;
  object-position: center;
  position: relative;
  z-index: 1;
  margin-bottom: 74px;
`;

const CardContent = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  color: #282828;
  font-size: 16px;
`;

const UniversityName = styled.h2`
  font: 800 24px/29px Inter, sans-serif;
  letter-spacing: -0.48px;
  margin: 22px 0 13px;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 34px;
`;

const LocationIcon = styled.img`
  width: 16px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const Location = styled.span`
  font-family: Inter, sans-serif;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #dedbd6;
  margin: 35px 0 20px;
`;

const ApplicantsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 1px;
`;

const ApplicantsLabel = styled.span`
  font-family: Inter, sans-serif;
  line-height: 150%;
`;

const ApplicantsCount = styled.span`
  font-family: Inter, sans-serif;
  font-weight: 700;
  line-height: 219%;
`;
