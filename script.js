document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon) { // Check if menuIcon is not null
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const projectImages = [
        "project 1 part 2.jpg",
        "project 2 part 2.jpg",
        "project 4.png",
        "project 3.png",
        "project5.jpg",
        "project6.png",
        "project7.png",
        "project8.png",
        "project9.png",
        "project10.png",
        "project11.png"
    ];

    const projectTitles = [
        "Sports wear Store",
        "User Management",
        "Rosary Ring",
        "Restaurant System",
        "Check List",
        "Al Hilal Trophies",
        "Color Picker",
        "Digital Clock",
        "Stop Watch",
        "To Do List",
        "Counter"
       
    ];

    const projectDescriptions = [
        "The Sports wear Store is a sleek and dynamic e-commerce application dedicated to sportswear enthusiasts. Featuring an intuitive and visually appealing user interface, the app allows users to explore and shop official merchandise, including jerseys, accessories, and more. Built with Flutter and Dart, the design focuses on responsive layouts, smooth navigation, and user-centric functionality. This project highlights my skills in frontend development and creating engaging applications that provide an excellent shopping experience.",
        "User Management is an application designed to efficiently manage user data and display detailed profiles. The app features a user-friendly interface where users are listed with key information, and detailed profiles can be accessed with a single tap. Developed using Dart and Flutter, the application integrates with APIs to retrieve and display real-time data. This project demonstrates my expertise in frontend design, API integration, and creating responsive and interactive user interfaces for effective data management.",
        "The Rosary Ring is a cutting-edge mobile application built using Flutter. It features a straightforward interface that displays the count with just a tap. With its lively design and user-friendly controls, users can effortlessly add to or reset their counts.",

        "The Restaurant System is a comprehensive full-stack application designed to streamline the dining experience for both staff and customers. It features an intuitive menu interface that allows employees to efficiently place orders and manage transactions. Developed using Java and integrated with a MySQL database, this system not only enhances order accuracy but also includes functionalities for employee management and profit tracking. With a user-friendly design and real-time data processing, the Restaurant System aims to optimize operations and improve customer satisfaction, making it an essential tool for modern dining establishments.",
        "The Check List project is a simple yet effective task management application built using HTML, CSS, and JavaScript. This application allows users to add, edit, delete, and mark tasks as complete. It features a clean interface and leverages local storage to persist tasks across sessions.",
        "This project presents a comprehensive overview of Al-Hilal Football Club, one of the most storied teams in football history. Built using HTML and CSS, the site highlights the club's rich history, showcasing its numerous championship victories and the legacy of its legendary players. Through a visually appealing layout and responsive design, visitors can easily explore the milestones that have defined the club and celebrate the players who have left an indelible mark on its legacy. Join us in honoring Al-Hilal's enduring spirit and achievements!",
        "The Color Picker is an interactive web application that allows users to select a color from a predefined palette. Once a color is chosen, it will be displayed in a designated box along with its corresponding hexadecimal color code (e.g., #ffffff for white). This project is built using React with Vite and JavaScript, ensuring a smooth and efficient user experience.",
        "The Digital Clock is a visually appealing web application that displays the current time in a digital format. It features a striking background image, with the clock positioned prominently at the center. This project is built using React with Vite and JavaScript, showcasing a modern and responsive design.",
        "The Stop watch is a user-friendly web application designed to measure elapsed time. It features three functional buttons: Start, Stop, and Reset, allowing users to easily control the timer. The stopwatch displays time in the format of hours, minutes, and seconds. This project is built using React with Vite and JavaScript, ensuring a smooth and interactive experience.",
        "The To-Do List is an interactive web application that allows users to manage their tasks efficiently. Users can enter tasks, which are then added to a list. Each task can be easily deleted or reordered with up and down buttons, providing a straightforward way to organize daily activities. This project is built using React with Vite and JavaScript, ensuring a responsive and user-friendly interface.",
        "This is a simple counter app that lets users increment, decrement, and reset a number with real-time updates. It’s perfect for learning basic state and event handling — built using React with Vite and JavaScript, ensuring a responsive and user-friendly interface."
    ];

    const projectLinks = [
        "https://github.com/Hassan-Alzouri/Sportswear-Store-App",
        "https://github.com/Hassan-Alzouri/User-Management-Flutter-Application",
        "https://github.com/Hassan-Alzouri/Rosary-ring",
        "https://github.com/Hassan-Alzouri/Restaurant-system",
        "https://github.com/Hassan-Alzouri/Check-List-",
        "https://github.com/Hassan-Alzouri/AlHilal-Trophies",
        "https://github.com/Hassan-Alzouri/Color-Picker",
        "https://github.com/Hassan-Alzouri/Digital-Clock",
        "https://github.com/Hassan-Alzouri/Stop-Watch",
        "https://github.com/Hassan-Alzouri/To-Do-List",
        "https://github.com/Hassan-Alzouri/Counter-",
        
    ];

    const projectsBox = document.querySelector('.projects-box');

    for (let i = 0; i < projectImages.length; i++) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${projectImages[i]}" alt="">
            <br>
            <h3>${projectTitles[i]}</h3>
            <p>${projectDescriptions[i]}</p>
            <br>
            <a href="${projectLinks[i]}" target="_blank" class="btn" id="btn-p">View project</a>
        `;
        
        projectsBox.appendChild(projectCard);
    }
});



function sendMail(){
    let parms = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
    }

    emailjs.send("service_d0rr72a", "template_objzuvj",parms).then(alert("Email Sent!!"))
}