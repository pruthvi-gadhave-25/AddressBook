using AddressBook.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using AddressBook.Models;

namespace AddressBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }


        [HttpGet("employees")]
        public async Task<IActionResult> GetAllEmployees() {
            var emps = await _employeeService.GetEmployeeList();

            return Ok(emps);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult>GetEmployeeById(string id)
        {
            var employee = await _employeeService.GetEmployeeById(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }


        [HttpPost("add")]
        public async Task<IActionResult> AddEmployee(Employee employee)
        {if (employee == null)
            {
                return BadRequest("Employee data is required");
            }
            
            bool isCreated =await  _employeeService.AddEmployee(employee);


            if (isCreated)
            {
                return Ok();
            }

            return BadRequest("Failed to Add");
        }

        [HttpPut("update{id}")]
        public async Task<IActionResult> UpdateEmployee(Employee employee ,string id )
        {
            if (employee == null)
            {
                return BadRequest("Employee data is required");
            }

            bool isCreated = await _employeeService.UpdateEmployee(employee ,id);


            if (isCreated)
            {
                return Ok();
            }

            return BadRequest("Failed to Update");
        }


        [HttpDelete("delete{id}")]
        public async Task<IActionResult> DeleteEmployee(string id )
        {
            if (id == null)
            {
                return BadRequest(" InValid ID ");
            }

            bool isDeleted = await _employeeService.DeleteEmployeeById(id);


            if (isDeleted)
            {
                return Ok();
            }

            return BadRequest("Failed to Delete");
        }
    }
}
