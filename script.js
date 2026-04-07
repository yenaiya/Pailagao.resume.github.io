document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

document.getElementById("searchSkill").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    document.querySelectorAll("#skillList li").forEach(skill => {
        skill.style.display = skill.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
});

function filterProjects(type) {
    document.querySelectorAll(".project-item").forEach(project => {
        if (type === "all") project.style.display = "block";
        else project.style.display = project.getAttribute("data-type") === type ? "block" : "none";
    });
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (!name || !email || !message) {
        alert("Please fill all fields!");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}

document.getElementById("toggleProjects").addEventListener("click", function () {
    document.querySelector(".projectBox").classList.toggle("hidden");
});