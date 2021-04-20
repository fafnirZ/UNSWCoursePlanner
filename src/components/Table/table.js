import react, { Component } from 'react'
import './table.css'

class Table extends Component {

	constructor(props) {
		super(props);

		this.state = {
			num_years : 4,
			num_sems : 3,	

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
		const elements = document.querySelectorAll('.squares')
		elements.forEach((item, index)=> {
			item.addEventListener('dragover', (e)=> {
			this.onDragOver(e);
			});
			item.addEventListener('drop', (e) => {
			this.onDrop(e);
			});
		})



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

	}

	remove_course(year, sem, course) {
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
														item.courses.map((item, index) => {

															return (
																<div className="items" >
																{item.course}
																</div>
															)
														})
													}
												</div>
											)
									}, {yr: index+1, onDragOver: this.onDragOver})

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