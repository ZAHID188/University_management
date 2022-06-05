using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SCHM_API.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SCHM_API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost,Route("StudentLogin")]
        public IActionResult StLogin([FromBody]AppStudent student)
        {
            if(student == null)
            {
                return BadRequest("invalid");
            }
            if(student.Name == "zahid" && student.Email =="zahid@gmail.com")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("supersecretkeyChange"));
                var signinCredential =new SigningCredentials(secretKey,SecurityAlgorithms.HmacSha256);
                var tokenoption = new JwtSecurityToken(
                    issuer: "http://localhost:4200/studentlogin",
                    audience: "http://localhost:4200/studentlogin",
                    claims: new List<Claim>(),
                    expires: DateTime.UtcNow.AddMinutes(5),
                    signingCredentials: signinCredential
                    );
                var tokenString =new JwtSecurityTokenHandler().WriteToken(tokenoption);
                return Ok(new { Token=tokenString });      
            }

            return Unauthorized();

        }
    }
}
