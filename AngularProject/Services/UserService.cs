using AngularProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Services
{
    public class UserService
    {
        IUserCRUD ur;

        public UserService(ApplicationContext context)
        {
            ur = new UserRepository(context);
        }

        public void UserUpdate(User user)
        {
            ur.UserUpdate(user);
        }
    }
}
