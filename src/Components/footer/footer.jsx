import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <>
        <footer className="d-f-a">
            <div className="footer-container d-f-a">
                <div className="footer-left d-f-a">
                <img src="./public/fav.png" alt="" width={"40px"} />
                <h2><a href="#"> Smart</a> <span>Dev</span></h2>
                </div>
                <h4>Sabir Portfolio &copy; 2024</h4>
                <div className="icons d-f-a">
                <a href="https://www.linkedin.com/in/sabir-ali-837501340/" className="change-2"><i className="fa-brands fa-linkedin"></i></a>
               <a href="" className="change"> <i className="fa-brands fa-facebook"></i></a>
                <a href="" className="change-3"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </footer>
        </>
    )
};
export default Footer;
