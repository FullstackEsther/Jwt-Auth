using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JwtAuthClass.Entity;

namespace JwtAuthClass.Auth
{
    public interface IJwtManager
    {
        public string GenerateToken(User user);

    }
}