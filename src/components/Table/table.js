import react, { Component } from 'react'
import axios from 'axios'
import './table.css'

class Table extends Component {

	constructor(props) {
		super(props);

		this.state = {
			num_years : 4,
			num_sems : 3,
			last_item: null,
			hover:true,
		};

		const yrs = Array.from(Array(this.state.num_years).keys());
		const sems = Array.from(Array(this.state.num_sems).keys());
		const default_course = Array.from(Array(3).keys());


		this.state.data = {
				years : yrs.map((item, index) => {
					return ({
						year: item+1,
						sems:
							sems.map((item, index) => {
								return ({
									sem : item+1,
									courses : 
										default_course.map((item, index)=> {
											return ({
													course: ""
												})
										})
							
								})
							})
					})
				})
		};



	}

	componentDidMount() {
		/*
		this.add_course(1,2,'hello');
		this.add_course(1,2, 'COMP1511');
		this.add_course(1,2, 'comp1521');
		this.add_course(1,2,'hel')
		this.remove_course(1,2, 'COMP1511');
		this.add_course(1,2, 'OCOMP1511');
		*/
		const facebookID = window.localStorage.getItem('facebookId');
		axios.get(`http://localhost:8080/getProfile?facebookId=${facebookID}`, )
		.then(response => {
			if(response.data.data !== undefined ) {
				console.log('not null');
				//console.log(response.data.courseData)
				//this.state.data = response.data.data
				//console.log(this.state.data)
				console.log(response)
				this.setState({data: response.data.data.courseData})

			}
			return response

		})
		.then(response => {
			axios.headers = {
	            "Access-Control-Allow-Origin": "*",
	            "Content-Type" : "application/json"
	        }
	        axios.post('http://localhost:8080/postCourses', {
	            data: {
	            	facebookId: window.localStorage.getItem('facebookId'),
	                data : this.state.data
	            }
	        })
		})


		//this.setState({onChange:this.props.onChange});


		const elements = document.querySelectorAll('.squares')
		elements.forEach((item, index)=> {
			item.addEventListener('dragover', (e)=> {
			this.onDragOver(e);
			});
			item.addEventListener('drop', (e) => {
			this.onDrop(e);
			});
			item.addEventListener('mouseover', (e)=>{
			this.removeMouseOver(e);
			})

		})


		//adds to window


		const items = document.querySelectorAll('.items')
		items.forEach((item, index)=>{
			item.addEventListener('mouseover', (e)=>{
				this.onMouseOver(e);
			})
		})


		const texts = document.querySelectorAll('.texts')
		texts.forEach((item,index)=> {
			item.addEventListener('click', (e)=> {
				document.location="/reviewpage"
			})
		})




		
		const clicks = document.querySelectorAll('.cross_invisible')
		clicks.forEach((item, index)=> {
			item.addEventListener('click', (e)=> {
			this.onMouseClick(e);
			})
		})
		
		




	}
	/*
	shouldComponentUpdate(nextState) {
		const diffState = this.state.data !== nextState.data
		return diffState;
	}

	componentDidUpdate(prevState) {
		if(this.state.data != prevState.data) {
			axios.headers = {
	            "Access-Control-Allow-Origin": "*",
	            "Content-Type" : "application/json"
	        }
	        axios.post('http://localhost:8080/postCourses', {
	            data: {
	            	facebookId: window.localStorage.getItem('facebookId'),
	                courseData : this.state.data
	            }
	        })
	        .then (response => {
	            console.log(response);
	        })
		}

	}
	*/

