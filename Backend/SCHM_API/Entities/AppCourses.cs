using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCHM_API.Entities
{
    public class AppCourses
    {
        public int Id { get; set; }
        [Required]

        public int Code { get; set; }
        [Required]

        public string CourseName { get; set; }
        public string CourseDescrpition { get; set; }

       /* [ForeignKey("students")]

        public int studentsEnrolled { get; set; }

        [ForeignKey("teachers")]

        public int teachersEnrolled { get; set; }

        public virtual AppStudent students { get; set; }
        public virtual AppTeacher teachers{ get; set; }
       */

    }
}
