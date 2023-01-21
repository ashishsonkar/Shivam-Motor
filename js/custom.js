var header=document.querySelector("header");
header.innerHTML=`
	<div class="bg-color">
		<div class="container">
			<div class="row p-3 d-flex align-items-center" id="row">
				
			</div><!--end-row-->
		</div><!--end-container-->
	</div>
`;
let columns=()=>{
	for(var i=0;i<2;i++){
		contact=(number,socialMedia)=>{
			if(i==0){
				row.innerHTML+=`
					<div class="col-md-8">
						<div class="text-white fw-bold ps-5">
							${number[0]} &nbsp; ${number[1]}
						</div>
					</div><!--end-columns-->
				`;
			}
			else{
				row.innerHTML+=`
					<div class="col-md-4">
						<div class="text-center fs-4">
							${socialMedia[0]} &nbsp;&nbsp;&nbsp; ${socialMedia[1]}
						</div>
					</div><!--end-columns-->
				`;
			}
		}
		contact(['<i class="fa-solid fa-envelope text-white"></i> info@shivammotors.co.in','<i class="fa-solid fa-phone text-white"></i>  077522-52015 , 077522-52014'],['<i class="fa-brands fa-facebook-f text-white"></i>','<i class="fa-brands fa-whatsapp text-white"></i>']);
	}
}
columns();

var section="<nav id='nav' class='position-sticky top-0 bg-white shadow'></nav>";
header.insertAdjacentHTML("afterend",section);

	nav.innerHTML=`
		<div class="container-fluid">
			<div class="row d-flex align-items-center p-4" id="navRow">
			
			</div><!--end-row-->
		</div><!--end-container-->
	`;
	
	var navbar=(logo,navigation)=>{
		for(let i=0;i<2;i++){
			if(i==0){
				navRow.innerHTML+=`
					<div class="col-md-4">
						<div>
							${logo}
						</div>
					</div><!--end-column-->
				`;
			}
			else{
				navRow.innerHTML+=`
					<div class="col-md-8">
						<div>
							<ul class="nav d-flex justify-content-end" id="NavBar">
								
							</ul>
						</div>
					</div><!--end-column-->
				`;
			}
			
		}
		for(let i=0;i<navigation.length;i++){
		NavBar.innerHTML+=`
			<li class="nav-item">
				<a href="#" class="nav-link text-decoration-none color fw-bolder py-3">${navigation[i]}</a>
			</li>
		`;		
		}
		
	}
	navbar("<img src='image/logo.png' alt='logo' width='450' height='55' id='LOGO'>",["Home","About","Body Building","New Products","Our Branches","Gallery","Contact Us","Web Mail"]);
	
	
	
	//media query by java script for navbar
	var media=()=>{
		var q=matchMedia("(max-width:768px)");
		if(q.matches){
			nav.classList.remove("top-0");
		}
		else{
		nav.classList.add("top-0");
		}
	}
	onload=media;
	onresize=media;
	//media query end here...
	
	
	
	
	var NavActives=document.querySelectorAll("#NavBar>li>a");
	
	NavActives[4].classList.add("bg-color","text-white");
	NavActives[4].classList.remove("fw-bolder");
	
	NavActives[7].classList.add("bg-color","text-white");
	NavActives[7].classList.remove("fw-bolder");
	
var Nav=document.querySelector("nav");
	
var imgBgDiv=`
			<div class='bg-image d-flex align-items-center' id="bgImgDiv">
				<h1 class="text-white ps-5">Our Branches</h1>
			</div>
			`;	

	Nav.insertAdjacentHTML("afterend",imgBgDiv);
	
	var sec="<section id='sec1'></section>";
	
	bgImgDiv.insertAdjacentHTML("afterend",sec);
			  
	sec1.innerHTML+=`
		<div class="mt-3">
			<h2 class="text-center fw-bolder">OUR BRANCHES</h2>
			<div>
				<marquee>
					<p class="text-black">
						Shivam Motors Pvt. Ltd. in Bilaspur-chhattisgarh is one of the leading businesses in the Commercial Vehicle Dealers-Tata. Also known for <b>Commercial Vehicle Dealers-Tata, Truck Dealers-Tata, Truck Repair & Services, Commercial Vehicle Dealers-Tata (Authorised), Commercial Vehicle Dealers, Mini Truck Repair & Services-Tata Ace, Truck Dealers.</b>
					</p>
				</marquee>
			</div>
			<div class="w-75 m-auto">
				<div class="table-responsive">
					<table class="table table-striped table-sm" id="table">
						<thead>
							<tr id="theadTr"></tr>
						</thead>
						<tbody>
							<tr id="tbodyTr"></tr>
							<tr id="tbodyTr2"></tr>
							<tr id="tbodyTr3"></tr>
							<tr id="tbodyTr4"></tr>
							<tr id="tbodyTr5"></tr>
						</tbody>
					</table>
				</div>
			</div><!--end-container-->
		</div>
	`;
