using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCHM_API.Data;
using SCHM_API.Entities;

namespace SCHM_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly DataContext _context;

        public StudentsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppStudent>>> GetStudents()
        {
          if (_context.Students == null)
          {
              return NotFound();
          }
            return await _context.Students.ToListAsync();
        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AppStudent>> GetAppStudent(int id)
        {
          if (_context.Students == null)
          {
              return NotFound();
          }
            var appStudent = await _context.Students.FindAsync(id);

            if (appStudent == null)
            {
                return NotFound();
            }

            return appStudent;
        }

        // PUT: api/Students/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppStudent(int id, AppStudent appStudent)
        {
            if (id != appStudent.Identitity)
            {
                return BadRequest();
            }

            _context.Entry(appStudent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppStudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AppStudent>> PostAppStudent(AppStudent appStudent)
        {
          if (_context.Students == null)
          {
              return Problem("Entity set 'DataContext.Students'  is null.");
          }
            _context.Students.Add(appStudent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppStudent", new { id = appStudent.Identitity }, appStudent);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppStudent(int id)
        {
            if (_context.Students == null)
            {
                return NotFound();
            }
            var appStudent = await _context.Students.FindAsync(id);
            if (appStudent == null)
            {
                return NotFound();
            }

            _context.Students.Remove(appStudent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AppStudentExists(int id)
        {
            return (_context.Students?.Any(e => e.Identitity == id)).GetValueOrDefault();
        }
    }
}