	/*
	this handles the plus and minus -> expanding and contracting of table
	*/
	componentDidUpdate(prevProps,prevState) {
		if(this.props.years != prevProps.years) {
			this.setState({num_years: this.props.years})

			if(this.props.years > prevProps.years) {
				this.setState(state=>{


					const sems = Array.from(Array(this.state.num_sems).keys());
					const default_course = Array.from(Array(3).keys());

					const additional_data = 
					{year: state.num_years, 
						sems:
							sems.map((item, index) => {
								return ({
									sem : item+1,
									courses : 
										default_course.map((item, index)=> {
											return ({
													course: ""
													})
										})
								})
							})
					}

					return(state.data.years.push(additional_data));
					
					
									
				})
			}
			else if(this.props.years < prevProps.years) {

				this.setState(state=> {
					return state.data.years.pop();
				})
			}
			/*
			axios.headers = {
		        "Access-Control-Allow-Origin": "*",
		        "Content-Type" : "application/json"
		    }
		    axios.post('http://localhost:8080/postCourses', {
		        data: {
		        	facebookId: window.localStorage.getItem('facebookId'),
		            courseData : this.state.data
		        }
		    })
		    */


			
		}
	}
	

	componentWillUnmount() {
		const elements = document.querySelectorAll('.squares')
		elements.forEach((item, index)=> {
			item.removeEventListener('dragover', (e)=> {
			this.onDragOver(e);
			});
			item.removeEventListener('drop', (e) => {
			this.onDrop(e);
			});
			//item.removeEventListener('mouseover', (e)=>{
			//this.removeMouseOver(e);
			//})


		})

		const items = document.querySelectorAll('.items')
		items.forEach((item, index)=>{
			item.removeEventListener('mouseover', (e)=>{
				this.onMouseOver(e);
			})
		})

		const texts = document.querySelectorAll('.texts')
		texts.forEach((item,index)=> {
			item.removeEventListener('click', (e)=> {
				document.location="/reviewpage"
			})
		})



		
		const clicks = document.querySelectorAll('.incross_visible')
		clicks.forEach((item, index)=> {
			item.removeEventListener('click', (e)=> {
			this.onMouseClick(e);
			})
		})



		
	}




	onDragOver(event) {
		event.preventDefault();
		//var data = event.dataTransfer.getData("text");
	}
	onDrop(event){
		const course= event.dataTransfer.getData('text');
		const year = event.currentTarget.getAttribute('year');
		const sem = event.currentTarget.getAttribute('sem');
		//adds course
		this.add_course(year,sem, course);
		this.add_credit();
		this.add_bar();

		//var neww = (this.props.credits.core - 6)
		//console.log(neww)

		//this.props.onChange(this.state.num_years, {...this.props.credits, core: neww})

	}

	onMouseOver(event) {
		/*
		if(event.target.className==="items")  {
			console.log(event.target.lastChild.className);
			if(event.target.lastChild.className === "cross_invisible") {
				event.target.lastChild.className = "cross_visible";
				this.state.last_item= event.target.lastChild
			}
		}
		else if(event.target.className==="texts") {
			//currentTarget bubbles up and points to the div that is calling the event
			console.log('texts')
			event.currentTarget.lastChild.className = "cross_visible";
			this.state.last_item=event.target.lastChild;
		}
		else if(event.target.className==="cross_invisible") {
			event.target.className ="cross_visible";
			this.state.last_item=event.target.lastChild
		}
		else {
			try {
				this.state.last_item.className = "cross_invisible";
			}
			catch(err) {
				console.log(err);
			}
		}
		*/

		if(event.currentTarget.attributes.class.nodeValue=="items") {

			event.currentTarget.lastChild.className="cross_visible";
			this.state.last_item = event.currentTarget.lastChild;

		}


	}

	removeMouseOver(event) {
		try{
			if(event.target.attributes.class.nodeValue !== "items" &&
				event.target.attributes.class.nodeValue !== "texts" &&
				 event.target.attributes.class.nodeValue !== "cross_visible")
			{
				event.currentTarget.childNodes.forEach((item, index)=>{
					item.lastChild.attributes.class.nodeValue = "cross_invisible";
				});
			}
		}
		catch(err) {
			console.log(err)
		}
	}

	onMouseClick = (event) => {	

		//console.log(event)
		//console.log(event.target.year)
		//console.log(event.target.attributes.year.nodeValue)
		const year = event.target.attributes.year.nodeValue
		const sem = event.target.attributes.sem.nodeValue
		const course = event.target.attributes.course.nodeValue

		this.remove_course(year, sem, course)
		this.minus_credit();
		this.minus_bar();

	}

