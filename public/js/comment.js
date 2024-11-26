document.getElementById('comment-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const comment_text = e.target.comment_text.value.trim();
    const post_id = window.location.pathname.split('/').pop();

    if (comment_text) {
        const response = await fetch('/api/posts/' + post_id + '/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post comment');
        }
    }
});
