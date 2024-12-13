import { useState } from "react";

const CreatableSelect = ({ value, onChange, options, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue) {
            const newOption = { value: inputValue.toLowerCase(), label: inputValue };
            onChange([...value, newOption]); // Add new option to the current value
            setInputValue(''); // Clear the input
        }
    };

    const handleOptionClick = (option) => {
        const updatedValue = [...value, option];
        onChange(updatedValue);
        setInputValue(''); // Clear the input after selecting an option
    };

    const handleRemove = (optionToRemove) => {
        const updatedValue = value.filter(option => option.value !== optionToRemove.value);
        onChange(updatedValue);
    };

    return (
        <div className={`custom-select ${isFocused ? 'focused' : ''}`}>
            <div className="selected-options">
                {value.map(option => (
                    <div key={option.value} className="selected-option">
                        {option.label}
                        <button type="button" onClick={() => handleRemove(option)}>x</button>
                    </div>
                ))}
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
            </div>
            {isFocused && inputValue === '' && (
                <div className="options">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className="option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CreatableSelect;
