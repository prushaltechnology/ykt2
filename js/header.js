const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<style>

.container-nav{
  
    min-height: 20vh;
    background-color: #A4B7A3;
    width: 100%;
    padding-left: 8%;
    padding-right: 8%;
    box-sizing: border-box;
    overflow: hidden;
}

   
   .navbar{
       width: 100%;
       display: flex;
       align-items: center;
   }
   
   .logo{
       width: 100px;
       cursor: pointer;
       margin: 10px 0;
   }
   
   .menu-icon{
       width: 25px;
       cursor: pointer;
       display: none;
   }
   
   
   nav{
    flex: 1;
    text-align: right;
   }
   
   nav ul li{
       list-style: none;
       display: inline-block;
       margin-right: 30px;
   }
   
   nav ul li a{
       text-decoration: none;
       color: white;
    font-weight: bold;
   }
   
   
   nav ul li::after{
       content: '';
       width: 0%;
       height: 2px;
       background: #FFC263;
       display: block;
       margin: auto;
       transition: 0.5s;
   }
   
   nav ul li:hover::after{
       width: 100%;
   }
   
   
   .main-text{
       width: 90%;
       color: #000000;
       position: absolute;
       top: 40%;
       left: 50%;
       transform: translate( -50%, -50%);
       text-align: center; 
   }
   
   .main-text h1 {
       font-size: 62px;
       padding-bottom: 0.5em;
   }
   
   .main-text p{
       margin: 10px 0;
       font-size: 14px;
       color: #000000;
   }
   
   .hero-btn{
       display: inline-block;
       text-decoration: none;
       color: #000000;
       border: 1px solid #000000;
       padding: 12px 34px;
       font-size: 13px;
       background: transparent;
       position: relative;
       cursor: pointer;
   }
   
   .hero-btn:hover{
       border: 1px solid #FFC263;
       background: #FFC263;
       transition: 1s;
   }
   /* Hamburger Menu */
   
   @media only screen and (max-width:768px) {
       nav ul{
           width: 100%;
           background: linear-gradient(#ff54a2,#ff575a);
           position: absolute;
           top: 80px;
           right: 0;
           z-index: 2;
       }
       nav ul li{
           display: block;
           margin-top: 10px;
           margin-bottom: 10px;
       }
       nav ul li a{
           color: #fff;
       }
   
       .menu-icon{
           display: block;
       }
       #menuList{
           overflow: hidden; 
           transition: 0.5s;  
       }
   }
   
</style>

<div class="container-nav">
  <div class="navbar">
    <img src="../images/Final2.svg" class="logo"></a>
    <nav>
      <ul id="menuList">
        <li><a href="#">Home</a></li>
        <li><a href="./pages/aboutUs/about.html">About Us</a></li>
         <!-- <li><a href="./classes.html">Classes</a></li> -->
        <li><a href="./pages/membership/membership.html">Memberships</a></li>
        <li><a href="./pages/instructors/instructors.html">Instructors</a></li>
        <li><a href="./pages/contactUs/contactUs.html">Contact Us</a></li>
      </ul>
    </nav>
    <img src="images/menu.png" class="menu-icon" onclick="toggleMenu()"/>
  </div>
</div> 


<script>
  var menuList = document.getElementById("menuList");
  menuList.style.maxHeight = "0px";

  function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
      menuList.style.maxHeight = "130px";
    }else {
      menuList.style.maxHeight = "0px";
    }
  }
  </script>



`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
