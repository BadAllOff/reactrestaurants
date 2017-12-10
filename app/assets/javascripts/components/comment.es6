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

    constructor() {
        super();
        this.state = { isReplying: false }
    }

    onToggleReply() {
        this.setState({ isReplying: !this.state.isReplying });
    }

    render() {
        const replyText = this.state.isReplying ? 'Hide' : 'Reply';
        return (
            <li className='comment row collapse'>
                <blockquote> Body: {this.props.body}</blockquote>
                <cite>— by {this.props.author}</cite>
                <button className='button tiny secondary' onClick={this.onToggleReply.bind(this)}>{replyText}</button>
                <CommentForm parent_id={this.props.id} isReplying={this.state.isReplying}/>
                <ul>
                    <CommentList parent_id={this.props.id} />
                </ul>
            </li>);
    }

}

export default Comment;