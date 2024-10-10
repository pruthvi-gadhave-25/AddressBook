using AddressBook.Models;

namespace AddressBook.DAL.Interface
{
    public interface IEmployeedal
    {
        public Task<List<Employee>> GetEmployees();
        public Task<Employee> GetEmployeeById(string employeeId);

        public Task<bool> AddEmployee(Employee employee);

        public Task<bool> UpdateEmployee(Employee employee ,string employeeId);

        public Task<bool> DeleteEmployeeById(string employeeId);

    }
}
