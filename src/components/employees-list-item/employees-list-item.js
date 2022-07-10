import "./employees-list-item.css";


function EmployeesListItem(props) {

	const { name, salary, increase, like, onDelete, onIncrase, onLike } = props;


	let className = "list-group-item d-flex justify-content-between";

	if (increase) {
		className += ' increase';
	}
	if (like) {
		className += ' like';
	}


	return (
		<li className={className}>

			<span onClick={onLike} className="list-group-item-label"> {name} </span>

			<input
				type="text"
				className="list-group-item-input"
				defaultValue={salary + "$"}
			/>

			<div className="d-flex justify-content-center align-items-center">

				<button
					onClick={onIncrase}
					type="button"
					className="btn-cookie btn-sm ">

					<i className="fas fa-cookie"></i>
				</button>

				<button onClick={onDelete} type="button" className="btn-trash btn-sm ">
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>

			</div>
		</li>
	)

}



export default EmployeesListItem
