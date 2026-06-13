import "../style/Footer.css";
import logo from "../assets/img/footer_img/logo.png";
import icon1 from "../assets/img/footer_img/icon-1.svg";
import icon2 from "../assets/img/footer_img/icon-2.svg";
import icon3 from "../assets/img/footer_img/icon-3.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="left-box">
          <div className="logo-box">
            <a href="#">
              <img src={logo} alt="로고 이미지" />
            </a>
          </div>
          <div className="kr text-box-top">
            <div className="text-box text-box-1">
              <p className="text-1">
                <span>상호명 :</span> MODOO
              </p>
              <p className="text-2">
                <span>사업자등록번호 :</span> 135-25-98308
              </p>
            </div>
            <div className="text-box text-box-2">
              <p className="text-1">
                <span>주소 :</span> 경기도 수원시 영통구 창룡대로256번길 77(이의동), 207호
              </p>
              <p className="text-2">
                <span>CEO :</span> 원용호
              </p>
            </div>
            <div className="text-box text-box-3">
              <p className="text-1">
                <span>대표번호 :</span> 031-248-1900
              </p>
              <p className="text-2">
                <span>팩스 :</span> 031-5186-6490
              </p>
              <p className="text-2">
                <span>이메일 :</span> master@modoo.kr
              </p>
            </div>
          </div>
          <div className="text-box-bottom">
            <div className="text-box-1">
              <p>Copyright © MODOO. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        <div className="right-box">
          <a href="#">
            <img className="icon-1" src={icon1} alt="아이콘" />
          </a>
          <a href="#">
            <img className="icon-2" src={icon2} alt="아이콘" />
          </a>
          <a href="#">
            <img className="icon-3" src={icon3} alt="아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
