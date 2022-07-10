import "./app-filter.css";

const AppFilter = (props) => {


    const buttonData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'like', label: 'На повышение' },
        { name: 'moreThan1000', label: 'З/П больше 1000$' },
    ]



    const buttons = buttonData.map(({ name, label }) => {

        const active = props.filterState === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                onClick={() => { props.filterFunc(name) }}
                key={name}
                type="button"
                className={`btn ${clazz}`}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">

            {buttons}

        </div >
    )
}

export default AppFilter;