import react, {Component} from 'react';
import './studyBuddyBox.css'
import NamePic from '../Profile/personal-name.js'


class StudyBuddy extends Component {
    state = {
        firstName: '',
        inputVal: ''
    }

    displayNameHandler = (e) => {
        this.setState({firstName: this.state.inputVal});
    }

    componentDidMount() {
        window.addEventListener('click', this.handleClick);
    };

    handleClick(event) {
        var target = event.target;
        var replyForm;
        if (target.matches("[data-toggle='reply-form']")) {
            replyForm = document.getElementById(target.getAttribute("data-target"));
            replyForm.classList.toggle("d-none");
        }
    };

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

                        <details open class="comment" id="comment-1">
                            <a href="#comment-1" class="comment-border-link">
                                <span class="sr-only">Jump to comment-1</span>
                            </a>
                            <summary>
                                <div class="comment-heading">
                                    <div class="comment-info">
                                    
                                        {/* I've gotta grab the name from profile once it is portable */}
                                        <a href="#" class="comment-author">ilovecarrots</a>
                                        <p class="m-0">
                                            &bull; 4 days ago
                                        </p>
                                    </div>
                                </div>
                            </summary>

                            <div class="comment-body">
                                <p>
                                Looking for a study buddy who is free on tuesday afternoons. Contact me via email on z5311022@ad.unsw.edu.au
                                </p>
                                <button type="button" data-toggle="reply-form" data-target="comment-1-reply-form">Reply</button>
                                {/* Reply form start */}
                                <form className="reply-form d-none" id="comment-1-reply-form">
                                    <textarea placeholder="Reply to comment" rows="4" value={this.state.inputVal}
                                        onChange={e => this.setState({inputVal: e.target.value})}/>
                                    <button type="button" onClick={e => this.displayNameHandler(e)}>Submit</button>
                                    <button type="button" data-toggle="reply-form" data-target="comment-1-reply-form">Cancel</button>
                                    <p>{this.state.firstName}</p>
                                </form>

                                {/* Reply form end */}
                            </div>

                            <div class="replies">
                                <details open class="comment" id="comment-2">
                                    <a href="#comment-2" class="comment-border-link">
                                        <span class="sr-only">Jump to comment-2</span>
                                    </a>

                                    <summary>
                                        <div class="comment-heading">
                                            <div class="comment-info">
                                                <a href="#" class="comment-author">fishyyyy</a>
                                                <p class="m-0">
                                                    &bull; 3 days ago
                                                </p>
                                            </div>
                                        </div>
                                    </summary>

                                    <div class="comment-body">
                                        <p>
                                            Count me in! I am only free from 3pm-5pm though.
                                        </p>
                                        <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Reply</button>
                                        {/* Reply form start */}
                                        <form className="reply-form d-none" id="comment-2-reply-form">
                                            <textarea placeholder="Reply to comment" rows="4" value={this.state.inputVal}
                                                onChange={e => this.setState({inputVal: e.target.value})}/>
                                            <button type="button" onClick={e => this.displayNameHandler(e)}>Submit</button>
                                            <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Cancel</button>
                                            <p>{this.state.firstName}</p>
                                        </form>
                                        {/* Reply form end */}
                                    </div>
                                </details>
                                <details open class="comment" id="comment-3">
                                    <a href="#comment-3" class="comment-border-link">
                                        <span class="sr-only">Jump to comment-3</span>
                                    </a>

                                    <summary>
                                        <div class="comment-heading">
                                            <div class="comment-info">
                                                <a href="#" class="comment-author">tryhard</a>
                                                <p class="m-0">
                                                    &bull; 3 days ago
                                                </p>
                                            </div>
                                        </div>
                                    </summary>

                                    <div class="comment-body">
                                        <p>
                                            Who needs study buddies? Just do the exercises the lecturer tells you to do.
                                        </p>
                                        <button type="button" data-toggle="reply-form" data-target="comment-3-reply-form">Reply</button>
                                        {/* Reply form start */}
                                        <form method="POST" className="reply-form d-none" id="comment-3-reply-form">
                                            <textarea placeholder="Reply to comment" rows="4"></textarea>
                                            <button type="submit">Submit</button>
                                            <button type="button" data-toggle="reply-form" data-target="comment-3-reply-form">Cancel</button>
                                        </form>
                                        {/* Reply form end */}
                                    </div>
                                </details>
                            </div>

                        </details>


                        <details class="comment" id="comment-4">
                            <a href="#comment-4" class="comment-border-link">
                                <span class="sr-only">Jump to comment-4</span>
                            </a>
                            <summary>
                                <div class="comment-heading">
                                    <div class="comment-info">
                                        <a href="#" class="comment-author">pleasehelpme</a>
                                        <p class="m-0">
                                            &bull; 4 days ago
                                        </p>
                                    </div>
                                </div>
                            </summary>

                            <div class="comment-body">
                                <p>
                                    hey guys I'm struggling with this course so really need some help. If you're at uni on monday evenings, send me an email on z5231452@ad.unsw.edu.au
                                </p>
                                <button type="button" data-toggle="reply-form" data-target="comment-4-reply-form">Reply</button>
                                {/* Reply form start */}
                                <form method="POST" className="reply-form d-none" id="comment-4-reply-form">
                                    <textarea placeholder="Reply to comment" rows="4"></textarea>
                                    <button type="submit">Submit</button>
                                    <button type="button" data-toggle="reply-form" data-target="comment-4-reply-form">Cancel</button>
                                </form>
                                {/* Reply form end */}
                            </div>

                            <div class="replies">
                                <details class="comment" id="comment-5">
                                    <a href="#comment-5" class="comment-border-link">
                                        <span class="sr-only">Jump to comment-5</span>
                                    </a>

                                    <summary>
                                        <div class="comment-heading">
                                            <div class="comment-info">
                                                <a href="#" class="comment-author">compStateRanker</a>
                                                <p class="m-0">
                                                    &bull; 3 days ago
                                                </p>
                                            </div>
                                        </div>
                                    </summary>

                                    <div class="comment-body">
                                        <p>
                                            Sure, I'm free at around 3pm on Mondays so can help around then. I've sent you an email :)
                                        </p>
                                        <button type="button" data-toggle="reply-form" data-target="comment-5-reply-form">Reply</button>
                                        {/* Reply form start */}
                                        <form method="POST" className="reply-form d-none" id="comment-5-reply-form">
                                            <textarea placeholder="Reply to comment" rows="4"></textarea>
                                            <button type="submit">Submit</button>
                                            <button type="button" data-toggle="reply-form" data-target="comment-5-reply-form">Cancel</button>
                                        </form>
                                        {/* Reply form end */}
                                    </div>
                                </details>
                            </div>
                        </details>
                    </div>
                </div>


            </div>
        )
    }
}
export default StudyBuddy;
