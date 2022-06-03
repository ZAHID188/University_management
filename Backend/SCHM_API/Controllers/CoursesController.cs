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
    public class CoursesController : ControllerBase
    {
        private readonly DataContext _context;

        public CoursesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppCourses>>> GetCourses()
        {
          if (_context.Courses == null)
          {
              return NotFound();
          }
            return await _context.Courses.ToListAsync();
        }

        // GET: api/Courses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AppCourses>> GetAppCourses(int id)
        {
          if (_context.Courses == null)
          {
              return NotFound();
          }
            var appCourses = await _context.Courses.FindAsync(id);

            if (appCourses == null)
            {
                return NotFound();
            }

            return appCourses;
        }

        // PUT: api/Courses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppCourses(int id, AppCourses appCourses)
        {
            if (id != appCourses.Id)
            {
                return BadRequest();
            }

            _context.Entry(appCourses).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppCoursesExists(id))
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

        // POST: api/Courses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AppCourses>> PostAppCourses(AppCourses appCourses)
        {
          if (_context.Courses == null)
          {
              return Problem("Entity set 'DataContext.Courses'  is null.");
          }
            _context.Courses.Add(appCourses);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppCourses", new { id = appCourses.Id }, appCourses);
        }

        // DELETE: api/Courses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppCourses(int id)
        {
            if (_context.Courses == null)
            {
                return NotFound();
            }
            var appCourses = await _context.Courses.FindAsync(id);
            if (appCourses == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(appCourses);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AppCoursesExists(int id)
        {
            return (_context.Courses?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
