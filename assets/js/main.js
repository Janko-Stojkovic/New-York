{
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (((hour / 12)-360) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
}
AOS.init();

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;

function stickyscroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } 
}
window.addEventListener('scroll', stickyscroll);

const hrefLink = ["#hero", "#portfolio", "#news", "#contact"];
const imeLink = ["Home", "Photos", "Places", "Contact Us"];
let navBar = document.getElementById("navbarNav");
let navList = `<ul class="navbar-nav mx-auto">`;
    for (let i = 0; i < hrefLink.length; i++) {
        navList += `<li class="nav-item"><a class="nav-link" href="${hrefLink[i]}">${imeLink[i]}</a></li>`;
    }
    navList += `</ul>`;
navBar.innerHTML = navList;



var nameRegex = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})+$/;
var emailRegex = /^[\w-_\.]+@([\w-_]{2,}\.)+[a-z]{2,}$/;
var numRegex = /^06[0-9]\/[0-9]{4}\-[0-9]{3,4}$/;
var messageRegex = /.{4,200}/;
var formName = document.getElementById("name");
var formEmail = document.getElementById("email");
var formNumber = document.getElementById("number");
var formMsg = document.getElementById("message");
var noErrors;
formName.addEventListener("blur", checkName);
function checkName() {
  var check = nameRegex.test(formName.value);
  var errorName =  document.querySelector(".errorName");
  if(check) {
    formName.classList.add("br-green");
    formName.classList.remove("br-red");
    errorName.innerHTML="Name is valid!";
    errorName.style.color="green";
 
 } 
 else {
  noErrors = false;
  formName.classList.add("br-red");
  formName.classList.remove("br-green");
  errorName.innerHTML="Name is not valid!";
  errorName.style.color="red";
 }
}


formEmail.addEventListener("blur", checkEmail);
function checkEmail() {
 var check = emailRegex.test(formEmail.value);
 var errorEmail =  document.querySelector(".errorEmail");
 if(check) {
  formEmail.classList.add("br-green");
  formEmail.classList.remove("br-red");
  errorEmail.innerHTML="Email is valid!";
  errorEmail.style.color="green";
  
 } 
 else {
 noErrors = false;
  formEmail.classList.add("br-red");
  formEmail.classList.remove("br-green");
  errorEmail.innerHTML="Email is not valid!";
  errorEmail.style.color="Red";
 }
}

formNumber.addEventListener("blur", checkNumber);
function checkNumber() {
  var check = numRegex.test(formNumber.value);
  var errorNumber =  document.querySelector(".errorNumber");
  if(check) {
    formNumber.classList.add("br-green");
    formNumber.classList.remove("br-red");
    errorNumber.innerHTML="Number is valid!";
    errorNumber.style.color="green";
 
 } 
 else {
  noErrors = false;
  formNumber.classList.add("br-red");
  formNumber.classList.remove("br-green");
  errorNumber.innerHTML="Number is not valid!";
  errorNumber.style.color="red";
 }
}

formMsg.addEventListener("blur", checkMsg);
function checkMsg() {
  var errorMsg =  document.querySelector(".errorMsg");
 if (formMsg.value == "") {
  formMsg.classList.add('br-red');
  formMsg.classList.remove('br-green');


  errorMsg.textContent = "Message can`t be empty";
  errorMsg.style.color="red";
 } else {
  formMsg.classList.remove('br-red');
  formMsg.classList.add('br-green');
  errorMsg.textContent = "Message is valid";
  errorMsg.style.color="green";
 }

}

var btnSubmitMessage = document.getElementById("btnSubmitForm");

btnSubmitMessage.addEventListener("click", function() {
 noErrors = true;
 checkName();
 checkEmail();
 checkNumber();
 checkMsg();
 if(noErrors) {
  formName.value = "";
  formNumber.value = "";
  formEmail.value = "";
  formMsg.value = "";
  errorName.innerHTML="";
  errorEmail.innerHTML='';
  errorNumber.innerHTML='';
  errorMsg.innerHTML='';
  formEmail.classList.remove("br-green");
  formName.classList.remove("br-green");
  formNumber.classList.remove("br-green");
  formMsg.classList.remove("br-green");
}
});

