import Container from "./Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-secondary text-gray py-[15px]">
        <Container>
          <p className="sm:text-[17px] text-[15px] font-semibold text-white text-center">
            © {currentYear} New Capital. All Rights Reserved.
          </p>
        </Container>
      </div>
    </>
  );
}

export default Footer;
