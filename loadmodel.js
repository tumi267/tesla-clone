const cards=document.querySelectorAll('.card')
let r = document.querySelector(':root');
let observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){ 
            return;
        }
        
        entry.target.classList.toggle("show",entry.isIntersecting)
        title(entry.target.id)
        console.log(entry.target.id)
    })
    },{threshold:0.5,
    });
    cards.forEach(card=>{
        observer.observe(card)
    })

    const title=(num)=>{
     
        switch(parseInt(num)) {
        case 0:  
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Model-3-Main.jpeg)'); 
            r.style.setProperty('--needle',100)
          break;
        case 1:
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/model3-lt-airporthero.jpeg)'); 
          break;
          case 2:
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Model-3-Performance.jpeg)'); 
          break;
        case 3:
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Model-3-allwhel.jpeg)'); 
        break;
        case 4:
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Model-3-Range-img.jpeg)'); 
        break;
        case 5:
        
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Model-3-Interior.jpeg)'); 
        break;
        case 6:
            
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/tesla-model-3-interior-side.jpeg)'); 
        break;
        case 7:
            
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Accessories.png)'); 
        break;
        case 8:
            
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/lhd-model-3-social.png)'); 
        break;
        case 9:
            
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Model-Y-Main-Hero.jpeg)'); 
        break;
        default:
        
      }
    r.style.setProperty(`--title${num}`, 'block');  
  }