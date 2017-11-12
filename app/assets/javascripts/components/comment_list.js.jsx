var CommentList = createReactClass({
    render: function(){
        return(
          <div>
            {JSON.parse(this.props.comments).map(function(comment) {
                // Take comment and map it to the Comment component
                return <Comment key={comment.id} {... comment}/>;
            })}
          </div>
        );
    }
});