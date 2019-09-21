$(function () {
    $('#submitBtn').click(function () {
        let param = $('#userId').val();
        $.ajax({
            url : 'http://jsonplaceholder.typicode.com/posts',
            method : 'GET',
            data: {
                'userId': param
            },
            success : function (data) {
                success(data);
            },
            error : function (data) {
                alert(data)
            }
        });
    })
});
function success(data) {
    console.log(JSON.stringify(data));
    let post_container = $('.posts');
    post_container.empty();
    for (let post of data) {
        let d = $('<div>', {
            class: 'post'
        });
        let p = $('<p>').text(post.title);
        let a = $('<a>', {
            href: '',
            text: 'Comment',
            class: 'comment'
        });
        d.append(p, a);
        post_container.append(d);
    }
}