var tableData=(heading,Tr1,Tr2,Tr3,Tr4,Tr5)=>{
	for(let i=0;i<5;i++){
		theadTr.innerHTML+=`<th>${heading[i]}</th>`;
		tbodyTr.innerHTML+=`<td>${Tr1[i]}</td>`;
		tbodyTr2.innerHTML+=`<td>${Tr2[i]}</td>`;
		tbodyTr3.innerHTML+=`<td>${Tr3[i]}</td>`;
		tbodyTr4.innerHTML+=`<td>${Tr4[i]}</td>`;
		tbodyTr5.innerHTML+=`<td>${Tr5[i]}</td>`;
	}
}
tableData(["NO.","CITY","BRANCH MANAGER","ADDRESS","PHONE"],["1.","KORBA","Mr. Prafullo Bhattacharya","Shivam Motors Pvt. Ltd. Bypass Naktikhar Road Village:Pandripani, Korba (CG)","8730009732"],["2.","JANJGIR-CHAMPA","Mr. Vinay Shukla","Shivam Motors(P) Ltd, Akaltara Road, Vill- Tilai, Near Samrat Dhaba Janjgir. Dist – Janjgir - Champa","9827941742"],["3.","RAIGARH","Mr. RP Diwvedi","Shivam Motors (P) Ltd, Chhatamuda By pass chowk, NH-200, Orissa road, Raigarh (C.G)","9753876876"],["4.","AMBIKAPUR","Mr. Rakesh Mishra","Shivam Motors(P) Ltd, Sanjay Nagar Mahaveerpur, Manendra garh Road, Ambikapur. Dist – Surguja (C.G)-497001.","	9826029275"],["5.","PENDRA","..........","Shivam Motors (P) Ltd, ITI Road, Semra Pendra road,Pendra.",".........."]);

sec1.innerHTML+=`
	<div class="container">
		<div class="py-4 d-flex justify-content-center">
			<img src="image/shivam--motor-contact.png" alt="shivam--motor-contact" class="img-thumbnail">
		</div>
	</div>
`;

var footer=document.querySelector("footer");
	footer.innerHTML+=`
		<div class="bg-image2" id="FBG">
			<div class="container">
				<div class="row p-5" id="footerRow">
					
				</div><!--end-row-->
			</div><!--end-container-->
		</div>
	`;
	
var frow=(ulHeading)=>{
	for(let i=0;i<4;i++){
		footerRow.innerHTML+=`
			<div class="col-md-3 col-sm-6">
				<div class="text-white">
					<h4>${ulHeading[i]}</h4>
					<ul class="FooterUl"></ul>
				</div>
			</div><!--end-columns-->
		`;
	}
	var Fcol=document.querySelectorAll(".FooterUl")[0];
	var firstUl=(lis)=>{
		for(let i=0;i<5;i++){
		Fcol.innerHTML+=`
		<li class="py-2 small"><a href="#" class="text-white text-decoration-none">${lis[i]}</a></li>
		`;
		}
	}
	firstUl(["Commercial Vehicle Dealers-Tata","Mini Truck Repair","Truck Repair & Services","Truck Repair & Services-Tata Ace","Tata ok certified vehicles"]);
	
	var Fcol=document.querySelectorAll(".FooterUl")[1];
	var secondUl=(lis)=>{
		for(let i=0;i<5;i++){
		Fcol.innerHTML+=`
		<li class="py-2 small"><a href="#" class="text-white text-decoration-none">${lis[i]}</a></li>
		`;
		}
	}
	secondUl(["LOAD BODY","TIPPER BODY","TIP TRAILER","FLAT BED TRAILER","SIDE WALL TRAILER"]);
	
	var Fcol=document.querySelectorAll(".FooterUl")[2];
	var thirdUl=(lis)=>{
		for(let i=0;i<7;i++){
		Fcol.innerHTML+=`
		<li class="py-2 small"><a href="#" class="text-white text-decoration-none">${lis[i]}</a></li>
		`;
		}
	}
	thirdUl(["Home","About","Body Building","New Products","Our Branches","Gallery","Contact us"]);
	
	var Fcol=document.querySelectorAll(".FooterUl")[3];
	var fourthUl=(lis)=>{
		for(let i=0;i<4;i++){
		Fcol.innerHTML+=`
		<li class="py-2 small LastUl"><a href="#" class="text-white text-decoration-none">${lis[i]}</a></li>
		`;
		}
	}
	fourthUl(["Sector C-4,INDUSTRIAL AREA, Bilaspur Rd, Sirgitti, Bilaspur, Chhattisgarh 495004","Phone: 077522 52015, 7752252014","Email : info@shivammotors.co.in"," <i class='fa-brands fa-facebook-f text-white fs-4'> &nbsp;&nbsp; </i> <i class='fa-brands fa-whatsapp text-white fs-4'></i>"]);
	
	var unstyled=document.querySelectorAll(".LastUl")[3];
	unstyled.classList.add("list-style-none");
}
frow(["SERVICES","OUR TRUCK","MENU","ADDRESS"]);
