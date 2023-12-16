import React from "react";

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundColor: "#2d2d32" }}>
            <div className="sb__footer section_padding" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="sb__footer-links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%', textAlign: 'left', marginBottom: '0rem' }}>
                    <div className="sb__footer-links_div" style={{ width: '120px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'red' }}>For Business</h4>
                        <a href="/employer" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Employer</p>
                        </a>
                        <a href="/healthplan" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Health plan</p>
                        </a>
                        <a href="/individuals" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Individuals</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'red' }}>Resources</h4>
                        <a href="/resource" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Resource Center</p>
                        </a>
                        <a href="/healthplan" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Taste of Bakes By Chathu</p>
                        </a>
                        <a href="/individuals" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Individuals</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'red' }}>Partners</h4>
                        <a href="/employer" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Shanuka Distributors</p>
                        </a>
                        <a href="/employer" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Jhone keels PVT.LTD</p>
                        </a>
                        <a href="/employer" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Home to Home deliver.com</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'red' }}>Company</h4>
                        <a href="/about" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>About Us</p>
                        </a>
                        <a href="/press" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Address : No:302/A,Kadugannawa,Kandy</p>
                        </a>
                        <a href="/career" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Portfolio</p>
                        </a>
                        <a href="/conatact" style={{ color: 'rgb(175, 175, 179)', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>
                                Contact : 
                                071 0533285   034 2250186
                                 </p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'red' }}>Coming soon on</h4>
                        <div className="socialmedia" style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-facebook"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-linkedin"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <hr style={{ color: 'white !important', width: '100%' }} />
                <div className="sb__footer-below" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '0.2rem' }}>
                    <div className="sb__footer-copyright" style={{ fontSize: '13px', lineHeight: '15px', color: 'rgb(255, 255, 255)', fontWeight: '600' }}>
                        <p>
                            @{new Date().getFullYear()} Shanu. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links" style={{ display: 'flex', flexDirection: 'row' }}>
                        <a href="/terms" style={{ textDecoration: 'none' }}><div style={{ fontSize: '13px', lineHeight: '15px', marginLeft: '2rem', color: 'white', fontWeight: '600' }}><p>Terms & Conditions</p></div></a>
                        <a href="/privacy" style={{ textDecoration: 'none' }}><div style={{ fontSize: '13px', lineHeight: '15px', marginLeft: '2rem', color: 'white', fontWeight: '600' }}><p>Privacy</p></div></a>
                        <a href="/security" style={{ textDecoration: 'none' }}><div style={{ fontSize: '13px', lineHeight: '15px', marginLeft: '2rem', color: 'white', fontWeight: '600' }}><p>Security</p></div></a>
                        <a href="/cookie" style={{ textDecoration: 'none' }}><div style={{ fontSize: '13px', lineHeight: '15px', marginLeft: '2rem', color: 'white', fontWeight: '600' }}><p>Cookie Declaraction</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
