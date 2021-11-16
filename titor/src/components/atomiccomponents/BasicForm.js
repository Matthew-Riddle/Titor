import "./Basic.css"

const BasicForm = (props) => {
    return (
        <form className="new-post" id={props.id} onSubmit={props.onSubmit} onKeyUp={props.onKeyUp}>
            <textarea className="text-box" placeholder="tell us something..." value={props.text} onChange={props.onChange}></textarea>
        </form>
    )
}

export default BasicForm