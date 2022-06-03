using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCHM_API.Entities
{
    public class AppStudent
    {
        [Key]
        public int Identitity { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }



    }
}
