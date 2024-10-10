using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public class Employee
    {
        [Key]
        public string EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeEmail { get; set; }    
        public string EmployeeMobile { get; set; }

        public  string EmployeeAddress { get; set; } 

    }
}
