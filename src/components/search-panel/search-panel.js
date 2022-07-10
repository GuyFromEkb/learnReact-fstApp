import './search-panel.css';
import { useState } from 'react';

const SearchPanel = ({ search }) => {
    const [value, setValue] = useState("");

    function getValue(e) {
        const value = e.target.value
        setValue(value)


        search(value)
    }

    return (
        <input
            onChange={getValue}
            type="text"
            value={value}

            className="form-control search-input"
            placeholder="Найти сотрудника"
        />
    )
}

export default SearchPanel;