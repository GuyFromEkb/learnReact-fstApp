import "./app-info.css";

const AppInfo = ({ data }) => {

    const style = {
        color: 'red'
    }

    const prem = data.filter(item => item.increase).length

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании <span style={style} >first React App</span></h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {prem}</h2>
        </div>
    )
}

export default AppInfo;