using AddressBook.Models;

namespace AddressBook.Services.Interface
{
    public interface IEmployeeService
    {
        public   Task<IEnumerable<Employee>> GetEmployeeList();
        public Task<Employee> GetEmployeeById(string id);

        public Task<bool> AddEmployee(Employee employee);

        public Task<bool> UpdateEmployee(Employee employee , string id); 

        public Task<bool> DeleteEmployeeById(string id);



    }
}