const openModalButtons = document.querySelectorAll('#open');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
var placeTxt = document.querySelector('.modal-txt');
var modalTitle = document.querySelector('.title');
var title = [`Times Square`,`The Oculus`,`Central Park`,`Empire State`,`Brooklyn Bridge`,`Statue Of Liberty`,`Rockfeller Center`,`Wall Street`,`NYPL`,`Coney Island`,`MSG`,`9/11 memorial`];
var moreTxt = [`Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section 
of New York City, at the junction of Broadway and Seventh Avenue. Brightly lit by numerous billboards and advertisements, it stretches from West 42nd to West 
47th Streets, and is sometimes referred to as "the Crossroads of the World","the Center of the Universe", "the heart of the Great White Way", and "the heart of 
the world".One of the world's busiest pedestrian areas, it is also the hub of the Broadway Theater District and a major center of the world's entertainment industry. 
Times Square is one of the world's most visited tourist attractions, drawing an estimated 50 million visitors annually. 
Approximately 330,000 people pass through Times Square daily, many of them tourists, while over 460,000 pedestrians walk through Times Square on its busiest days.
Formerly known as Longacre Square, Times Square was renamed in 1904 after The New York Times moved its headquarters to the then newly erected Times Building,
now One Times Square. It is the site of the annual New Year's Eve ball drop, which began on December 31, 1907, and continues to attract over a million visitors to 
Times Square every year.Times Square functions as a town square, but is not geometrically a square; it is closer in shape to a bowtie, with two 
triangles emanating roughly north and south from 45th Street, where Seventh Avenue intersects Broadway. Broadway runs diagonally, crossing through the horizontal 
and vertical street grid of Manhattan laid down by the Commissioners' Plan of 1811, and that intersection creates the "bowtie" shape of Times Square.
The southern triangle of Times Square has no specific name, but the northern triangle is officially Duffy Square. It was dedicated in 1937 to World War I chaplain 
Father Francis P. Duffy of New York City's U.S. 69th Infantry Regiment and is the site of a memorial to him. There is also a statue of composer and entertainer 
George M. Cohan, and the TKTS ticket booth for Broadway theaters.`,`The Oculus is the world’s most expensive train station, serving 12 subway lines and the PATH 
train, with a beautiful mall inside of it. Its wild exterior designed by Santiago Calatrava, which resembles the skeleton of a whale, has white metal-clad steel 
ribs that reach up and out which actually symbolize a hand releasing a dove. The structure is a lasting reminder of the attacks of September 11, 2001.
It is in alignment with the sun’s solar angles on each September 11, from 8:46 am, when the first plane struck, until 10:28 am, when the second tower collapsed.
Its central skylight fits this alignment and washes the Oculus floor with a beam of light. The new shopping center inside has stores like the Apple Store, Aesop, 
Kate Spade, John Varvatos and others. Dining includes Eataly, Gansevoort Market, Wasabi Sushi & Bento and more.`,`Central Park is an urban park in New York City 
located between the Upper West and Upper East Sides of Manhattan. It is the fifth-largest park in the city by area, covering 843 acres (341 ha). It is the most 
visited urban park in the United States, with an estimated 42 million visitors annually as of 2016, and is the most filmed location in the world.
Following proposals for a large park in Manhattan during the 1840s, it was approved in 1853 to cover 778 acres (315 ha). In 1857, landscape architects Frederick 
Law Olmsted and Calvert Vaux won a design competition for the park with their "Greensward Plan". Construction began the same year; existing structures, 
including a majority-Black settlement named Seneca Village, were seized through eminent domain and razed. The park's first areas were opened to the public in 
late 1858. Additional land at the northern end of Central Park was purchased in 1859, and the park was completed in 1876. After a period of decline in the early 
20th century, New York City parks commissioner Robert Moses started a program to clean up Central Park in the 1930s. The Central Park Conservancy, created in 1980 combat further 
deterioration in the late 20th century, refurbished many parts of the park starting in the 1980s. 
Main attractions include landscapes such as the Ramble and Lake, Hallett Nature Sanctuary, the Jacqueline Kennedy Onassis Reservoir, and Sheep Meadow; amusement 
attractions such as Wollman Rink, Central Park Carousel, and the Central Park Zoo; formal spaces such as the Central Park Mall and Bethesda Terrace; and the 
Delacorte Theater. The biologically diverse ecosystem has several hundred species of flora and fauna. Recreational activities include carriage-horse and bicycle 
tours, bicycling, sports facilities, and concerts and events such as Shakespeare in the Park. Central Park is traversed by a system of roads and walkways and is served by public transportation.
Its size and cultural position make it a model for the world's urban parks. Its influence earned Central Park the designations of National Historic Landmark in 1963 and of 
New York City scenic landmark in 1974. Central Park is owned by the New York City Department of Parks and Recreation but has been managed by the Central Park Conservancy since 
1998, under a contract with the municipal government in a public–private partnership. The Conservancy, a non-profit organization, raises Central Park's annual operating budget 
and is responsible for all basic care of the park.`,`The Empire State Building is a 102-story[c] Art Deco skyscraper in Midtown Manhattan in New York City, United States. 
It was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from "Empire State", the nickname of the state of New York. 
The building has a roof height of 1,250 feet (380 m) and stands a total of 1,454 feet (443.2 m) tall, including its antenna. The Empire State Building stood as 
the world's tallest building until the construction of the World Trade Center in 1970; following the latter's collapse in 2001, the Empire State Building was again 
the city's tallest skyscraper until 2012. As of 2020, the building is the seventh-tallest building in New York City, the ninth-tallest completed skyscraper in the United States, 
the 49th-tallest in the world, and the sixth-tallest freestanding structure in the Americas.
The site of the Empire State Building, in Midtown South on the west side of Fifth Avenue between West 33rd and 34th Streets, was developed in 1893 as the Waldorf–Astoria Hotel. 
In 1929, Empire State Inc. acquired the site and devised plans for a skyscraper there. The design for the Empire State Building was changed fifteen times until it was ensured to be 
the world's tallest building. Construction started on March 17, 1930, and the building opened thirteen and a half months afterward on May 1, 1931. Despite favorable publicity related 
to the building's construction, because of the Great Depression and World War II, its owners did not make a profit until the early 1950s.
The building's Art Deco architecture, height, and observation decks have made it a popular attraction. Around four million tourists from around the world annually visit the building's 
86th- and 102nd-floor observatories; an additional indoor observatory on the 80th floor opened in 2019. The Empire State Building is an American cultural icon: it has been featured in 
more than 250 TV shows and movies since the film King Kong was released in 1933. The building's size has become the global standard of reference to describe the height and length of 
other structures. A symbol of New York City, the building has been named as one of the Seven Wonders of the Modern World by the American Society of Civil Engineers. It was ranked first 
on the American Institute of Architects' List of America's Favorite Architecture in 2007. Additionally, the Empire State Building and its ground-floor interior were designated city 
landmarks by the New York City Landmarks Preservation Commission in 1980, and were added to the National Register of Historic Places as a National Historic Landmark in 1986.`,
`The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, 
the Brooklyn Bridge was the first fixed crossing of the East River. It was also the longest suspension bridge in the world at the time of its opening, with a main span of 1,595.5 feet 
(486.3 m) and a deck 127 ft (38.7 m) above mean high water. The span was originally called the New York and Brooklyn Bridge or the East River Bridge but was officially 
renamed the Brooklyn Bridge in 1915.
Proposals for a bridge connecting Manhattan and Brooklyn were first made in the early 19th century, which eventually led to the construction of the current span, designed by John A. Roebling. The project's chief engineer, his son Washington Roebling, contributed further design work, assisted by the latter's wife, Emily Warren Roebling. Construction started in 1870, with the Tammany Hall-controlled New York Bridge Company overseeing construction, although numerous controversies and the novelty of the design prolonged the project over thirteen years. Since opening, the Brooklyn Bridge has undergone several reconfigurations, having carried horse-drawn vehicles and elevated railway lines until 1950. To alleviate increasing traffic flows, additional bridges and tunnels were built across the East River. Following gradual deterioration, the Brooklyn Bridge has been renovated several times, including in the 1950s, 1980s, and 2010s.
The Brooklyn Bridge is the southernmost of the four toll-free vehicular bridges connecting Manhattan and Long Island, with the Manhattan Bridge, the Williamsburg Bridge, and the Queensboro Bridge to the north. Only passenger vehicles and pedestrian and bicycle traffic are permitted. A major tourist attraction since its opening, the Brooklyn Bridge has become an icon of New York City. Over the years, the bridge has been used as the location of various stunts and performances, as well as several crimes and attacks. The Brooklyn Bridge has been designated a National Historic Landmark, a New York City landmark, and a National Historic Civil Engineering Landmark.`,`The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.
The statue is a figure of Libertas, a robed Roman liberty goddess. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776 in Roman numerals), the date of the U.S. Declaration of Independence. A broken shackle and chain lie at her feet as she walks forward, commemorating the recent national abolition of slavery.[8] After its dedication, the statue became an icon of freedom and of the United States, seen as a symbol of welcome to immigrants arriving by sea.
Bartholdi was inspired by a French law professor and politician, Édouard René de Laboulaye, who is said to have commented in 1865 that any monument raised to U.S. independence would properly be a joint project of the French and U.S. peoples. The Franco-Prussian War delayed progress until 1875, when Laboulaye proposed that the French finance the statue and the U.S. provide the site and build the pedestal. Bartholdi completed the head and the torch-bearing arm before the statue was fully designed, and these pieces were exhibited for publicity at international expositions.
The torch-bearing arm was displayed at the Centennial Exposition in Philadelphia in 1876, and in Madison Square Park in Manhattan from 1876 to 1882. Fundraising proved difficult, especially for the Americans, and by 1885 work on the pedestal was threatened by lack of funds. Publisher Joseph Pulitzer, of the New York World, started a drive for donations to finish the project and attracted more than 120,000 contributors, most of whom gave less than a dollar (equivalent to $29 in 2020). The statue was built in France, shipped overseas in crates, and assembled on the completed pedestal on what was then called Bedloe's Island. The statue's completion was marked by New York's first ticker-tape parade and a dedication ceremony presided over by President Grover Cleveland.
The statue was administered by the United States Lighthouse Board until 1901 and then by the Department of War; since 1933 it has been maintained by the National Park Service as part of the Statue of Liberty National Monument, and is a major tourist attraction. Public access to the balcony around the torch has been barred since 1916`,`Rockefeller Center is a large complex consisting of 19 commercial buildings covering 22 acres (89,000 m2) between 48th Street and 51st Street in Midtown Manhattan, New York City. The 14 original Art Deco buildings, commissioned by the Rockefeller family, span the area between Fifth Avenue and Sixth Avenue, split by a large sunken square and a private street called Rockefeller Plaza. Later additions include 75 Rockefeller Plaza across 51st Street at the north end of Rockefeller Plaza, and four International Style buildings located on the west side of Sixth Avenue.
In 1928, the site's then-owner, Columbia University, leased the land to John D. Rockefeller Jr., who was the main person behind the complex's construction. Originally envisioned as the site for a new Metropolitan Opera building, the current Rockefeller Center came about after the Met could not afford to move to the proposed new building. Various plans were discussed before the current one was approved in 1932. Construction of Rockefeller Center started in 1931, and the first buildings opened in 1933. The core of the complex was completed by 1939.
The original center has several sections. Radio City, along Sixth Avenue and centered on 30 Rockefeller Plaza, includes Radio City Music Hall and was built for RCA's radio-related enterprises such as NBC. The International Complex along Fifth Avenue was built to house foreign-based tenants. The remainder of the original complex originally hosted printed media as well as Eastern Air Lines. While 600 Fifth Avenue is located at the southeast corner of the complex, it was built by private interests in the 1950s and was only acquired by the center in 1963.
Described as one of the greatest projects of the Great Depression era, Rockefeller Center was declared a New York City landmark in 1985 and a National Historic Landmark in 1987. It is noted for the large quantities of art present in almost all of its Art Deco buildings, its expansive underground concourse, and its ice-skating rink. The complex is also famous for its annual lighting of the Rockefeller Center Christmas Tree.`,`Wall Street is an eight-block-long street in the Financial District of Lower Manhattan in New York City. It runs between Broadway in the west to South Street and the East River in the east. The term "Wall Street" has become a metonym for the financial markets of the United States as a whole, the American financial services industry, New York–based financial interests, or the Financial District itself.
Wall Street was originally known in Dutch as "de Waalstraat" when it was part of New Amsterdam in the 17th century, though the origins of the name vary. An actual wall existed on the street from 1685 to 1699. During the 17th century, Wall Street was a slave trading marketplace and a securities trading site, as well as the location of Federal Hall, New York's first city hall. In the early 19th century, both residences and businesses occupied the area, but increasingly business predominated, and New York City's financial industry became centered on Wall Street. In the 20th century, several early skyscrapers were built on Wall Street, including 40 Wall Street, once the world's tallest building.
Wall Street is home to the world's two largest stock exchanges by total market capitalization, the New York Stock Exchange and NASDAQ. Several other major exchanges have or had headquarters in the Wall Street area, including the New York Mercantile Exchange, the New York Board of Trade, the New York Futures Exchange (NYFE), and the former American Stock Exchange. To support the exchanges, many brokerage firms had offices "clustered around Wall Street". The direct economic impacts of Wall Street activities extend beyond New York City.
Wall Street physically contains several banking headquarters and skyscrapers, as well as the New York Stock Exchange Building and Federal Hall National Memorial. The street is served by three subway stations and a ferry stop.`,`The New York Public Library (NYPL) is a public library system in New York City. With nearly 53 million items and 92 locations, the New York Public Library is the second largest public library in the United States (behind the Library of Congress) and the fourth largest in the world. It is a private, non-governmental, independently managed, nonprofit corporation operating with both private and public financing.
The library has branches in the boroughs of the Bronx, Manhattan and Staten Island and affiliations with academic and professional libraries in the New York metropolitan area. The city's other two boroughs, Brooklyn and Queens, are not served by the New York Public Library system, but rather by their respective borough library systems: the Brooklyn Public Library and the Queens Public Library. The branch libraries are open to the general public and consist of circulating libraries. The New York Public Library also has four research libraries, which are also open to the general public.
The library, officially chartered as The New York Public Library, Astor, Lenox and Tilden Foundations, was developed in the 19th century, founded from an amalgamation of grass-roots libraries and social libraries of bibliophiles and the wealthy, aided by the philanthropy of the wealthiest Americans of their age.
The "New York Public Library" name may also refer to its Main Branch, which is easily recognizable by its lion statues named Patience and Fortitude that sit either side of the entrance. The branch was declared a National Historic Landmark in 1965, listed on the National Register of Historic Places in 1966, and designated a New York City Landmark in 1967.`,`Coney Island is a peninsular neighborhood and entertainment area in the southwestern section of the New York City borough of Brooklyn. The neighborhood is bounded by Brighton Beach to its east, Lower New York Bay to the south and west, and Gravesend to the north, and includes the subsections of Sea Gate to its west and Brighton Beach to its east. Coney Island was formerly the westernmost of the Outer Barrier islands on the southern shore of Long Island, but in the early 20th century it became a peninsula, connected to the rest of Long Island by land fill.
The origin of Coney Island's name is disputed, but the area was originally part of the colonial town of Gravesend. By the mid-19th century it had become a seaside resort, and by the late 19th century, amusement parks had also been built at the location. The attractions reached a historical peak during the first half of the 20th century. However, they declined in popularity after World War II and, following years of neglect, several structures were torn down. Various redevelopment projects were proposed for Coney Island in the 1970s through the 2000s, though most of these were not carried out. The area was revitalized with the opening of MCU Park in 2001 and several amusement rides starting in the 2010s.
Coney Island had around 32,000 residents as of the 2010 United States Census. The neighborhood is ethnically diverse, and the neighborhood's poverty rate of 27% is slightly higher than that of the city as a whole.
Coney Island is part of Brooklyn Community District 13, and its primary ZIP Code is 11224. It is patrolled by the 60th Precinct of the New York City Police Department. Fire services are provided by the New York City Fire Department's Engine 245/Ladder 161/Battalion 43 and Engine 318/Ladder 166. Politically, Coney Island is represented by the New York City Council's 47th District. The area is well served by the New York City Subway and local bus routes, and contains several public elementary and middle schools.`,`Madison Square Garden, colloquially known as The Garden or by its initials MSG, is a multi-purpose indoor arena in New York City. Located in Midtown Manhattan between Seventh and Eighth avenues from 31st to 33rd Street, it is situated atop Pennsylvania Station. It is the fourth venue to bear the name "Madison Square Garden"; the first two (1879 and 1890) were located on Madison Square, on East 26th Street and Madison Avenue, with the third Madison Square Garden (1925) farther uptown at Eighth Avenue and 50th Street.
The Garden is used for professional ice hockey and basketball, as well as boxing, concerts, ice shows, circuses, professional wrestling and other forms of sports and entertainment. It is close to other midtown Manhattan landmarks, including the Empire State Building, Koreatown, and Macy's at Herald Square. It is home to the New York Rangers of the National Hockey League (NHL), the New York Knicks of the National Basketball Association (NBA), and was home to the New York Liberty (WNBA) from 1997 to 2017.
Originally called Madison Square Garden Center, the Garden opened on February 11, 1968, and is the oldest major sporting facility in the New York metropolitan area. It is the oldest arena in the National Basketball Association, and the second-oldest in the National Hockey League, with Climate Pledge Arena in Seattle being six years older than the Garden. In 2016, MSG was the second-busiest music arena in the world in terms of ticket sales, behind The O2 Arena in London. Including two major renovations, its total construction cost is approximately $1.1 billion, and it has been ranked as one of the 10 most expensive stadium venues ever built. It is part of the Pennsylvania Plaza office and retail complex, named for the railway station. Several other operating entities related to the Garden share its name.`,`The National September 11 Memorial & Museum (also known as the 9/11 Memorial & Museum) is a memorial and museum in New York City commemorating the September 11, 2001 attacks, which killed 2,977 people, and the 1993 World Trade Center bombing, which killed six. The memorial is located at the World Trade Center site, the former location of the Twin Towers that were destroyed during the September 11 attacks. It is operated by a non-profit institution whose mission is to raise funds for, program, and operate the memorial and museum at the World Trade Center site.
A memorial was planned in the immediate aftermath of the attacks and destruction of the World Trade Center for the victims and those involved in rescue and recovery operations. The winner of the World Trade Center Site Memorial Competition was Israeli-American architect Michael Arad of Handel Architects, a New York- and San Francisco-based firm. Arad worked with landscape-architecture firm Peter Walker and Partners on the design, creating a forest of swamp white oak trees with two square reflecting pools in the center marking where the Twin Towers stood. In August 2006, the World Trade Center Memorial Foundation and the Port Authority of New York and New Jersey began heavy construction on the memorial and museum. The design is consistent with the original master plan by Daniel Libeskind, which called for the memorial to be 30 feet (9.1 m) below street level—originally 70 feet (21 m)—in a plaza, and was the only finalist to disregard Libeskind's requirement that the buildings overhang the footprints of the Twin Towers. The World Trade Center Memorial Foundation was renamed the National September 11 Memorial & Museum in 2007.
A dedication ceremony commemorating the tenth anniversary of the attacks was held at the memorial on September 11, 2011, and it opened to the public the following day. The museum was dedicated on May 15, 2014, with remarks from then mayor of New York City Michael Bloomberg and then President Barack Obama. Six days later, the museum opened to the public.`]

