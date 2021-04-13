import react, { Component } from 'react'
import './table.css'

class Table extends Component {

	/*
	data: {
		years: [
			{year: 1
			 sems: [
				{sem: 1
					courses:[{
						course: 'COMP1511'
					}]
				}	
			]}
		]}


	*/



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
		/*
		this.add_course(1,2,'hello');
		this.add_course(1,2, 'COMP1511');
		this.add_course(1,2, 'comp1521');
		this.add_course(1,2,'hel')
		this.remove_course(1,2, 'COMP1511');
		this.add_course(1,2, 'OCOMP1511');
		*/
		
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

	//add course
	add_course(year, sem, course) {
		this.setState(state => {
			const prev = state.data.years[year-1].sems[sem-1].courses;
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
					<div>
						Semester 1
					</div>
					<div>
						Semester 2
					</div>
					<div>
						Semester 3
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
																<div className="items">
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