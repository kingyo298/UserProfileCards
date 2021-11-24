function createEmployeeCard(employee){
  let card = document.createElement("div");
  card.classList.add("d-flex","align-items-center","col-10","col-md-7","m-1");
  let cardInner = document.createElement("div");
  cardInner.classList.add("d-flex","align-items-center","bg-white","col-12","card__item");


  let contentLeft = document.createElement("div");
  contentLeft.classList.add("col-8","py-3");
  let cardName = document.createElement("h4");
  cardName.innerHTML = employee.getFullName();
  let infoList = document.createElement("ul");
  infoList.classList.add("info");

  let jobItem = document.createElement("li");
  jobItem.classList.add("py-2");
  let skillsItem = jobItem.cloneNode(true);
  let countryItem = jobItem.cloneNode(true);
  let jobInfo = document.createElement("p");
  let skillsInfo = jobInfo.cloneNode(true);
  let countryInfo = jobInfo.cloneNode(true);
  jobInfo.innerHTML = `Job : <br>${employee.job}`;
  skillsInfo.innerHTML = `Skill : <br>${employee.skill}`;
  countryInfo.innerHTML = `Country : <br>${employee.country}`;


  contentLeft.append(cardName);
  contentLeft.append(infoList);
  infoList.append(jobItem);
  infoList.append(skillsItem);
  infoList.append(countryItem);
  jobItem.append(jobInfo);
  skillsItem.append(skillsInfo);
  countryItem.append(countryInfo);

  cardInner.append(contentLeft);

  contentRight = document.createElement("div");
  contentRight.classList.add("col-4","d-flex","justify-content-center","align-items-center");
  cardImg = document.createElement("img");
  cardImg.classList.add("card__img");
  cardImg.src = employee.avatarUrl;
  contentRight.append(cardImg);
  cardInner.append(contentRight);

  card.append(cardInner);

  return card;
}

const profiles = document.getElementById("profiles");

class Employee{
  constructor(firstName, lastName, job, skill, country,avatarUrl){
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skill = skill;
    this.country = country;
    this.avatarUrl = avatarUrl;
  }

  getFullName(){
    return this.firstName + " " + this.lastName;
  }
}

let employee1 = new Employee("Kaiden","Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
let employee2 = new Employee("Elizabeth", "Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
let employee3 = new Employee("Duan", "Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");

let employees = [employee1,employee2,employee3];

employees.map(employee => profiles.append(createEmployeeCard(employee)));
