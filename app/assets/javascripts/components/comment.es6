import CommentForm from './comment_form';
import CommentList from "./comment_list";

class Comment extends React.Component {
    static get contextTypes() {
        return {
            actions: PropTypes.func.isRequired
        }
    }

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

    onUpvote() {
        this.context.actions.upvoteComment(this.props);
    }

    onCommentSubmitted(event) {
        this.setState({isReplying: false});
    }


    render() {
        const replyText = this.state.isReplying ? 'Hide' : 'Reply';
        return (
            <li className='comment row collapse'>
                <blockquote> Body: {this.props.body}</blockquote>
                <cite>— by {this.props.author}</cite>
                <span className='label secondary right'>{this.props.rank}</span>
                <p>
                <button className='button tiny secondary' onClick={this.onToggleReply.bind(this)}>{replyText}</button>
                <button className='button tiny' onClick={this.onUpvote.bind(this)}>+1</button>
                </p>
                <CommentForm
                    parent_id={this.props.id}
                    isReplying={this.state.isReplying}
                    onCommentSubmitted={this.onCommentSubmitted.bind(this)}/>
                <CommentList parent_id={this.props.id} />
            </li>);
    }

}

export default Comment;