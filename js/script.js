console.log("Hello from script.js!");

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/user')
        .then(response => response.json())
        .then(user => {
            document.querySelector('#about p').textContent = `我是一名热衷于 Web 开发的工程师。我的邮箱是 ${user.email}。`;
        });

    fetch('/api/projects')
        .then(response => response.json())
        .then(projects => {
            const projectsList = document.querySelector('#projects ul');
            projects.forEach(project => {
                const li = document.createElement('li');
                li.textContent = project.name;
                projectsList.appendChild(li);
            });
        });

    const editEmailButton = document.querySelector('#edit-email-button');
    const editEmailForm = document.querySelector('#edit-email-form');
    const submitEmailButton = document.querySelector('#submit-email-button');
    const emailInput = document.querySelector('#email');
    const emailDisplay = document.querySelector('#email-display');

    editEmailButton.addEventListener('click', () => {
        editEmailForm.style.display = 'block';
        editEmailButton.style.display = 'none';
    });

    submitEmailButton.addEventListener('click', () => {
        const newEmail = emailInput.value;
        fetch('/api/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: newEmail })
        })
        .then(response => response.json())
        .then(updatedUser => {
            emailDisplay.textContent = `我的邮箱是 ${updatedUser.email}。`;
            editEmailForm.style.display = 'none';
            editEmailButton.style.display = 'block';
        });
    });

    fetch('/api/skills')
        .then(response => response.json())
        .then(skills => {
            const skillsList = document.querySelector('#skills ul');
            skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
        });
});
