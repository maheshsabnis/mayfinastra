# Date: 05-May-2022
1. Create a Collection of Employees with following properties in Employee class
    - EmpNo, EmpName, DeptName, Designation, Salary
    - The collection will be an Array<Employee> 
    - DeptName values will be: IT, HR, SL, AC, TR
    - Designation values will be: Director, Manager, Lead, Engineer, Developer
    - Hard-Code Employees Array with At least 30 Record in it
2. Perform Following Operations on Employees Record
    - Find out how many Employees are there in Each Department
    - Find out how many Employees are there of Each Designation
    - Create a group of Employees per Department and Designation separately
    - Print Sum of Salary of Employees for each Department          

# Date: 06-May-2022

1. Create a Windows Calculator component (No-Google) that will have Basic and Scientific Calculation Facilities.
2. Create a Class called as 'Course' with properties as 'CourseId','CourseName' and 'Fees'. Define an array of Courses using the Course class with at least 15 records. Generate CheckBox List Component based on the COurses Array. When a CheckBox is checked from the list, the selected course name and its fees must be displayed below the list, when multiple courses are checked, the Sum of Fees of course selected must be displayed. When a checkbox is unchecked, then the Sum of Fees must be modified.    

# Date: 09-May-2022

1. Create a DataGridComponent which will have following features
    - It MUST accepts DataSource property to generate Rows and Columns by accepting collection from parent
    - It MUST accept 'CanDelete' a boolean property, if this is set to 'true', then each row of the component will have Delete button. When this button is clicked, the row must be deleted from Parent Component's collection 
    - Each column header MUST have tow Buttons 'Sort' and 'Reverse', when these buttons are clicked, the Data in table MUST be sorted/Reversed based on values present into that column

# Date: 10-May-2022

1. Create a Shopping Card Application using Angular Components and Services
    - Component 1: That will Show all Categories
    - Component 2: Will show Products of selected Category
    - Component 3: Will show all purchased Products from each category with total price  
2. Complete the EmployeeReactiveFormComponent class with following validations
    - EmpName must be having format as FirstName MilldeName LastName
    - EmpName must be String
    - EmpNo Must not repeated (Custom Validator)


# Date: 11-May-2022

1. Create a REST API or USer Free REST APIs and using HttpClient class Perform HTTP Operations on it using Angular CLient
2. Create a Component that will have Search TextBox and a Table. The Search TextBox will be shown on the top of the HTML Table. The Table will show data received from the REST API when the component is loaded. Filter data from the Table based on teh Search string entered into the TexBox   
3. refer the link for Token BAsed Auth Security to REST API
    https://www.webnethelper.com/2020/01/authenticating-angular-8-client.html
    
# Date: 13-May-2022
1. Create a LitElement, that will provide a Multicolumn DropdownList from where, the Department Data Can be emitted to the Angular Parent Component
2. Complete the Routeing App folder application which will be added with the DeptDeleteComponent to delete the department (OR Use the FREE APIs).
    - Modify the ListDeptComponent by showing the 'Delete' button for each row. 


# Date: 16-May-2022
1.  Test the EmployeeComponent to check if the new row is added into the table showing Employee array when the save button is clicked
2. Test the Employee Component to make sure that when the EMpNo is wrong then the validation message is displayed for EmpNo invalid
3. Test the ColorDirective to check whether the Html Element changes its background color when the MouseEnter event is raised on it 

# Date: 17-May-2022
1. Write a Test on a Angular component which is Constructor injected using the Angular Service
    - Write a Test for a method of the component which is using the service instance and calling the method from the service 