for(let i = 0 ; i < openModalButtons.length ; i++){
openModalButtons[i].addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    modalTitle.innerHTML=title[i];
    placeTxt.innerHTML = moreTxt[i];
    openModal(modal)

});
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
});

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
};

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
};

const openModalButton = document.getElementsByClassName('img');
var modalImg = document.getElementById('modalImg');
var modalTxt = document.getElementById('modalTxt');
var txt = ['Times Square', 'Statue Of Liberty', 'Empire State Building', 'Brooklyn Bridge'];
var modalImgLink = ['assets/images/Times-Square.jpg', 'assets/images/Liberty.jpg', 'assets/images/ESB.jpg', 'assets/images/Brooklyn-Bridge.jpg']
var modalImgWidth = ['100%', '50%', '50%', '100%']

for( let i=0;i<txt.length;i++){
  openModalButton[i].addEventListener('click', () => {
    const modal = document.querySelector('#imgmodal');
    modalImg.src = modalImgLink[i];
    modalImg.style.width = modalImgWidth[i];
    modalTxt.textContent = txt[i];
    openModal(modal);
  });
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.imgmodal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
});


function openImgModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
};


const open_author = document.getElementById('open-author');
const modal_author = document.getElementById('modal-author');
const close_author = document.getElementById('close');

open_author.addEventListener('click',() => {
  modal_author.classList.add('active')
  overlay.classList.add('active')
});

close_author.addEventListener('click',() =>{
  modal_author.classList.remove('active')
  overlay.classList.remove('active')
})



/*$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImage = $('.active');
        var nextImage = currentImage.next();
        if(nextImage.length){
            currentImage.removeClass('active');
            nextImage.addClass('active');
        }
        else{
            $('.image:last-child').removeClass('active');
            $('.image:first-child').addClass('active');
        }
    })
    $('.prev').on('click', function(){
        var currentImage = $('.active');
        var prevImage = currentImage.prev();
        if(prevImage.length){
            currentImage.removeClass('active');
            prevImage.addClass('active');
        }
        else{
            $('.image:first-child').removeClass('active');
            $('.image:last-child').addClass('active');
        }
    })
})
setInterval(function(){
  var currentImage = $('.active');
  var nextImage = currentImage.next();
  if(nextImage.length){
      currentImage.removeClass('active');
      nextImage.addClass('active');
  }
  else{
      $('.image:last-child').removeClass('active');
      $('.image:first-child').addClass('active');
  }
}, 2000)*/