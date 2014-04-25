angular.module('ngWorkshopsApp').run(['$httpBackend',
    function ($httpBackend) {

        var issues = [{
            "id": 1,
            "title": "Add new user",
            "description": "Lorem ipsum...",
            "status": "In Progress",
            "type": "Task",
            "priority": "major",
            "assignee": "Arek Zając",
            "updated_at": "2013-09-12 06:20:31",
            "created_at": "2013-09-12 06:20:31"
        },
        {
            "id": 2,
            "title": "Edit user",
            "description": "fdgdfg",
            "status": "To Do",
            "type": "Bug",
            "priority": "major",
            "assignee": "Krzysiek",
            "updated_at": "2013-09-13 06:20:31",
            "created_at": "2013-09-13 06:20:31"
        },
        {
            "id": 3,
            "title": "Delete user",
            "description": "Lorem ipsum...",
            "status": "In Progress",
            "type": "Task",
            "priority": "minor",
            "assignee": "Ania",
            "updated_at": "2013-09-14 06:20:31",
            "created_at": "2013-09-14 06:20:31"
        }];

        for (var i = 1; i <= 100; i++) {
            for (var j = 1; j <= 3; j++) {
                $httpBackend.whenGET('/project/' + i + '/issues/' + j).respond(200, issues[j-1]);
            }
        }

        for (var j = 1; j <= 3; j++) {
            $httpBackend.whenGET('/issues/' + j).respond(200, issues[j-1]);
        }

        for (var i = 1; i <= 100; i++) {
            $httpBackend.whenPOST('/project/' + i + '/issues').respond(200, issues[1]);
            $httpBackend.whenGET('/project/' + i + '/issues').respond(200, issues);
        };

        $httpBackend.whenGET('/comments/').respond(200, {
            "data": [
                {
                    "id": 1,
                    "message": "Lorem ipsum",
                    "issue_id": 1,
                    "autor": {
                        // User Item
                    },
                    "updated_at": "2013-09-12T06:20:31+0000",
                    "created_at": "2013-09-12T06:20:31+0000"
                }
            ],
            "pagging": {
                "itemsCount": 1110
            }
        });

        for (var i = 1; i <= 100; i++) {
            $httpBackend.whenGET('/project/' + i).respond(200, {
                "id": i,
                "key": "PROJ" + i,
                "name": "Project" + i,
                "leader": {
                    // User Item
                },
                "url": "project" + i + ".com",
                "updated_at": "2013-09-12T06:20:31+0000",
                "created_at": "2013-09-12T06:20:31+0000"
            });
        }
        $httpBackend.whenGET('/project/2').respond(200, {
            "id": 1,
            "key": "ANGU",
            "name": "Angular",
            "leader": {
                // User Item
            },
            "url": "https://angularjs.org/",
            "updated_at": "2011-10-12T06:20:31+0000",
            "created_at": "2012-12-12T06:20:31+0000"
        });
        $httpBackend.whenPOST('/projects').respond(200, {
            "id": parseInt(Math.random()*1000,10),
            "key": "PROJ",
            "name": "Project",
            "leader": {
//            User Item
        },
            "url": "project.com",
            "updated_at": "2013-09-12T06:20:31+0000",
            "created_at": "2013-09-12T06:20:31+0000"
        });
        
        $httpBackend.whenPOST('/issues/comment').respond(200, {
            "id": 1,
            "message": "Lorem ipsum example comment",
            "issue_id": 1,
            "autor": {
                // User Item
            },
            "updated_at": "2013-09-12T06:20:31+0000",
            "created_at": "2013-09-12T06:20:31+0000"
        });
        
    }
]);
