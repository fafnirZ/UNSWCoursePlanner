import react, { Component } from 'react'
import './table.css'

class Table extends Component {
	/*
		data = {
			years: [
				{year: 1,
				sem: 1,
				courses: [
					
				]
				}
			]
		}
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
													index: item+1,
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
									item.sems.map((item, index) => {
										return (
												<div className="squares">
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
									})
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