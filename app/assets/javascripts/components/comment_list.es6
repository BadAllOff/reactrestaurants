class CommentList extends React.Component{


    componentDidMount() {
        // reference commentsStore to add listener
        this.props.store.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        // reference commentsStore to remove listener
        this.props.store.removeChangeListener(this._onChange.bind(this));
    }

    render(){
        return <div>
            {this.props.store.comments().map(function(comment) {
                // Take comment and map it to the Comment component
                return <Comment key={comment.id} {... comment}/>;
            })}
          </div>;
    }

    _onChange() {
        // A way of telling the component that it needs to re-render itself
        // Without it there is no way for the component to know that the Store in fact
        // has a change that it needs to propagate
        this.forceUpdate();
    }
}

export default CommentList