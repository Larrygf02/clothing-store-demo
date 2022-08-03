
const FormInput = ({ label, ...otherProps}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...otherProps}></input>
        </div>
    )
}

export default FormInput