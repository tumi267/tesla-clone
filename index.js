const content=document.querySelectorAll('.card')
let r = document.querySelector(':root');
let observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
    if(!entry.isIntersecting){
        return;
    }
    entry.target.classList.toggle("show",entry.isIntersecting)
    title(entry.target.id)
})
},{threshold:0.5,
});
content.forEach(card=>{
    observer.observe(card)
})
const title=(num)=>{
        switch(parseInt(num)) {
        case 0:  
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/lhd-model-3-social.png)'); 
          break;
        case 1:
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Model-S-Exterior.jpeg)'); 
          break;
          case 2:
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Model-Y-Main-Hero.jpeg)'); 
          break;
        case 3:
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/tesla_x.png)'); 
        break;
        case 4:
            console.log('blkock4')
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Homepage-SolarRoof-Desktop-Global.png)'); 
        break;
        case 5:
            console.log('blkock5')
            r.style.setProperty(`--background${num}`, 'url(./tesla-site-img/Accessories.png)'); 
        break;
        default:
        
      }
    r.style.setProperty(`--title${num}`, 'block');  
    r.style.setProperty(`--btn${num}`, 'block');

  }
