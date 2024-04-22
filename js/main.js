const cards = document.querySelector(".users__cards");
const API_URL = "https://jsonplaceholder.typicode.com/users";

const usersImg = [
    "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=",
    "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=",
    "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=",
    "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=",
    "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    "https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=",
]

async function getUsers(api) {
    let data = await fetch(api);

    data
        .json()
        .then(res => mapUsers(res))
        .catch(error => console.log(error))
}

getUsers(API_URL);

function mapUsers(users) {
    let card = "";

    users.forEach(user => {
        card += `
            <div class="users__card">
                <div class="users__card__img">
                    <img src="${usersImg[user.id - 1]}" alt="">           
                </div>
                <div class="users__card__info">
                    <h2 class="users__card__title"><span>Name:</span> ${user.name}</h2>
                    <address class="users__card__address"><span>Address:</span> ${user.address.city + " " + user.address.street + " " + user.address.suite}</address>
                    <a class="users__card__email" href="email:${user.email}"><span>Email:</span> ${user.email}</a>
                    <p class="users__card__comp"><span>Company:</span> ${user.company.name}</p>
                    <a class="users__card__tel" href="tel:${user.phone}"><span>Tel:</span> ${user.phone}</a>
                    <a class="users__card__web" href="${user.website}" target="_blank"><span>Website:</span> ${user.website}</a>
                </div>
            </div>
        `
    })

    cards.innerHTML = card
}