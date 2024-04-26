const sliderTemplate = document.createElement('template');
sliderTemplate.innerHTML = `

<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css"> 
<link rel="stylesheet" type="text/css" href="./css/main.css">
<link rel="stylesheet" type="text/css" href="./css/uikit.min.css"> 
<link rel="stylesheet" type="text/css" href="./css/fontawesome/css/all.css">

<style>
.carousel-item{
	height: 500px;
}
.crs-img-1{
	background: url('/img/slider-img1.jpg');
	background-size: cover;
	background-position: center;
	width:100%;
}
.crs-img-2{
	background: url('/img/slider-img2.jpg');
	background-size: cover;
	background-position: center;
	width:100%;
}
.crs-img-3{
	background: url('/img/slider-img3.jpg');
	background-size: cover;
	background-position: center;
	width:100%;
}
.crs-img-4{
	background: url('/img/slider-img4.jpg');
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



<script type="text/javascript" src="./jquery-slim.min.js"></script>
<script type="text/javascript" src="./popper.min.js"></script>
<script type="text/javascript" src="./bootstrap.min.js"></script>
<script type="text/javascript" src="./uikit.min.js"></script>
<script type="text/javascript" src="./uikit-icons.min.js"></script> 
`

class Slider extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(sliderTemplate.content);
    }
}

customElements.define('slider-component', Slider);