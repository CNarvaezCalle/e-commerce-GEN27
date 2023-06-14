function toggle() {
    let toggle = document.getElementById('toggle');
    let darkMood = document.getElementById('dark_mood');
    let label_toggle = document.getElementById('label_toggle');
    toggle.addEventListener('click', (event) => {
        let checked = event.target.checked;
        darkMood.classList.toggle('dark');
        if (checked === true) {
            label_toggle.innerHTML= '<i class="bx bxs-moon"></i>';
            label_toggle.style.color = "black";
        } else {
            label_toggle.innerHTML= "<i class='bx bxs-sun bx-rotate-90'></i>";
        }
    })

}

export default toggle