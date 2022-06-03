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
    public class TeachersController : ControllerBase
    {
        private readonly DataContext _context;

        public TeachersController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Teachers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppTeacher>>> GetTeachers()
        {
          if (_context.Teachers == null)
          {
              return NotFound();
          }
            return await _context.Teachers.ToListAsync();
        }

        // GET: api/Teachers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AppTeacher>> GetAppTeacher(int id)
        {
          if (_context.Teachers == null)
          {
              return NotFound();
          }
            var appTeacher = await _context.Teachers.FindAsync(id);

            if (appTeacher == null)
            {
                return NotFound();
            }

            return appTeacher;
        }

        // PUT: api/Teachers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppTeacher(int id, AppTeacher appTeacher)
        {
            if (id != appTeacher.Identity)
            {
                return BadRequest();
            }

            _context.Entry(appTeacher).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppTeacherExists(id))
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

        // POST: api/Teachers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AppTeacher>> PostAppTeacher(AppTeacher appTeacher)
        {
          if (_context.Teachers == null)
          {
              return Problem("Entity set 'DataContext.Teachers'  is null.");
          }
            _context.Teachers.Add(appTeacher);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppTeacher", new { id = appTeacher.Identity }, appTeacher);
        }

        // DELETE: api/Teachers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppTeacher(int id)
        {
            if (_context.Teachers == null)
            {
                return NotFound();
            }
            var appTeacher = await _context.Teachers.FindAsync(id);
            if (appTeacher == null)
            {
                return NotFound();
            }

            _context.Teachers.Remove(appTeacher);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AppTeacherExists(int id)
        {
            return (_context.Teachers?.Any(e => e.Identity == id)).GetValueOrDefault();
        }
    }
}
