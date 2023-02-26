class Menu extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        :root{
            --toggle:none;
            --meunbtn:block;
        }
        .menu_list{
           display: var(--toggle);
           position:fixed;
           margin-top:-9.8rem;
           height: 700px;
           width:100%;
           z-index:5;
           backdrop-filter: blur(4px);
           z-index:2;
           animation: slide 0.5s;
          }
        .menu_list_contain{
            position: relative;
            top: 8%;
            left: 65%;
            opacity:1;
            background-color:#f4f4f4;
            width:30%;
            padding:2rem;
            height:100%;
            color:#5c5e62;
            z-index:4;
          }
          .nav_header{      
            position: sticky;
            top:3.3%;
            padding-left: 3.5%;
            padding-right: 1%;
            display: flex;
            justify-content: space-between;
        }
        .menu_list_close{
            display:flex;
            flex-direction: row-reverse;
            color:#5c5e62;
           
        }
        li{
            list-style-type:none;
            font-size:1.3rem;
            text-align: start;
            margin-bottom: 1rem;
        }
        li:hover{
            position: relative;
            left:8%;
            font-size:2rem
        }
        a{
            color:#797c82;
            margin-right: 2rem;
            margin-top:1rem;
        }
        @keyframes slide {
          0%{opacity:0; right:-100px}
          25%{opacity: 0.5;}
          100%{opacity:1; right:0px}
      }
        </style>
        
        <div class="nav_header">
        <img id='logo' src = "./tesla-site-img/Tesla,_Inc.-Logo.wine.svg" alt="tesla-site-img/Tesla,_Inc.-Logo.wine.svg"/>
        
        <a id="menu_toggle">menu</a>
        </div>
          <div class="menu_list">
          <div class='menu_list_contain'>
          <h3 class='menu_list_close'>X</h3>
          <br/>
          <hr/>
          <br/>
           <ul>
           <li><a href="./index.html">home</a></li>
           <li><a href="./Model3.html">Model 3</a></li>
           <li><a href="./Model3.html">Model y</a></li>
           <li><a href="./Model3.html">Model X</a></li>
           <li><a href="./Model3.html">Model s</a></li>
           <li><a href="./Model3.html">Solar Panels</a></li>
           <li><a href="./Model3.html">Accessories</a></li>
           <li><a href="./about.html">about</a></li>
           <li><a href="./contact.html">Contact</a></li>
            </ul>
          </div>
          </div>
      `;
    }
  }
   customElements.define('menu-component', Menu);
   let logo=document.getElementById('logo')
   logo.addEventListener('click',()=>{
    window.location.href = "./index.html"
   })
   let menu_toggle=document.getElementById('menu_toggle')
   let j = document.querySelector(':root');
   menu_toggle.addEventListener('click',()=>{
    j.style.setProperty(`--toggle`, 'block'); 
   })
   let menu_body=document.getElementsByClassName('menu_list')
   menu_body[0].addEventListener('click',()=>{  
    j.style.setProperty(`--meunbtn`,'block')
   })
   let menu_body_cloe=document.getElementsByClassName('menu_list_close')
   menu_body[0].addEventListener('click',()=>{
    j.style.setProperty(`--toggle`, 'none'); 
    j.style.setProperty(`--meunbtn`,'block')
   })