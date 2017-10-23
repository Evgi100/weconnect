app.factory('projectFact', function ($http) {
    ///////////////////////////////PROJECT FUNCTIONS///////////////////////////////
    let getProjects = function () {
        return $http.get('/projects')
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    // Gets individual employee object
    let getProject = function (id) {
        return $http.get('/project/' + id)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    // Edit the information of an project

    // Further details below
    /* The data param in the function expects an object with the key and value
    of what needs to be changed according the specifications defined in the schema
    */
    let editProject = function (data, id) {
        return $http.put('/project/' + id + '/update', data)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    //Remove an project
    let removeProject = function (id) {
        return $http.get('/project/' + id)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };
    let addProjectEmployer = function(project, id) {
        http.post('/project/employer/' + id)
    };
    //////////////////////DEV FUNCTIONS//////////////////
    // Adds employee to database after signup
    let addProject = function (project) {
        return $http.post('/projects', project)
            .then(function (response) {
                return angular.copy(response.data);
            });;
    };
    ////////////////////END OF DEV FUNCTIONS//////////////
    ///////////////////////////////END OF PROJECT FUNCTIONS////////////////////////

    return {
        getProjects: getProjects,
        addProject: addProject,
        getProject: getProject,
        editProject: editProject,
        removeProject: removeProject
    };

});
