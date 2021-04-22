import react, {Component} from 'react';
import './studyBuddyBox.css'
import NamePic from '../Profile/personal-name.js'
import axios from 'axios'


class StudyBuddy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            inputVal: '',
            commentVal: '',
            comments: [],
            comment_id: 0,
            reply_id: 0
        }

        this.state.comments= [
            // {
            //     'text': 'sup jacky',
            //     'id': 0,
            //     'author': 'Ahmet',
            //     'replies': [
            //         {'text': 'sup ahmet', 'id': 1, 'author': 'Jacky'}
            //     ]
            // }
        ];


        // let numComments = this.state.comments.length
        // for (let c = 0; i < numComments; i++) {
        //     let numReplies = this.state.comments[c].length
        //     for (let r = 0; r < numReplies; r++) {

        //     }
        //     //Do something
        // }

        
    }

    // displayNameHandler = (e) => {
    //     this.setState({firstName: this.state.inputVal});
    // }

    componentDidMount() {
        window.addEventListener('click', this.handleClick);


        const facebookID = window.localStorage.getItem('facebookId')
        axios.get(`http://localhost:8080/getProfile?facebookId=${facebookID}`, )
        .then(response => {
            //console.log(response.data.data.name)
            this.setState({firstName: response.data.data.name})
        })

    };

    handleClick(event) {
        var target = event.target;
        var replyForm;
        if (target.matches("[data-toggle='reply-form']")) {
            replyForm = document.getElementById(target.getAttribute("data-target"));
            replyForm.classList.toggle("d-none");
        }  
    };

    handleCommentSubmit = (e) => {
        let text = this.state.commentVal
        let id = this.state.comment_id
        // alert(id)
        let comments = this.state.comments
        comments.push({'text': text, 'id': id, author: this.state.firstName, 'replies': []})
        this.setState({
            'comments': comments
        })
        this.state.comment_id = this.state.comment_id + 1
        this.state.commentVal = ''
    }

    handleReplySubmit = (e) => {
        let text = this.state.inputVal
        let id = e.currentTarget.attributes['data-target'].value
        // alert(id)
        let replies = this.state.comments[id]['replies']
        replies.push({'text': text, 'id': id, author: 'fishyyy'})
        this.setState({
            'replies': replies
        })
        this.state.reply_id = this.state.reply_id + 1
        this.state.inputVal = ''
    }


    commentRenderer(item) {
        const comment = item.text
        const id = item.id
        const author = item.author
    
        var today = new Date();
        let month = today.toLocaleString('en-us', { month: 'short' });
        let hours = today.getHours()
        let minutes = today.getMinutes()
        var postfix
        if (hours < 12) {
            postfix = 'AM'
        } else {
            hours = 'PM'
        }

        if (minutes < 10) {
            minutes = '0' + minutes
        }
        var time = hours + ':' + minutes + ' ' + postfix
        const timeCreated = today.getDay() + ' ' + month + ', ' + time

        return (
            <details open class="comment" id={id}>
                <a href={`#${id}`} class="comment-border-link">
                    <span class="sr-only">Jump to comment-{id}</span>
                </a>
                <summary>
                    <div class="comment-heading">
                        <div class="comment-info">
                            {/* I've gotta grab the name from profile once it is portable */}
                            <a href="/profile" class="comment-author">{author}</a>
                            <p class="m-0">
                                {/* Make the timestamp dynamic */}
                                &bull; {timeCreated}
                            </p>
                        </div>
                    </div>
                </summary>

                <div class="comment-body">
                    <p>
                        {comment}
                    </p>
                    <button type="button" data-toggle="reply-form" data-target={`${id}-reply-form`}>Reply</button>
                    {/* Reply form start */}
                    <form className="reply-form d-none" id={`${id}-reply-form`}>
                        <textarea placeholder="Reply to comment" rows="4" value={this.state.inputVal}
                            onChange={e => this.setState({inputVal: e.target.value})}/>
                        <button type="button" data-target={`${id}`} onClick={this.handleReplySubmit}>Post</button>
                        <button type="button" data-toggle="reply-form" data-target={`${id}-reply-form`}>Cancel</button>
                    </form>
                    {/* Reply form end */}
                </div>

                <div class="replies">
                    {this.state.comments[id]['replies'].map((item)=> {
                        return(this.replyRenderer(item))
                    })} 
                </div>
            </details>
        )
    }

    //text: comment
    //id: comment-2
    //author: Fishyy
    replyRenderer(item) {
        const comment = item.text
        const id = item.id
        const author = item.author
        var today = new Date();
        let month = today.toLocaleString('en-us', { month: 'short' });
        let hours = today.getHours()
        let minutes = today.getMinutes()
        var postfix
        if (hours < 12) {
            postfix = 'AM'
        } else {
            hours = 'PM'
        }

        if (minutes < 10) {
            minutes = '0' + minutes
        }
        var time = hours + ':' + minutes + ' ' + postfix
        const timeCreated = today.getDay() + ' ' + month + ', ' + time

        return(            
            <details open class="comment" id={id}>
                <a href={`#${id}`} class="comment-border-link">
                    <span class="sr-only">Jump to comment-{id}</span>
                </a>

                <summary>
                    <div class="comment-heading">
                        <div class="comment-info">
                            <a href="/profile" class="comment-author">{author}</a>
                            <p class="m-0">
                                &bull; {timeCreated}
                            </p>
                        </div>
                    </div>
                </summary>

                <div class="comment-body">
                    <p>
                        {comment}
                    </p>
                </div>
            </details>
        )
    }

    render() {
        return (
            <div className="StudyBuddy-Frame">
                <div class="comment-thread">
                    
                    <div className="heading">
                        Study Buddy Finder
                    </div> 

                    <div className="box">
                        <div className="box-heading">
                            Programming Fundamentals | COMP1511
                        </div>

                        <div className="newComment">
                            <form>
                                <input className="box-newComment" placeholder="Type a new comment here" value={this.state.commentVal}
                                    onChange={e => this.setState({commentVal: e.target.value})} ></input>
                                    
                                <button type="button" data-target={`${this.id}`} onClick={this.handleCommentSubmit}>Post</button>
                            </form>
                        </div>


                        {/* Renders all the comments */}
                        {this.state.comments.map((item)=> {
                            return(this.commentRenderer(item))
                        })}
                    </div>

                </div>
            </div>
        )
    }
}
export default StudyBuddy;
