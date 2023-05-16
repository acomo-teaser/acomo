	const bg = document.getElementById('container');
	const button = document.getElementById('button');
	const map = document.getElementById('map');

	let height, width, center;

	function setSizes(){
		height = bg.getBoundingClientRect().height;
		width = bg.getBoundingClientRect().width;

		center = {
		  x: parseInt( bg.getBoundingClientRect().x + (.5 * width) ),
		  y: parseInt( bg.getBoundingClientRect().y + (.5 * height) )
		};
	}

	function enableFollow(){
		bg.addEventListener( 'touchmove', followCursor);
		bg.addEventListener( 'mouseover', followCursor);
		bg.addEventListener( 'mousemove', followCursor);
	}

	bg.onanimationend = () =>{ enableFollow(); };
	document.getElementById('map').addEventListener( 'click', 
		()=>{ 
			document.querySelector('footer').classList.remove('active');
			button.classList.remove('active');
		 }
	);

	button.addEventListener( 'click', 
		()=>{ 
			document.getElementsByTagName('footer')[0].classList.toggle('active');
			button.classList.toggle('active');
		 }
	);

	window.onresize = ()=>{ setSizes(); };
	window.addEventListener('load',function(){
		document.querySelector('body').classList.add("loaded")  
	});


	function followCursor(e){

		bg.classList.add('touched');

		const eventY =  e.clientY || e.touches[0].pageY;
		const eventX =  e.clientX || e.touches[0].pageX;

		const y =  (eventY - center.y);
		const x =  (eventX - center.x);

		map.style=`mask-position ${x}px ${y}px; -webkit-mask-position:${x}px ${y}px; mask-origin: ${x}px ${y}px; -webkit-mask-origin: ${x}px ${y}px;`;

	}

	setSizes();