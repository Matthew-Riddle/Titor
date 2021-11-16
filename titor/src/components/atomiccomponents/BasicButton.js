import './Basic.css'

const BasicButton = (props) => {
    return (
        <button className="button bg-green" form={props.form} type="submit" onClick={props.onClick}>
            <p className="text-yellow">{props.text}</p>
        </button>
    )
}

export default BasicButton