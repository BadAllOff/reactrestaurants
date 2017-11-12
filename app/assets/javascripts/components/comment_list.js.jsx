var CommentList = createReactClass({
    render: function(){
        return(
          <div>
            {JSON.parse(this.props.comments).map(function(comment) {
                return <Comment rank={comment.rank}
                                body={comment.body}
                                author={comment.author}
                                key={comment.id}/>;
            })}
          </div>
        );
    }
});