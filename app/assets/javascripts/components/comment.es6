import CommentForm from './comment_form';
import CommentList from "./comment_list";

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
                <CommentForm parent_id={this.props.id} />
                <ul>
                    <CommentList parent_id={this.props.id} />
                </ul>
            </li>);
    }

}

export default Comment;