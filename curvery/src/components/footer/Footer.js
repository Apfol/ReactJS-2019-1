import React, {Component} from 'react';
import footer from './Footer.css';
class Footer extends Component{
    render(){
        return(
            <div>
            <footer className={footer.footer_distributed}>

            <div className={footer.footer_left}>
        
              <h3>CURVERY</h3>
        
              <p className={footer.footer_links}>
                <a href="/">HOME</a>
                ·
                <a href="/">WORK</a>
                ·
                <a href="/">TEAM</a>
                ·
                <a href="/">BLOG</a>
                ·
                <a href="/">CONTACT</a>
                ·
              </p>
        
              <p className={footer.footer_company_name}>Curvery &copy; 2019</p>
            </div>
        
            <div className={footer.footer_center}>
        
              <div>
                <i ></i>
                <p><span>Universidad de La Sabana</span> Chia, Colombia</p>
              </div>
        
              <div>
                <i ></i>
                <p>+1 23456789</p>
              </div>
        
              <div>
                <i ></i>
                <p><a href="admin@curvery.com">admin@curvery.com</a></p>
              </div>
        
            </div>
        
            <div className={footer.footer_right}>
        
              <p className={footer.footer_company_about}>
                <span>Curvery</span>
                asdsadadasdasd &amp; asdasdasdasd.
              </p>
        
              <div className={footer.footer_icons}>
        
              <a href="/">1</a>
              <a href="/">1</a>
              <a href="/">1</a>
              <a href="/">1</a>
        
              </div>
        
            </div>
        
          </footer>
            </div>
        )
    }
}
export default Footer;