const carouselTemplate = document.createElement('template');
carouselTemplate.innerHTML = `

<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/uikit.min.css"> 
<link rel="stylesheet" type="text/css" href="css/fontawesome/css/all.css">

<style>
.carousel-item{
	height: 500px;
}
.crs-img-1{
	background: url("../img/slider-img1.jpg");
	background-size: cover;
	background-position: center;
	width:100%;
}
.crs-img-2{
	background: url("../img/slider-img2.jpg");
	background-size: cover;
	background-position: center;
	width:100%;
}
.crs-img-3{
	background: url("../img/slider-img3.jpg");
	background-size: cover;
	background-position: center;
	width:100%;
}
.crs-img-4{
	background: url("../img/slider-img4.jpg");
	background-size: cover;
	background-position: center;
	width:100%;
}

</style>
<section id="slider" class="bg-dark"> 
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li class="active" data-slide-to="0" data-target="#myCarousel"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
				<li data-target="#myCarousel" data-slide-to="3"></li>
			</ol>
			<div class="carousel-inner" role="listbox">
				<div class="carousel-item crs-img-1 active">
					<div class="container1">
						<div class="carousel-caption pb-5 mb-5 text-left">
							<h2 class="display-4 text-light">Heading One</h2>
							<p class="lead">
								Lorem ipsum ut do dolor excepteur adipisicing et minim consectetur <br>elit laborum quis nostrud eiusmod.
							</p>
							<a href="#" class="btn btn-success">See More</a>
						</div>
					</div>
				</div>
				<div class="carousel-item crs-img-2">
					<div class="container1">
						<div class="carousel-caption mb-5 text-center">
							<h2 class="display-4 text-light">Heading Two</h2>
							<p>
								Lorem ipsum ut do dolor excepteur adipisicing et minim consectetur elit laborum quis nostrud eiusmod.
							</p>
							<a href="#" class="btn btn-warning">Read More</a>
						</div>
					</div>
				</div>
				<div class="carousel-item crs-img-3">
					<div class="container1">
						<div class="carousel-caption pb-5 mb-5 text-right">
							<h2 class="display-4 text-light">Heading Three</h2>
							<p>
								Lorem ipsum ut do dolor excepteur adipisicing et minim <br>consectetur elit laborum quis nostrud eiusmod.
							</p>
							<a href="#" class="btn btn-info">Learn More</a>
						</div>
					</div>
				</div>
				<div class="carousel-item crs-img-4">
					<div class="container1">
						<div class="carousel-caption pb-5 mb-5 text-left">
							<h2 class="display-4 text-light">Heading Four</h2>
							<p>
								Lorem ipsum ut do dolor excepteur adipisicing et minim consectetur elit <br>laborum quis nostrud eiusmod.
							</p>
							<a href="#" class="btn btn-success">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<a href="#myCarousel" class="carousel-control-prev" data-slide="prev">
				<span class="carousel-control-prev-icon"></span>
			</a>
			<a href="#myCarousel" class="carousel-control-next" data-slide="next">
				<span class="carousel-control-next-icon"></span>
			</a>
		</div>		
	</section>
 
  <script type="text/javascript" src="js/jquery-slim.min.js"></script>
  <script type="text/javascript" src="js/popper.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/uikit.min.js"></script>
  <script type="text/javascript" src="js/uikit-icons.min.js"></script> 
`

class Carousel extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(carouselTemplate.content);

		$(shadowRoot.querySelector('#myCarousel')).carousel();
    }
}

customElements.define('carousel-component', Carousel);




{/* <section id="showcase">
<div class="container">
	<div class="row py-5 text-justify">
		<div class="col-lg-4 col-md-4">
			<i class="fas fa-cogs mb-3"></i>
			<h3>Turning Gears</h3>
			<p class="lead mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur.</p>
		</div>
		<div class="col-lg-4 col-md-4">
			<i class="fas fa-cloud mb-3"></i>
			<h3>Sending Data</h3>
			<p class="lead mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur.</p>
		</div>
		<div class="col-lg-4 col-md-4">
			<i class="fas fa-cart-plus mb-3"></i>
			<h3>Making Money</h3>
			<p class="lead mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, totam accusamus veritatis fugiat animi pariatur.</p>
		</div>
	</div>
</div>
</section> */}