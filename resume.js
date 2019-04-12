let summaryFlag = false;
let jobsFlag = false;
let skillsFlag = false;
let resume;

function createPersonalInfoSection(personalInfo) {
    let personalInfoString = `
    <h2>${resume.personalInfo.name}</h2>
    <p>${resume.personalInfo.phone}</p>
    <p>${resume.personalInfo.email}</p>
    <a href="${resume.personalInfo.gitHub}">GitHub: </a>`;
    return personalInfoString;
}

function createSummarySection(summary) {
    let summaryString = `
    <div class="sectionheader">  
        <h3 class="leftside clickable"><button class = "btn btn-info" title = "Click to learn more about Ammon Roberts">SUMMARY</button></h3>
        <div class="grayblock"></div>
    </div>
    <div id = "summarySectionToggle">
        <div class="sectionheader">
            <div class="leftside">
                <p class="whiteblock"></p>
            </div>
            
            <div class="rightside well well-sm">
            ${resume.summary}
            </div>
        </div>
    </div>`;

    return summaryString;
}

function createExperienceSection(experience) {
    let experienceString = ` 
    <div>
        <div class="sectionheader">
            <h3 class ="leftside clickable" title = "Click to show relevant work experience"><button class = "btn btn-info">EXPERIENCE</button></h3>
            <div class="grayblock"></div>
        </div>

        <div id = "jobSectionToggle">

        <div class="job">
            <div class="leftside">        
                <h4 class="text-danger">${experience.proFourFS.title}</h4>
                <span><p>${experience.proFourFS.employer}</p>
                <p>${experience.proFourFS.dateRange}</p></span>
            </div>
            <div class="rightside well well-sm">
            <b>Duties</b>
            <ul>
                    ${printArray(experience.proFourFS.duties)}
                </ul>
                <p></p>
                <b>Accomplishments</b>
                <ul>
                    ${printArray(experience.proFourFS.accomplishments)}
                </ul>
            </div>
        </div>   
    <hr>
        <div class="job">
            <div class="leftside">
                <h4 class="text-danger">${experience.generalFS.title}</h4>
                <span><p>${experience.generalFS.employer}</p>
                <p>${experience.generalFS.dateRange}</p></span>
            </div>

            <div class="rightside well well-sm">
                <b>Duties</b>
                <ul>
                    ${printArray(experience.generalFS.duties)}
                </ul>
                <b>Accomplishments</b>
                <ul>
                    ${printArray(experience.generalFS.accomplishments)}
                </ul>
            </div>
        </div>
    <hr>
        <div class="job">
            <div class="leftside">
                <h4 class="text-danger">${experience.customerCare.title}</h4>
                <span><p>${experience.customerCare.employer}</p>
                <p>${experience.customerCare.dateRange}</p></span>
            </div>
            <div class="rightside well well-sm">
                <b>Duties</b>
                <ul>
                    ${printArray(experience.customerCare.duties)}
                </ul>
                <b>Accomplishments</b>
                <ul>
                    ${printArray(experience.customerCare.accomplishments)}
                </ul>
            </div>
        </div>
    <hr>
        <div class="job">
            <div class="leftside">
                <h4 class="text-danger">${experience.accountsReceivable.title}</h4>
                <span><p>${experience.accountsReceivable.employer}</p>
                <p>${experience.accountsReceivable.dateRange}</p></span>
            </div>
            <div class="rightside well well-sm">
                <b>Duties</b>
                <ul>
                    ${printArray(experience.accountsReceivable.duties)}
                </ul>
                <b>Accomplishments</b>
                <ul>
                    ${printArray(experience.accountsReceivable.accomplishments)}
                </ul>
            </div>
        </div>
        </div>
    </div>`;

    return experienceString;
}

function createSkillsSection(skills) {
    let skillString = `
    <div>
        <div class="sectionheader">
            <h3 class ="leftside clickable"><button class = "btn btn-info" title = "Click to show relevant skills">SKILLS</button></h3>
            <div class="grayblock"></div>
        </div>

        <div id = "skillsSectionToggle">
            <div class="sectionheader">
            <div class="leftside"></div>
                <div class="rightside well well-sm">
                <ul>
                        ${printArray(skills)}
                    </ul>
                </div>
            </div>
        </div?
    </div>`;

    return skillString;
}

function toggleSection(id) {
    if (id == '#summarySectionToggle') {
        if (summaryFlag == false) {
            $('#summarySectionToggle').css('display', 'block');
            summaryFlag = true;
        } else {
            $('#summarySectionToggle').css('display', 'none');
            summaryFlag = false;
        }
    }

    if (id == '#jobSectionToggle') {
        if (jobsFlag == false) {
            $('#jobSectionToggle').css('display', 'block');
            jobsFlag = true;
        } else {
            $('#jobSectionToggle').css('display', 'none');
            jobsFlag = false;
        }
    }

    if (id == '#skillsSectionToggle') {
        if (skillsFlag == false) {
            $('#skillsSectionToggle').css('display', 'block');
            skillsFlag = true;
        } else {
            $('#skillsSectionToggle').css('display', 'none');
            skillsFlag = false;
        }
    }
}

function displayPersonalInfo() {
    let load = $('#personalInfoSection');
    load.html(createPersonalInfoSection(resume.personalInfo));
}

function displaySummary() {
    let load = $('#summarySection');
    load.html(createSummarySection(resume.summary));
}

function displayExperience() {
    let load = $('#experienceSection');
    load.html(createExperienceSection(resume.jobs));
}

function displaySkills() {
    let load = $('#skillsSection');
    load.html(createSkillsSection(resume.skills));
}

function displayFromJson() {
    displayPersonalInfo();
    displaySummary();
    displayExperience();
    displaySkills();
}

function printArray(array) {
    let result = '';
    for (var i = 0; i < array.length; i++) {
        result += '<li>' + array[i] + '</li>';

    }
    return result;
}

$(document).ready(function () {

    $.getJSON('resume.json', function (resumeJsonFile) {
        resume = resumeJsonFile;
        displayFromJson();

    });

    $('#summarySection').click(function () {
        toggleSection('#summarySectionToggle');
    });

    $('#experienceSection').click(function () {
        toggleSection('#jobSectionToggle');
    });

    $('#skillsSection').click(function () {
        toggleSection('#skillsSectionToggle');
    });
});