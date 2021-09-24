function addComment(button) {
  var newComment = $(
    '<li id="item1"> add-comment <a href="javascript:void(0)" class="myButton">add</a></li>'
  );
  newComment.find(".myButton").click(function () {
    addComment(this);
  });
  newComment.appendChild(document.createTextNode(commentContent));
  list.appendChild(newComment);
}
