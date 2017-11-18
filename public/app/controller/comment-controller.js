function CommentController() {
    var commentService = new CommentService()

    function getComments() {
        commentService.getComments(drawComments)
    }
    function drawComments(comments) {
        var commentElem = document.getElementById('commentId')
        template = ''
        for (let i = 0; i < comments.length; i++) {
            const comment = comments[i];
            template += `
                <div class="panel panel-default spacer">
                    <div class="row"
                        <div class="col-sm-1 character"
                            <h1>${comment.health}</h1>
                            <h5>${comment.votes}</h5>
                        </div>
                <div class="col-sm-8 comment-body">
                    <h3>${comment.body}</h3>
                </div>
                <div class="col-sm-3">
                    <div class="up-votes ">
                        <i class="fa fa-arrow-up vote-size il"></i>
                        h5 class="il vote-size">${comment.upVotes}</h5>
                    </div>
                    <div class="down-votes">
                        <i class="fa fa-arrow-down vote-size il"></i>
                       <h5 class="il vote-size">${comment.downVotes}</h5>
                    </div>
                    <div class="trash-star pull-right pull-bottom">
                    <i class=" fa fa-reply ilb" onclick="replyfunction(FINISH)"></i>
                    <i class=" fa fa-trash ilb" onclick="deletefunction(FINISH)"></i>
                    <i class=" fa fa-star ilb" onclick="favorite(FINISH)"></i>
                    </div>           
                </div>
            </div>
        </div>
                `

        }
        commentElem.innerHTML = template
    }
    this.addComment = function addComment(event) {
        event.preventDefault()
        var comment = event.target
        commentService.addComment(comment, getComments)
    }

    getComments()

}


