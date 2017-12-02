class CommentList extends React.Component{

    static get contextTypes() {
        return {
            store: PropTypes.object.isRequired
        }
    }

    componentDidMount() {
        // reference commentsStore to add listener
        this.context.store.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        // reference commentsStore to remove listener
        this.context.store.removeChangeListener(this._onChange.bind(this));
    }

    render(){
        return <div>
            {this.context.store.comments().map(function(comment) {
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