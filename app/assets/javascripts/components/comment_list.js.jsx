var CommentList = createReactClass({


    componentDidMount: function () {
        // reference commentsStore to add listener
        commentsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        // reference commentsStore to remove listener
        commentsStore.removeChangeListener(this._onChange);
    },

    render: function(){
        // console.log('Rendering...');
        return(
          <div>
            {commentsStore.comments().map(function(comment) {
                // Take comment and map it to the Comment component
                return <Comment key={comment.id} {... comment}/>;
            })}
          </div>
        );
    },

    _onChange: function () {
        // A way of telling the component that it needs to re-render itself
        // Without it there is no way for the component to know that the Store in fact
        // has a change that it needs to propagate
        this.forceUpdate();
    }
});