import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  AC2R5,
  AC2R6,
  ACR1,
  ACR4,
  ACRR2,
  ACRR3,
  Calendar,
  CompanyLogo,
  HeroImg,
  Language,
  Pattern,
  Pattern1,
  Pattern2,
  Pattern5,
  Pattern6,
  Pattern7,
  Project1,
  Project2,
  Project3,
  Project4,
  Quotes,
  SkilledPattern,
  SkilledPhonePattern,
  Star1,
  Star2,
  Star3,
  Testimonial,
  Time,
  User,
} from "../assets";
import CountUp from "react-countup";
import AccordionItem from "../components/AccordionItem";
import {
  AboutBox,
  AboutContainer,
  AboutDesc,
  AboutTitle,
  ActivityContainer,
  ActivityTitle,
  Body,
  BtnContainer,
  ClassType,
  ClassType1,
  Container,
  ContainerTitle,
  Content,
  ContentContainer,
  ContentTitle,
  CounterCard,
  CounterDesc,
  CounterTitle,
  CourseBox,
  CourseTitle,
  Design,
  DesignDesc,
  DesignPattern,
  DesignPattern1,
  DesignPattern10,
  DesignPattern2,
  DesignPattern3,
  DesignPattern4,
  DesignPattern5,
  DesignPattern6,
  DesignPattern7,
  DesignPattern8,
  DesignPattern9,
  DetailInner,
  DetailedContainer,
  Details,
  EnrollBtn,
  EnrollNowBtn,
  FaqSection,
  Grid,
  HeroBtn,
  HeroImage,
  HeroImgContainer,
  HeroTitle,
  InnerCard,
  LearnBox,
  LearnTitle,
  LeftBtn,
  List,
  LogoContainer,
  MainGrid,
  PlacementBox,
  PlacementTitle,
  Price,
  PriceInfo,
  ProjectContainer,
  ProjectDesc,
  ProjectTitle,
  RadialBlur,
  RadialBlur1,
  RadialBlur3,
  RadialBlurC,
  RadialBlurD,
  RadialBlurDD,
  RightBtn,
  SubHeading,
  SyllabusBox,
  SyllabusContainer,
  SyllabusTitle,
  TTDesc,
  TestDesc,
  TestTitle,
  TestimonialBox,
  TestimonialContainer,
  TimelineBox,
  TimelineContainer,
  TimelineTitle,
  ViewMoreBtn,
  WorkContainer,
  WorkDesc,
  WorkTitle,
} from "./HomeStyles";
import { faqs } from "../context/Faqdata";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight } from "react-icons/ai";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [popCard, setPopCard] = useState("inline-block");
  const [fade, setFade] = useState(false);
  const scrollDirection = useScrollDirection();

  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    // desktop: {
    //   breakpoint: { max: 3000, min: 1024 },
    //   items: 3
    // },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <>
      <Header
        className={`sticky ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        } transition-all duration-500`}
      />
      {/* Hero Section */}
      <Body>
        <div className="max-sm:flex items-center justify-center flex-col">
          <div>
            <HeroTitle>
              Learn UX UI Design
              <br /> from Industry Experts
            </HeroTitle>
            <SubHeading>
              3 months learning program and 2 Months of internship at
              <br /> Digital Techworks
            </SubHeading>
          </div>
          <button class="before:ease relative h-[44px] w-[146px] px-[30px] py-[10px] overflow-hidden rounded-3xl bg-[#CEE531] text-black font-[500] transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-40 before:duration-700 hover:before:-translate-x-40">
            <a href="/" relative="relative z-10" className="text-[15px]">
              Enroll Now
            </a>
          </button>
        </div>
        <RadialBlur />
        <HeroImgContainer>
          <HeroImage src={HeroImg} alt="hero_img" width="450px" />
        </HeroImgContainer>
      </Body>
      {/* Counter Section */}
      <Container>
        <RadialBlur1 style={{ zIndex: -1 }} />
        <CounterCard>
          <DesignPattern
            className="pattern"
            src={Pattern}
            alt="pattern"
            width="700px"
          />
          <InnerCard>
            <CounterTitle>
              <CountUp end={10} />+
            </CounterTitle>
            <CounterDesc>Skilled Mentors</CounterDesc>
          </InnerCard>
          <InnerCard>
            <CounterTitle>
              <CountUp end={50} />+
            </CounterTitle>
            <CounterDesc>Students Enrolled</CounterDesc>
          </InnerCard>
          <InnerCard>
            <CounterTitle>
              <CountUp end={100} />+
            </CounterTitle>
            <CounterDesc>Students Placed</CounterDesc>
          </InnerCard>
          <InnerCard>
            <CounterTitle>
              <CountUp end={20} />+
            </CounterTitle>
            <CounterDesc>Workshop Conducted</CounterDesc>
          </InnerCard>
        </CounterCard>
      </Container>
      {/* UI/UX Design Course Section */}
      <Content>
        <DesignPattern1 src={Pattern1} alt="design" width="100px" />
        <ContentTitle className="max-sm:text-[24px]">
          UI/UX Design Course
        </ContentTitle>
        <ContentContainer>
          <RadialBlurC />
          <CourseBox>
            <ClassType>Online Live</ClassType>
            <CourseTitle>UX UI Design Course Program</CourseTitle>
            <DetailedContainer>
              <DetailInner>
                <Details>
                  <img src={Calendar} alt="calendar" />
                  03 Months
                </Details>
                <Details>
                  <img src={Time} alt="time" />
                  10:00 AM - 1:00 PM
                </Details>
              </DetailInner>
              <DetailInner>
                <Details>
                  <img src={Language} alt="language" />
                  Tamil & English
                </Details>
                <Details>
                  <img src={User} alt="user" />
                  Slots left - 05
                </Details>
              </DetailInner>
            </DetailedContainer>
            <EnrollBtn href="/">
              <a
                style={{
                  textDecoration: "none",
                  color: "#1B1B1B",
                  fontWeight: 500,
                  fontSize: 16,
                }}
                href="/"
              >
                Enroll Now
              </a>
            </EnrollBtn>
            {/* <button class="before:ease relative h-[44px] w-[146px] px-[30px] py-[10px] overflow-hidden rounded-3xl bg-[#CEE531] text-black font-[500] transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-40 before:duration-700 hover:before:-translate-x-40">
              <a href="/" relative="relative z-10" className="text-[16px]">
                Enroll Now
              </a>
            </button> */}
          </CourseBox>
          <CourseBox>
            <ClassType1>Offline Classroom</ClassType1>
            <CourseTitle>UX UI Design Course Program</CourseTitle>
            <DetailedContainer>
              <DetailInner>
                <Details>
                  <img src={Calendar} alt="calendar" />
                  03 Months
                </Details>
                <Details>
                  <img src={Time} alt="time" />
                  10:00 AM - 1:00 PM
                </Details>
              </DetailInner>
              <DetailInner>
                <Details>
                  <img src={Language} alt="language" />
                  Tamil & English
                </Details>
                <Details>
                  <img src={User} alt="user" />
                  Slots left - 05
                </Details>
              </DetailInner>
            </DetailedContainer>
            <EnrollBtn href="/">
              <a
                style={{
                  textDecoration: "none",
                  color: "#1B1B1B",
                  fontWeight: 500,
                  fontSize: 16,
                }}
                href="/"
              >
                Enroll Now
              </a>
            </EnrollBtn>
          </CourseBox>
        </ContentContainer>
      </Content>
      {/* What about prices? Section */}
      <AboutBox>
        <DesignPattern2 src={Pattern2} alt="Pattern" width="640px" />
        <div>
          <AboutTitle>
            What about
            <br /> prices?
          </AboutTitle>
          <AboutDesc>
            Let's break it down for you in the
            <br /> most simple and straightforward
            <br />
            way possible!
          </AboutDesc>
        </div>
        <AboutContainer>
          <img src={Star1} alt="star" />
          <ContainerTitle>One Time Plan</ContainerTitle>
          <Price>₹58,798</Price>
          <PriceInfo>*Including GST</PriceInfo>
        </AboutContainer>
        <AboutContainer>
          <img src={Star2} alt="star" />
          <ContainerTitle>2 Month EMI Plan</ContainerTitle>
          <Price>₹61,798</Price>
          <PriceInfo>*Including GST</PriceInfo>
        </AboutContainer>
        <AboutContainer>
          <img src={Star3} alt="star" />
          <ContainerTitle>3 Month EMI Plan</ContainerTitle>
          <Price>₹63,798</Price>
          <PriceInfo>*Including GST</PriceInfo>
        </AboutContainer>
      </AboutBox>
      {/* UI/UX Design Syllabus */}
      <Design>
        <DesignPattern7 src={Pattern1} alt="design" width="100px" />
        <ContentTitle>UI/UX Design Syllabus</ContentTitle>
        <DesignDesc>
          Regular updates for both offline and online classes are posted in this
          section.
        </DesignDesc>
        <SyllabusContainer>
          <RadialBlurD />
          <SyllabusBox className="transition duration-300 ease-in-out hover:scale-105">
            <ClassType style={{ marginTop: 20, marginLeft: 20 }}>
              Week 1
            </ClassType>
            {/* <span className="absolute top-[2538px] left-[270px]">
              <AiOutlineArrowRight color="#fff" size={24} />
            </span> */}
            <SyllabusTitle
              style={{ marginTop: 10, marginBottom: 0, marginLeft: 20 }}
            >
              Introduction to UI/UX Design
            </SyllabusTitle>
            <List style={{ marginTop: 25, marginLeft: 20 }}>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - Understanding the differences
                  <br /> between UI and UX.
                </span>
              </li>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - The role of UI/UX in product
                  <br /> development.
                </span>
              </li>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - Key principles and heuristics in
                  <br /> UI/UX design
                </span>
              </li>
            </List>
          </SyllabusBox>
          <SyllabusBox className="transition duration-300 ease-in-out hover:scale-105">
            <ClassType style={{ marginTop: 20, marginLeft: 20 }}>
              Week 2
            </ClassType>
            <SyllabusTitle
              style={{ marginTop: 10, marginBottom: 0, marginLeft: 20 }}
            >
              Introduction to UI/UX Design
            </SyllabusTitle>
            <List style={{ marginTop: 25, marginLeft: 20 }}>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - Understanding the differences
                  <br /> between UI and UX.
                </span>
              </li>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - The role of UI/UX in product
                  <br /> development.
                </span>
              </li>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - Key principles and heuristics in
                  <br /> UI/UX design
                </span>
              </li>
            </List>
          </SyllabusBox>
          <SyllabusBox className="transition duration-300 ease-in-out hover:scale-105">
            <ClassType style={{ marginTop: 20, marginLeft: 20 }}>
              Week 3
            </ClassType>
            <SyllabusTitle
              style={{ marginTop: 10, marginBottom: 0, marginLeft: 20 }}
            >
              Introduction to UI/UX Design
            </SyllabusTitle>
            <List style={{ marginTop: 25, marginLeft: 20 }}>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - Understanding the differences
                  <br /> between UI and UX.
                </span>
              </li>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - The role of UI/UX in product
                  <br /> development.
                </span>
              </li>
              <li
                style={{
                  color: "#CEE531",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>
                  - Key principles and heuristics in
                  <br /> UI/UX design
                </span>
              </li>
            </List>
          </SyllabusBox>
        </SyllabusContainer>
        <DesignPattern8 src={Pattern1} alt="design" width="100px" />
        <BtnContainer>
          <button class="before:ease relative h-[44px] w-[196px] py-[10px] overflow-hidden rounded-3xl bg-[#CEE531] text-black font-[500] transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-40 before:duration-700 hover:before:-translate-x-60">
            <a href="/" relative="relative z-10" className="text-[14px]">
              View More Syllabus
            </a>
          </button>
        </BtnContainer>
      </Design>
      {/* Skilled UI and UX Designer */}
      <TimelineBox>
        <DesignPattern3 src={Pattern2} alt="Pattern" width="680px" />
        <TimelineTitle>Skilled UX and UI Designer</TimelineTitle>
        <TTDesc>Lorem ipsum dolor sit amet, consetetur sadipscing elit</TTDesc>
        <TimelineContainer>
          <img
            className="max-sm:hidden"
            src={SkilledPattern}
            alt="Skilled"
            width="900px"
          />
          <img
            className="lg:hidden max-sm:inline"
            src={SkilledPhonePattern}
            alt="Skilled"
            width="900px"
          />
        </TimelineContainer>
      </TimelineBox>
      {/* Our Students Work Section */}
      <WorkContainer>
        <WorkTitle>Our Students Work</WorkTitle>
        <WorkDesc>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod
          <br /> tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero
          <br /> eos et accusam et justo duoLorem ipsum
        </WorkDesc>
        <ProjectContainer>
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src={Project1}
              className="transition duration-300 ease-in-out hover:scale-105"
              alt="Project"
              width="600px"
            />
            <ProjectTitle>Duxx - Admin Dashboard</ProjectTitle>
            <ProjectDesc>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolo reLorem ipsum
              dolor sit amet, consetetur
            </ProjectDesc>
          </a>
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              className="transition duration-300 ease-in-out hover:scale-105"
              src={Project2}
              alt="Project"
              width="600px"
            />
            <ProjectTitle>Zoomy - Food Delivery</ProjectTitle>
            <ProjectDesc>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolo reLorem ipsum
              dolor sit amet, consetetur
            </ProjectDesc>
          </a>
        </ProjectContainer>
        <ProjectContainer style={{ marginBottom: 0 }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              className="transition duration-300 ease-in-out hover:scale-105"
              src={Project3}
              alt="Project"
              width="600px"
            />
            <ProjectTitle>Duxx - Admin Dashboard</ProjectTitle>
            <ProjectDesc>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolo reLorem ipsum
              dolor sit amet, consetetur
            </ProjectDesc>
          </a>
          <a
            className="projectimg"
            href="/"
            style={{
              textDecoration: "none",
              position: "relative",
              top: -335,
            }}
          >
            <img
              className="transition duration-300 ease-in-out hover:scale-105"
              src={Project4}
              alt="Project"
              width="600px"
            />
            <ProjectTitle>Zoomy - Food Delivery</ProjectTitle>
            <ProjectDesc>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolo reLorem ipsum
              dolor sit amet, consetetur
            </ProjectDesc>
          </a>
        </ProjectContainer>
        <BtnContainer style={{ marginTop: -270 }}>
          <button class="before:ease relative h-[44px] w-[196px] px-[30px] py-[10px] overflow-hidden rounded-3xl bg-[#CEE531] text-black font-[500] transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-40 before:duration-700 hover:before:-translate-x-60">
            <a href="/" relative="relative z-10" className="text-[14px]">
              View All Projects
            </a>
          </button>
        </BtnContainer>
      </WorkContainer>
      {/* Our Placement Companies Section */}
      <PlacementBox>
        <RadialBlur3 />
        <DesignPattern6 src={Pattern5} alt="Pattern" width="800px" />
        <PlacementTitle>Our Placement Companies</PlacementTitle>
        <Carousel
          className="brand-carousel"
          swipeable={true}
          showStatus={false}
          showIndicators={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          autoPlay={["mobile", "tablet"]}
          deviceType={["mobile", "tablet"]}
          showThumbs={false}
        >
          <div className="m-2 p-5">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              style={{ opacity: 0.5, width: 130, margin: 10 }}
            />
          </div>
          <div className="m-2 p-5">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              style={{ opacity: 0.5, width: 130, margin: 10 }}
            />
          </div>
          <div className="m-2 p-5">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              style={{ opacity: 0.5, width: 130, margin: 10 }}
            />
          </div>
          <div className="m-2 p-5">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              style={{ opacity: 0.5, width: 130, margin: 10 }}
            />
          </div>
        </Carousel>
        <LogoContainer>
          <img
            src={CompanyLogo}
            alt="Company Logo"
            width="150px"
            style={{ opacity: 0.5 }}
          />
          <img
            src={CompanyLogo}
            alt="Company Logo"
            width="150px"
            style={{ opacity: 0.5 }}
          />
          <img
            src={CompanyLogo}
            alt="Company Logo"
            width="150px"
            style={{ opacity: 0.5 }}
          />
          <img
            src={CompanyLogo}
            alt="Company Logo"
            width="150px"
            style={{ opacity: 0.5 }}
          />
          <img
            src={CompanyLogo}
            alt="Company Logo"
            width="150px"
            style={{ opacity: 0.5 }}
          />
        </LogoContainer>
        <LogoContainer>
          <img
            src={CompanyLogo}
            alt="Company Logo"
            width="150px"
            style={{ opacity: 0.5 }}
          />
          <img
            src={CompanyLogo}
            alt="Company Logo"
            width="150px"
            style={{ opacity: 0.5 }}
          />
          <img
            src={CompanyLogo}
            alt="Company Logo"
            width="150px"
            style={{ opacity: 0.5 }}
          />
        </LogoContainer>
      </PlacementBox>
      {/* Testimonial Section */}
      <TestimonialBox>
        <div>
          <DesignPattern4 src={Pattern6} alt="Pattern" width="80px" />
          <DesignPattern10 src={Pattern7} alt="Pattern" width="80px" />
          <TestTitle className="max-md:mb-[-40px]">Testimonial</TestTitle>
          <img
            className="quotes"
            src={Quotes}
            alt="quotes"
            width="150px"
            style={{ position: "absolute", top: 6312, left: 150 }}
          />
          <TestDesc>
            They truly took the time to understand my vision and brand identity,
            <br />
            and incorporated it seamlessly into designs. I was blown away by
            <br /> the creativity and innovation they brought to the table, and
            they
            <br />
            exceeded my expectations in every way.
          </TestDesc>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
              marginLeft: 100,
              gap: 10,
            }}
          >
            <LeftBtn>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
                />
              </svg>
            </LeftBtn>
            <RightBtn>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                />
              </svg>
            </RightBtn>
          </div>
          <TestimonialContainer>
            <img src={Testimonial} alt="Testimonial" width="220px" />
          </TestimonialContainer>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            ahmed elsayed
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: 400,
              color: "#1b1b1b",
              opacity: 0.68,
            }}
          >
            UI/UX Designer at Nitro
          </p>
        </div>
      </TestimonialBox>
      {/* Students Work Activity Section */}
      <ActivityContainer className="max-sm:mt-[-20px]">
        <ActivityTitle style={{ marginBottom: -60 }}>
          Students Work Activity
        </ActivityTitle>
        <Grid className="max-sm:hidden">
          <MainGrid className="py-1">
            <div>
              <img src={ACR1} alt="Activities" width="380px" />
            </div>
            <div className="my-3 flex justify-between flex-col gap-5">
              <div>
                <img src={ACRR2} alt="Activities" width="380px" />
              </div>
              <div>
                <img src={ACRR3} alt="Activities" width="380px" />
              </div>
            </div>
            <div>
              <img src={ACR4} alt="Activities" width="380px" />
            </div>
          </MainGrid>
          <MainGrid className="p-1">
            <div>
              <img src={AC2R5} alt="Activities" width="650px" />
            </div>
            <div>
              <img src={AC2R6} alt="Activities" width="545px" />
            </div>
          </MainGrid>
        </Grid>
        <div className="lg:hidden max-sm:inline">
          <Carousel
            className="brand-carousel"
            swipeable={true}
            showIndicators={false}
            showStatus={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            autoPlay={["mobile", "tablet"]}
            deviceType={["mobile", "tablet"]}
            showThumbs={false}
          >
            <div className="m-2 p-6">
              <img src={ACR1} alt="Activities" width="430px" />
            </div>
            <div className="m-2 p-5">
              <img src={ACRR2} alt="Activities" width="430px" />
            </div>
            <div className="m-2 p-5">
              <img src={ACRR3} alt="Activities" width="430px" />
            </div>
            <div className="m-2 p-5">
              <img src={ACR4} alt="Activities" width="430px" />
            </div>
            <div className="m-2 p-5">
              <img src={AC2R5} alt="Activities" width="850px" />
            </div>
            <div className="m-2 p-5">
              <img src={AC2R6} alt="Activities" width="710px" />
            </div>
          </Carousel>
        </div>
      </ActivityContainer>
      {/* FAQ Section */}
      <FaqSection className="bg-black h-screen grid place-items-center">
        <DesignPattern9 src={Pattern1} alt="design" width="100px" />
        <ActivityTitle>Faq's</ActivityTitle>
        <RadialBlurDD />
        <div className="px-[40px] max-w-[1400px]">
          {faqs.map((faq, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                title={faq.title}
                desc={faq.desc}
                no={faq.no}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </FaqSection>
      {/* Wanna learn UI/UX Design like a Pro! Section */}
      <LearnBox>
        <DesignPattern5 src={Pattern2} alt="Pattern" width="570px" />
        <LearnTitle className="max-md:text-center">
          Wanna learn UI/UX Design like a Pro!
        </LearnTitle>
        <BtnContainer style={{ zIndex: 1 }}>
          <button class="before:ease relative h-[44px] w-[146px] px-[30px] py-[10px] overflow-hidden rounded-3xl bg-black text-[#CEE531] font-[500] transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-40 before:duration-700 hover:before:-translate-x-40">
            <a href="/" relative="relative z-10" className="text-[15px]">
              Enroll Now
            </a>
          </button>
        </BtnContainer>
      </LearnBox>
      <Footer />
    </>
  );
}