	check_course_alr_added(course) {
		//return 1 if alr added
		//return 0 if not added
		//yes this is a cubic complexity algo 

		for(let i = 0; i< this.state.num_years; i++) {
			for(let j = 0; j < this.state.data.years[i].sems.length; j++) {
				for(let k = 0; k < this.state.data.years[i].sems[j].courses.length; k++) {
					if(this.state.data.years[i].sems[j].courses[k].course == course) {
						return 1;
					}

				}
			}

		}
		return 0;
	}

	add_credit() {

		const neww = this.props.credit.coreUOC-6;
	

		this.props.onChange({...this.props.credit, coreUOC: neww });
	}
	minus_credit() {
		const neww = eval(this.props.credit.coreUOC+6);
	

		this.props.onChange({...this.props.credit, coreUOC: neww });
	}

	add_bar() {
		const neww = this.props.credit.currentCoreUOC + 6;
		this.props.onChange({...this.props.credit, currentCoreUOC: neww});
	}

	minus_bar() {
		const neww = eval(this.props.credit.currentCoreUOC - 6);
		this.props.onChange({...this.props.credit, currentCoreUOC: neww})
	}

	//add course
	add_course(year, sem, course) {
		this.setState(state => {
			const prev = state.data.years[year-1].sems[sem-1].courses;

			if(this.check_course_alr_added(course)) {
				alert(`${course} is already added`);
				return prev;
			}

			const neww = state.data.years[year-1].sems[sem-1].courses;
			//only if there is space, add
			for(let i = 0; i< 3; i++) {
				if (prev[i].course === "") {
					neww[i].course = course
					return neww;
				}

			}
			//else return old state
			return prev;
		})
		console.log(this.state.data)
		axios.headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type" : "application/json"
        }
        axios.post('http://localhost:8080/postCourses', {
            data: {
            	facebookId: window.localStorage.getItem('facebookId'),
                data : this.state.data
            }
        })

	}
	/*
	shows cross only if there is an item
	*/

	show_cross(course,sem, year) {
		if (course !== "") {
			return(

					<img src="cross.png" sem={sem} year={year} course={course} />

			)

		}
	}

	remove_course(year, sem, course) {
		console.log(year, sem, course)
		this.setState(state => {
			//const prev = state.data.years[year-1].sems[sem-1].courses;
			const neww = state.data.years[year-1].sems[sem-1].courses;

			for(let i = 0; i< 3; i++) {
				if (neww[i].course === course) {
					neww[i].course = ""
				}

			}


			//else return old state
			return neww;
		})

		axios.headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type" : "application/json"
        }
        axios.post('http://localhost:8080/postCourses', {
            data: {
            	facebookId: window.localStorage.getItem('facebookId'),
                data : this.state.data
            }
        })

	}

	render() {
		return (
			<table className="Table">
				<li className="rows">
					<div />
					<div className="title">
						Term 1
					</div>
					<div className="title">
						Term 2
					</div>
					<div className="title">
						Term 3
					</div>
				</li>


				{
					this.state.data.years.map((item, index) => {
						return (
							<li className="rows">
								<div>
									Year {index+1}
								</div>
								{
									/*
										cannot use arrow function
										because cannot pass in arguments, i.e. is lexically bound
										pass in year and onDragOver function
									*/
									item.sems.map(function(item, index){

										return (
												<div className="squares" onDragOver={(e)=>{this.onDragOver(e)}} sem={index+1} year={this.yr}>
													{
														item.courses.map(function(item, index) {
												
															return (
																<div className="items" >
																	<div className="texts">
																		{item.course}
																	</div>
																
																	<div className="cross_invisible">
																		{this.show_cross(item.course,this.sem,this.year)}
																	</div>
								
																</div>
															)
														}, {show_cross: this.show_cross, onMouseOver: this.onMouseOver, sem: index+1, year: this.yr})
													}
												</div>
											)
									}, {yr: index+1, onDragOver: this.onDragOver, show_cross: this.show_cross, onMouseOver: this.onMouseOver})

								}
							</li>
						)

					})

				}

			</table>
			);




	}




}

export default Table;