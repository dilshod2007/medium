const $form = document.querySelector("form");
const $title = document.querySelector("#title");
const $description = document.querySelector("#description");
const $image = document.querySelector("#image");
const $tags = document.querySelector("#tags");



const createPost = async (e) => {
    e.preventDefault();

    const title = $title.value;
    const description = $description.value;
    const image = $image.value;
    const tags = $tags.value.split(",").map(tag => tag.trim());
if (!title || !description || !image || !tags) {
    alert("Please fill in all fields.");
    return;
}   

    const post = {
        title,
        description,
        image,
        tags
    };

    console.log(post);

    try {
        const response = await fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/", {
            method: "POST", 
            headers: {
               "Authorization": `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(post)
        });

       

        const data = await response.json();

        console.log("Post created successfully:", data);


        alert("Post created successfully!");
        
        $form.reset();

    } catch (error) {
        console.error("Error creating post:", error);
        alert("Error creating post. Please try again later.");
    }
};

$form.addEventListener("submit", createPost);
