import Actions from 'actions'
import CommentStore from 'stores/comment_store'
import CommentList from 'components/comment_list'

class CommentSection extends React.Component {

    constructor() {
        super();
        this.store = new CommentStore();
    }
    // the get is a getter for the property or the Object you want to get
    static get childContextTypes() {
        return {
            store: PropTypes.object.isRequired
        }
    }

    getChildContext() {
        return {
            store: this.store
        }
    }

    render() {
        return <CommentList store={this.store} />;
    }
}
window.CommentSection = CommentSection;
window.Actions = Actions;
export default CommentSection;