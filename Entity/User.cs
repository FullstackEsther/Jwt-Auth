using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JwtAuthClass.Entity
{
    public class User
    {
        public string Name {get;set;}
        public string Email {get;set;}
        public string Password {get;set;}
        public static List<User> Users = new List<User>
        {
            new User{Name = "Ade", Email = "ade@gmail.com", Password = "12345"}
        };
    }
    public class LoginRequestModel
    {
        public string Email {get;set;}
        public string Password {get;set;}
    }
}