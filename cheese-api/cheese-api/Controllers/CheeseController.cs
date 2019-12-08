using System.Collections.Generic;
using cheese_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace cheese_api.Controllers
{
    [ApiController]
    [Route("/cheeses")]
    public class CheeseController : ControllerBase
    {
        [HttpGet]
        public List<Cheese> Get()
        {
            return new List<Cheese>();
        }
    }
}
