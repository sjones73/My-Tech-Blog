document.getElementById('new-post-btn').addEventListener('click', () => {
    document.getElementById('new-post-form').style.display = 'block';
});

document.getElementById('new-post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const content = e.target.content.value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
});
