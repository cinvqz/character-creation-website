app.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});
