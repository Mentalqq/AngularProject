using AngularProject.Models;
using AngularProject.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AngularProject.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        ApplicationContext db;
        UserService us;

        public UserController(ApplicationContext context)
        {
            db = context;
            us = new UserService(db);
            if (!db.Users.Any())
            {
                db.Users.Add(new User { Name = "User1" });
                db.Users.Add(new User { Name = "User2" });
                db.Users.Add(new User { Name = "User3" });
                db.Users.Add(new User { Name = "User4" });
                db.Users.Add(new User { Name = "User5" });
                db.Users.Add(new User { Name = "User6" });
                db.Users.Add(new User { Name = "User7" });
                db.Users.Add(new User { Name = "User8" });
                db.Users.Add(new User { Name = "User9" });
                db.Users.Add(new User { Name = "User10" });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return db.Users.ToList();
        }

        [HttpPut]
        public IActionResult Put(User user)
        {
            if (ModelState.IsValid)
            {
                us.UserUpdate(user);
                return Ok(user);
            }
            return BadRequest(ModelState);
        }
    }
}
