using System.ComponentModel.DataAnnotations;

namespace SCHM_API.Entities
{
    public class AppTeacher
    {
        [Key]
        public int Identity { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }




    }
}
