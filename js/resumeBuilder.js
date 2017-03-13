/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: 'Olga Voloshchenko',
    role: 'junior front web developer',
    contacts: {
        mobile: '+79857888079',
        email: 'voloshchenko.o@hotmail.com',
        github: 'Voloshchenko',
        location: 'Moscow'
    },
    welcomeMessage: 'I"ll get it!',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git'],
    biopic: 'images/profile.jpg',
    display: function() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var formattedBioPic = $(HTMLbioPic).attr('src', bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#topContacts').append(formattedMobile);
        $('#topContacts').append(formattedEmail);
        $('#topContacts').append(formattedGithub);
        $('#topContacts').append(formattedLocation);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedMessage);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
                $('#skills').append(formattedSkill);
            }
        }
    }

};

var education = {
    schools: [{
        name: 'Moscow State Institute of International Relations',
        location: 'Moscow, Vernadskogo avenu, 76',
        degree: 'Bachelor',
        majors: ['busness administration', ' management', ' marketing'],
        dates: '2009 - 2013',
        url: 'http://english.mgimo.ru/'
    }],

    onlineCourses: [{
            title: 'Front-End Web Developer Nanodegree',
            school: 'Udacity',
            date: '2017',
            url: 'https://www.udacity.com/'
        },
        {
            title: 'HTML&CSS',
            school: 'Codecademy',
            date: '2016',
            url: 'https://www.codecademy.com/learn/web'
        },
        {
            title: 'JavaScriptcript',
            school: 'Codecademy',
            date: '2016',
            url: 'https://www.codecademy.com/learn/javascript'
        },
        {
            title: 'jQuery',
            school: 'Codecademy',
            date: '2016',
            url: 'https://www.codecademy.com/learn/jquery'
        }
    ],
    display: function() {
        $('#education').append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            var formattedEductionTitle = $(formattedSchoolName + formattedSchoolDegree).attr("href", education.schools[i].url);
            var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);

            $('.education-entry').append(formattedEductionTitle);
            $('.education-entry').append(formattedSchoolDates);
            $('.education-entry').append(formattedSchoolLocation);
            $('.education-entry').append(formattedSchoolMajor);
        }

        $('.education-entry').append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);
            formattedOnlineTitle = $(formattedOnlineTitle + formattedOnlineSchool).attr('href', education.onlineCourses[i].url);
            var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[j].date);
            var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[j].url);
            formattedOnlineURL = $(formattedOnlineURL).attr("href", education.onlineCourses[j].url);

            $('.education-entry').append(formattedOnlineTitle);
            $('.education-entry').append(formattedOnlineDates);
            $('.education-entry').append(formattedOnlineURL);
        }
    }
};

var work = {
    jobs: [{
        employer: 'Department of Information Technology',
        title: 'Specialist',
        location: 'Moscow, 1-st Borodinskaya st., 2A',
        dates: '2013-2017',
        description: 'Main responsibilities are communication and official correspondence with government organizations, police, citizens, court and lawyers ' +
            'Created organizational system for cctv archive department and use it to organize over 4 thousands documents.',
        url: 'http://dit.mos.ru/'
    }],

    display: function() {
        $('#workExperience').append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
            var formattedWork = $(formattedWorkEmployer + formattedWorkTitle).attr('href', work.jobs[i].url);
            var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

            $('.work-entry').append(formattedWork);
            $('.work-entry').append(formattedWorkDates);
            $('.work-entry').append(formattedWorkLocation);
            $('.work-entry').append(formattedWorkDescription);
        }
    }
};

var projects = {
    projects: [{
            title: 'Online Resume',
            dates: '2017',
            description: 'Interactive resume',
            images: ['images/cv.jpg', 'images/cv2.jpg', ],
            url: 'https://classroom.udacity.com/nanodegrees/nd001'
        },
        {
            title: 'Build a Portfolio Site',
            dates: '2017',
            description: 'My portfolio website',
            images: ['images/Portfoliowebsite.jpg', 'images/Portfoliowebsite2.jpg'],
            url: 'https://classroom.udacity.com/nanodegrees/nd001'
        },
        {
            title: '2Florista',
            dates: '2017',
            description: 'Website for two young floristas. Input forms that allows to leave orders online. Interactive Google map. ',
            images: ['images/flowers.jpg', 'images/flower.jpg'],
            url: 'https://github.com/Voloshchenko/interactive-resume'
        }
    ],

    display: function() {
        $('#projects').append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
            formattedProjectTitle = $(formattedProjectTitle).attr('href', projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
            //var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.project[i].images);

            $('.project-entry').append(formattedProjectTitle);
            $('.project-entry').append(formattedProjectDates);
            $('.project-entry').append(formattedProjectDescription);
            //$('.project-entry').append(formattedProjectImage);    

            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
                $('.project-entry').append(formattedProjectImage);
            }
        }
    }
};




bio.display();
education.display();
work.display();
projects.display();

$('#footerContacts').append('See you soon');
$('#mapDiv').append(googleMap);