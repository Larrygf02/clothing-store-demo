import "./form-input.styles.scss"
const FormInput = ({ label, inputOptions }) => {
    return (
        <div className="group">
            {label && (
                <label className={`${inputOptions.value ? 'shrink': ''} form-input-label`}>{label}</label>
            )}
            <input className="form-input" {...inputOptions}></input>
        </div>
    )
}

export default FormInput