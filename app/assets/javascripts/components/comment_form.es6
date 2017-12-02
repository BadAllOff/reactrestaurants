class CommentForm extends React.Component {
    constructor() {
        super();
        this.defaultState = { id: 1, body: '', author: '' };
        this.state = this.defaultState;
    }

    onFieldChange(event) {
        let prop = {};
        prop[event.target.name] = event.target.value; // { author: event.target.value }
        this.setState(prop);
    }

    submitComment(event) {
        event.preventDefault();
        // Using Actions (global variable) is anti-pattern. Get rid of it, using "context"
        Actions.addComment(this.state);
    }

    render() {
        return <form>
            <label>Author</label>
            <input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={this.state.author} />
            <label>Comment</label>
            <textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)} />
            <button onClick={this.submitComment.bind(this)} type="submit"> Submit </button>
        </form>
    }
}

export default CommentForm;