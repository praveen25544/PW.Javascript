async function loadData() {
  try {
    console.log("Fetching...");
    
    const [usersRes, postsRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts")
    ]);

    const users = await usersRes.json();
    const posts = await postsRes.json();

    console.log("Users:", users);
    console.log("Posts:", posts);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();