angular.module('ngWorkshopsApp').run(['$httpBackend',
    function ($httpBackend) {
        $httpBackend.whenGET('/issues/1').respond(200, {
            "id": 1,
            "title": "Add new user",
            "description": "Lorem ipsum...",
            "status": "In Progress",
            "type": "Task",
            "priority": "major",
            "assignee": "Arek Zając",
            "updated_at": "2013-09-12T06:20:31+0000",
            "created_at": "2013-09-12T06:20:31+0000"
        });

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

        $httpBackend.whenGET('/project/1').respond(200, {
            "id": 1,
            "key": "PROJ",
            "name": "Project",
            "leader": {
                // User Item
            },
            "url": "project.com",
            "updated_at": "2013-09-12T06:20:31+0000",
            "created_at": "2013-09-12T06:20:31+0000"
        });
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
    }
]);
