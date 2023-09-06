import { styled } from "styled-components";

export const Body = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  padding: 20px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroImgContainer = styled.div`
  @media screen and (max-width: 768px) {
    order: -1;
  }
`;

export const HeroImage = styled.img`
  @media screen and (max-width: 768px) {
    width: 300px;
    margin-top: -30px;
    margin-left: 10px;
  }
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 54px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    order: 2;
    text-align: center;
    margin-top: 10px;
    font-size: 32px;
  }
`;

export const SubHeading = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  margin-bottom: 41px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

export const HeroBtn = styled.a`
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #1b1b1b;
  text-transform: capitalize;
  background-color: #cee531;
  padding: 10px 30px;
  border-radius: 100px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  @media screen only (max-width: 768px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  background-color: #000;
  padding: 150px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  margin-bottom: -60px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .pattern {
      display: none;
    }
  }
`;

export const CounterCard = styled.div`
  height: 230px;
  width: 100%;
  margin: 20px 80px;
  background-color: #cee531;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 30px;
  border-radius: 30px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
    gap: 40px;
  }
`;

export const InnerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

export const CounterTitle = styled.h1`
  font-size: 65px;
  font-weight: 600;
  color: #181818;
  margin-bottom: 5px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 375px) {
    font-size: 32px;
  }
`;

export const CounterDesc = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #181818;
  text-align: center;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

export const DesignPattern = styled.img`
  position: absolute;
  left: 340px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  background-color: #000;
  padding: 30px 100px;
`;

export const ContentTitle = styled.h1`
  color: #fff;
  font-size: 54px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    margin-top: -40px;
  }
`;

export const DesignPattern1 = styled.img`
  position: absolute;
  left: -30px;
  top: 1480px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DesignPattern8 = styled.img`
  position: absolute;
  left: -20px;
  top: 3140px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DesignPattern9 = styled.img`
  position: absolute;
  left: -20px;
  top: 7580px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DesignPattern7 = styled.img`
  position: absolute;
  right: 5px;
  top: 2420px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 30px;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 10px;
  }
`;

export const CourseBox = styled.div`
  height: 438px;
  width: 660px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 15px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    height: 438px;
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    width: 330px;
  }
`;

export const ClassType = styled.div`
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 40px;
  width: 131px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin: 36px 38px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 5px;
    font-size: 14px;
  }
`;

export const ClassType1 = styled.div`
  color: #fff;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 40px;
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin: 36px 38px;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 5px;
    padding: 5px;
    font-size: 14px;
  }
`;

export const CourseTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  padding: 26px 38px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

export const DetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 35px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    margin: 5px 10px;
  }
  @media screen and (max-width: 375px) {
    margin: 0 5px;
  }
`;

export const DetailInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 250px;
  color: white;
  opacity: 0.7;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    gap: 70px;
  }
  @media screen and (max-width: 375px) {
    gap: 50px;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-family: "Poppins", sans-serif;
`;

export const EnrollBtn = styled.a`
  background-color: #cee531;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  margin: 20px 30px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    padding: 10px 30px;
  }
`;

export const AboutBox = styled.div`
  background-color: #cee531;
  padding: 60px 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 90px 100px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px;
    gap: 15px;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const AboutTitle = styled.h2`
  color: #000;
  font-size: 48px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    font-weight: 500;
  }
`;

export const AboutDesc = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5px;
  @media screen and (max-width: 365px) {
    font-size: 14px;
  }
`;

export const Price = styled.h3`
  font-size: 40px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-bottom: -20px;
  @media screen and (max-width: 365px) {
    font-size: 24px;
  }
`;

export const PriceInfo = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 365px) {
    font-size: 14px;
  }
`;

export const RadialBlur = styled.div`
  width: 839px;
  height: 839px;
  border-radius: 1139px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(250, 236, 114, 0.15) 0%,
    rgba(250, 236, 114, 0) 100%
  );
  position: absolute;
  top: 190px;
  right: 0;
  left: 680px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RadialBlur3 = styled.div`
  width: 639px;
  height: 639px;
  border-radius: 1139px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(250, 236, 114, 0.12) 0%,
    rgba(250, 236, 114, 0) 100%
  );
  position: absolute;
  top: 5260px;
  left: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RadialBlur1 = styled.div`
  width: 839px;
  height: 839px;
  border-radius: 1139px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(250, 236, 114, 0.15) 0%,
    rgba(250, 236, 114, 0) 100%
  );
  position: absolute;
  left: 0;
  top: 520px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RadialBlurC = styled.div`
  width: 839px;
  height: 839px;
  border-radius: 1139px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(250, 236, 114, 0.15) 0%,
    rgba(250, 236, 114, 0) 100%
  );
  position: absolute;
  top: 820px;
  left: 350px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Design = styled.div`
  background-color: #000;
  padding: 30px 100px;
  @media screen and (max-width: 768px) {
    margin: 60px 0;
  }
`;

