import CommentForm from './comment_form';

class Comment extends React.Component {
    static get propTypes() {
        return {
            id: PropTypes.number,
            author: PropTypes.string,
            body: PropTypes.string,
            rank: PropTypes.number
        }
    }

    render() {
        return (
            <li id={"comment_" + this.props.id}>
                <p className="right"> by: {this.props.author}</p>
                <p> Body: {this.props.body}</p>
                <CommentForm parent_id={this.props.id}/>
            </li>);
    }

}

export default Comment;