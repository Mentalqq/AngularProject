using System.ComponentModel.DataAnnotations;

namespace AngularProject.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(500)]
        public string Name { get; set; }

        [Required]
        public bool Active { get; set; }
    }
}
