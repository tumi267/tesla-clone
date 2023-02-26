let specs=[
    [[
    [{Battery:'Long Range'}],
    [{Acceleration:'3.1 s 0-60 mph with rollout subtracted'}],
    [{Range:'315 miles (EPA est.)'}],
    [{Drive:'Dual Motor All-Wheel Drive'}],
    [{Seating:'5 Adults'}],
    [{Wheels:'20"'}],],
    [
    [{Weight:'4,048 lbs'}],
    [{Cargo:'23 cu ft'}],
    [{Displays:'15" Center Touchscreen'}],
    [{Supercharging: 'Max/Payment Type 250 kW Max; Pay Per Use'}],
    [{Onboard: 'Charger Max 11.5 kW max (48A)'}],
    [{Warranty:'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'}]
    ]],
    [],
    [],
]
let speclist=specs[0][0]
let speclist2=specs[0][1]
const spec=speclist.map((e)=>{ 
        let key =Object.keys(e[0])[0]
        return `<div class='spec-content'>
        <h3 class='speces-content-header'>${key}</h3>
        <p >${e[0][key]}</p>
        </div>`
})
const spec2=speclist2.map((e)=>{ 
    let key =Object.keys(e[0])[0]
    return `<div class='spec-content'>
    <h3 class='speces-content-header'>${key}</h3>
    <p >${e[0][key]}</p>
    </div>`
})
let content= document.getElementById('speces-content0');
let content1= document.getElementById('speces-content1');
spec.forEach(htmlString => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    content.appendChild(div);
});
spec2.forEach(htmlString2 => {
    const div2 = document.createElement('div2');
    div2.innerHTML = htmlString2;
    content1.appendChild(div2);
});
let order=document.getElementsByClassName('order-car')
Array.from(order).forEach((e,i)=>{
    order[i].addEventListener("click",()=>{
        alert('display contact/redirect to contact page')
    })
})


