import React from "react";
import { styled } from "styled-components";
import { Logo } from "../assets";

const FooterContainer = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const FooterMenu = styled.div`
  background-color: #191919;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 60px 140px;
  height: 340px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 768px) {
    height: 170px;
    align-items: center;
    justify-content: center;
  }
`;

const Copyright = styled.div`
  height: 80px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const LogoContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px;
  padding: 20px 0;
  width: 100%;
  gap: 10px;
`;

const Icons = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.7;
`;

const MenuTitle = styled.h1`
  font-weight: 400;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  padding-right: 10px;
  margin-bottom: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  opacity: 0.6;
  margin: 0;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  padding: 5px 5px 0 70px;
  gap: 15px;
`;

const Divider = styled.div`
  width: 75%;
  height: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 60px;
  background-color: #fff;
  opacity: 0.4;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className="max-md:mb-6 max-sm">
        <Divider />
        <div className="lg:hidden">
          <MenuTitle className="max-md:text-center text-left text-white max-md:mr-[272px] max-sm:mr-[160px]">
            Service
          </MenuTitle>
          <FooterLinks>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Life at Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Ipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Life at Loremipsum
            </a>
          </FooterLinks>
        </div>
        <Divider />
        <div className="lg:hidden">
          <MenuTitle className="max-md:text-center text-left text-white max-md:mr-[272px] max-sm:mr-[160px]">
            Service
          </MenuTitle>
          <FooterLinks>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Life at Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Ipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Life at Loremipsum
            </a>
          </FooterLinks>
        </div>
        <Divider />
        <div className="lg:hidden">
          <MenuTitle className="max-md:text-center text-left text-white max-md:mr-[272px] max-sm:mr-[160px]">
            Service
          </MenuTitle>
          <FooterLinks>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Life at Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Ipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Life at Loremipsum
            </a>
          </FooterLinks>
        </div>
        <Divider />
        <div className="lg:hidden">
          <MenuTitle className="max-md:text-center text-left text-white max-md:mr-[272px] max-sm:mr-[160px]">
            Service
          </MenuTitle>
          <FooterLinks>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Life at Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Ipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Loremipsum
            </a>
            <a
              className="max-md:text-sm"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/"
            >
              Life at Loremipsum
            </a>
          </FooterLinks>
        </div>
      </div>
      <FooterMenu>
        <FirstContainer className="max-md:items-center justify-center">
          <LogoContainer className="max-md:items-center">
            <img src={Logo} alt="Logo" width="180px" />
          </LogoContainer>
          <SocialIcons>
            <Icons href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 11 20"
                fill="none"
              >
                <path
                  d="M10.0002 10.7014L10.5551 7.2584H7.08539V5.0241C7.08539 4.08215 7.57008 3.16398 9.12406 3.16398H10.7014V0.232608C10.7014 0.232608 9.27001 0 7.9014 0C5.04399 0 3.17625 1.64906 3.17625 4.63432V7.2584H0V10.7014H3.17625V19.0248H7.08539V10.7014H10.0002Z"
                  fill="white"
                />
              </svg>
            </Icons>
            <Icons href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.95967 19.0248H1.01542V6.32291H4.95967V19.0248ZM2.98542 4.59026C1.72418 4.59026 0.701172 3.54557 0.701172 2.2843C0.701172 1.02272 1.72386 0 2.98542 0C4.24697 0 5.26967 1.02272 5.26967 2.2843C5.26967 3.54557 4.24624 4.59026 2.98542 4.59026ZM19.7217 19.0248H15.786V12.8416C15.786 11.368 15.7562 9.4782 13.7353 9.4782C11.6846 9.4782 11.3703 11.0792 11.3703 12.7354V19.0248H7.43034V6.32291H11.2132V8.05556H11.2684C11.795 7.05759 13.0813 6.00441 15.0003 6.00441C18.9921 6.00441 19.726 8.63311 19.726 12.0475V19.0248H19.7217Z"
                  fill="white"
                />
              </svg>
            </Icons>
            <Icons href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M18.8626 4.5267C18.8755 4.70877 18.8755 4.89087 18.8755 5.07294C18.8755 10.6261 14.707 17.0247 7.0883 17.0247C4.74112 17.0247 2.5607 16.3354 0.726562 15.139C1.06005 15.178 1.38067 15.191 1.72699 15.191C3.6637 15.191 5.44655 14.5278 6.87025 13.3963C5.04894 13.3573 3.52264 12.1478 2.99676 10.4831C3.2533 10.5221 3.5098 10.5481 3.77918 10.5481C4.15112 10.5481 4.52311 10.4961 4.86939 10.4051C2.97114 10.0149 1.5474 8.32423 1.5474 6.28241V6.23042C2.0989 6.54254 2.74025 6.73762 3.41999 6.7636C2.30412 6.00928 1.57306 4.72178 1.57306 3.26518C1.57306 2.48489 1.77824 1.76959 2.13739 1.14534C4.17674 3.69437 7.24219 5.35901 10.6795 5.54111C10.6154 5.22898 10.5769 4.90389 10.5769 4.57874C10.5769 2.26379 12.4239 0.378052 14.7198 0.378052C15.9126 0.378052 16.99 0.885256 17.7467 1.70459C18.683 1.52252 19.5808 1.17136 20.3761 0.690176C20.0682 1.66559 19.4141 2.48492 18.5548 3.00509C19.3885 2.9141 20.1965 2.67996 20.9404 2.35486C20.3761 3.18716 19.6707 3.92843 18.8626 4.5267Z"
                  fill="white"
                />
              </svg>
            </Icons>
            <Icons href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M6.21208 0.0876027C5.25447 0.132783 4.60052 0.285605 4.02884 0.510247C3.43717 0.740829 2.93569 1.05025 2.43672 1.55102C1.93776 2.05178 1.63049 2.55363 1.40153 3.14619C1.17995 3.71914 1.02983 4.37363 0.987528 5.33178C0.945228 6.28993 0.935868 6.59791 0.940548 9.04197C0.945228 11.486 0.956028 11.7924 1.00247 12.7525C1.04819 13.71 1.20047 14.3637 1.42511 14.9356C1.65605 15.5273 1.96512 16.0286 2.46606 16.5277C2.96701 17.0269 3.46849 17.3334 4.0625 17.5627C4.63491 17.7839 5.28957 17.9348 6.24754 17.9767C7.20551 18.0187 7.51385 18.0284 9.9572 18.0237C12.4005 18.019 12.7082 18.0082 13.6681 17.9627C14.6281 17.9171 15.2784 17.7638 15.8505 17.5402C16.4421 17.3087 16.9438 17.0002 17.4426 16.4991C17.9414 15.998 18.2484 15.4958 18.4772 14.9028C18.699 14.3304 18.8496 13.6758 18.8912 12.7185C18.9332 11.7578 18.9431 11.4511 18.9384 9.00741C18.9337 6.56371 18.9227 6.25735 18.8772 5.29758C18.8316 4.33781 18.6792 3.68602 18.4547 3.11379C18.2234 2.52213 17.9147 2.02118 17.414 1.52168C16.9132 1.02217 16.4106 0.715269 15.8179 0.487027C15.2451 0.265445 14.5908 0.114423 13.6328 0.0730225C12.6749 0.0316221 12.3665 0.021002 9.92228 0.0256821C7.47803 0.0303621 7.17203 0.0408022 6.21208 0.0876027ZM6.3172 16.3576C5.43969 16.3194 4.96323 16.1736 4.6457 16.0516C4.22522 15.8896 3.9257 15.6938 3.60925 15.3804C3.29281 15.067 3.09841 14.7664 2.93425 14.3468C2.81095 14.0293 2.66245 13.5534 2.6214 12.6759C2.57676 11.7274 2.5674 11.4427 2.56218 9.03981C2.55696 6.63697 2.56614 6.35257 2.60772 5.40378C2.64516 4.52699 2.79187 4.04998 2.91373 3.73264C3.07573 3.31162 3.27085 3.01263 3.58495 2.69637C3.89906 2.38011 4.19876 2.18534 4.6187 2.02118C4.93587 1.89734 5.41179 1.7501 6.28894 1.70834C7.23809 1.66334 7.52249 1.65434 9.92498 1.64912C12.3275 1.6439 12.6126 1.6529 13.5621 1.69466C14.4389 1.73282 14.9161 1.87808 15.2331 2.00066C15.6537 2.16266 15.9531 2.35725 16.2693 2.67189C16.5856 2.98653 16.7805 3.28516 16.9447 3.706C17.0687 4.02226 17.216 4.49801 17.2574 5.3757C17.3025 6.32485 17.3128 6.60943 17.3171 9.01173C17.3214 11.414 17.313 11.6993 17.2714 12.6478C17.2331 13.5253 17.0876 14.0019 16.9654 14.3198C16.8034 14.7401 16.6081 15.0398 16.2938 15.3559C15.9795 15.672 15.6802 15.8667 15.2601 16.0309C14.9432 16.1546 14.4668 16.3022 13.5904 16.3439C12.6412 16.3886 12.3568 16.3979 9.95342 16.4031C7.55003 16.4084 7.26653 16.3986 6.31738 16.3576M13.6543 4.21451C13.6546 4.42813 13.7183 4.63684 13.8373 4.81426C13.9563 4.99168 14.1252 5.12982 14.3227 5.21122C14.5202 5.29263 14.7374 5.31363 14.9469 5.27158C15.1563 5.22953 15.3486 5.12631 15.4993 4.97498C15.6501 4.82365 15.7526 4.63101 15.7939 4.42142C15.8352 4.21182 15.8134 3.99469 15.7313 3.79749C15.6491 3.60029 15.5104 3.43187 15.3325 3.31353C15.1547 3.1952 14.9457 3.13227 14.7321 3.13269C14.4457 3.13327 14.1713 3.24755 13.9692 3.45042C13.7671 3.65329 13.6538 3.92813 13.6543 4.21451ZM5.31837 9.03369C5.32341 11.5861 7.39631 13.6506 9.9482 13.6457C12.5001 13.6408 14.566 11.5681 14.5611 9.01569C14.5562 6.46327 12.4828 4.39829 9.93056 4.40333C7.37831 4.40837 5.31351 6.48163 5.31837 9.03369ZM6.93947 9.03045C6.93829 8.43709 7.1131 7.85671 7.44178 7.3627C7.77045 6.86868 8.23824 6.48323 8.78598 6.25507C9.33373 6.02692 9.93683 5.96632 10.519 6.08092C11.1012 6.19553 11.6363 6.4802 12.0567 6.89894C12.4771 7.31768 12.7639 7.85168 12.8808 8.4334C12.9977 9.01513 12.9395 9.61847 12.7135 10.1671C12.4876 10.7158 12.104 11.1851 11.6113 11.5157C11.1185 11.8463 10.5389 12.0234 9.9455 12.0246C9.55151 12.0254 9.16121 11.9486 8.79691 11.7986C8.4326 11.6486 8.10141 11.4282 7.82227 11.1502C7.54312 10.8722 7.32148 10.5419 7.17001 10.1781C7.01854 9.81443 6.9402 9.42445 6.93947 9.03045Z"
                  fill="white"
                />
              </svg>
            </Icons>
            <Icons href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 19 19"
                fill="none"
              >
                <g clip-path="url(#clip0_111_656)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.93945 0.0247803C4.97091 0.0247803 0.939453 4.05624 0.939453 9.02478C0.939453 13.9933 4.97091 18.0248 9.93945 18.0248C14.8982 18.0248 18.9395 13.9933 18.9395 9.02478C18.9395 4.05624 14.8982 0.0247803 9.93945 0.0247803ZM15.8841 4.17337C16.9579 5.48139 17.6021 7.1506 17.6217 8.95645C17.3679 8.90764 14.8299 8.3903 12.2724 8.71241C12.2139 8.58553 12.165 8.44885 12.1065 8.3122C11.9503 7.94127 11.7746 7.56057 11.5989 7.1994C14.4297 6.04756 15.7182 4.38812 15.8841 4.17337ZM9.93945 1.35233C11.8917 1.35233 13.6781 2.08443 15.0349 3.28508C14.8982 3.48031 13.7366 5.03238 11.0035 6.05732C9.74423 3.74387 8.34834 1.85016 8.1336 1.55732C8.70951 1.42066 9.31473 1.35233 9.93945 1.35233ZM6.66939 2.07467C6.87438 2.34799 8.24097 4.25147 9.51971 6.5161C5.92752 7.47271 2.75508 7.4532 2.41342 7.4532C2.91125 5.07142 4.52189 3.08986 6.66939 2.07467ZM2.24748 9.03454C2.24748 8.95645 2.24748 8.87837 2.24748 8.80027C2.57937 8.81002 6.30822 8.85884 10.1444 7.707C10.369 8.1365 10.5739 8.57575 10.7692 9.01503C10.6715 9.04431 10.5642 9.0736 10.4666 9.10286C6.50345 10.3816 4.39499 13.8762 4.21929 14.169C2.9991 12.8122 2.24748 11.0063 2.24748 9.03454ZM9.93945 16.7168C8.16289 16.7168 6.52296 16.1115 5.2247 15.0964C5.36137 14.8133 6.92319 11.8068 11.2572 10.2938C11.2768 10.284 11.2865 10.284 11.306 10.2742C12.3896 13.0758 12.8288 15.4282 12.946 16.1018C12.0186 16.502 11.0035 16.7168 9.93945 16.7168ZM14.2247 15.399C14.1466 14.9304 13.7366 12.6853 12.7312 9.92284C15.1423 9.54214 17.2507 10.1669 17.5143 10.2547C17.1824 12.3925 15.9525 14.2374 14.2247 15.399Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_111_656">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.939453 0.0247803)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Icons>
          </SocialIcons>
        </FirstContainer>
        <div className="max-md:hidden">
          <MenuTitle>Service</MenuTitle>
          <FooterLinks>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Life at Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Ipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Life at Loremipsum
            </a>
          </FooterLinks>
        </div>
        <div className="max-md:hidden">
          <MenuTitle>Service</MenuTitle>
          <FooterLinks>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Life at Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Ipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Life at Loremipsum
            </a>
          </FooterLinks>
        </div>
        <div className="max-md:hidden">
          <MenuTitle>Service</MenuTitle>
          <FooterLinks>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Life at Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Ipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Life at Loremipsum
            </a>
          </FooterLinks>
        </div>
        <div className="max-md:hidden">
          <MenuTitle>Service</MenuTitle>
          <FooterLinks>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Life at Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Ipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Loremipsum
            </a>
            <a style={{ textDecoration: "none", color: "#fff" }} href="/">
              Life at Loremipsum
            </a>
          </FooterLinks>
        </div>
      </FooterMenu>
      <Copyright className="max-md:text-[14px]">
        © 2023 Creativa design academy. All rights reserved
      </Copyright>
    </FooterContainer>
  );
}
