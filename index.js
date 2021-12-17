
//setting the number of logos w.r.t viewport width
function viewport(){
    var e = window, a = 'inner';
    if ( !( 'innerWidth' in window )){
    a = 'client';
    e = document.documentElement || document.body;
    }
    var s =  e[ a+'Width' ]
    var n ;
    if(s > 1007) {
        n=8;
    } else if( s<= 1007 && s >641){
        n=4;
    } else{
        n=2;
    }
    console.log(s);
    return n;
}
var numOfLogos = viewport();


// setting the images array and other required variables
let images = ["https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/mcdonalds-logo.png",
"https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/accenture-logo.png",
"https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/pepsi-logo.png",
"https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/coca-cola-logo.png",
"https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/starbucks-logo.png",
 "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/gillette-logo.png",
 "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/netflix-logo.png",
 "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ikea-logo.png",
 "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png",
 "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png",
 "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png",
 "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/amazon-logo.png",
 "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/facebook-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/walt-disney-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/toyota-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/att-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/louis-vuitton-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/intel-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/nike-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/cisco-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ge-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/mercedes-benz-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/oracle-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/verizon-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ibm-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/bmw-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/sap-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/marlboro-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/budweiser-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/visa-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/walmart-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/american-express-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/honda-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/gucci-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/loreal-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/home-depot-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/hermes-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/nescafe-logo.png",
"https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/frito-lay-logo.png",
"https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/audi-logo.png"
]

//number of rows
var size = images.length/numOfLogos;
var count=0;

//loop for adding logos
for(let j=0; j<size; j++){
    //row creation
    var row = document.createElement("div");
    row.className = "row";

    // loop for adding 8 logos in a row
    for( let i=0; i<numOfLogos; i++){
        //div creation
        var div = document.createElement("div");
        div.className = "box";
    
        //setting the id of div
        let imageNumber = count +1;
        let divIdName = "logo" + imageNumber;
        div.setAttribute('id', divIdName);

        //img tag creation
        var img = document.createElement("img");
        img.src = images[count];
        img.className = "logo";
        div.appendChild(img);

        //para creation (rating stars)
        var sd = document.createElement("div");
        for(let k=0; k<5; k++){
            var sp = document.createElement("span");
            const starNum = k+1;
            let spIdName = starNum
            sp.setAttribute('id', spIdName);
            sp.setAttribute('onClick',"replyClick(this.id, this.parentNode.id)")
            sp.innerHTML = "&#9734;";
            sp.className = "star";
            sd.appendChild(sp);
        }
        let sdIdName = "rating" + imageNumber
        sd.setAttribute('id', sdIdName);
        div.appendChild(sd);

        // adding div to row
        row.appendChild(div);
 
        // increasing the count to make it point to the next link in images array
        count++;
    }
    //adding row to the body
    document.body.appendChild(row);
    
};


var star1=0, star2=0, star3=0, star4=0, star5=0;
//have to continue with getting the id by click
function replyClick(clicked_id, parent_id)
{
    var parent = document.getElementById(parent_id)
    console.log(clicked_id)
    console.log(parent)
    // console.log(parent.getElementsByClassName("star"))
    
    if(clicked_id === '1'){
        star1++;
    } else if(clicked_id === '2'){
        star2++;
    } else if(clicked_id === '3'){
        star3++;
    } else if( clicked_id === '4'){
        star4++;
    } else if(clicked_id === '5'){
        star5++;
    }
    console.log(star1, star2, star3, star4, star5);


   //making the stars yellow 
   const stars = parent.getElementsByClassName("star");
   for(let i=0; i<clicked_id; i++){
    stars[i].innerHTML="&#9733;"   
    stars[i].classList.add("star-filled")
       console.log(stars[i]);
   }
}

window.addEventListener('resize', function(){
    this.alert("DO NOT CHANGE THE DEVICE");
})

window.onbeforeunload =(e) => {
    e = e || window.event;
    if (e) {
        e.returnValue = 'Sure?';
    }
    return 'Sure?';
    };