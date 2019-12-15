using System.Collections.Generic;
using System.Linq;
using CheeseApi.DataContext;
using CheeseApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace CheeseApi.Controllers
{
    [ApiController]
    [Route("/api/cheeses")]
    [Consumes("application/json")]
    [Produces("application/json")]
    public class CheeseController : ControllerBase
    {
        private CheeseDbContext _db;

        public CheeseController(CheeseDbContext db)
        {
            _db = db;
        }
        
        /// <summary>
        /// Get a list of all cheeses
        /// </summary>
        [HttpGet]
        public List<Cheese> Get()
        {
            return _db.Cheeses.ToList();
        }
        
        /// <summary>
        /// Create a cheese
        /// </summary>
        [HttpPost]
        [SwaggerResponse(StatusCodes.Status200OK, "Successfully created the cheese", typeof(Cheese))]
        [SwaggerResponse(StatusCodes.Status400BadRequest, "Invalid request body", typeof(ErrorResponse))]
        public Cheese Create(CheeseRequest request)
        {
            var result = _db.Cheeses.Add(request.ToCheese(0));
            _db.SaveChanges();
            return result.Entity;
        }

        /// <summary>
        /// Update a cheese
        /// </summary>
        [HttpPut("{id}")]
        [SwaggerResponse(StatusCodes.Status200OK, "Successfully updated the cheese")]
        [SwaggerResponse(StatusCodes.Status404NotFound, "Could not find a cheese matching given ID", typeof(ErrorResponse))]
        [SwaggerResponse(StatusCodes.Status400BadRequest, "Invalid request body", typeof(ErrorResponse))]
        public void Update(long id, CheeseRequest request)
        {
            var updated = _db.Cheeses.Find(id);
            
            updated.Name = request.Name;
            updated.Color = request.Color;
            updated.ImageUrl = request.ImageUrl;
            updated.PricePerKilo = request.PricePerKilo;
            
            _db.Cheeses.Update(updated);
            _db.SaveChanges();
        }
        
        /// <summary>
        /// Delete a cheese
        /// </summary>
        [HttpDelete("{id}")]
        [SwaggerResponse(StatusCodes.Status200OK, "Successfully deleted the cheese")]
        [SwaggerResponse(StatusCodes.Status404NotFound, "Could not find a cheese matching given ID", typeof(ErrorResponse))]
        public void Delete(long id)
        {
            _db.Cheeses.Remove(_db.Cheeses.Find(id));
            _db.SaveChanges();
        }
    }
}
