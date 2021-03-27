import react, {useEffect} from 'react'
import './table.css'

function Table (props) {

	const num_years = 4;
	const num_sems = 3;

	let Years = Array.from(Array(num_years).keys());
	console.log(Years)				


	return (
		<table className="Table">
			<li className="rows">
				<div />
				<div>
					sem1
				</div>
				<div>
					sem2
				</div>
				<div>
					sem3
				</div>
			</li>

			{
				Years.map((item, index) => {
					console.log(item);
					return (
						<li className="rows">
							{/*empty div*/}
							<div>
								year {index+1}
							</div>

							<div>
								1
							</div>
							<div>
								2
							</div>
							<div>
								3
							</div>
						</li>
					)

				})

			}



		</table>
	);


}

export default Table;