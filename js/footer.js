const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `



<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">




<style>


h1,
h2,
h3,
h4,
h5,
h6 {}
a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    outline: none;
}

a,
a:active,
a:focus {
    color: #333;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: .2s;
    -ms-transition-duration: .2s;
    -moz-transition-duration: .2s;
    -webkit-transition-duration: .2s;
    -o-transition-duration: .2s;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
img {
max-width: 100%;
height: auto;
}
section {
    padding: 60px 0;
   /* min-height: 100vh;*/
}
.footer {
background:#1E3D3C;
padding-top: 80px;
padding-bottom: 40px;
}
/*END FOOTER SOCIAL DESIGN*/
.single_footer{}
@media only screen and (max-width:768px) { 
.single_footer{margin-bottom:30px;}
}
.single_footer h4 {
color: #fff;
margin-top: 0;
margin-bottom: 25px;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
}
.single_footer h4::after {
content: "";
display: block;
height: 2px;
width: 40px;
background: #fff;
margin-top: 20px;
}
.single_footer p{color:#fff;}
.single_footer ul {
margin: 0;
padding: 0;
list-style: none;
}
.single_footer ul li{}
.single_footer ul li a {
color: #A4B7A3;
-webkit-transition: all 0.3s ease 0s;
transition: all 0.3s ease 0s;
line-height: 36px;
font-size: 15px;
text-transform: capitalize;
}
.single_footer ul li a:hover { color: #8D574C; }

.single_footer_address{}
.single_footer_address ul{}
.single_footer_address ul li{color:#fff;}
.single_footer_address ul li span {
font-weight: 400;
color: #fff;
line-height: 28px;
}
.contact_social ul {
list-style: outside none none;
margin: 0;
padding: 0;
}

/*START NEWSLETTER CSS*/
.subscribe {
display: block;
position: relative;
margin-top: 15px;
width: 100%;
}
.subscribe__input {
background-color: #fff;
border: medium none;
border-radius: 5px;
color: #333;
display: block;
font-size: 15px;
font-weight: 500;
height: 60px;
letter-spacing: 0.4px;
margin: 0;
padding: 0 150px 0 20px;
text-align: center;
text-transform: capitalize;
width: 100%;
}
@media only screen and (max-width:768px) { 
.subscribe__input{padding: 0 50px 0 20px;}
}

.subscribe__btn {
background-color: transparent;
border-radius: 0 25px 25px 0;
color: #01c7e9;
cursor: pointer;
display: block;
font-size: 20px;
height: 60px;
position: absolute;
right: 0;
top: 0;
width: 60px;
}
.subscribe__btn i{transition: all 0.3s ease 0s;}
@media only screen and (max-width:768px) { 
.subscribe__btn{right:0px;}
}

.subscribe__btn:hover i{
color:#ff3666;
}
button {
padding: 0;
border: none;
background-color: transparent;
-webkit-border-radius: 0;
border-radius: 0;
}
/*END NEWSLETTER CSS*/

/*START SOCIAL PROFILE CSS*/
.social_profile {margin-top:40px;}
.social_profile ul{
list-style: outside none none;
margin: 0;
padding: 0;
}
.social_profile ul li{float:left;}
.social_profile ul li a {
text-align: center;
border: 0px;
text-transform: uppercase;
transition: all 0.3s ease 0s;
margin: 0px 5px;
font-size: 18px;
color: #fff;
border-radius: 30px;
width: 50px;
height: 50px;
line-height: 50px;
display: block;
border: 1px solid rgba(255,255,255,0.2);
}
@media only screen and (max-width:768px) { 
.social_profile ul li a{margin-right:10px;margin-bottom:10px;}
}
@media only screen and (max-width:480px) { 
.social_profile ul li a{
width:40px;
height:40px;
line-height:40px;
}
}
.social_profile ul li a:hover{
background:#8D574C;
border: 1px solid #8D574C;
color:#fff;
border:0px;
}
/*END SOCIAL PROFILE CSS*/
.copyright {
margin-top: 70px;
padding-top: 40px;
color:#fff;
font-size: 15px;
border-top: 1px solid rgba(255,255,255,0.4);
text-align: center;
}
.copyright a{color:#01c7e9;transition: all 0.2s ease 0s;}
.copyright a:hover{color:#8D574C;}
</style>


<div class="footer">
<div class="container">     
   <div class="row">                       
       <div class="col-lg-4 col-sm-4 col-xs-12">
           <div class="single_footer">
           <h4>Explore</h4>
               <ul>
               <li><a href="../index.html">Home</a></li>
               <li><a href="../pages/aboutUs/about.html">About Us</a></li>
               <li><a href="../pages/instructors/instructors.html">Services </a></li>
               <li><a href="../pages/contactUs/contactUs.html">Contact Us</a></li>
               </ul>
           </div>
       </div>

                           <div class="col-md-4 col-sm-4 col-xs-12">
                               <div class="single_footer single_footer_address">
                                   <h4>Utility Pages</h4>
                                   <ul>
                                       <li><a href="#">FAQ's</a></li>
                                       <li><a href="#">Terms&Conditions</a></li>
                                       <li><a href="#">Privacy Policy</a></li>
                                   
                                   </ul>
                               </div>
                           </div>

                       <div class="col-md-4 col-sm-4 col-xs-12">
                           <div class="single_footer single_footer_address">
                               <h4>Subscribe today</h4>
                               <div class="signup_form">                           
                                   <form action="#" class="subscribe">
                                       <input type="text" class="subscribe__input" placeholder="Enter Email Address">
                                       <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                   </form>
                               </div>
                           </div>
                           <div class="social_profile">
                               <ul>
                                   <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                   <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                   <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                   <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                               </ul>
                           </div>                          
                       </div>        
                   </div> 
                   <div class="row">
                       <div class="col-lg-12 col-sm-12 col-xs-12">
                           <p class="copyright">Copyright © 2024 <a href="#">YogaWithKavita</a>.</p>
                       </div>               
                   </div>                
               </div>
           </div>





`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);