export const DesignDesc = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

export const SyllabusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 60px 5px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const SyllabusBox = styled.div`
  width: 370px;
  height: 380px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.08);
  z-index: 1000;
  // &:hover {
  //   transform: scale(1.03);
  //   box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
  //     0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
  //     0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  //   transition: all 0.2s ease-in;
  // }
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 370px;
  }
`;

export const RadialBlurD = styled.div`
  width: 539px;
  height: 539px;
  border-radius: 1139px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(250, 236, 114, 0.05) 0%,
    rgba(250, 236, 114, 0) 100%
  );
  position: absolute;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RadialBlurDD = styled.div`
  width: 539px;
  height: 539px;
  border-radius: 1139px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(250, 236, 114, 0.12) 0%,
    rgba(250, 236, 114, 0) 100%
  );
  position: absolute;
  top: 7200px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SyllabusTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #fff;
  text-align: left;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  margin: 30px 40px;
  line-height: 35px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ViewMoreBtn = styled.a`
  text-decoration: none;
  color: #1b1b1b;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  background-color: #cee531;
  border-radius: 100px;
  padding: 10px 30px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const DesignPattern2 = styled.img`
  position: absolute;
  left: 440px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DesignPattern3 = styled.img`
  position: absolute;
  left: 370px;
  top: 3180px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TimelineBox = styled.div`
  background-color: #cee531;
  padding: 60px 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 150px 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    margin-left: 38px;
  }
`;

export const TimelineTitle = styled.h2`
  color: #000;
  font-size: 48px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TTDesc = styled.p`
  color: #1b1b1b;
  opacity: 0.7;
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const TimelineContainer = styled.div`
  margin: 40px 0;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const WorkContainer = styled.div`
  margin-top: 50px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorkTitle = styled.h2`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const WorkDesc = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: #fff;
  opacity: 0.7;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ProjectContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 110px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
    margin: 5px;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #fff;
  margin-top: 20px;
  align-self: stretch;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;

export const ProjectDesc = styled.p`
  color: #fff;
  opacity: 0.7;
  font-size: 16px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;

export const PlacementBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 60px 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 110px 100px;
  .brand-carousel {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 330px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 25px;
    padding: 40px;
    .brand-carousel {
      display: inline-block;
    }
  }
`;

export const PlacementTitle = styled.h2`
  color: #fff;
  font-size: 48px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 40px 10px 0 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TestimonialBox = styled.div`
  background-color: #cee531;
  padding: 100px 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 160px 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-left: 20px;
    margin-top: -20px;
    padding: 25px 30px;
    .quotes {
      display: none;
    }
  }
`;

export const TestTitle = styled.h2`
  font-size: 48px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #1b1b1b;
  margin-top: -80px;
  padding-bottom: 60px;
  z-index: 1000;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    margin: 0;
  }
`;

export const TestDesc = styled.p`
  color: #1b1b1b;
  font-size: 24px;
  font-weight: 500;
  z-index: 1000;
  line-height: 52px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: -40px;
    margin-bottom: 20px;
    line-height: normal;
  }
`;

export const LeftBtn = styled.button`
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  height: 50px;
  width: 50px;
  text-decoration: none;
  color: #000;
  background-color: #cee531;
`;

export const RightBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  height: 50px;
  width: 50px;
  text-decoration: none;
  color: #fff;
  background-color: #000;
`;

export const TestimonialContainer = styled.div`
  margin: 40px 0;
`;

export const DesignPattern4 = styled.img`
  position: absolute;
  left: 340px;
  top: 6680px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const DesignPattern10 = styled.img`
  position: absolute;
  left: 1100px;
  top: 6143px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ActivityContainer = styled.div`
  margin: 50px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;

export const ActivityTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Grid = styled.div`
  margin: 80px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const MainGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LearnBox = styled.div`
  background-color: #cee531;
  padding: 70px 80px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 160px 100px;
  @media screen and (max-width: 768px) {
    margin-top: 120px;
    margin-bottom: 30px;
    padding: 40px;
    width: 90%;
    margin-left: 20px;
  }
`;

export const LearnTitle = styled.h2`
  color: #1b1b1b;
  font-size: 48px;
  font-weight: 500;
  z-index: 1000;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const EnrollNowBtn = styled.a`
  text-decoration: none;
  color: #cee531;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  background-color: #000;
  border-radius: 100px;
  padding: 15px 60px;
  text-align: center;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const DesignPattern5 = styled.img`
  position: absolute;
  left: 480px;
  top: 8620px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DesignPattern6 = styled.img`
  position: absolute;
  left: 350px;
  top: 5645px;
  overflow: hidden;
  opacity: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FaqSection = styled.section``;
