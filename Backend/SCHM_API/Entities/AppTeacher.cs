using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCHM_API.Entities
{
    public class AppTeacher
    {
        [Key]
        public int Identity { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
       
        




    }
}
