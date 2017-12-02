import Actions from 'actions'
import CommentStore from 'stores/comment_store'
import CommentList from 'components/comment_list'
import CommentForm from 'components/comment_form'

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
        // With React you CAN'T have more than 1 root component
        // Multiple components need to be contained in one component in order to return
        return <div>
            <CommentForm />
            <CommentList />
        </div>
    }
}
window.CommentSection = CommentSection;
window.Actions = Actions;
export default CommentSection;