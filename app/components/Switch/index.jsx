const Switch = ({ isOn, handleToggle, onColor = "bg-green-500", offColor = "bg-gray-300" }) => {
    return (
        <div className={`w-14 h-7 flex items-center ${isOn ? onColor : offColor} rounded-full p-1 cursor-pointer transition-colors duration-300`}
            onClick={handleToggle}
        >
            <div className={`bg-white w-6 h-6 rounded-full shadow-md transform ${isOn ? "translate-x-7" : "translate-x-0" } transition-transform duration-300`}></div>
        </div>
    );
}

export default Switch;