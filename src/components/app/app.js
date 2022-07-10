import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {

	constructor() {
		super()
		this.state = {
			data: [
				{ name: "Sergey", salary: "7000", id: 1, increase: false, like: true },
				{ name: "Pasha", salary: "1800", id: 2, increase: true, like: false },
				{ name: "Sasha", salary: "900", id: 3, increase: false, like: false },
			],
			searchString: "",
			filter: "all"
		}
		this.maxId = 4;
	}

	onDelete = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	onAdd = (name, salary) => {

		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: this.maxId++
		}

		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		})

	}
	onIncrase = (id) => {

		this.setState(({ data }) => ({

			data: data.map(item => {

				if (item.id === id) {
					return { ...item, increase: !item.increase }
				}
				return item
			})

		}))
	}
	onLike = (id) => {

		this.setState(({ data }) => ({

			data: data.map(item => {

				if (item.id === id) {
					return { ...item, like: !item.like }
				}
				return item
			})

		}))
	}
	onSearch = (string) => {
		this.setState({ searchString: string })
	}
	onFilter = (filterProp) => {
		this.setState({ filter: filterProp })
	}

	filter = (filter, data) => {

		switch (filter) {

			case 'like':
				return data.filter(item => item.like)

			case 'moreThan1000':
				return data.filter(item => item.salary > 1000)

			default:
				return data
		}

	}



	render() {
		const { data, searchString, filter } = this.state

		const visibleData = data.filter(item => item.name.includes(searchString))
		const visibleDataAfterFilter = this.filter(filter, visibleData)

		return (
			<div className="app" >
				<AppInfo data={data} />

				<div className="search-panel">
					<SearchPanel search={this.onSearch} />
					<AppFilter filterFunc={this.onFilter} filterState={filter} />
				</div>

				<EmployeesList
					data={visibleDataAfterFilter}
					onIncrase={this.onIncrase}
					onLike={this.onLike}
					onDelete={this.onDelete}
				/>

				<EmployeesAddForm onAdd={this.onAdd} />

			</div>
		)
	}



}

export default App;


