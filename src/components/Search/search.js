import react, {useEffect}from 'react'
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import './search.css'

//dummy variable to test functionality
const courses = ['COMP1511', 'COMP2521', 'COMP3311', 'SENG2021', 'SENGAH', 'SENG3031', 'PSYC1101', 'ECON1101', 'ECON1203', 'COMP2011', 'COMP2511'];

function DropBox(props) {


	//props.searchterm
	//props.courses <-- the list of courses (can just query backend here) --> axios.get(/courses)

	const [draggedItem, setdraggedItem] = react.useState({});
	const [info, setInfo] = react.useState([]);

	useEffect(()=>{
		props.searchterm === "" ? setInfo([]) : setInfo(props.courses.filter(course => {
			return course.toUpperCase().startsWith(props.searchterm.toUpperCase());
		}))

		return (()=> {
			setInfo([]);
		})
	},[props.searchterm])

	return (
		<div className={props.visibility ? "drop_visible" : "drop_invisible"}>
			{
				info.map((item) => {
				return (
					<a className="results" 
					href="/reviewpage" 
					id={item}
					draggable
					onDragStart={
						(e)=> {
							e.dataTransfer.setData('text/plain', e.target.id)
							//console.log(e.dataTransfer.getData('text'))
							//console.log(e.target.firstChild)
						}
					}
					>
					{item}
					</a>
				)})
			}
		</div>
	);
}

const useStyles = makeStyles({
  searchContainer: {
    padding: '0.5rem',
    display: 'flex',
  },
});


function Search() {
	const [clicked, setClicked] = react.useState(false);
	const [searchTerm , setSearchTerm] = react.useState("");

	const styles= useStyles();

	const handleClick = (event) => {
		event.target.id == 'search' ? setClicked(true): setClicked(false);
	}
	
	const updateSearch = (event) => {
		setSearchTerm(event.target.value);
	}

	useEffect(()=> {
		document.addEventListener('click', handleClick);
		//unmount
		return () => {
			document.removeEventListener('click', handleClick);
		}
	})

	//clears search term
	useEffect(()=> {
		if (!clicked) {
			setSearchTerm("");
		}
		//console.log(searchTerm);
	}, [searchTerm, clicked]);


	return (
		[
			<div id="searchbox" className="SearchContainer" >
				<Input className={styles.searchContainer}
				id='search'
				value={searchTerm}
				onChange={updateSearch} 
				disableUnderline="true"
				placeholder="search here" 
				fullWidth="true" 
				/>
			</div>,
			<DropBox visibility={clicked}
				searchterm={searchTerm}
				courses={courses} 
			/>
		]
	);
};

export default Search;