import react, {useEffect}from 'react'
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import './search.css'


function DropBox(props) {

	//console.log(props.visibility)
	const info = ['SENG2021', 'SENGAH', 'SENG3031']
	const [draggedItem, setdraggedItem] = react.useState({});

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
			<DropBox visibility={clicked} />
		]
	);
};

export default Search;