using AddressBook.DAL.Interface;
using AddressBook.Models;
using AddressBook.Services.Interface;

namespace AddressBook.Services
{
    public class EmployeeService : IEmployeeService  
    {
        private readonly IEmployeedal _employeedal;
 
        public EmployeeService(IEmployeedal employeedal)
        {
            _employeedal = employeedal;
        }

        public async Task<IEnumerable<Employee>> GetEmployeeList()
        {
            return await  _employeedal.GetEmployees();
        }

        public async Task<Employee> GetEmployeeById(string id)
        {
            return await _employeedal.GetEmployeeById(id); 
        }

        public async Task<bool> AddEmployee(Employee employee)
        {
            return await _employeedal.AddEmployee(employee);
        }

        public async Task<bool> UpdateEmployee(Employee employee ,string id )
        {
            return await _employeedal.UpdateEmployee(employee ,id);
        }

        public async Task<bool> DeleteEmployeeById(string id)
        {
            return await _employeedal.DeleteEmployeeById(id);
        }
    }
}
