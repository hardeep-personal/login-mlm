import React, { useState } from "react";
const users = [
    {
        "id": "00ub0oNGTSWTBKOLGLNR",
        "status": "STAGED",
        "created": "2013-07-02T21:36:25.344Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2013-07-02T21:36:25.344Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Isaac",
            "lastName": "Brock",
            "email": "isaac.brock@example.com",
            "login": "isaac.brock@example.com",
            "mobilePhone": "555-415-1337"
        }
    },
    {
        "id": "01ub1pOQTUSWCBOKGLNR",
        "status": "ACTIVE",
        "created": "2015-11-18T14:22:45.789Z",
        "activated": "2015-11-18T14:23:10.123Z",
        "statusChanged": "2015-11-18T14:23:10.123Z",
        "lastLogin": "2015-11-19T09:42:30.567Z",
        "lastUpdated": "2015-11-19T09:42:30.567Z",
        "passwordChanged": "2015-11-18T14:23:10.123Z",
        "profile": {
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "jane.doe@example.com",
            "login": "jane.doe@example.com",
            "mobilePhone": "555-123-4567"
        }
    },
    {
        "id": "02ub2qPWTUSXCBPKGLNR",
        "status": "DISABLED",
        "created": "2018-04-05T08:17:32.456Z",
        "activated": null,
        "statusChanged": "2019-02-15T16:48:59.321Z",
        "lastLogin": null,
        "lastUpdated": "2019-02-15T16:48:59.321Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "John",
            "lastName": "Smith",
            "email": "john.smith@example.com",
            "login": "john.smith@example.com",
            "mobilePhone": "555-987-6543"
        }
    },
    {
        "id": "03ub3rQXTUSYCBQKGLNR",
        "status": "STAGED",
        "created": "2016-09-10T17:55:18.999Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2016-09-10T17:55:18.999Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Emily",
            "lastName": "Johnson",
            "email": "emily.johnson@example.com",
            "login": "emily.johnson@example.com",
            "mobilePhone": "555-789-1234"
        }
    },
    {
        "id": "04ub4sRWTUSZCBRKGLNR",
        "status": "ACTIVE",
        "created": "2019-12-30T10:05:57.123Z",
        "activated": "2019-12-30T10:06:10.456Z",
        "statusChanged": "2019-12-30T10:06:10.456Z",
        "lastLogin": "2020-01-05T15:30:20.789Z",
        "lastUpdated": "2020-01-05T15:30:20.789Z",
        "passwordChanged": "2019-12-30T10:06:10.456Z",
        "profile": {
            "firstName": "Michael",
            "lastName": "Williams",
            "email": "michael.williams@example.com",
            "login": "michael.williams@example.com",
            "mobilePhone": "555-555-5555"
        }
    },
    {
        "id": "05ub5tSWTUSTCBTKGLNR",
        "status": "STAGED",
        "created": "2017-03-25T12:42:35.888Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2017-03-25T12:42:35.888Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Olivia",
            "lastName": "Brown",
            "email": "olivia.brown@example.com",
            "login": "olivia.brown@example.com",
            "mobilePhone": "555-246-1357"
        }
    },
    {
        "id": "06ub6uTUSTVCBLCKGLNR",
        "status": "ACTIVE",
        "created": "2020-06-14T08:55:42.111Z",
        "activated": "2020-06-14T08:56:05.444Z",
        "statusChanged": "2020-06-14T08:56:05.444Z",
        "lastLogin": "2020-06-15T11:20:40.777Z",
        "lastUpdated": "2020-06-15T11:20:40.777Z",
        "passwordChanged": "2020-06-14T08:56:05.444Z",
        "profile": {
            "firstName": "Liam",
            "lastName": "Davis",
            "email": "liam.davis@example.com",
            "login": "liam.davis@example.com",
            "mobilePhone": "555-987-6543"
        }
    },
    {
        "id": "07ub7vTUSTWCBMCKGLNR",
        "status": "STAGED",
        "created": "2021-08-20T15:32:12.222Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2021-08-20T15:32:12.222Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Sophia",
            "lastName": "Miller",
            "email": "sophia.miller@example.com",
            "login": "sophia.miller@example.com",
            "mobilePhone": "555-123-7890"
        }
    },
    {
        "id": "08ub8wTUSTXCBNCKGLNR",
        "status": "ACTIVE",
        "created": "2022-04-05T18:44:56.333Z",
        "activated": "2022-04-05T18:45:10.666Z",
        "statusChanged": "2022-04-05T18:45:10.666Z",
        "lastLogin": "2022-04-06T09:15:25.999Z",
        "lastUpdated": "2022-04-06T09:15:25.999Z",
        "passwordChanged": "2022-04-05T18:45:10.666Z",
        "profile": {
            "firstName": "Ethan",
            "lastName": "Anderson",
            "email": "ethan.anderson@example.com",
            "login": "ethan.anderson@example.com",
            "mobilePhone": "555-789-4567"
        }
    },
    {
        "id": "09ub9xTUSTYCBOCKGLNR",
        "status": "STAGED",
        "created": "2018-11-28T07:27:14.444Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2018-11-28T07:27:14.444Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Ava",
            "lastName": "Martinez",
            "email": "ava.martinez@example.com",
            "login": "ava.martinez@example.com",
            "mobilePhone": "555-654-9876"
        }
    },
    {
        "id": "10ub0oVYSTZCBPKGLNR",
        "status": "ACTIVE",
        "created": "2023-03-15T14:19:38.555Z",
        "activated": "2023-03-15T14:20:02.888Z",
        "statusChanged": "2023-03-15T14:20:02.888Z",
        "lastLogin": "2023-03-16T08:40:15.111Z",
        "lastUpdated": "2023-03-16T08:40:15.111Z",
        "passwordChanged": "2023-03-15T14:20:02.888Z",
        "profile": {
            "firstName": "Noah",
            "lastName": "Garcia",
            "email": "noah.garcia@example.com",
            "login": "noah.garcia@example.com",
            "mobilePhone": "555-123-4567"
        }
    },
    {
        "id": "11ub1pVZYTUSCBQKGLNR",
        "status": "STAGED",
        "created": "2022-07-08T16:36:25.777Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2022-07-08T16:36:25.777Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Mia",
            "lastName": "Lopez",
            "email": "mia.lopez@example.com",
            "login": "mia.lopez@example.com",
            "mobilePhone": "555-987-6543"
        }
    },
    {
        "id": "12ub2qVZYTUSXCBPKGLNR",
        "status": "ACTIVE",
        "created": "2021-01-22T19:58:32.666Z",
        "activated": "2021-01-22T19:58:45.999Z",
        "statusChanged": "2021-01-22T19:58:45.999Z",
        "lastLogin": "2021-01-23T11:10:20.333Z",
        "lastUpdated": "2021-01-23T11:10:20.333Z",
        "passwordChanged": "2021-01-22T19:58:45.999Z",
        "profile": {
            "firstName": "William",
            "lastName": "Taylor",
            "email": "william.taylor@example.com",
            "login": "william.taylor@example.com",
            "mobilePhone": "555-555-5555"
        }
    },
    {
        "id": "13ub3rWZYTUSYCBQKGLNR",
        "status": "STAGED",
        "created": "2019-05-12T10:42:18.888Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2019-05-12T10:42:18.888Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Sofia",
            "lastName": "Clark",
            "email": "sofia.clark@example.com",
            "login": "sofia.clark@example.com",
            "mobilePhone": "555-123-7890"
        }
    },
    {
        "id": "14ub4sWZYTUSZCBRKGLNR",
        "status": "ACTIVE",
        "created": "2020-02-08T07:35:57.222Z",
        "activated": "2020-02-08T07:36:10.555Z",
        "statusChanged": "2020-02-08T07:36:10.555Z",
        "lastLogin": "2020-02-09T15:55:20.888Z",
        "lastUpdated": "2020-02-09T15:55:20.888Z",
        "passwordChanged": "2020-02-08T07:36:10.555Z",
        "profile": {
            "firstName": "Liam",
            "lastName": "Harris",
            "email": "liam.harris@example.com",
            "login": "liam.harris@example.com",
            "mobilePhone": "555-789-4567"
        }
    },
    {
        "id": "15ub5tWZTUSTCBTKGLNR",
        "status": "STAGED",
        "created": "2018-03-05T14:22:35.555Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2018-03-05T14:22:35.555Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Emma",
            "lastName": "Davis",
            "email": "emma.davis@example.com",
            "login": "emma.davis@example.com",
            "mobilePhone": "555-246-1357"
        }
    },
    {
        "id": "16ub6uWZTUSTVCBLCKGLNR",
        "status": "ACTIVE",
        "created": "2022-09-19T08:15:42.777Z",
        "activated": "2022-09-19T08:16:05.111Z",
        "statusChanged": "2022-09-19T08:16:05.111Z",
        "lastLogin": "2022-09-20T10:35:40.444Z",
        "lastUpdated": "2022-09-20T10:35:40.444Z",
        "passwordChanged": "2022-09-19T08:16:05.111Z",
        "profile": {
            "firstName": "Olivia",
            "lastName": "Garcia",
            "email": "olivia.garcia@example.com",
            "login": "olivia.garcia@example.com",
            "mobilePhone": "555-123-4567"
        }
    },
    {
        "id": "17ub7vWZTUSTWCBMCKGLNR",
        "status": "STAGED",
        "created": "2021-06-10T13:45:12.999Z",
        "activated": null,
        "statusChanged": null,
        "lastLogin": null,
        "lastUpdated": "2021-06-10T13:45:12.999Z",
        "passwordChanged": null,
        "profile": {
            "firstName": "Lucas",
            "lastName": "Taylor",
            "email": "lucas.taylor@example.com",
            "login": "lucas.taylor@example.com",
            "mobilePhone": "555-987-6543"
        }
    }
]
const UserList = () => {

    const [editedUsers, setEditedUsers] = useState(users); // Initialize with the original user data
    const [isEditing, setIsEditing] = useState(false);







    const handleInputChange = () => {


    };



    const handleEditClick = (index) => {
        setIsEditing(!isEditing);

        // // Clone the editedUsers array to avoid modifying the original data
        // const updatedEditedUsers = [...editedUsers];
        // console.log("working", updatedEditedUsers)

        // updatedEditedUsers[index] = true;
        // setEditedUsers(updatedEditedUsers);
    };

    const handleDeleteClick = (index) => {
        // Clone the editedUsers array to avoid modifying the original data
        // const updatedEditedUsers = [...editedUsers];
        // updatedEditedUsers.splice(index, 1);
        // setEditedUsers(updatedEditedUsers);
    };

    const handleSaveClick = (index) => {
        setIsEditing(!isEditing);

        // Clone the editedUsers array to avoid modifying the original data
        // const updatedEditedUsers = [...editedUsers];
        // updatedEditedUsers[index] = false;
        // setEditedUsers(updatedEditedUsers);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                {isEditing ? (
                                    <input
                                        className="bg-red-500 text-white"
                                        type="text"
                                        value={user.status}
                                        onChange={(e) => handleInputChange(index, "status", e.target.value)}

                                    />
                                ) : (
                                    user.status
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={user.profile.firstName}
                                        onChange={(e) => {
                                            const updatedProfile = { ...user.profile, firstName: e.target.value };
                                            users[index] = { ...user, profile: updatedProfile };
                                        }}
                                    />
                                ) : (
                                    user.profile.firstName
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={user.profile.lastName}
                                        onChange={(e) => {
                                            const updatedProfile = { ...user.profile, lastName: e.target.value };
                                            users[index] = { ...user, profile: updatedProfile };
                                        }}
                                    />
                                ) : (
                                    user.profile.lastName
                                )}
                            </td>
                            <td>{user.profile.email}</td>
                            <td>{user.profile.mobilePhone}</td>
                            <td>
                                {isEditing ? (
                                    <button onClick={() => handleSaveClick(index)}>Save</button>
                                ) : (
                                    <>
                                        <button onClick={() => handleEditClick(index)} >Edit</button>
                                        <button onClick={() => handleDeleteClick(index)} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
