using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3Assignment.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for Assignments must be between 0 and 100.")]
        public float Assign { get; set; }

        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for Group Projects must be between 0 and 100.")]
        public float Group { get; set; }

        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for Quizzes must be between 0 and 100.")]
        public float Quiz { get; set; }

        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for Exams must be between 0 and 100.")]
        public float Exam { get; set; }

        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for Intext must be between 0 and 100.")]
        public float Intext { get; set; }
    }
}
