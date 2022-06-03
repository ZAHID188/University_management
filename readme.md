# University management system

### Proposal

1.  3 types of user roles (Administrator, teacher, student)
2.  The administrator will create courses (code, name, description)
3. The administrator will create teacher (name, email) and student (name, email), etc.
4. A notification mail should be sent to the given email address with system access credentials.
5. Teachers will select courses that they will be teaching and the administrator will approve (If rejected the selection   from admin then the student should be notified)
6.  Students will select their preferred course to take which will be shown along with the teacher who will take that class(there should be a credit limit. Students should not be able to select courses more than the limit. if rejected the selection from admin then the student should be notified)

![plot](./temp/planning.png)

## Backend 

#### Asp.net core version 6 (webapi, entity frameworkcore 6.0.5, sqlserver version 6.0.5)
 
 1. First open visual studio then open the sln file.
 2. Then from nuget package manage solution install entityframeworkcore and sqlite
 3. open PMC run ``` add-migration createdb```
 4. then run ``` update-database```
 5. then ready to go just run the project
 
 