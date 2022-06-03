using Microsoft.EntityFrameworkCore;
using SCHM_API.Entities;

namespace SCHM_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<AppTeacher>Teachers { get; set; }
    }
}
