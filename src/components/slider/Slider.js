import React, { useEffect, useState } from 'react';
import { inital_base_url, getRandomArbitrary } from '../../redux/actions';
import '../../style/Slider.css';

function Slider(props) {


	const [count, setcount] = useState(1)
	const [countl, setcountl] = useState(0);
	const [trans, setTrans] = useState(0);
	const [left, setLeft] = useState(0);
	const [states, setStates] = useState({ interval: true, clLeft: 0, counter: 1 });
	let sec = 8000;



	function scrolParams() {
		window.onscroll = () => {
			
			setStates({ interval: true, clLeft: 0, counter: 1 })
		}


	}

	function getIntervalImages() {
		setInterval(() => {
			setcount(c => c + 1);
		}, sec);

	}

	function countFilter(s, c) {
		let mLeft = window.innerWidth + window.innerWidth;
		if (s !== undefined) {
			setcountl(s);
			for (let i = 0; i < s; i++) {
				if (c === i) {
					setTimeout(() => {
						setLeft(0);
						setTrans(1);
					}, 100);
					setTimeout(() => {
						setLeft(-mLeft);
						setTrans(1);
					}, sec - 500)
					setLeft(window.innerWidth);
					setTrans(0)
				}
			}
		} else {
			setcountl(0)

		}
	}

	function restartImages() {
		if (props.status === 200) {
			if (count === countl) {
				setcount(1)

			}
		}


	}


	useEffect(() => {
		scrolParams();
		getIntervalImages()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	useEffect(() => {
		countFilter(props.dataImages.length + 1, count);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.dataImages.length, count])

	useEffect(() => {
		restartImages();
	})



	function clickArrows(c) {

		setTimeout(() => {
			if (c === 0) {
				setStates({ clLeft: -window.innerWidth - window.innerWidth, counter: states.counter })
			} else {
				setStates({ clLeft: window.innerWidth, counter: states.counter })
			}

		}, 500)
		setTimeout(() => {
			if (c === 0) {
				setStates({ clLeft: window.innerWidth, counter: states.counter + 1 })
			} else {
				setStates({ clLeft: -window.innerWidth - window.innerWidth, counter: states.counter - 1 })
			}

		}, 1000)
		setTimeout(() => {
			if (c === 0) {
				setStates({ clLeft: 0, counter: states.counter + 1 })
			} else {
				setStates({ clLeft: 0, counter: states.counter - 1 })
			}

		}, 1200)
	}
	let lineTop = window.innerHeight / 2;

	return (
		<div className="Slider text-center">
			<div className="row" style={{ height: window.innerHeight + 'px' }}>
				<div className="col-1" style={{ marginTop: lineTop }}><div id="blLeft"><img onClick={() => clickArrows(0)} onMouseOver={() => setStates({ interval: false, counter: states.counter })} onMouseOut={() => setStates({ counter: states.counter })} id="left" src="/img/icon/left.jpg" alt="Влево" /></div></div>
				<div className="col-sm">
					{
						props.dataImages.map((x, i) =>
							<div key={x.id}>
								<div className="img-container text-center" style={{ width: window.innerWidth - 370 + 'px', marginTop: '120px', transition: 0 + 's' }}>
									<div className="img-block" >
										{(states.interval === true) ?
											(count.toString() === x.id) ?
												<div>
													<h2 style={{ marginLeft: left + 'px', transition: trans + 's', color: '#' + getRandomArbitrary(100000, 999999), zIndex: 0, position: 'relative' }} className="descript" ><div>{x.names}</div></h2>
													<img style={{ marginLeft: left + 'px', transition: trans + 's', height: window.innerHeight - 300 + 'px', zIndex: 0, position: 'relative' }} src={`${inital_base_url}/img/slider/${x.img}`} alt={x.names} />
												</div>
												: ''
											: (states.counter.toString() === x.id) ?
												<div>
													<h2 style={{ marginLeft: states.clLeft + 'px', transition: trans + 's', color: '#' + getRandomArbitrary(100000, 999999), zIndex: 0, position: 'relative' }} className="descript" ><div>{x.names}</div></h2>
													<img style={{ marginLeft: states.clLeft + 'px', transition: trans + 's', height: window.innerHeight - 300 + 'px', zIndex: 0, position: 'relative' }} src={`${inital_base_url}/img/slider/${x.img}`} alt={x.names} />
												</div>
												: ''}
									</div>
								</div>
							</div>
						)
					}
				</div>
				<div className="col-1" style={{ marginTop: lineTop }}><div id="blRight"><img onClick={() => clickArrows(1)} onMouseOver={() => setStates({ interval: false, counter: states.counter })} onMouseOut={() => setStates({ counter: states.counter })} id="right" src="/img/icon/right.jpg" alt="Вправо" /></div></div>
			</div>
		</div>
	)
}




export default Slider