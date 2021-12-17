
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
let images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png",
"https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo.png",
"https://seeklogo.com/images/C/coca-cola-circle-logo-A9EBD3B00A-seeklogo.com.png",
 "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
 "https://listcarbrands.com/wp-content/uploads/2017/10/Tata-Motors-Logo.png",
 "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
 "https://www.logolynx.com/images/logolynx/a1/a1d523c54b381dc2d7b7911cc79367c1.jpeg"
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

//have to continue with getting the id by click
function replyClick(clicked_id, parent_id)
{
    var parent = document.getElementById(parent_id)
    // console.log(clicked_id)
    // console.log(parent)
    // console.log(parent.getElementsByClassName("star"))
 
   //making the stars yellow 
   const stars = parent.getElementsByClassName("star");
   for(let i=0; i<clicked_id; i++){
    stars[i].innerHTML="&#9733;"   
    stars[i].classList.add("star-filled")
       console.log(stars[i]);
   }
}
