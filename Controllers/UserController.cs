using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JwtAuthClass.Entity;
using JwtAuthClass.Auth;

namespace JwtAuthClass.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IJwtManager _jwtManager;
        public UserController(IJwtManager jwtManager)
        {
            _jwtManager = jwtManager;
        }
        [HttpPost("token")]
        public IActionResult Login ([FromBody]LoginRequestModel model)
        {
            var user = Entity.User.Users.FirstOrDefault(a => a.Email == model.Email && a.Password == model.Password);
            if(user == null)return NotFound();
            var token = _jwtManager.GenerateToken(user);
            return Ok(token);
        }
    }
}