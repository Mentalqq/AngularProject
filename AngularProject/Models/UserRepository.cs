namespace AngularProject.Models
{
    public class UserRepository : IUserCRUD
    {
        ApplicationContext db;

        public UserRepository(ApplicationContext context)
        {
            db = context;
        }

        public void UserUpdate(User user)
        {
            db.Update(user);
            db.SaveChanges();
        }
    }
}
