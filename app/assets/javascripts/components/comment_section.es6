import Actions from 'actions'
import CommentStore from 'stores/comment_store'
import CommentList from 'components/comment_list'
import CommentForm from 'components/comment_form'

class CommentSection extends React.Component {

    constructor(props) {
        super();
        this.store = new CommentStore();
        this.actions = Actions;
        this.actions.setComments(JSON.parse(props.comments));
    }
    // the get is a getter for the property or the Object you want to get
    static get childContextTypes() {
        return {
            store: PropTypes.object.isRequired,
            actions: PropTypes.func.isRequired
        }
    }

    getChildContext() {
        return {
            store: this.store,
            actions: this.actions
        }
    }

    render() {
        // With React you CAN'T have more than 1 root component
        // Multiple components need to be contained in one component in order to return
        return <div>
            <CommentForm />
            <CommentList />
        </div>
    }
}
window.CommentSection = CommentSection;
export default CommentSection;