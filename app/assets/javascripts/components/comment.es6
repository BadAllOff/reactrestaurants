class Comment extends React.Component {
    static get propTypes() {
        return {
            author: PropTypes.string,
            body: PropTypes.string,
            rank: PropTypes.number,
            id: PropTypes.number
        }
    }

    render() {
        return (
            <div id={"comment_" + this.props.id}>
                <div> Author: {this.props.author}</div>
                <div> Body: {this.props.body}</div>
                <div> Rank: {this.props.rank}</div>
            </div>);
    }

}

export default Comment;